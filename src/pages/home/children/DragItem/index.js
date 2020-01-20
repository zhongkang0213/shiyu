import React from 'react'
import { DragSource } from 'react-dnd'
import ItemTypes from '../../ItemTypes'
import './index.scss'

const lessonSource = {
  beginDrag (props) {
    return {
      id: props.id,
      index: props.index,
      parentIndex: props.parentIndex,
      data: props.data
    }
  },
  isDragging(props, monitor) {
    return monitor.getItem().id === props.id;
  }
}

class DragItem extends React.Component {

  render () {
    const { 
      text,
      isDragging,
      connectDragSource
    } = this.props
    const opacity = isDragging ? 0.2 : 1
    return connectDragSource(
      <span className="dragitem-wrapper" style={Object.assign({}, { opacity })}>{text}</span>
    )
  }
}

export default DragSource(ItemTypes.ITEM, lessonSource, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging(),
}))(DragItem)