function getData() {
    fetch('https://finnhub.io/api/v1/quote?symbol=AAPL&token=c4rogd2ad3ic8b7cp78g')
        .then(function (resp) {
            return resp.json()
        })
        .then(function (data) {
            document.querySelector(".firstValueC").innerHTML = data.c;
            document.querySelector(".firstValueD").innerHTML = data.d;
            setColor(data.d, "firstValueD");
        });
    fetch('https://finnhub.io/api/v1/quote?symbol=MSFT&token=c4rogd2ad3ic8b7cp78g')
        .then(function (resp) {
            return resp.json()
        })
        .then(function (data) {
            document.querySelector(".secondValueC").innerHTML = data.c;
            document.querySelector(".secondValueD").innerHTML = data.d;
            setColor(data.d, "secondValueD");
        });
    fetch('https://finnhub.io/api/v1/quote?symbol=BINANCE:BTCUSDT&token=c4rogd2ad3ic8b7cp78g')
        .then(function (resp) {
            return resp.json()
        })
        .then(function (data) {
            document.querySelector(".thirdValueC").innerHTML = data.c;
            document.querySelector(".thirdValueD").innerHTML = data.d;
            setColor(data.d, "thirdValueD");
        });
    fetch('https://finnhub.io/api/v1/quote?symbol=IC MARKETS:1&token=c4rogd2ad3ic8b7cp78g')
        .then(function (resp) {
            return resp.json()
        })
        .then(function (data) {
            document.querySelector(".forthValueC").innerHTML = data.c;
            document.querySelector(".forthValueD").innerHTML = data.d;
            setColor(data.d, "forthValueD");
        });
    fetch('https://finnhub.io/api/v1/quote?symbol=AMZN&token=c4rogd2ad3ic8b7cp78g')
        .then(function (resp) {
            return resp.json()
        })
        .then(function (data) {
            document.querySelector(".fifthValueC").innerHTML = data.c;
            document.querySelector(".fifthValueD").innerHTML = data.d;
            setColor(data.d, "fifthValueD");
        });
    fetch('https://finnhub.io/api/v1/quote?symbol=DELL&token=c4rogd2ad3ic8b7cp78g')
        .then(function (resp) {
            return resp.json()
        })
        .then(function (data) {
            document.querySelector(".sixthValueC").innerHTML = data.c;
            document.querySelector(".sixthValueD").innerHTML = data.d;
            setColor(data.d, "sixthValueD");
        });
    setTimeout(getData,10000);
}
getData();

function setColor(number, field) {
    let color = 'green';
    if (number < 0) {
        color = 'red';
    }
    document.getElementsByClassName(field)[0].style.color = color;
}