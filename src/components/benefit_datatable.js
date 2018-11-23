import React, { Component } from 'react'

const $ = require('jquery')
$.DataTable = require('datatables.net')

export class BenefitDatatable extends Component {

  componentDidMount() {
    let token = this.props.token

    this.$el = $(this.el)
    this.$el.DataTable({
      "columns": [
            { title: "Code" },
            { title: "Name" }
      ],
      "serverSide": true,
      "dom":
        "<'ui grid'"+
          "<'row'"+
            "<'two wide column'f>"+
            "<'eight wide column'i>"+
          ">"+
          "<'row dt-table'"+
            "<'sixteen wide column'tr>"+
          ">"+
          "<'row'"+
            "<'right aligned nine wide column'l>"+
            "<'right aligned four wide column'p>"+
          ">"+
        ">",
        "ajax": {
          "url": this.props.url,
          "type": "POST",
          "data": this.props.data,
          "beforeSend": function (request) {
            request.setRequestHeader("Authorization", `bearer ${token}`)
          }
        },
        "renderer": 'semanticUI',
        "pagingType": "full_numbers",
        "language": {
          "emptyTable": `No records`,
          "zeroRecords": `No matched your search`,
          "info": "Showing _START_ to _END_ out of _TOTAL_ results",
          "lengthMenu": "Show: _MENU_",
          "search":         "",
          "paginate": {
            "previous": "<i class='angle single left icon'></i>",
            "next": "<i class='angle single right icon'></i>",
          }
        },
        "drawCallback": function () {
        },
        "processing": true,
        "deferRender": true
    })
  }

  render() {
      return <div style={{width: '100%'}}>
          <table className="display" width="100%" ref={el => this.el = el}>

          </table>
      </div>
  }
}

export default BenefitDatatable;
