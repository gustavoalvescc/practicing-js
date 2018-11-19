class Bind{
    constructor(model, methods, view){
        let proxy = ProxyFactory.create(model,methods,  
            (model) => view.update(model));
        view.update(model);
        return proxy;
    }
}