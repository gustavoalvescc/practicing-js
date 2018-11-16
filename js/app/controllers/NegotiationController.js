"use strict";
class NegotiationController{
    constructor(){
        this._inputQtd = document.querySelector("#quantidade");
        this._inputValue = document.querySelector("#valor");
        this._inputDate = document.querySelector("#data");
    }
    
    add(event){
        event.preventDefault();
        let sA = this._inputDate.value.split("-").map((v, i) => (i == 1) ? v-1 : v
        );
        let d = new Date(...sA);
        let negotiation = new Negotiation(
            d,
            this._inputQtd.value,
            this._inputValue.value
        );
        console.log(negotiation);
    }
}