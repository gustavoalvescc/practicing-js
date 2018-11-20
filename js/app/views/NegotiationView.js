class NegotiationView extends AbstractView{
  template(model){
    return `
    <table class="table table-hover table-bordered">
        <thead>
            <tr>
                <th class="column" onclick="negotiationController.order(this, 'date')">DATE <i class="fas fa-sort"></i></th>
                <th class="column" onclick="negotiationController.order(this, 'qtd')">QTD <i class="fas fa-sort"></i></th>
                <th class="column" onclick="negotiationController.order(this, 'value')">VALUE <i class="fas fa-sort"></i></th>
                <th class="column" onclick="negotiationController.order(this, 'volum')">VOLUM <i class="fas fa-sort"></i></th>
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