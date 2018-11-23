import React, { Component } from 'react';
import { Icon, Label, Menu, Table } from 'semantic-ui-react'
import BenefitDatatable from './benefit_datatable'

const $ = require('jquery')

const token = "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJQYXlvcmxpbmsgMi4wIiwiZXhwIjoxNTQzODI0MTMxLCJpYXQiOjE1NDI5NjAxMzEsImlzcyI6IlBheW9ybGluayAyLjAiLCJqdGkiOiJlYTg2MmMyZS01MGQ0LTRhNjEtOGNkNi04YjQyYzNkMDJiOWIiLCJuYmYiOjE1NDI5NjAxMzAsInN1YiI6IjdlNzE5ZDg0LWQ3ZTItNDM1Ni1iZDk1LTBiY2E4M2FkZTk5MythZjUxNjQ0ZS1iMGUzLTRkNGItODcwYy02ZGQxM2RhNDRjMDkiLCJ0eXAiOiJhY2Nlc3MifQ.3M9uTogpgJoweMQujJhGGXJ04vF08Xkv9hqSScWpBs4UnbrrWIM6MK_nnMyrbwW-dhHybI-8lh9nipOw38ZhhA"

let url = 'https://payorlink-ip-ist.medilink.com.ph/api/v1/sap/benefits/get_dental'

class BenefitView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      benefit: [],
      limit: []
    };
  }

  componentDidMount() {
    $.ajax({
      url: url,
      data: {benefit: this.props.params.code, with_cdt: true},
      headers: { 'Authorization': `Bearer ${token}` },
      type: 'post',
      success: function(response){
        const benefit = response
        benefit["limits"] = benefit.limits[0]
        this.setState({limit: benefit.limits, benefit: benefit})
      }.bind(this),
      error: function(){}
    })
  }

	render() {
		return(
            <main>
            <div className="page-title" style={{marginLeft: '150px'}} >
                <div className="ui clearing segment">
                  <div className="ui container" style={{marginTop: '80px'}}>
                    <h1 className="ui left floated header" style={{marginLeft: '-5%'}}>
                      </h1><h2>View Benefit</h2>
                      <div className="clearfix"></div>
                      <div className="ui breadcrumb">
                        <a href="/benefits"> Dashboard  </a>
                        <i className="right angle icon divider"></i>
                        <a href="/benefits"> Benefits  </a>
                        <i className="right angle icon divider"></i>
                        <div className="active section dim thin">{this.state.benefit.code}
                        </div>
                      </div>
                  </div>
                </div>
              </div>

              <div className="ui container" style={{paddingLeft: '150px'}}>
                <div className="content-section white-bg">
                  <div className="ui grid">
                    <div className="row">
                        <div className="two wide computer sixteen wide mobile column">
                          <div className="mb-2 center aligned">
                            <div className="mr-2">
                            <img
                              src={process.env.PUBLIC_URL + '/images/tooth.png'}
                              style={{height: "82px", width: "82px"}}
                            />
                            </div>
                            <label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Riders</label>

                          </div>
                        </div>
                        <div className="six wide computer eight wide tablet eight wide mobile column">
                          <p className="member-name" style={{color: 'rgb(0, 178, 79)'}}>{this.state.benefit.name}</p>
                            <div className="section-title mt-2">
                              <h1><div className="title-name">{this.state.benefit.code}</div></h1>
                            </div>
                        </div>
                        <div className="eight wide computer eight wide tablet eight wide mobile column">
                        <div className="two wide computer sixteen wide mobile column" style={{textAlign: 'right', fontSize: '2rem', paddingTop: '1rem'}}><div tabindex="0" className="ui dropdown"><i className="ellipsis vertical icon"></i> <div tabindex="-1" className="menu"><div className="item"><i className="edit outline icon"></i>
                            Edit
                          </div> <div className="item"><i className="clone outline icon"></i>
                            Versions
                          </div> <div className="item"><i className="icon-product icon"></i>
                            View plans
                          </div> <div className="divider"></div> <div className="item"><i className="trash alternate icon"></i>
                            Discontinue
                          </div> <div className="item"><i className="trash alternate icon"></i>
                            Delete
                          </div></div></div></div>
                        </div>
                        <div className="eight wide computer eight wide tablet eight wide mobile column">
                          <div className="ui grid"><div className="nine wide column"><div style={{height: '9px'}}></div> <div className="ui form"><div className="three fields"><div className="field dim">
                          LAST UPDATE
                        </div> <div className="field"></div> <div className="field">

                        </div></div> <div className="three fields"><div className="field dim">
                          UPDATED BY
                        </div> <div className="field"></div> <div className="field">

                        </div></div> <div className="three fields"><div className="field dim">
                          COVERAGE
                            </div> <div className="field"></div> <div className="field">
                          { this.state.limit.coverages}
<div>
                          </div></div></div> <div className="three fields"><div className="field dim">
                          CATEGORY
                        </div> <div className="field"></div> <div className="field">
                          </div></div> <div className="three fields"><div className="field dim">
                          LIMIT TYPE
                        </div> <div className="field"></div> <div className="field"><div><div>
                          { this.state.limit.limit_type}
                            </div></div></div></div> <div><div><div className="three fields"><div className="field dim">
                              LIMIT
                            </div> <div className="field"></div> <div className="field"><div>
                              { this.state.limit.limit_session}
                              </div></div></div></div></div> <div className="three fields"><div className="field dim">
                          FREQUENCY
                        </div> <div className="field"></div> <div className="field"><div>N/A</div></div></div></div></div></div>
                        </div>

                        <div class="sixteen wide computer column ui divider"></div>
                        <h3>CDT</h3>
                        <BenefitDatatable url={url} token={token} data={{benefit: this.props.params.code, with_cdt: true}}>
                        </BenefitDatatable>
                    </div>
                  </div>
                </div>
              </div>
            </main>
		);
  }
}

export default BenefitView;
