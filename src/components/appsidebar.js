import React, { Component } from 'react';
import {Icon, Menu, Sidebar, Label } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import LabelComponent from './labelcomponent';

class AppSidebar extends Component {
    state = { activeItem: 'benefit' }
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  
    render() {
      const { activeItem } = this.state
  
      return (
          
        <Sidebar.Pusher>   
            <Sidebar
                as={Menu}
                animation='push'
                direction='left'
                icon='labeled'
                visible='true'
                vertical
                width='thin'
            >
            {/* 1 */}
            <Menu.Item name='authorization' 
                       active={activeItem === 'authorization'} 
                       onClick={this.handleItemClick}>
                <Icon className='icon-profile menu-icon' />
                <LabelComponent moduleName={'Authorizations'}/>
            </Menu.Item>
            {/* 2 */}
            <Menu.Item name='account' 
                        active={activeItem === 'account'} 
                        onClick={this.handleItemClick}>
                <Icon className='icon-profile menu-icon' />
                <LabelComponent moduleName={'Accounts'}/>
            </Menu.Item>
            {/* 3 */}
            <Link to="/plans"> 
                <Menu.Item name='plan' 
                        active={activeItem === 'plan'} 
                        onClick={this.handleItemClick}>
                           <Icon className='icon-product menu-icon' />
                <LabelComponent moduleName={'Plans'}/> 
                </Menu.Item> 
            </Link>
            {/* 4 */}
            <Menu.Item name='coverage' 
                        active={activeItem === 'coverage'} 
                        onClick={this.handleItemClick}>
                <Icon className='icon-profile menu-icon' />
                <LabelComponent moduleName={'Coverages'}/>
            </Menu.Item>
            {/* 5 */}
            <Link to="/benefits">
                <Menu.Item name='benefit' 
                        active={activeItem === 'benefit'} 
                        onClick={this.handleItemClick}>
                <Icon className='icon-profile menu-icon' />
                <LabelComponent moduleName={'Benefits'}/>
                </Menu.Item>
            </Link>
            {/* 6 */}
            <Menu.Item name='procedure'                          
                        active={activeItem === 'procedure'}                          
                        onClick={this.handleItemClick}>
                <Icon className='icon-profile menu-icon' />
                <LabelComponent moduleName={'Procedures'}/>
            </Menu.Item>
            {/* 7 */}
            <Menu.Item name='disease'                          
                        active={activeItem === 'disease'}                         
                        onClick={this.handleItemClick}>
                <Icon className='icon-profile menu-icon' />
                <LabelComponent moduleName={'Diseases'}/>
            </Menu.Item>
            {/* 8 */}
            <Menu.Item name='pharmacy'                          
                        active={activeItem === 'pharmacy'}                          
                        onClick={this.handleItemClick}>
                <Icon className='icon-profile menu-icon' />
                <LabelComponent moduleName={'Pharmacies'}/>
            </Menu.Item>
            {/* 9 */}
            <Menu.Item name='cluster'                          
                        active={activeItem === 'cluster'}                          
                        onClick={this.handleItemClick}>
                <Icon className='icon-profile menu-icon' />
                <LabelComponent moduleName={'Clusters'}/>
            </Menu.Item>
            {/* 10 */}
            <Menu.Item name='exclusion'                          
                        active={activeItem === 'exclusion'}                          
                        onClick={this.handleItemClick}>
                <Icon className='icon-profile menu-icon' />
                <LabelComponent moduleName={'Exclusion'}/>
            </Menu.Item>
            {/* 11 */}
            <Menu.Item name='package'                          
                        active={activeItem === 'package'}                          
                        onClick={this.handleItemClick}>
                <Icon className='icon-profile menu-icon' />
                <LabelComponent moduleName={'Exclusion'}/>
            </Menu.Item>
            {/* 12 */}
            <Menu.Item name='caserate'                          
                        active={activeItem === 'caserate'}                          
                        onClick={this.handleItemClick}>
                <Icon className='icon-profile menu-icon' />
                <LabelComponent moduleName={'Case Rates'}/>
            </Menu.Item>
            {/* 13 */}
            <Menu.Item name='acuschedule'                          
                        active={activeItem === 'acuschedule'}                          
                        onClick={this.handleItemClick}>
                <Icon className='icon-profile menu-icon' />
                <LabelComponent moduleName={'ACU Schedules'}/>
            </Menu.Item>
            {/* 14 */}
            <Menu.Item name='facility'                          
                        active={activeItem === 'facility'}                          
                        onClick={this.handleItemClick}>
                <Icon className='icon-menu-hospital menu-icon' />
                <LabelComponent moduleName={'Facilities'}/>
            </Menu.Item>
            {/* 15 */}
            <Menu.Item name='room'                          
                        active={activeItem === 'room'}                          
                        onClick={this.handleItemClick}>
                <Icon className='icon-menu-hospital menu-icon' />
                <LabelComponent moduleName={'Rooms'}/>
            </Menu.Item>
            {/* 16 */}
            <Menu.Item name='practitioner'                          
                        active={activeItem === 'practitioner'}                          
                        onClick={this.handleItemClick}>
                <Icon className='icon-doctors menu-icon' />
                <LabelComponent moduleName={'Practitioners'}/>
            </Menu.Item>
            {/* 17 */}
            <Menu.Item name='facilitygroup'                          
                        active={activeItem === 'facilitygroup'}                          
                        onClick={this.handleItemClick}>
                <Icon className='icon-doctors menu-icon' />
                <LabelComponent moduleName={'Facility Groups'}/>
            </Menu.Item>
            {/* 18 */}
            <Menu.Item name='miscellaneous'                          
                        active={activeItem === 'miscellaneous'}                          
                        onClick={this.handleItemClick}>
                <Icon className='icon-doctors menu-icon' />
                <LabelComponent moduleName={'Miscellaneous'}/>
            </Menu.Item>
            {/* 19 */}
            <Menu.Item name='user'
                        active={activeItem === 'user'}                          
                        onClick={this.handleItemClick}>
                <Icon className='icon-doctors menu-icon' />
                <LabelComponent moduleName={'Users'}/>
            </Menu.Item>
            {/* 20 */}
            <Menu.Item name='member'                          
                        active={activeItem === 'member'}                          
                        onClick={this.handleItemClick}>
                <Icon className='icon-doctors menu-icon' />
                <LabelComponent moduleName={'Members'}/>
            </Menu.Item>
            {/* 21 */}
            <Menu.Item name='role'                          
                    active={activeItem === 'role'}                          
                    onClick={this.handleItemClick}>
                <Icon className='icon-setting menu-icon' />
                <LabelComponent moduleName={'Roles'}/>
            </Menu.Item>
            {/* 22 */}
            <Menu.Item name='company'                          
                        active={activeItem === 'company'}                          
                        onClick={this.handleItemClick}>
                <Icon className='icon-menu-hospital menu-icon' />
                <LabelComponent moduleName={'Companies'}/>
            </Menu.Item>
            </Sidebar>
            </Sidebar.Pusher>
      )
    }
}

export default AppSidebar;
