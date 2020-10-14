
document.getElementById("0").addEventListener("click", function () {
    document.getElementById("hienthi").innerText = document.getElementById("hienthi").innerText + "0";
})

document.getElementById("1").addEventListener("click", function () {
    document.getElementById("hienthi").innerText = document.getElementById("hienthi").innerText + "1"
})

document.getElementById("2").addEventListener("click", function () {
    document.getElementById("hienthi").innerText = document.getElementById("hienthi").innerText + "2"
})

document.getElementById("3").addEventListener("click", function () {
    document.getElementById("hienthi").innerText = document.getElementById("hienthi").innerText + "3"
})

document.getElementById("4").addEventListener("click", function () {
    document.getElementById("hienthi").innerText = document.getElementById("hienthi").innerText + "4"
})

document.getElementById("5").addEventListener("click", function () {
    document.getElementById("hienthi").innerText = document.getElementById("hienthi").innerText + "5"
})

document.getElementById("6").addEventListener("click", function () {
    document.getElementById("hienthi").innerText = document.getElementById("hienthi").innerText + "6"
})

document.getElementById("7").addEventListener("click", function () {
    document.getElementById("hienthi").innerText = document.getElementById("hienthi").innerText + "7"
})

document.getElementById("8").addEventListener("click", function () {
    document.getElementById("hienthi").innerText = document.getElementById("hienthi").innerText + "8"
})

document.getElementById("9").addEventListener("click", function () {
    document.getElementById("hienthi").innerText = document.getElementById("hienthi").innerText + "9"
})

document.getElementById(".").addEventListener("click", function () {
    document.getElementById("hienthi").innerText = document.getElementById("hienthi").innerText + "."
})

function Tong() {
    document.getElementById("temp").innerText = document.getElementById("hienthi").innerText
    document.getElementById("hienthi").innerText = ""
}

function Hieu() {
    document.getElementById("temp").innerText = document.getElementById("hienthi").innerText
    document.getElementById("hienthi").innerText = ""
}

function Tich() {
    document.getElementById("temp").innerText = document.getElementById("hienthi").innerText
    document.getElementById("hienthi").innerText = ""
}

function Thuong() {
    document.getElementById("temp").innerText = document.getElementById("hienthi").innerText
    document.getElementById("hienthi").innerText = ""
}

}
function KetquaCong() {
    let x = document.getElementById("hienthi").innerText;
    let Tong = Number(document.getElementById("temp").innerText) + Number(x);
    document.getElementById("hienthi").innerText = Tong;
}

function KetquaTru() {
    let x = document.getElementById("hienthi").innerText;
    let Tru = Number(document.getElementById("temp").innerText) - Number(x);
    document.getElementById("hienthi").innerText = Tru;
}

function KetquaNhan() {
    let x = document.getElementById("hienthi").innerText;
    let Tich = Number(document.getElementById("temp").innerText) + Number(x);
    document.getElementById("hienthi").innerText = Tich;
}

function KetquaChia() {
    let x = document.getElementById("hienthi").innerText;
    let Thuong = Number(document.getElementById("temp").innerText) + Number(x);
    document.getElementById("hienthi").innerText = Thuong;
}