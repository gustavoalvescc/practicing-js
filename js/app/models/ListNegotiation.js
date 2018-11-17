class ListNegotiation{
  constructor(){
    this._negotiations = [];
  }

  add(negotiation){
    this._negotiations.push(negotiation);
  }

  get negotiations(){
    let result = new Array();
    result.concat(this._negotiations);
    return this._negotiations;
  }
}