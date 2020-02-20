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
    recipeId: ''
  }

  componentDidMount = () => {
    let path = window.location.href;
    let recipeId = path.split('recipe_id=')[1];
    this.props.foodsStore.getRecipeInfo(recipeId)
    this.props.foodsStore.getCategories();
    this.setState({
      recipeId
    })
  }

  handleClickMenuItem = (key) => {
    let foodsList = JSON.parse(JSON.stringify(this.props.foodsStore.foodsList))
    let tableData = JSON.parse(JSON.stringify(this.props.foodsStore.tableData))
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
    this.props.foodsStore.setTableData(tableData)
  }

  checkMenuItem = (data) => {
    let tableData = JSON.parse(JSON.stringify(this.props.foodsStore.tableData))
    for (let i = 0; i < tableData.length; i++) {
        if (+data.id === +tableData[i].id) {
            return false
        }
    }
    return true
  }

  inputChange = (index, value) => {
    let tableData = JSON.parse(JSON.stringify(this.props.foodsStore.tableData))
    tableData[index].jingliang = value
    tableData[index].reliang = ((+value) * (+tableData[index].energy_kcal))/100 || ''
    this.props.foodsStore.setTableData(tableData)
  }

  handleDelete = (index) => {
    let tableData = JSON.parse(JSON.stringify(this.props.foodsStore.tableData))
    tableData.splice(index, 1)
    this.props.foodsStore.setTableData(tableData)
  }

  handleFoodNameChange = (value) => {
    this.props.foodsStore.setFoodName(value)
  }

  handleSelectChange = (id) => {
    this.props.foodsStore.setTypeId(id)
    this.props.foodsStore.setTypename(id)
  }

  handleSave = () => {
    let { foodName, typeId } = this.props.foodsStore;
    let tableData = JSON.parse(JSON.stringify(this.props.foodsStore.tableData))
    if (!foodName) {
        message.error('请填写菜肴名称')
        return
    } 
    if (!tableData.length) {
        message.error('请编辑菜肴食材！')
        return
    }
    if (!typeId) {
      message.error('请选择菜肴分类！')
      return
    }
    this.props.foodsStore.saveFoods(this.state.recipeId, () => {
      message.success('保存成功！')
    })
  }

  render() {
    let { foodsList, foodsType, foodName, tableData, typeName } = this.props.foodsStore;
    return (
        <BasicWrapper width={1200} height={550}>
            <div className="foods-wrapper">
                <MenuList data={ foodsList } handleClickMenuItem={this.handleClickMenuItem} />
                <Main type={foodsType} typeName={typeName} tableData={tableData} foodName={foodName}  
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
