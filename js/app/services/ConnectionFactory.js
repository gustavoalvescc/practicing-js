var ConnectionFactory = (function (){
    const stores = ['negotiations'];
    const version = 1;
    const db = 'frame';
    let connection = null;
    let close = null;

    return class ConnectionFactory{
        constructor(){
            throw new Error('Static class');
        }
        static getConnection(){
            return new Promise((resolve, reject) => {
                if (connection){resolve(connection)}
                else{
                    let openRequest = window.indexedDB.open(db, version);

                    openRequest.onupgradeneeded = e => {
                        stores.forEach(s => {
                            if(e.target.result.objectStoreNames.contains(s)){
                                e.target.result.deleteObjectStore(s);
                            }
                            e.target.result.createObjectStore(s, {autoIncrement: true});
                        });
                    };
                    openRequest.onsuccess = e => {
                        connection = e.target.result;
                        close = connection.close.bind(connection);
                        connection.close = function() {throw new Error('You cannot close the connection')};
                        resolve(connection);
                    };
                    openRequest.onerror = e => {
                        reject(e.target.error.name);
                    };
                }
            });
        }

        static closeConnection(){
            if (connection){
                close();
                connection = null;
            }
        }
    };
})();

