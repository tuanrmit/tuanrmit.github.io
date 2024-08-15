document.addEventListener("DOMContentLoaded", function () {
    
    // get the first form
    const form = document.getElementById("registrationForm");

    function checkInputAtSubmit(e) {
        let hasError = false;
        let errorMessage = "";

        // Check for empty fields
        const inputs = form.querySelectorAll('input');
        inputs.forEach(input => {
            if(input.value === "") {
                errorMessage += `Please fill out the ${input.name} field\n`;
                hasError = true;
                input.classList.add("error");
            }


        });

        if(hasError) {
            alert(errorMessage);
            e.preventDefault();
        } else {
            alert("Form is successfully submitted.");
        }

    }
    form.addEventListener('submit', checkInputAtSubmit);
});