class MessageView{
  constructor(element){
    this._element = element;
  }
  _template(model){
    console.log(model.text);
    return model.text ? `<p class="alert alert-info">${model.text}</p>` : "";
  }
  update(model){
    this._element.innerHTML = this._template(model);
  }
}