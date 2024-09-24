import { LightningElement } from 'lwc';

export default class AccountBlock extends LightningElement {
    account={
        name:'',
        phone:'',
    }

    
    handleChange(e){
        this.account[e.target.name]=e.target.value;
    }

    handleSave(){
        this.dispatchEvent(new CustomEvent('accountsave', {detail: this.account}));
    }
}