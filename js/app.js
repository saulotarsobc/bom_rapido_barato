const a = document.getElementById('bom'),
    b = document.getElementById('barato'),
    c = document.getElementById('rapido');

const desmarca = (p1, p2) => Math.random() > 0.5 ? p1.checked = false : p2.checked = false;

document.querySelectorAll('input').forEach(e => {
    e.addEventListener('click', () => {
        const { sig } = e.dataset;
        if (sig == 'bom' && a.checked) if (b.checked && c.checked) desmarca(b, c)
        if (sig == 'bar' && b.checked) if (a.checked && c.checked) desmarca(a, c);
        if (sig == 'rap' && c.checked) if (b.checked && a.checked) desmarca(b, a);
    });
});