// Instrukcijos
// Atlikto darbo pavyzdys: https://www.loom.com/share/9f57e23cbbf74940b0dd1526d71151d2

// Naudojantis html, css ir javascript, sukurti lentelę, kuri informaciją gaudama iš input pridėtų naują informaciją pagal pavyzdį.

// Pridėti sąlygą, kuri neleistų pridėti į lentelę naujų duomenų ir išmestų įsėjimą per alert(), kol nėra nurodytą bent vieną iš trijų duomenų.

// Sukoduoti, kad paspaudus mygtuką pridėti ir pridėjus duomenis, anksčiau įrašyta informaciją į input, iš jų išsitrintų. Naudoti elemento.value = “ ” elementų pridėjimo funkcijoje.


// Papildomai:

// Sukoduoti pirmo ir paskutinio elemento ištrynimą.

// Sukoduoti, kad neleistų pridėti duomenų kol amžius mažesnis arba lygus nuliui.

// function myFunction() {
//     var table = document.getElementById("myTable");
//     var row = table.insertRow(0);
//     var cell1 = row.insertCell(0);
//     var cell2 = row.insertCell(1);
//     cell1.innerHTML = "NEW CELL1";
//     cell2.innerHTML = "NEW CELL2";
//   }

//INPUT
var input1 = document.getElementById("vardas")
var input2 = document.getElementById("pavardė")
var input3 = document.getElementById("amžius")

//BUTTONS
var add = document.getElementById("add")
var delfirst = document.getElementById("del first")
var dellast = document.getElementById("del last")

//ROW
var names = document.getElementById("names")
var surnames = document.getElementById("surnames")
var age = document.getElementById("age")

add.addEventListener("click", function(){

    if(input1.value){
        var p = document.createElement("p")
        p.innerText = input1.value
        names.append(p)
        input1.value = ""
    } else {
        alert("Užpildykite laukelį")
    }

    if(input2.value){
        var p = document.createElement("p")
        p.innerText = input2.value
        surnames.append(p)
        input2.value = ""
    } else {
        alert("Užpildykite laukelį")
    }

    if(input3.value){
        var p = document.createElement("p")
        p.innerText = input3.value
        age.append(p)
        input3.value = ""
    } else {
        alert("Užpildykite laukelį")
    }
})

delfirst.removeEventListener("click", function(){
    var row = document.getElementsById("row")

    if(row){
        row.remove()
    } else {
        alert("Nebėra ką trinti")
    }
})

dellast.addEventListener("click", function(){

})