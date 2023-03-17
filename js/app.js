const bom = document.getElementById('bom');
const rapido = document.getElementById('rapido');
const barato = document.getElementById('barato');

bom.addEventListener('click', () => {
    setTimeout(() => {
        if (rapido.checked && rapido.checked) barato.checked = false;
    }, 100);
});

rapido.addEventListener('click', () => {
    setTimeout(() => {
        if (rapido.checked) console.log('ligado')
    }, 100);
});

barato.addEventListener('click', () => {
    setTimeout(() => {
        if (bom.checked) console.log('ligado')
    }, 100);
});