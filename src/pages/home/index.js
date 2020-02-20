import React, { Component } from 'react';
import { observer, inject } from "mobx-react";
import './index.scss';

// import update from 'immutability-helper'
import BasicWrapper from 'components/BasicWrapper'
import DropList from './children/DropList'
import DropArea from './children/DropArea'
import DropView from './children/DropView'
import { message } from 'antd';
message.config({
    maxCount: 1,
    top: 200
});
@inject('homeStore')
@observer

class Home extends Component {
  state = {
    // data: [
    //   {
    //     title: '炒菜（素）',
    //     list: [
    //       {
    //         caiyao: {
    //           name: '清炒包菜',
    //           weight: 30,
    //           nengliang: 3.7,
    //           nengliang_s: 0.3,
    //           danbaizhi: 1.2,
    //           danbaizhi_s: 0.13
    //         },
    //         shicai: {
    //           name: '圆白菜、卷心菜',
    //           weight: 30,
    //           nengliang: 3.7,
    //           nengliang_s: 0.3,
    //           danbaizhi: 1.2,
    //           danbaizhi_s: 0.13
    //         }
    //       },
    //       {
    //         caiyao: {
    //           name: '清炒香芹',
    //           weight: 30,
    //           nengliang: 3.7,
    //           nengliang_s: 0.3,
    //           danbaizhi: 1.2,
    //           danbaizhi_s: 0.13
    //         },
    //         shicai: {
    //           name: '香芹',
    //           weight: 30,
    //           nengliang: 3.7,
    //           nengliang_s: 0.3,
    //           danbaizhi: 1.2,
    //           danbaizhi_s: 0.13
    //         }
    //       },
    //       {
    //         caiyao: {
    //           name: '番茄鸡蛋',
    //           weight: 30,
    //           nengliang: 3.7,
    //           nengliang_s: 0.3,
    //           danbaizhi: 1.2,
    //           danbaizhi_s: 0.13
    //         },
    //         shicai: {
    //           name: '番茄、鸡蛋',
    //           weight: 30,
    //           nengliang: 3.7,
    //           nengliang_s: 0.3,
    //           danbaizhi: 1.2,
    //           danbaizhi_s: 0.13
    //         }
    //       },
    //       {
    //         caiyao: {
    //           name: '清炒油麦菜',
    //           weight: 30,
    //           nengliang: 3.7,
    //           nengliang_s: 0.3,
    //           danbaizhi: 1.2,
    //           danbaizhi_s: 0.13
    //         },
    //         shicai: {
    //           name: '油麦菜',
    //           weight: 30,
    //           nengliang: 3.7,
    //           nengliang_s: 0.3,
    //           danbaizhi: 1.2,
    //           danbaizhi_s: 0.13
    //         }
    //       }
    //     ]
    //   }, {
    //     title: '炒菜（荤）',
    //     list: [
    //       {
    //         caiyao: {
    //           name: '红烧茄子',
    //           weight: 30,
    //           nengliang: 3.7,
    //           nengliang_s: 0.3,
    //           danbaizhi: 1.2,
    //           danbaizhi_s: 0.13
    //         },
    //         shicai: {
    //           name: '茄子、土豆',
    //           weight: 30,
    //           nengliang: 3.7,
    //           nengliang_s: 0.3,
    //           danbaizhi: 1.2,
    //           danbaizhi_s: 0.13
    //         }
    //       },
    //       {
    //         caiyao: {
    //           name: '青椒杏鲍菇炒牛柳',
    //           weight: 30,
    //           nengliang: 3.7,
    //           nengliang_s: 0.3,
    //           danbaizhi: 1.2,
    //           danbaizhi_s: 0.13
    //         },
    //         shicai: {
    //           name: '青椒、杏鲍菇、牛肉',
    //           weight: 30,
    //           nengliang: 3.7,
    //           nengliang_s: 0.3,
    //           danbaizhi: 1.2,
    //           danbaizhi_s: 0.13
    //         }
    //       },
    //       {
    //         caiyao: {
    //           name: '木须肉',
    //           weight: 30,
    //           nengliang: 3.7,
    //           nengliang_s: 0.3,
    //           danbaizhi: 1.2,
    //           danbaizhi_s: 0.13
    //         },
    //         shicai: {
    //           name: '黄瓜、鸡蛋、木耳',
    //           weight: 30,
    //           nengliang: 3.7,
    //           nengliang_s: 0.3,
    //           danbaizhi: 1.2,
    //           danbaizhi_s: 0.13
    //         }
    //       },
    //       {
    //         caiyao: {
    //           name: '红烧鱼块',
    //           weight: 30,
    //           nengliang: 3.7,
    //           nengliang_s: 0.3,
    //           danbaizhi: 1.2,
    //           danbaizhi_s: 0.13
    //         },
    //         shicai: {
    //           name: '鱼',
    //           weight: 30,
    //           nengliang: 3.7,
    //           nengliang_s: 0.3,
    //           danbaizhi: 1.2,
    //           danbaizhi_s: 0.13
    //         }
    //       }
    //     ]
    //   }
    // ],
    tableData: new Array(5).fill({morning: [], aftern: [], evening: []}),
    // viewTableData: [
    //   {
    //     key: 'nengliang',
    //     name: '能量',
    //     biaozhun: 0,
    //     sheru: 0,
    //     baifenbi: '0.0%'
    //   },
    //   {
    //       key: 'danbaizhi',
    //       name: '蛋白质',
    //       biaozhun: 0,
    //       sheru: 0,
    //       baifenbi: '0.0%'
    //   }
    // ],
    tableTabIndex: 0,
    planId: ''
  }

  componentDidMount = () => {
    let path = window.location.href
    let plan_id = path.split('plan_id=')[1]
    this.props.homeStore.initPage()
    this.props.homeStore.getRecipe(plan_id)
    this.inputDebounce(this.props.homeStore.updateRecipe, 800)
    this.setState({
      planId: plan_id
    })
  }

  // setViewTableData = () => {
  //   let tableData = JSON.parse(JSON.stringify(this.props.homeStore.tableData))
  //   let viewTableData = JSON.parse(JSON.stringify(this.state.viewTableData))
  //   let { morning, aftern, evening } = tableData
  //   let data = [].concat(morning, aftern, evening)
  //   viewTableData[0].biaozhun = 0
  //   viewTableData[0].sheru = 0
  //   viewTableData[0].baifenbi = '2.2%'
  //   viewTableData[1].biaozhun = 0
  //   viewTableData[1].sheru = 0
  //   viewTableData[1].baifenbi = '0.95%'
  //   data.map((item) => {
  //     viewTableData[0].biaozhun = (+viewTableData[0].biaozhun + item.caiyao.nengliang * item.caiyao.weight  + item.shicai.nengliang * item.shicai.weight).toFixed(2)
  //     viewTableData[0].sheru = (+viewTableData[0].sheru + item.caiyao.nengliang_s * item.caiyao.weight  + item.shicai.nengliang_s * item.shicai.weight).toFixed(2)
  //     viewTableData[1].biaozhun = (+viewTableData[1].biaozhun + item.caiyao.danbaizhi * item.caiyao.weight  + item.shicai.danbaizhi * item.shicai.weight).toFixed(2)
  //     viewTableData[1].sheru = (+viewTableData[1].sheru + item.caiyao.danbaizhi_s * item.caiyao.weight  + item.shicai.danbaizhi_s * item.shicai.weight).toFixed(2)
  //     return null
  //   })
  //   this.setState({
  //     viewTableData
  //   })
  // }

  handleDropArea = (data) => {
    let tableData = JSON.parse(JSON.stringify(this.props.homeStore.tableData))
    let { tableTabIndex } = this.state
    tableData[tableTabIndex].evening.push(data)
    this.props.homeStore.createRecipe({plan_id: this.state.planId, week_id: +this.state.tableTabIndex+1, mark_id: 3, recipe_id: data.id}, tableTabIndex, 'evening')
  }

  handleTableItem = (data, key) => {
    let tableData = JSON.parse(JSON.stringify(this.props.homeStore.tableData))
    if (!this._checkTableId(data, key)) {
        message.warning('请勿重复添加相同菜肴')
        return
    }
    let { tableTabIndex } = this.state
    data.weight = null
    tableData[tableTabIndex][key].push(data)
    let mark_id = '';
    switch (key) {
      case 'morning':
        mark_id = 1;
        break;
      case 'aftern':
        mark_id = 2;
        break;
      default:
        mark_id = 3;
        break;
    }
    this.props.homeStore.createRecipe({plan_id: this.state.planId, week_id: +this.state.tableTabIndex+1, mark_id, recipe_id: data.id}, tableTabIndex, key)
  }

  closeCyTag = (key, index) => {
    let tableData = JSON.parse(JSON.stringify(this.props.homeStore.tableData))
    let { tableTabIndex } = this.state
    let data = tableData[tableTabIndex][key].splice(index, 1)
    this.props.homeStore.deleteRecipe(data[0].id, tableData)
  }

  onNumberChange = (key, type, index, value) => {
    let tableData = JSON.parse(JSON.stringify(this.props.homeStore.tableData))
    let { tableTabIndex } = this.state
    tableData[tableTabIndex][key][index].weight = value
    this.inputDebounce(tableData[tableTabIndex][key][index].id, value, tableData)
    this.props.homeStore.setTableData(tableData)
  }

  handleTabsChange = (key) => {
    this.setState({
        tableTabIndex: key
    })
  }

  inputDebounce = (func, wait) => {
    this.inputDebounce = this.debounce(func, wait);
  }

  debounce = (func, wait) => {
    var timeout;
    return function () {
        var args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            func.apply(this, args);
        }, wait);
    };
  }

  _checkTableId = (data, key) => {
    let tableData = JSON.parse(JSON.stringify(this.props.homeStore.tableData))
    let { tableTabIndex } = this.state
    let checkData = tableData[tableTabIndex][key]
    for (let i = 0; i < checkData.length; i++) {
        if (+data.id === +checkData[i].recipe_id) {
            return false
        }
    }
    return true
  }

  render() {
    let { data, viewTableData, tableTabIndex } = this.state
    let { foodsList, tableData } = this.props.homeStore
    return (
        <BasicWrapper width={1200} height={550}>
            <div className="home-wrapper">
                <div>
                    <DropList data={foodsList} />
                </div>
                <div>
                    <DropArea handleDropArea={this.handleDropArea} 
                        onNumberChange={this.onNumberChange} 
                        closeCyTag={this.closeCyTag} 
                        tableData={tableData[tableTabIndex]} 
                        handleTableItem={this.handleTableItem}
                        handleTabsChange={this.handleTabsChange}
                        defaultTableIndex={''+tableTabIndex} />
                </div>
                {/* <div>
                    <DropView data={viewTableData} />
                </div> */}
            </div>
      </BasicWrapper>
    );
  }
}

export default Home;
