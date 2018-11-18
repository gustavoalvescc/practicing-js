class NegotiationView{
  constructor(element){
    this._element = element;
  }
  
  _template(model){
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
            model.negotiations.map(e =>
              `
                <tr>
                  <td>${DateHelper.dateToText(e.date)}</td>
                  <td>${e.qtd}</td>
                  <td>${e.value}</td>
                  <td>${e.volum}</td>
                </tr>
              `).join('')
          }
        </tbody>
        
        <tfoot>
          <td colspan="3"></td>
          <td>
            ${model.negotiations.reduce((amount, e) => amount + e.volum, 0.0)}
          </td>
        </tfoot>
    </table>
    `;
  }
  update(model){
    this._element.innerHTML = this._template(model);
  }
}