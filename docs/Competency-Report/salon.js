// Salon object literal
const salon = {
  name: "Happy Paws Pet Salon",
  hours: {
    open: "9:00 AM",
    close: "6:00 PM"
  },
  phone: "555-123-4567",
  address: {
    street: "123 Paw Street",
    city: "San Diego",
    state: "CA",
    zip: "92101"
  }
};

// Function to display salon info
function displaySalonInfo() {
  const info = document.getElementById("salonInfo");

  info.textContent =
    salon.name + " | Hours: " +
    salon.hours.open + " - " + salon.hours.close +
    " | Phone: " + salon.phone +
    " | Address: " +
    salon.address.street + ", " +
    salon.address.city + ", " +
    salon.address.state + " " +
    salon.address.zip;
}

// Call function
displaySalonInfo();

// ===============
// Dark Mode
// ===============

$("#changeModeButton").click(function(){
    $("body").toggleClass("dark-mode");
});