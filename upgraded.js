function hienthi() {
    document.getElementById("0").addEventListener("click", function () {
        document.getElementById("hienthi").innerText = "0"
    })
    document.getElementById("1").addEventListener("click", function () {
        document.getElementById("hienthi").innerText = "1"
    })
    document.getElementById("2").addEventListener("click", function () {
        document.getElementById("hienthi").innerText = "2"
    })
    document.getElementById("3").addEventListener("click", function () {
        document.getElementById("hienthi").innerText = "3"
    })
    document.getElementById("4").addEventListener("click", function () {
        document.getElementById("hienthi").innerText = "4"
    })
    document.getElementById("5").addEventListener("click", function () {
        document.getElementById("hienthi").innerText = "5"
    })
    document.getElementById("6").addEventListener("click", function () {
        document.getElementById("hienthi").innerText = "6"
    })
    document.getElementById("7").addEventListener("click", function () {
        document.getElementById("hienthi").innerText = "7"
    })
    document.getElementById("8").addEventListener("click", function () {
        document.getElementById("hienthi").innerText = "8"
    })
    document.getElementById("9").addEventListener("click", function () {
        document.getElementById("hienthi").innerText = "9"
    })
    document.getElementById("(").addEventListener("click", function () {
        document.getElementById("hienthi").innerText = "("
    })
    document.getElementById(")").addEventListener("click", function () {
        document.getElementById("hienthi").innerText = ")"
    })
    document.getElementById("9").addEventListener("click", function () {
        document.getElementById("hienthi").innerText = "%"
    })
    document.getElementById("AC").addEventListener("click", function () {
        document.getElementById("hienthi").innerText = 0
    })
    document.getElementById("9").addEventListener("click", function () {
        document.getElementById("hienthi").innerText = "9"
    })
    document.getElementById("+").addEventListener("click", function () {
        document.getElementById("hienthi").innerText = "+"
    })
    document.getElementById("-").addEventListener("click", function () {
        document.getElementById("hienthi").innerText = "-"
    })
    document.getElementById("*").addEventListener("click", function () {
        document.getElementById("hienthi").innerText = "*"
    })
    document.getElementById("/").addEventListener("click", function () {
        document.getElementById("hienthi").innerText = "/"
    })
}
function addition() {
    let tong = x + y;
    document.getElementById("hienthi").innerText = "Result addition :" + " " + tong;
}

function subtraction() {
    let hieu = x - y;
    document.getElementById("hienthi").innerText = "Result subtraction :" + " " + hieu;
}

function multiplication() {
    let tich = x * y;
    document.getElementById("hienthi").innerText = "Result multiplication :" + " " + tich;
}

function division() {
    let thuong = x / y;
    document.getElementById("hienthi").innerText = "Result division :" + " " + thuong;
}