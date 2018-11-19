class ProxyFactory{
    static create(object, methods, action){
        return new Proxy(object, {
            get(target, props, receiver){
                if (methods.includes(props) && typeof(target[props]) == typeof(Function)){
                    return function(){
                        Reflect.apply(target[props], target, arguments);
                        return action(target);
                    }
                    
                }
                return Reflect.get(target, props, receiver);
            },
            set(target, props, value, receiver){
                let retorno = Reflect.set(target, props, value, receiver);
                if (methods.includes(props)){
                    action(target);
                }
                return retorno;
            }
        });
        
    }
}