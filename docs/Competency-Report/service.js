// Constructor
function Service(name, description, price) {
    this.name = name;
    this.description = description;
    this.price = price;
}

const services = [];

$(document).ready(function () {

    $("#btnRegister").click(function () {

        const name = $("#txtService").val().trim();
        const description = $("#txtDescription").val().trim();
        const price = $("#txtPrice").val().trim();


        let isValid = true;

        // Reset styles first
        $("input").css({
            "border": "",
            "background-color": "",
            "box-shadow": ""
        });

        // Validation
        if (name === "") {
            $("#txtService").css({
                "border": "2px solid #dc3545",
                "background-color": "#ffe6e6",
                "box-shadow": "0 0 5px rgba(220,53,69,0.5)"
            });
            isValid = false;
        }

        if (description === "") {
            $("#txtDescription").css({
                "border": "2px solid #dc3545",
                "background-color": "#ffe6e6",
                "box-shadow": "0 0 5px rgba(220,53,69,0.5)"
            });
            isValid = false;
        }

        if (price === "") {
            $("#txtPrice").css({
                "border": "2px solid #dc3545",
                "background-color": "#ffe6e6",
                "box-shadow": "0 0 5px rgba(220,53,69,0.5)"
            });
            isValid = false;
        }
        
        // If valid
        if (isValid) {

            const newService = new Service(name, description, price);
            services.push(newService);

            console.log("Service Registered:", newService);

            // Reset form
            $("#serviceForm")[0].reset();

            // Remove all styling
            $("input").css({
                "border": "",
                "background-color": "",
                "box-shadow": ""
            });
        }
        
    });

});

// ===============
// Dark Mode
// ===============

$("#changeModeButton").click(function(){
    $("body").toggleClass("dark-mode");
    
});