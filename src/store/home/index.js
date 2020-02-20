// import { get } from "framework/lib/kits/ajax";
import axios from 'common/js/axios'
import { observable, action, runInAction } from "mobx"


class Home {

	constructor() {
	}

    @observable foodsList = [];
    @observable tableData = new Array(5).fill({morning: [], aftern: [], evening: []});
	
	async initPage() {
        let res = await axios('/week_recipes/categories', 'get', {})
        runInAction(() => {
            this.foodsList = res.data.data;
        })
    }

    async getRecipe(plan_id) {
        let res = await axios('/week_recipes/edit', 'get', {plan_id})
        runInAction(() => {
            this.tableData = this.initTableData(res.data.data)
        })
	}
    
	async createRecipe(data, tableTabIndex, key) {
        let res = await axios('/week_recipes/store', 'post', data)
        runInAction(() => {
            let table = JSON.parse(JSON.stringify(this.tableData))
            table[tableTabIndex][key].push(res.data.data)
            this.setTableData(table)
        })
    }

    async deleteRecipe(detail_id, data) {
        let res = await axios('/week_recipes/delete', 'post', {detail_id})
        runInAction(() => {
            this.setTableData(data)
        })
    }

    async updateRecipe(detail_id, weight, data) {
        let res = await axios('/week_recipes/update', 'post', {detail_id, weight})
    }
    
    setTableData(data) {
        this.tableData = data
    }

    initTableData(data) {
        // let ret = new Array(5).fill(JSON.parse(JSON.stringify({morning: [], aftern: [], evening: []})))
        let ret = [{morning: [], aftern: [], evening: []}, {morning: [], aftern: [], evening: []}, {morning: [], aftern: [], evening: []}, {morning: [], aftern: [], evening: []}, {morning: [], aftern: [], evening: []}]
        for (let week in data) {
            for (let mark in data[week]) {
                let foods = data[week][mark]
                switch(+mark) {
                    case 1:
                        ret[+week - 1].morning = foods
                        break;
                    case 2:
                        ret[+week - 1].aftern = foods
                        break;
                    case 3:
                        ret[+week - 1].evening = foods
                        break;
                }
            }
        }
        return ret
    }

}

export default new Home();
