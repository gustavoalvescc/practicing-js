class Bind{
    constructor(model, view, ...method){
        let proxy = ProxyFactory.create(model, method,  
            (model) => view.update(model));
        view.update(model);
        return proxy;
    }
}