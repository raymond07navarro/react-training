import React, { Component } from 'react';
import PlanContent from './plan-content'

class Plan extends Component {
	render() {
		return(
            <main>
            <div className="page-title" style={{marginLeft: '150px'}} >
                <div className="ui clearing segment">
                  <div className="ui container" style={{marginTop: '80px'}}>
                    <h1 className="ui left floated header" style={{marginLeft: '-5%'}}>
                      </h1><h2>Benefit</h2>
                      <div className="clearfix"></div>
                      <div className="ui breadcrumb">
                        <a href="/web/benefits/">Dashboard</a>
                        <i className="right angle icon divider"></i>
                        <div className="active section dim thin">Benefit
                        </div>
                      </div>
                  </div>
                </div>
              </div>
              <PlanContent />
            </main>
		)
	}
}

export default Plan;