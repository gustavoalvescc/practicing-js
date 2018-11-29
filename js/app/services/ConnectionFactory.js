var stores = ['negotiations'];
var version = 1;
var db = 'frame';
var connection = null;
class ConnectionFactory{
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
                    resolve(connection);
                };
                openRequest.onerror = e => {
                    reject(e.target.error.name);
                };
            }
        });
    }
}