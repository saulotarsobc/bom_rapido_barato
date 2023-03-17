const inputs = document.querySelectorAll('input');

const bom = document.getElementById('bom');
const barato = document.getElementById('barato');
const rapido = document.getElementById('rapido');

inputs.forEach(input => {
    input.addEventListener('click', e => calcular(input.id));
});

function calcular(id) {
    console.log(id);
    switch (id) {
        case "bom": {
            if (bom.checked) {
                if (rapido.checked && barato.checked) lento();
            }
        };
        case "rapido": { };
        case "barato": {
            if (barato.checked) {
                if (rapido.checked && bom.checked) ruin();
            }
        };
    };
};


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