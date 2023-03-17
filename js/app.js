const a = document.getElementById('bom'),
    b = document.getElementById('barato'),
    c = document.getElementById('rapido');

const desmarca = (p1, p2) => Math.random() < 0.5 ? p1.checked = false : p2.checked = false;

document.querySelectorAll('input').forEach(e => {
    e.addEventListener('click', () => {
        const { sig } = e.dataset;
        (sig == 'bom' && a.checked) ? (b.checked && c.checked) ? desmarca(b, c) : "" : "";
        (sig == 'bar' && b.checked) ? (a.checked && c.checked) ? desmarca(a, c) : "" : "";
        (sig == 'rap' && c.checked) ? (b.checked && a.checked) ? desmarca(b, a) : "" : "";
    });
});