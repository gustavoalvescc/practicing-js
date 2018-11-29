class NegotiationDAO{
    constructor(connection){
        this._connection = connection;
        this._store = "negotiations";
    }

    add(negotiation){
        return new Promise((resolve, reject) => {
            let request = this._connection
                .transaction([this._store], 'readwrite')
                .objectStore(this._store)
                .add(negotiation);
            request.onsuccess = () => {resolve()};
            request.onerror = (e) => {reject(e.target.error);}
            
        });
    }

    list(){
        return new Promise((resolve, reject) => {
            let request = this._connection
            .transaction([this._store], 'readwrite')
            .objectStore(this._store)
            .openCursor();
            let negotiations = [];
            request.onsuccess = (e) => {
                let it = e.target.result;
                if (it){
                    let o = it.value;
                    negotiations.push(new Negotiation(o._date, o._qtd, o._value));
                    it.continue();
                }else{
                    resolve(negotiations);
                }
            };
            request.onerror = (e) => {
                reject(e.targer.error);
            }
        });
    }
}