document.addEventListener("DOMContentLoaded", function() {
    // Handle login button click
    const loginButton = document.getElementById("login-button");
    if (loginButton) {
        loginButton.addEventListener("click", function() {
            window.location.href = "login.html";
        });
    }

    // Handle "Book Now" button click
    const bookNowButton = document.getElementById("book-now-button");
    if (bookNowButton) {
        bookNowButton.addEventListener("click", function() {
            window.location.href = "book.html";
        });
    }

    // Handle login form submission
    const loginForm = document.getElementById("login-form");
    if (loginForm) {
        loginForm.addEventListener("submit", function(event) {
            event.preventDefault();
            
            const formData = new FormData(loginForm);
            const data = {};
            
            formData.forEach((value, key) => {
                data[key] = value;
            });

            fetch("YOUR_LOGIN_ENDPOINT", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
            .then(response => response.json())
            .then(result => {
                console.log("Login success:", result);
                alert("Login successful!");
                // Redirect or perform additional actions after login
            })
            .catch(error => {
                console.error("Login error:", error);
                alert("There was an error logging in.");
            });
        });
    }

    // Handle booking form submission
    const bookingForm = document.getElementById("booking-form");
    if (bookingForm) {
        bookingForm.addEventListener("submit", function(event) {
            event.preventDefault();
            
            const formData = new FormData(bookingForm);
            const data = {};
            
            formData.forEach((value, key) => {
                data[key] = value;
            });

            fetch("YOUR_BOOKING_ENDPOINT", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
            .then(response => response.json())
            .then(result => {
                console.log("Booking success:", result);
                alert("Booking successful!");
                // Redirect or perform additional actions after booking
            })
            .catch(error => {
                console.error("Booking error:", error);
                alert("There was an error booking your trip.");
            });
        });
    }

    // Country tourist data (existing content)
    const touristData = {
        "USA": {
            "visitors": 1000000,
            "topAttractions": ["Statue of Liberty", "Grand Canyon", "Disneyland"]
        },
        "France": {
            "visitors": 900000,
            "topAttractions": ["Eiffel Tower", "Louvre Museum", "Notre-Dame Cathedral"]
        },
        // Add more countries as needed
    };

    console.log(touristData);

    // Example of using the tourist data
    const displayTouristData = (country) => {
        if (touristData[country]) {
            const data = touristData[country];
            console.log(`Country: ${country}`);
            console.log(`Visitors: ${data.visitors}`);
            console.log(`Top Attractions: ${data.topAttractions.join(", ")}`);
        } else {
            console.log(`No data available for ${country}`);
        }
    };

    // Example usage
    displayTouristData("USA");
    displayTouristData("France");
});
