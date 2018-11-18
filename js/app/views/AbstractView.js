class AbstractView{
  constructor(element){
    this._element = element;
  }
  _template(model){
    throw new Error("The method tempalte must be implemented");
  }
  update(model){
    this._element.innerHTML = this._template(model);
  }
}