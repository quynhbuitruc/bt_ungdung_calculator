function hienthiso() {
    document.getElementById("0").addEventListener("click", function () {
        document.getElementById("so1").innerText = document.getElementById("1").innerText;
    }) 
    document.getElementById("1").addEventListener("click", function () {
        document.getElementById("so1").innerText = "1"
    })
    document.getElementById("2").addEventListener("click", function () {
        document.getElementById("so1").innerText = "2"
    })
    document.getElementById("3").addEventListener("click", function () {
        document.getElementById("so1").innerText = "3"
    })
    document.getElementById("4").addEventListener("click", function () {
        document.getElementById("so1").innerText = "4"
    })
    document.getElementById("5").addEventListener("click", function () {
        document.getElementById("so1").innerText = "5"
    })
    document.getElementById("6").addEventListener("click", function () {
        document.getElementById("so1").innerText = "6"
    })
    document.getElementById("7").addEventListener("click", function () {
        document.getElementById("so1").innerText = "7"
    })
    document.getElementById("8").addEventListener("click", function () {
        document.getElementById("so1").innerText = "8"
    })
    document.getElementById("9").addEventListener("click", function () {
        document.getElementById("so1").innerText = "9"
    })
    document.getElementById(".").addEventListener("click", function () {
        document.getElementById("so1").innerText = "."
    })
}
function hienthiKQ() {
    document.getElementById("hienthi").innerText = document.getElementById("hienthiKQ").innerText
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
function hienthiDau() {
    document.getElementById("(").addEventListener("click", function () {
        document.getElementById("so1").innerText = "("
    })
    document.getElementById(")").addEventListener("click", function () {
        document.getElementById("so1").innerText = ")"
    })
    document.getElementById("+").addEventListener("click", function () {
        document.getElementById("pheptinh").innerText = "+"
    })
    document.getElementById("-").addEventListener("click", function () {
        document.getElementById("pheptinh").innerText = "-"
    })
    document.getElementById("*").addEventListener("click", function () {
        document.getElementById("pheptinh").innerText = "*"
    })
    document.getElementById("/").addEventListener("click", function () {
        document.getElementById("pheptinh").innerText = "/"
    })
}

function tinhtoan() {
    let x = Number(document.getElementById("so1").innerText)
    let y = Number(document.getElementById("so2").innerText)
    let z = document.getElementById("pheptinh").innerText
    document.getElementById("hienthiND").innerText = x + z + y
    document.getElementById("pheptinh").focus();
    document.getElementById("pheptinh").value = ""
    document.getElementById("so2").focus();
    document.getElementById("so2").value = ""
}
