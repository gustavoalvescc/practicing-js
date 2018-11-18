class MessageView extends AbstractView{
  _template(model){
    return model.text ? `<p class="alert alert-info">${model.text}</p>` : "";
  }
}