import React from 'react'
import { Divider } from 'antd'
import MenuItem from '../MenuItem'
import './index.scss'



class MenuList extends React.Component {

  handleClickMenuItem = (key) => {
    this.props.handleClickMenuItem && this.props.handleClickMenuItem(key);
  }

  render () {
    let { data } = this.props
    return <div className="menulist-wrapper">
        <div className="menulist-title">我的食材库</div>
        {
          data.map((menu, index) => {
            return (<div key={`menulist-${index}`}>
              <Divider>{menu.name}</Divider>
              <MenuItem data={menu.sub} menuindex={index} handleClickMenuItem={this.handleClickMenuItem}/>
            </div>)
          })
        }
    </div>
  }
}

export default MenuList;