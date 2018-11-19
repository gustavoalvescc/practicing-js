class NegotiationService{
    _import(url){
        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();
            xhr.open("GET", url);
            xhr.onreadystatechange = () => {
                // Requisition finished
                if (xhr.readyState == 4){
                    if (xhr.status == 200){
                        resolve(JSON.parse(xhr.responseText).map(o => new Negotiation(new Date(o.data), o.quantidade, o.valor)));
                    }else{
                        reject("Error");
                    }
                }
            };
            xhr.send();
        });
        
    }

    importWeek(){
        return this._import("negociacoes/semana");
    }

    importBefore(){
        return this._import("negociacoes/anterior");
    }
    importBefore2(){
        return this._import("negociacoes/retrasada");
    }
}