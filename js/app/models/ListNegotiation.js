class ListNegotiation{
  constructor(){
    this._negotiations = [];
  }

  add(negotiation){
    this._negotiations.push(negotiation);
  }

  clean(){
    this._negotiations = [];
  }

  get negotiations(){
    return this._negotiations;
  }

  get totalVolum(){
    return this._negotiations.reduce((total, o) => total+= total + o.volum, 0.0);
  }
  
}