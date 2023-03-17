# bom_rapido_barato

## HTML

```html
...
    <div>-Bom---Barato--Rapido</div>
    <!-- bom -->
    <label class="switch">
        <input id="bom" type="checkbox" checked />
        <span class="slider"></span>
    </label>

    <!-- barato -->
    <label class="switch">
        <input id="barato" type="checkbox" />
        <span class="slider"></span>
    </label>

    <!-- rapido -->
    <label class="switch">
        <input id="rapido" type="checkbox" />
        <span class="slider"></span>
    </label>
...
```

## JS

```js
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
```

## SCSS

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

### main.scss

```scss
@use "./reset.scss";
@use "./switch.scss";
```
