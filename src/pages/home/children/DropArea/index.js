import React from 'react'
// import { findDOMNode } from 'react-dom'
import { DropTarget } from 'react-dnd'
import ItemTypes from '../../ItemTypes'
import TableItem from '../TableItem'
import TableTabs from '../TableTabs'
import './index.scss'

const chapterTarget = {
  drop(props, monitor, component) {
    if (monitor.isOver({ shallow: true })) {
      props.handleDropArea(monitor.getItem().data)
    }
  }
}

class DropArea extends React.Component {

  state = {
    dataSource: {
      morning: [
        {
          caiyao: {
            name: '清炒包菜',
            count: 30
          },
          shicai: {
            name: '圆白菜、卷心菜',
            count: 30
          }
        }
      ],
      aftern: [
        
      ],
      evening: [
        {
          caiyao: {
            name: '清炒包菜',
            count: 30
          },
          shicai: {
            name: '圆白菜、卷心菜',
            count: 30
          }
        },
        {
          caiyao: {
            name: '清炒包菜',
            count: 30
          },
          shicai: {
            name: '圆白菜、卷心菜',
            count: 30
          }
        }
      ]
    },
    columns: [
      {
        title: '餐别',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: '菜肴（克/人）',
        dataIndex: 'caiyao',
        key: 'caiyao',
      },
      // {
      //   title: '食材（克/人）',
      //   dataIndex: 'shicai',
      //   key: 'shicai',
      // }
    ]
  }

  closeCyTag = (key, index) => {
    this.props.closeCyTag(key, index)
  }

  onNumberChange = (key, type, index, value) => {
    this.props.onNumberChange(key, type, index, value)
  }

  renderTableTr = (data, type, tkey) => {
    if (data.length) {
      return data.map((item, index) => {
        return (<TableItem handleTableItem={this.handleTableItem} onNumberChange={this.onNumberChange} closeCyTag={this.closeCyTag} data={data} item={item} type={type} index={index} key={index} tkey={tkey}/>)
      })
    } else {
      return (<TableItem handleTableItem={this.handleTableItem}  onNumberChange={this.onNumberChange} closeCyTag={this.closeCyTag} data={data} type={type} index={null} tkey={tkey}/>)
    }
  }

  handleTableItem = (data, key) => {
    this.props.handleTableItem && this.props.handleTableItem(data, key)
  }

  handleTabsChange = (key) => {
    this.props.handleTabsChange && this.props.handleTabsChange(key)
  }

  render () {
    let { columns} = this.state
    let { tableData } = this.props
    let { morning, aftern, evening} = tableData
    const { 
      connectDropTarget,
      defaultTableIndex
    } = this.props

    return connectDropTarget(<div className="droparea-wrapper">
          <TableTabs handleTabsChange={this.handleTabsChange} defaultTableIndex={defaultTableIndex} />
          <table border="1" frame="void" align="center" className="table-wrapper">
            <tbody>
              <tr className="drop-table-tr">
                {
                  columns.map((item, index) => {
                    return (<th className={`drop-table-th ${index === 0 ? 'drop-table-th-80' : ''}`} key={index}>{item.title}</th>)
                  })
                }
              </tr>
              {
                this.renderTableTr(morning, '早餐', 'morning')
              }
              {
                this.renderTableTr(aftern, '午餐', 'aftern')
              }
              {
                this.renderTableTr(evening, '晚餐', 'evening')
              }
            </tbody>
          </table>
        </div>)
      
  }
}

export default DropTarget(ItemTypes.ITEM, chapterTarget, connect => ({
  connectDropTarget: connect.dropTarget(),
}))(DropArea)