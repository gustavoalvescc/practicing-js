class MessageView extends AbstractView{
  template(model){
    return model.text ? `<p class="alert alert-info">${model.text}</p>` : "";
  }
}