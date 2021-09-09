let x, y, r;

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

function validate() {
    let message = "";
    let check = true;
    if (!validateX()) {
        check = false;
        message += "Не выбран X\n";
    }
    if (!validateY()) {
        check = false;
        message += "Проверьте правильность ввода Y\n";
    }
    if (!validateR()) {
        check = false;
        message += "Не выбран R";
    }
    if (!check) alert(message);
    return check;
}

function validateX() {
    const choosed = [...document.querySelectorAll("input[class=x_checkbox]:checked")];
    if (choosed.length === 0) {
        return false;
    }
    x = choosed.map(x => x.getAttribute('value'));
    return true;
}

function validateY() {
    const Y_MIN = -3;
    const Y_MAX = 3;
    let yField = $('#y_input');
    let numY = yField.val().replace(',', '.');
    if (isNumeric(numY) && numY >= Y_MIN && numY <= Y_MAX) {
        y = numY;
        return true;
    }
    return false;
}

function validateR() {
    let choose = false;
    for (let i = 1; i <= 5; i++) {
        if (document.getElementById("r_radio" + i).checked) {
            choose = true;
            r = document.getElementById("r_radio" + i).value;
            break;
        }
    }
    return choose;
}

function submit() {
    if (validate()) {
        $.get("php/main.php", {
            'xVal': x.join(','),
            'yVal': y,
            'rVal': r,
            'timezone': new Date().getTimezoneOffset()
        }).done(function (data) {
            let arr = JSON.parse(data);
            arr.forEach(function (elem) {
                if (!elem.validate) return;
                let newRow = '<tr>';
                newRow += '<td>' + elem.xVal + '</td>';
                newRow += '<td>' + elem.yVal + '</td>';
                newRow += '<td>' + elem.rVal + '</td>';
                newRow += '<td>' + elem.curtime + '</td>';
                newRow += '<td>' + elem.exectime + '</td>';
                if (elem.validate) newRow += '<td>' + 'yes' + '</td>';
                else newRow += '<td>' + 'no' + '</td>';
                newRow += '<td>' + elem.hitres + '</td>';
                $('#resultTable').append(newRow);
                let key = localStorage.length + 1;
                localStorage.setItem(key.toString(), newRow);
            });
        })
    }
}

for (let i = 1; i <= localStorage.length; i++) {
    $('#resultTable').append(localStorage.getItem(i.toString()));
}