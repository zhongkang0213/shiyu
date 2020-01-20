import React from 'react'
import './index.scss'
import { Table } from 'antd';



class DropView extends React.Component {

    state = {
        dataSource: [
            {
              key: 'nengliang',
              name: '能量',
              biaozhun: 85.2,
              sheru: '4.1',
              baifenbi: '2.2%'
            },
            {
                key: 'danbaizhi',
                name: '蛋白质',
                biaozhun: 45.2,
                sheru: '1.5',
                baifenbi: '0.7%'
            }
          ],
          columns: [
            {
              title: '营养素',
              dataIndex: 'name',
              key: 'name',
            },
            {
              title: '标准量',
              dataIndex: 'biaozhun',
              key: 'biaozhun',
            },
            {
              title: '摄入量',
              dataIndex: 'sheru',
              key: 'sheru',
            },
            {
                title: '百分比',
                dataIndex: 'baifenbi',
                key: 'baifenbi',
            }
          ]
    }

  render () {
      let { columns } = this.state
      let { data } = this.props
    return <div className="dropview-wrapper">
        { !!data.length && <Table style={{width: '360px'}} dataSource={data} columns={columns} pagination={false} /> }
    </div>
  }
}

export default DropView;