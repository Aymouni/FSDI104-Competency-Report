// Constructor
function Pet(name, age, breed, gender, service) {
    this.name = name;
    this.age = age;
    this.breed = breed;
    this.gender = gender;
    this.service = service;
}

// Pets array
let pets = [];

// Static pets
let pet1 = new Pet("Max", 7, "Mixed", "Male", "Grooming");
let pet2 = new Pet("Luna", 4, "Mixed", "Female", "Nail Clipping");
let pet3 = new Pet("Buddy", 6, "Mixed", "Male", "Ear Cleaning");

// Add static pets
pets.push(pet1, pet2, pet3);

// Register new pet
function registerPet() {

    let name = document.getElementById("txtName").value;
    let age = document.getElementById("txtAge").value;
    let breed = document.getElementById("txtBreed").value;
    let gender = document.getElementById("txtGender").value;
    let service = document.getElementById("txtService").value;

    if (name === "" || age === "" || breed === "" || gender === "" || service === "") {
        alert("Please complete all fields.");
        return;
    }

    let newPet = new Pet(name, age, breed, gender, service);
    pets.push(newPet);

    displayPets();

    document.getElementById("petForm").reset();
}

// Display pets
function displayPets() {

    let tableBody = document.getElementById("petsTableBody");
    tableBody.innerHTML = "";

    for (let i = 0; i < pets.length; i++) {

        let row = `
            <tr>
                <td>${pets[i].name}</td>
                <td>${pets[i].age}</td>
                <td>${pets[i].breed}</td>
                <td>${pets[i].gender}</td>
                <td>${pets[i].service}</td>
                <td>
                    <button class="btn btn-danger btn-sm" onclick="deletePet(${i})">
                        Delete
                    </button>
                </td>
            </tr>
        `;

        tableBody.innerHTML += row;
    }
}

// Delete pet
function deletePet(index) {
    pets.splice(index, 1);
    displayPets();
}

// Load pets when page loads
window.onload = displayPets;

// ===============
// Dark Mode
// ===============

$("#changeModeButton").click(function(){
    $("body").toggleClass("dark-mode");
});