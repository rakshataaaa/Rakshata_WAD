let selectedIndex = -1;

// Load data on start
window.onload = function () {
    displayData();
};

function getData() {
    return JSON.parse(localStorage.getItem("students")) || [];
}

function saveData(data) {
    localStorage.setItem("students", JSON.stringify(data));
}

function getFormData() {
    let gender = document.querySelector('input[name="gender"]:checked');
    return {
        name: document.getElementById("name").value,
        roll: document.getElementById("rollno").value,
        classs: document.getElementById("class").value,
        gender: gender ? gender.value : ""
    };
}

// CREATE
function addStudent() {
    let data = getData();
    let student = getFormData();
    data.push(student);
    saveData(data);
    displayData();
}

// READ
function displayData() {
    let data = getData();
    let table = document.getElementById("tableBody");
    table.innerHTML = "";

    data.forEach((s, index) => {
        table.innerHTML += `
            <tr>
                <td>${s.name}</td>
                <td>${s.roll}</td>
                <td>${s.classs}</td>
                <td>${s.gender}</td>
                <td>
                    <button onclick="editStudent(${index})">Edit</button>
                    <button onclick="deleteStudent(${index})">Delete</button>
                </td>
            </tr>
        `;
    });
}

// UPDATE (load data to form)
function editStudent(index) {
    let data = getData();
    let s = data[index];

    document.getElementById("name").value = s.name;
    document.getElementById("rollno").value = s.roll;
    document.getElementById("class").value = s.classs;

    document.querySelector(`input[name="gender"][value="${s.gender}"]`).checked = true;

    selectedIndex = index;
}

// UPDATE (save changes)
function updateStudent() {
    let data = getData();
    data[selectedIndex] = getFormData();
    saveData(data);
    displayData();
    selectedIndex = -1;
}

// DELETE
function deleteStudent(index) {
    let data = getData();
    data.splice(index, 1);
    saveData(data);
    displayData();
}