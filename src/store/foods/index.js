// import { get } from "framework/lib/kits/ajax";
import axios from 'common/js/axios'
import { observable, action, runInAction } from "mobx"


class Foods {

	constructor() {
	}

    @observable foodsList = [];
    @observable foodsType = [];
    @observable foodName = '';
    @observable typeId = '';
    @observable tableData = [];
    @observable typeName = '';

	async getCategories() {
        let res = await axios('/food/categories', 'get', {})
        runInAction(() => {
            this.foodsList = res.data.data;
        })
    }

    async getRecipeInfo(id) {
        let res1 = await axios('/recipes/edit', 'get', {recipe_id: id})
        let res2 = await axios('/recipes/categories', 'get', {})
        let data = res1.data.data.recipe
        runInAction(() => {
            this.foodsType = res2.data.data;
            this.foodName = data.name
            this.typeId = data.tag_id
            this.initTableData(data.foods)
            this.tag_id = data.tag_id
            this.setTypename(data.tag_id)
        })
    }

    async saveFoods(recipeId, fn) {
        let foods = this.filterTableData()
        let params = {}
        params.recipe_id = recipeId
        params.name = this.foodName
        params.tag_id = this.typeId
        params.foods = foods
        let res = await axios('/recipes/store', 'post', params)
        fn && fn()
    }

    initTableData(foods) {
        foods.map((food, index) => {
            let data = {}
            data.id = food.food_id
            data.xuhao = ''
            data.shicai = food.name
            data.energy_kcal = food.energy_kcal
            data.jingliang = food.weight
            data.reliang = Number(food.weight) * Number(food.energy_kcal)/100
            data.caozuo = ''
            data.key = index
            this.tableData.push(data)
        })
    }

    setTableData(data) {
        this.tableData = data;
    }

    filterTableData() {
        let data = [];
        this.tableData.map((item) => {
            let obj = {}
            obj.id = item.id
            obj.food_id = item.id
            obj.name = item.shicai
            obj.weight = item.jingliang
            data.push(obj)
        })
        return data
    }

    setFoodName(str) {
        this.foodName = str;
    }

    setTypeId(id) {
        this.typeId = id;
        this.setTypename(id);
    }

    setTypename(id) {
        this.foodsType.map((item) => {
            if (+item.id === +id) {
                this.typeName = item.name
                console.log(this.typeName)
            }
        })
    }
}

export default new Foods();