const searchForm = document.getElementById("searchForm");
const trainResults = document.getElementById("trainResults");

searchForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const from = document.getElementById("from").value;
    const to = document.getElementById("to").value;
    const date = document.getElementById("journeyDate").value;
    const travelClass = document.getElementById("travelClass").value;

    const trains = [
        {
            name: "Rajdhani Express",
            number: "12951",
            departure: "16:55",
            arrival: "08:35",
            fare: 1200
        },
        {
            name: "Shatabdi Express",
            number: "12009",
            departure: "06:00",
            arrival: "12:30",
            fare: 900
        },
        {
            name: "Duronto Express",
            number: "12267",
            departure: "23:00",
            arrival: "15:30",
            fare: 1100
        },
        {
            name: "Vande Bharat Express",
            number: "20901",
            departure: "06:10",
            arrival: "14:25",
            fare: 1500
        }
    ];

    trainResults.innerHTML = `
        <h3 style="margin-top:25px;">
            Available Trains: ${from} → ${to}
        </h3>
    `;

    trains.forEach(train => {
        trainResults.innerHTML += `
            <div class="train-card">
                <h3>${train.name}</h3>

                <p><strong>Train No:</strong> ${train.number}</p>
                <p><strong>Departure:</strong> ${train.departure}</p>
                <p><strong>Arrival:</strong> ${train.arrival}</p>
                <p><strong>Class:</strong> ${travelClass}</p>
                <p><strong>Fare:</strong> ₹${train.fare}</p>

                <button onclick="selectTrain('${train.name}')">
                    Select Train
                </button>
            </div>
        `;
    });
});

function selectTrain(trainName) {
    document.getElementById("train").value = trainName;

    document.getElementById("booking").scrollIntoView({
        behavior: "smooth"
    });
}

const bookingForm = document.getElementById("bookingForm");

bookingForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("passengerName").value;
    const age = document.getElementById("age").value;
    const gender = document.getElementById("gender").value;
    const train = document.getElementById("train").value;
    const passengers = document.getElementById("passengers").value;

    const pnr = Math.floor(1000000000 + Math.random() * 9000000000);

    const baseFare = 1000;
    const totalFare = baseFare * passengers;

    document.getElementById("confirmation").style.display = "block";

    document.getElementById("ticket").innerHTML = `
        <div class="ticket">
            <h3>🎫 Ticket Confirmed</h3>

            <p><strong>PNR:</strong> ${pnr}</p>
            <p><strong>Passenger:</strong> ${name}</p>
            <p><strong>Age:</strong> ${age}</p>
            <p><strong>Gender:</strong> ${gender}</p>
            <p><strong>Train:</strong> ${train}</p>
            <p><strong>Passengers:</strong> ${passengers}</p>
            <p><strong>Total Fare:</strong> ₹${totalFare}</p>

            <p style="margin-top:15px;color:green;">
                Your reservation has been successfully created.
            </p>
        </div>
    `;

    document.getElementById("confirmation").scrollIntoView({
        behavior: "smooth"
    });
});
