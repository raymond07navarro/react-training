import React, { Component } from 'react';
class LabelComponent extends Component{
constructor(props){
    super(props);
}
 render() {
        return (
            <label className="menu-link">{this.props.moduleName}</label>
        )
    }
}
export default LabelComponent;
