"use strict";
class NegotiationController{
    constructor(){
        this._inputQtd = document.querySelector("#quantidade");
        this._inputValue = document.querySelector("#valor");
        this._inputDate = document.querySelector("#data");
    }

    addFocus(element){
        element.focus();
    }

    clean(...elements){
        elements.forEach((e) => e.value = "");
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
        this.clean(this._inputDate, this._inputQtd, this._inputValue);
        this.addFocus(this._inputDate);
        return negotiation;
    }
}