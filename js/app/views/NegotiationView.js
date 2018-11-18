class NegotiationView{
  constructor(element){
    this._element = element;
  }
  908581018
  908581082
  908581152
  template(model){
    return `
    <table class="table table-hover table-bordered">
        <thead>
            <tr>
                <th>DATE</th>
                <th>QTD</th>
                <th>VALUE</th>
                <th>VOLUM</th>
            </tr>
        </thead>

        <tbody>
          ${
            model.negotiations.map(e => {
              return `
                <tr>
                  <td>${DateHelper.dateToText(e.date)}</td>
                  <td>${e.qtd}</td>
                  <td>${e.value}</td>
                  <td>${e.volum}</td>
                </tr>
              `;
            })
          }
        </tbody>
        
        <tfoot>
        </tfoot>
    </table>
    `;
  }
  update(model){
    this._element.innerHTML = this.template(model);
  }
}