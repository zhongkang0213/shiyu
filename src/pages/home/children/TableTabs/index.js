import React from 'react'
import { Tabs } from 'antd'
import './index.scss'
const { TabPane } = Tabs



class TableTabs extends React.Component {

  handleTabsChange = (key) => {
    this.props.handleTabsChange && this.props.handleTabsChange(key)
  }

  render () {
    let { defaultTableIndex } = this.props
    return <div className="card-container">
        <Tabs type="card" defaultActiveKey={defaultTableIndex} onChange={this.handleTabsChange}>
          {
            [
              '周一',
              '周二',
              '周三',
              '周四',
              '周五'
            ].map((tab, key) => {
              return <TabPane tab={tab} key={key} />
            })
          }
        </Tabs>
    </div>
  }
}

export default TableTabs;