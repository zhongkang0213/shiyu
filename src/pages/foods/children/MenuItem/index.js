import React from 'react'
import { Menu, Divider, Icon } from 'antd'
import './index.scss'
const { SubMenu } = Menu



class MenuList extends React.Component {

  handleClick = (e) => {
    // console.log(e.key.split('-'))
    this.props.handleClickMenuItem && this.props.handleClickMenuItem(e.key.split('-'));
  }

  render () {
    let { data, menuindex } = this.props
    return <div className="menuitem-wrapper">
        <Menu
          mode="inline"
          onClick={this.handleClick}
        >
          {
            data.map((menu, index) => {
              return (<SubMenu title={menu.name} key={`menu-${index}`}>
                {
                  menu.foods.map((item, idx) => {
                    return (<Menu.Item key={`${menuindex}-${index}-${idx}`}>
                      <Icon type="menu" /><span>{ item.name }</span>
                    </Menu.Item>)
                  })
                }
              </SubMenu>)
            })
          }
        </Menu>
    </div>
  }
}

export default MenuList;