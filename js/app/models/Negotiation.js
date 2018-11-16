"use strict"
class Negotiation{
    constructor(date, qtd, value){
        //Making immutable
        this._date = new Date(date.getTime());
        this._qtd = qtd;
        this._value = value;
        Object.freeze(this);
    }
    get data(){
        //Making immutable
        return new Date(this._data.setTime());
    };
    get qtd(){return this._qtd};
    get value(){ return this._value};
    get volume(){ 
        return this._qtd * this._value 
    }
}