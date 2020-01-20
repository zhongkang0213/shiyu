import React, { Component } from 'react';
import { observer, inject } from "mobx-react";
import MenuList from './children/MenuList'
import Main from './children/Main';
import './index.scss';
import { message } from 'antd';
message.config({
    maxCount: 1,
    top: 200
});

// import update from 'immutability-helper'
import BasicWrapper from 'components/BasicWrapper'
@inject('foodsStore')
@observer

class Foods extends Component {
  state = {
    data: [],
    tableData: [
    ]
  }

  componentDidMount = () => {
      this.props.foodsStore.getCategories();
      this.props.foodsStore.recipesCategories();
  }

  handleClickMenuItem = (key) => {
    let foodsList = JSON.parse(JSON.stringify(this.props.foodsStore.foodsList))
    let tableData = JSON.parse(JSON.stringify(this.state.tableData))
    let food = foodsList[+key[0]].sub[+key[1]].foods[+key[2]]
    if (!this.checkMenuItem(food)) {
        message.warning('当前食材已添加，请勿重复添加')
        return
    }
    let data = {}
    data.id = food.id
    data.xuhao = ''
    data.shicai = food.name
    data.energy_kcal = food.energy_kcal
    data.jingliang = ''
    data.reliang = ''
    data.caozuo = ''

    tableData.push(data)
    tableData.map((item, index) => {
        item.key = index
    })
    this.setState({
        tableData
    })
  }

  checkMenuItem = (data) => {
    let tableData = JSON.parse(JSON.stringify(this.state.tableData))
    for (let i = 0; i < tableData.length; i++) {
        if (+data.id === +tableData[i].id) {
            return false
        }
    }
    return true
  }

  inputChange = (index, value) => {
    let tableData = JSON.parse(JSON.stringify(this.state.tableData))
    tableData[index].jingliang = value
    tableData[index].reliang = ((+value) * (+tableData[index].energy_kcal))/100 || ''
    this.setState({
        tableData
    })
  }

  handleDelete = (index) => {
    let tableData = JSON.parse(JSON.stringify(this.state.tableData))
    tableData.splice(index, 1)
    this.setState({
        tableData
    })
  }

  handleFoodNameChange = (value) => {
    this.props.foodsStore.setFoodName(value)
  }

  handleSelectChange = (id) => {
    this.props.foodsStore.setTypeId(id)
  }

  handleSave = () => {
    let { foodName } = this.props.foodsStore;
    let tableData = JSON.parse(JSON.stringify(this.state.tableData))
    if (!foodName) {
        message.error('请填写菜肴名称')
        return
    } 
    if (!tableData.length) {
        message.error('请编辑菜肴食材！')
        return
    }
    this.props.foodsStore.saveFoods()
  }

  render() {
    let { tableData } = this.state;
    let { foodsList, foodsType, foodName } = this.props.foodsStore;
    return (
        <BasicWrapper width={1200} height={550}>
            <div className="foods-wrapper">
                <MenuList data={ foodsList } handleClickMenuItem={this.handleClickMenuItem} />
                <Main type={foodsType} tableData={tableData} foodName={foodName}  
                    handleSave={this.handleSave} 
                    handleDelete={this.handleDelete} 
                    inputChange={this.inputChange}
                    handleFoodNameChange={this.handleFoodNameChange}
                    handleSelectChange={this.handleSelectChange} />
            </div>
      </BasicWrapper>
    );
  }
}

export default Foods;
