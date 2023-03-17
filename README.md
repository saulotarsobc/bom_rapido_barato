# bom_rapido_barato

## HTML

```html
<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bom - Rápido - Barato</title>
    <link rel="stylesheet" href="./css/main.min.css">
</head>

<body>
    <div id="wrap">
        <div>-Bom---Barato--Rapido</div>
        <!-- bom -->
        <label class="switch">
            <input id="bom" type="checkbox" data-sig="bom" checked />
            <span class="slider"></span>
        </label>

        <!-- barato -->
        <label class="switch">
            <input id="barato" type="checkbox" data-sig="bar" />
            <span class="slider"></span>
        </label>

        <!-- rapido -->
        <label class="switch">
            <input id="rapido" type="checkbox" data-sig="rap" />
            <span class="slider"></span>
        </label>
    </div>

    <script src="./js/app.js"></script>
</body>

</html>
```

## JS

```js
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
```

## SCSS

### main.scss

```scss
@use "./reset.scss";
@use "./switch.scss";
```

### reset.scss

```scss
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Courier New', Courier, monospace;
}
```

### switch.scss

```scss
.switch {
    display: inline-block;
    position: relative;
    width: 60px;
    height: 34px;

    input {
        opacity: 0;
        width: 0;
        height: 0;

        &:checked+.slider {
            background-color: #2196F3;
        }

        &:focus+.slider {
            box-shadow: 0 0 1px #2196F3;
        }

        &:checked+.slider:before {
            transform: translateX(26px);
        }
    }


    .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #ccc;
        border-radius: 34px;
        transition: background-color 0.2s;

        &:before {
            position: absolute;
            content: "";
            height: 26px;
            width: 26px;
            left: 4px;
            bottom: 4px;
            background-color: white;
            border-radius: 50%;
            transition: transform 0.2s;
        }
    }
}
```
