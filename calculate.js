function addition() {
    let x = Number(document.getElementById("so1").value);
    console.log(x);
    let y = Number(document.getElementById("so2").value);
    console.log(y);
    let tong = x + y;
    document.getElementById("hienthi").innerText = "Result addition :" + " " + tong;
}

function subtraction() {
    let x = Number(document.getElementById("so1").value);
    console.log(x);
    let y = Number(document.getElementById("so2").value);
    console.log(y);
    let hieu = x - y;
    document.getElementById("hienthi").innerText = "Result subtraction :" + " " + hieu;
}

function multiplication() {
    let x = Number(document.getElementById("so1").value);
    console.log(x);
    let y = Number(document.getElementById("so2").value);
    console.log(y);
    let tich = x * y;
    document.getElementById("hienthi").innerText = "Result multiplication :" + " " + tich;
}

function division() {
    let x = Number(document.getElementById("so1").value);
    console.log(x);
    let y = Number(document.getElementById("so2").value);
    console.log(y);
    let thuong = x / y;
    document.getElementById("hienthi").innerText = "Result division :" + " " + thuong;
}