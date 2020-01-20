// import { get } from "framework/lib/kits/ajax";
import axios from 'common/js/axios'
import { observable, action, runInAction } from "mobx"


class Home {

	constructor() {
	}

    @observable foodsList = []
	
	//首页首屏接口
	async initPage() {
        let res = await axios('/week_recipes/categories', 'get', {})
        runInAction(() => {
            this.foodsList = res.data.data;
            console.log(res.data.data)
        })
	}

}

export default new Home();
