class AbstractView{
  constructor(element){
    this._element = element;
  }
  template(model){
    throw new Error("The method tempalte must be implemented");
  }
  update(model){
    this._element.innerHTML = this.template(model);
  }
}