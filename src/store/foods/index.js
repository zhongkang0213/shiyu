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
	//首页首屏接口
	async getCategories() {
        let res = await axios('/food/categories', 'get', {})
        runInAction(() => {
            this.foodsList = res.data.data;
            console.log(res.data.data);
        })
    }
    
    async recipesCategories() {
        let res = await axios('/recipes/categories', 'get', {})
        runInAction(() => {
            this.foodsType = res.data.data;
        })
    }

    setFoodName(str) {
        this.foodName = str;
    }

    setTypeId(id) {
        this.typeId = id;
    }

    saveFoods() {
        console.log('===========');
    }
}

export default new Foods();