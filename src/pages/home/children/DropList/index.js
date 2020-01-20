import React from 'react'
import { Menu, Icon } from 'antd'
import DragItem from '../DragItem'
// import 'antd/dist/antd.css'
import './index.scss'
const { SubMenu } = Menu



class DropList extends React.Component {

  render () {
    let { data } = this.props
    return <div className="droplist-wrapper">
        <div className="menulist-title">我的食物库</div>
        <Menu
          mode="inline"
        >
          {
            data.map((menu, index) => {
              return (<SubMenu title={menu.name} key={`menu-${index}`}>
                {
                  menu.recipes.map((item, idx) => {
                    return (<Menu.Item key={`item-${index}-${idx}`}>
                      <Icon type="menu" /><DragItem text={item.name} id={`item-${index}-${idx}`} index={idx} data={item}/>
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

export default DropList;