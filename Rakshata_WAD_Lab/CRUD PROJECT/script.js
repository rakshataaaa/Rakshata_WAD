let Name;
let Class;
let Rollno;
let newRow;

let cell1, cell2, cell3, cell4;


window.onload = function () {
    let data = JSON.parse(localStorage.getItem("students")) || [];
    let table = document.getElementById("tablebody");

    data.forEach(student => {
        addRowToTable(student.Name, student.Class, student.Rollno);
    });
};


document.getElementById("submit").onclick = function () {
    Name = document.getElementById("Name").value;
    Class = document.getElementById("Class").value;
    Rollno = document.getElementById("Rollno").value;

    addRowToTable(Name, Class, Rollno);

    saveToLocalStorage(Name, Class, Rollno);

   
    document.getElementById("Name").value = "";
    document.getElementById("Class").value = "";
    document.getElementById("Rollno").value = "";
};


function addRowToTable(Name, Class, Rollno) {
    let table = document.getElementById("tablebody");
    let newRow = table.insertRow();

    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    let cell3 = newRow.insertCell(2);
    let cell4 = newRow.insertCell(3);

    cell1.textContent = Name;
    cell2.textContent = Class;
    cell3.textContent = Rollno;

    cell4.innerHTML =
        "<button onclick='editRow(this)'>Edit</button> " +
        "<button onclick='deleteRow(this)'>Delete</button>";
}


function saveToLocalStorage(Name, Class, Rollno) {
    let data = JSON.parse(localStorage.getItem("students")) || [];

    data.push({ Name, Class, Rollno });

    localStorage.setItem("students", JSON.stringify(data));
}


function updateLocalStorage() {
    let table = document.getElementById("tablebody");
    let data = [];

    for (let i = 0; i < table.rows.length; i++) {
        let row = table.rows[i];
        data.push({
            Name: row.cells[0].innerHTML,
            Class: row.cells[1].innerHTML,
            Rollno: row.cells[2].innerHTML
        });
    }

    localStorage.setItem("students", JSON.stringify(data));
}


function editRow(btn) {
    let row = btn.parentNode.parentNode;

    let name = row.cells[0].innerHTML;
    let className = row.cells[1].innerHTML;
    let roll = row.cells[2].innerHTML;

    document.getElementById("Name").value = name;
    document.getElementById("Class").value = className;
    document.getElementById("Rollno").value = roll;

    row.remove();

    updateLocalStorage();
}


function deleteRow(btn) {
    let row = btn.parentNode.parentNode;
    row.remove();

    updateLocalStorage();
}