class NegotiationView extends AbstractView{
  template(model){
    return `
    <table class="table table-hover table-bordered">
        <thead>
            <tr>
                <th onclick="negotiationController.order('date')">DATE</th>
                <th onclick="negotiationController.order('qtd')">QTD</th>
                <th onclick="negotiationController.order('value')">VALUE</th>
                <th onclick="negotiationController.order('volum')">VOLUM</th>
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
            ${model.totalVolum}
          </td>
        </tfoot>
    </table>
    `;
  }
}