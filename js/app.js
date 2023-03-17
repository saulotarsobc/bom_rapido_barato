const { bom, barato, rapido } = {
    bom: document.getElementById('bom'),
    barato: document.getElementById('barato'),
    rapido: document.getElementById('rapido')
};

document.querySelectorAll('input').forEach(el => {
    el.addEventListener('change', () => {
        switch (el.id) {
            case "bom": if (bom.checked) if (rapido.checked && barato.checked) (Math.random() < 0.5) ? rapido.checked = false : barato.checked = false;
            case "barato": if (barato.checked) if (rapido.checked && bom.checked) (Math.random() < 0.5) ? rapido.checked = false : bom.checked = false;
            case "rapido": if (rapido.checked) if (bom.checked && barato.checked) (Math.random() < 0.5) ? bom.checked = false : barato.checked = false;
        };
    });
});