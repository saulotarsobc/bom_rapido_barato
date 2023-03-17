const bom = document.getElementById('bom'),
    barato = document.getElementById('barato'),
    rapido = document.getElementById('rapido');

document.querySelectorAll('input').forEach(e => {
    e.addEventListener('change', () => {
        switch (e.dataset.sigla) {
            case "bom": if (bom.checked) if (rapido.checked && barato.checked) (Math.random() < 0.5) ? rapido.checked = false : barato.checked = false;
            case "bar": if (barato.checked) if (rapido.checked && bom.checked) (Math.random() < 0.5) ? rapido.checked = false : bom.checked = false;
            case "rap": if (rapido.checked) if (bom.checked && barato.checked) (Math.random() < 0.5) ? bom.checked = false : barato.checked = false;
        };
    });
});