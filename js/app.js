const bom = document.getElementById('bom');
const rapido = document.getElementById('rapido');
const barato = document.getElementById('barato');
const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
    input.addEventListener('click', calcular(input.id));
});

function calcular(id) {
    switch (id) {
        case "barato":
            if (bom.checked & barato.checked) lento();
    }
}


/* cenarios */
function ruin() {
    bom.checked = false;
}

function caro() {
    barato.checked = false;
}

function lento() {
    rapido.checked = false;
}