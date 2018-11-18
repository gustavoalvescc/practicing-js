"use strict";
class NegotiationController{
    constructor(){
        this._inputQtd = document.querySelector("#quantidade");
        this._inputValue = document.querySelector("#valor");
        this._inputDate = document.querySelector("#data");
        this._listNegotiation = new ListNegotiation();
        this.negotiationView = new NegotiationView(document.getElementById("negotiationView"));
        this.negotiationView.update(this._listNegotiation);
    }

    addFocus(element){
        element.focus();
    }

    clean(){
        this._inputQtd.value = 1;
        this._inputValue.value = 0,0;
        this._inputDate.value = "";
    }
    
    add(event){
        event.preventDefault();

        let negotiation = new Negotiation(
            DateHelper.textToDate(this._inputDate.value),
            this._inputQtd.value,
            this._inputValue.value
        );

        this._listNegotiation.add(negotiation);

        this.clean();
        this.addFocus(this._inputDate);

        this.negotiationView.update(this._listNegotiation);
    }
}