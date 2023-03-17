const a = document.getElementById('bom'),
    b = document.getElementById('barato'),
    c = document.getElementById('rapido');

const desmarca = (p1, p2) => Math.random() < 0.5 ? p1.checked = false : p2.checked = false;

document.querySelectorAll('input').forEach(e => {
    e.addEventListener('click', () => {
        const { sig } = e.dataset;
        (sig == 'a' && a.checked) ? (b.checked && c.checked) ? desmarca(b, c) : "" : "";
        (sig == 'b' && b.checked) ? (c.checked && a.checked) ? desmarca(c, a) : "" : "";
        (sig == 'c' && c.checked) ? (a.checked && b.checked) ? desmarca(a, b) : "" : "";
    });
});