import React from 'react'
import { Table, Input, Select, Button } from 'antd'
const { Option } = Select
import './index.scss'

class Main extends React.Component {

  state = {
    tableColumns: [
        {
          title: '序号',
          dataIndex: 'xuhao',
          key: 'xuhao',
          render: (xuhao, item, index) => {
            return (<span>{index + 1}</span>)
          }
        },
        {
          title: '食材',
          dataIndex: 'shicai',
          key: 'shicai',
        },
        {
          title: '净量用料（克）',
          dataIndex: 'jingliang',
          key: 'jingliang',
          render: (jingliang, item, index) => {
            return (<Input value={jingliang} style={{ width: 80 }} onChange={this.inputChange.bind(this, jingliang, item, index)} />)
          }
        },
        {
            title: '热量（千卡）',
            dataIndex: 'reliang',
            key: 'reliang',
        },
        {
            title: '操作',
            dataIndex: 'caozuo',
            key: 'caozuo',
            render: (caozuo, item, index) => {
                return <Button type="primary" size="small" onClick={this.handleTableDeleteButton.bind(this, caozuo, item, index)}>删除</Button>
            }
        }
      ]
  }

  handleFoodNameChange = (e) => {
    this.props.handleFoodNameChange && this.props.handleFoodNameChange(e.target.value)
  }

  handleSelectChange = (value) => {
    let { type } = this.props
    let id = null
    type.map((item) => {
      if (item.name === value) {
        id = item.id
      }
    })
    this.props.handleSelectChange && this.props.handleSelectChange(id)
  }

  handleTableDeleteButton = (name, item, index) => {
    this.props.handleDelete && this.props.handleDelete(index)
  }

  inputChange = (name, item, index, e) => {
    this.props.inputChange && this.props.inputChange(index, e.target.value)
  }

  handleSave = () => {
      this.props.handleSave && this.props.handleSave()
  }

  render () {
    let { tableColumns } = this.state
    let { type, tableData, foodName, typeName} = this.props
    return <div className="main-wrapper">
        <div className="main-content">
            <div className="main-top">
                <div className="foods-name">
                    <span className="item-s">菜肴名称</span>
                    <Input placeholder="请输入菜肴名称" value={foodName} style={{ width: 150 }} onChange={this.handleFoodNameChange} />
                </div>
                <div className="foods-select">
                    <span className="item-s">菜肴分类</span>
                    <Select value={typeName} style={{ width: 170 }} placeholder="请选择" onChange={this.handleSelectChange}>
                      {
                          type.map((item, index) => {
                              return <Option value={item.name} key={item.name}>{item.name}</Option>
                          })
                      }
                    </Select>
                </div>
            </div>
            <div>
                <Table dataSource={tableData} columns={tableColumns} pagination={false} bordered={false} />
            </div>
        </div>
        <div className="btn-save" onClick={this.handleSave}>保存</div>
    </div>
  }
}

export default Main;