import React from 'react'
// import { findDOMNode } from 'react-dom'
import { DropTarget } from 'react-dnd'
import ItemTypes from '../../ItemTypes'
import { InputNumber, Tag } from 'antd'
import './index.scss'

const lessonTarget = {
  drop(props, monitor, component) {
      props.handleTableItem(monitor.getItem().data, props.tkey)
  }
}

class DragItem extends React.Component {

    onChange = (type, index, value) => {
        let { tkey } = this.props
        this.props.onNumberChange(tkey, type, index, value)
    }

    closeCyTag = (index, e) => {
        let { tkey } = this.props
        this.props.closeCyTag(tkey, index)
    }

  render () {
    const {
      data,
      item,
      type,
      index,
      connectDropTarget
    } = this.props
    if (data.length) {
        return (connectDropTarget(
            <tr>
                { index === 0 && <td className="drop-table-td" rowSpan={data.length}>{type}</td> }
                <td className="drop-table-td">
                    <span className="td-name td-f-c">{item.name}</span> 
                    <InputNumber min={1} value={item.count} onChange={this.onChange.bind(this, 'caiyao', index)} width={20}/> 
                    <div className="tag-wrapper">
                        <Tag onClose={this.closeCyTag.bind(this, index)} closable />
                    </div>
                </td>
                {/* <td className="drop-table-td">
                    <span className="td-name">{item.shicai.name}</span>
                    <InputNumber min={1} defaultValue={item.shicai.count} onChange={this.onChange.bind(this, 'shicai', index)} width={20}/>
                    <div className="tag-wrapper">
                        <Tag onClose={this.closeCyTag.bind(this, index)} closable />
                    </div>
                </td> */}
            </tr>
        ))
    } else {
        return (connectDropTarget(
            <tr>
                { <td className="drop-table-td">{type}</td> }
                <td className="drop-table-td"></td>
                {/* <td className="drop-table-td"></td> */}
            </tr>
        )) 
    }
    
  }
}

export default DropTarget(ItemTypes.ITEM, lessonTarget, (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver()
}))(DragItem)