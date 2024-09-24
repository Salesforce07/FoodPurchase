import { LightningElement } from 'lwc';

export default class FoodShop extends LightningElement {
    account;

    handleAccount(e){
        this.account=e.detail;
        console.log("got account", JSON.stringify(this.account));
    }
}