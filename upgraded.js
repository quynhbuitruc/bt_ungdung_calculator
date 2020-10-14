
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

document.getElementById("AC").addEventListener("click", function () {
    document.getElementById("hienthi").innerText = "0"
})

document.getElementById("+").addEventListener("click", Tong)

function Tong() {
    document.getElementById("temp").innerText = document.getElementById("hienthi").innerText
    document.getElementById("hienthi").innerText = ""
    document.getElementById("=").addEventListener("click", KetquaCong)
    document.getElementById("=").removeEventListener("click", KetquaTru)
    document.getElementById("=").removeEventListener("click", KetquaNhan)
    document.getElementById("=").removeEventListener("click", KetquaChia)
}    

document.getElementById("-").addEventListener("click", Hieu)

function Hieu() {
    document.getElementById("temp").innerText = document.getElementById("hienthi").innerText
    document.getElementById("hienthi").innerText = ""
    document.getElementById("=").addEventListener("click", KetquaTru)
    document.getElementById("=").removeEventListener("click", KetquaCong)
    document.getElementById("=").removeEventListener("click", KetquaNhan)
    document.getElementById("=").removeEventListener("click", KetquaChia)
}

document.getElementById("*").addEventListener("click", Tich)

function Tich() {
    document.getElementById("temp").innerText = document.getElementById("hienthi").innerText
    document.getElementById("hienthi").innerText = ""
    document.getElementById("=").addEventListener("click", KetquaNhan)
    document.getElementById("=").removeEventListener("click", KetquaCong)
    document.getElementById("=").removeEventListener("click", KetquaTru)
    document.getElementById("=").removeEventListener("click", KetquaChia)
}

document.getElementById("/").addEventListener("click", Thuong)

function Thuong() {
    document.getElementById("temp").innerText = document.getElementById("hienthi").innerText
    document.getElementById("hienthi").innerText = ""
    document.getElementById("=").addEventListener("click", KetquaChia)
    document.getElementById("=").removeEventListener("click", KetquaCong)
    document.getElementById("=").removeEventListener("click", KetquaTru)
    document.getElementById("=").removeEventListener("click", KetquaNhan)
}
function KetquaCong() {
    let A = document.getElementById("temp").innerText
    let kqCong = Number(A) + Number(document.getElementById("hienthi").innerText)
    document.getElementById("hienthi").innerText = kqCong
}

function KetquaTru() {
    let A = document.getElementById("temp").innerText
    let kqTru = Number(A) - Number(document.getElementById("hienthi").innerText)
    document.getElementById("hienthi").innerText = kqTru
}

function KetquaNhan() {
    let A = document.getElementById("temp").innerText
    let kqNhan = Number(A) * Number(document.getElementById("hienthi").innerText)
    document.getElementById("hienthi").innerText = kqNhan
}

function KetquaChia() {
    let A = document.getElementById("temp").innerText
    let kqChia = Number(A) / Number(document.getElementById("hienthi").innerText)
    document.getElementById("hienthi").innerText = kqChia
}