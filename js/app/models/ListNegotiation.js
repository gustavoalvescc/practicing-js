class ListNegotiation{
  constructor(view){
    this._negotiations = [];
    this._view = view;
  }

  add(negotiation){
    this._negotiations.push(negotiation);
    this._view(this);
  }

  clean(){
    this._negotiations = [];
    this._view(this);
  }

  get negotiations(){
    return this._negotiations;
  }

  
}