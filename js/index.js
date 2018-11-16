"use strict";
var fields = [
    document.querySelector('#data'),
    document.querySelector('#quantidade'),
    document.querySelector('#valor')
];

var table = document.querySelector("table tbody");

var form = document.querySelector(".form");
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let tr = document.createElement('tr');
    fields.forEach((f) => {
        let td = document.createElement('td');
        td.textContent = f.value;
        tr.appendChild(td);
    });
    let td = document.createElement('td');
    td.textContent = fields[1].value * fields[2].value;
    tr.appendChild(td);
    table.appendChild(tr);
    
    form.reset();

    fields[0].focus();
});