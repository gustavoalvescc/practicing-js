"use strict";
class NegotiationController{
    constructor(){
        this._inputQtd = document.querySelector("#quantidade");
        this._inputValue = document.querySelector("#valor");
        this._inputDate = document.querySelector("#data");

        this._listNegotiation = new Bind(new ListNegotiation, new NegotiationView(document.getElementById("negotiationView")), 'add', 'clean', 'orderAsc', 'orderDesc');
        this._message = new Bind(new Message, new MessageView(document.getElementById("messageView")), 'text');
        this._order = "";
        
    }

    addFocus(element){
        element.focus();
    }

    order(column){
        if (this._order == column){
            this._listNegotiation.orderDesc(column);
        }else{
            this._listNegotiation.orderAsc(column);
        }
        this._order = column;
    }

    cleanForm(){
        this._inputQtd.value = 1;
        this._inputValue.value = 0.0;
        this._inputDate.value = "";
    }

    cleanList(){
        this._listNegotiation.clean();
        this._message.text = "Negotiation list cleaned with success";
    }
    
    add(event){
        event.preventDefault();

        let negotiation = new Negotiation(
            DateHelper.textToDate(this._inputDate.value),
            this._inputQtd.value,
            this._inputValue.value
        );

        this._listNegotiation.add(negotiation);

        this.cleanForm();
        this.addFocus(this._inputDate);
        this._message.text = "Negotiation added with success";
    }

    import(){
        let service = new NegotiationService();
        Promise.all([service.importWeek(), service.importBefore(), service.importBefore2()])
            .then((negotiations) => {
                negotiations.reduce((result, a) => result.concat(a), [])
                    .forEach(n => {
                        this._listNegotiation.add(n);
                        this._message.text = "Negotiations imported with success";
                    });
            }).catch(error => this._message.text = "Error importing negotiation");
    }
}