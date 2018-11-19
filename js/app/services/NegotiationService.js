class NegotiationService{
    importWeek(cb){
        let xhr = new XMLHttpRequest();
        xhr.open("GET", "negociacoes/semana");
        xhr.onreadystatechange = () => {
            // Requisition finished
            if (xhr.readyState == 4){
                if (xhr.status == 200){
                    cb(null,
                    JSON.parse(xhr.responseText).map(o => new Negotiation(new Date(o.data), o.quantidade, o.valor)));
                }else{
                    cb("Error", null);
                }
            }
        };
        xhr.send();
    }

    importBefore(cb){
        let xhr = new XMLHttpRequest();
        xhr.open("GET", "negociacoes/passada");
        xhr.onreadystatechange = () => {
            // Requisition finished
            if (xhr.readyState == 4){
                if (xhr.status == 200){
                    cb(null,
                    JSON.parse(xhr.responseText).map(o => new Negotiation(new Date(o.data), o.quantidade, o.valor)));
                }else{
                    cb("Error", null);
                }
            }
        };
        xhr.send();
    }
    importBefore2(cb){
        let xhr = new XMLHttpRequest();
        xhr.open("GET", "negociacoes/retrasada");
        xhr.onreadystatechange = () => {
            // Requisition finished
            if (xhr.readyState == 4){
                if (xhr.status == 200){
                    cb(null,
                    JSON.parse(xhr.responseText).map(o => new Negotiation(new Date(o.data), o.quantidade, o.valor)));
                }else{
                    cb("Error", null);
                }
            }
        };
        xhr.send();
    }
}