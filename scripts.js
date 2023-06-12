const cityAirports = {
    "Casablanca": "CMN",
    "Rabat": "RBT",
    "New York": "NYC",
    "Los Angeles": "LAX",
    "Chicago": "ORD",
    "London": "LHR",
    "Paris": "CDG",
    "Tokyo": "HND",
    "Sydney": "SYD",
    "Toronto": "YYZ",
    "Rome": "FCO",
    "Berlin": "TXL",
    "Madrid": "MAD",
    "Moscow": "SVO",
    "Beijing": "PEK",
    "Cairo": "CAI",
    "Dubai": "DXB",
    "Mumbai": "BOM",
    "Bangkok": "BKK",
    "Singapore": "SIN",
    "Istanbul": "IST",
    "Rio de Janeiro": "GIG",
    "Buenos Aires": "EZE",
    "Cape Town": "CPT",
    "Amsterdam": "AMS",
    "Stockholm": "ARN",
    "Barcelona": "BCN",
    "Dublin": "DUB",
    "Athens": "ATH",
    "Prague": "PRG",
    "Vienna": "VIE",
    "Seoul": "ICN",
    "Helsinki": "HEL",
    "Lisbon": "LIS",
    "Wellington": "WLG",
    "Oslo": "OSL",
    "Copenhagen": "CPH",
    "Brussels": "BRU",
    "Warsaw": "WAW",
    "Budapest": "BUD",
    "Zurich": "ZRH",
    "Montreal": "YUL",
    "Vancouver": "YVR",
    "San Francisco": "SFO",
    "Miami": "MIA",
    "Dubrovnik": "DBV",
    "Reykjavik": "KEF",
    "Nairobi": "NBO",
    "Marrakech": "RAK",
    "Cusco": "CUZ",
    "Auckland": "AKL",
    "Bali": "DPS",
    "Munich": "MUC",
    "Venice": "VCE",
    "Florence": "FLR",
    // Add more cities and airport codes as needed
  };

  
  function toggleRoundTrip(roundTrip) {
    var returnDateInput = document.getElementById("return-date");
  
    if (roundTrip) {
      returnDateInput.style.display = "block";
    } else {
      returnDateInput.style.display = "none";
    }
  }
  

  function showFlightDetails() {
    const fromAirport = document.getElementById("from-airport").value.toLowerCase();
    const toAirport = document.getElementById("to-airport").value.toLowerCase();
    const departureDate = document.getElementById("departure-date").value;
    const returnDate = document.getElementById("return-date").value;
  
    // Perform validation
    if (fromAirport.trim() === '' || toAirport.trim() === '') {
      showError("Please provide both departure and destination cities.");
      return;
    }
  
    const lowercaseCityAirports = {};
    for (const city in cityAirports) {
      lowercaseCityAirports[city.toLowerCase()] = cityAirports[city];
    }
  
    if (!Object.keys(lowercaseCityAirports).includes(fromAirport.trim())) {
      showError("Invalid departure city.");
      return;
    }
  
    if (!Object.keys(lowercaseCityAirports).includes(toAirport.trim())) {
      showError("Invalid destination city.");
      return;
    }
  
    if (departureDate === '') {
      showError("Please select a departure date.");
      return;
    }
  
    if (returnDate === '' && document.getElementById("return-date").style.display !== "none") {
      showError("Please select a return date.");
      return;
    }
  
    // Clear any previous error messages
    clearError();
  
    // Proceed with flight details display
    document.getElementById("modal-from").textContent = lowercaseCityAirports[fromAirport];
    document.getElementById("modal-to").textContent = lowercaseCityAirports[toAirport];
    document.getElementById("modal-departure-date").textContent = departureDate;
  
    const modal = new bootstrap.Modal(document.getElementById("flightDetailsModal"));
    modal.show();
  }
  
  function showError(errorMessage) {
    const errorElement = document.getElementById("error-message");
    errorElement.textContent = errorMessage;
    errorElement.style.display = "block";
  }
  
  function clearError() {
    const errorElement = document.getElementById("error-message");
    errorElement.textContent = "";
    errorElement.style.display = "none";
  }

  function receiveConfirmation() {
    const fromAirport = document.getElementById("from-airport").value.toLowerCase();
    const toAirport = document.getElementById("to-airport").value.toLowerCase();
    const departureDate = document.getElementById("departure-date").value;
    const returnDate = document.getElementById("return-date").value;
    const pilotSelection = document.getElementById("pilot-selection").value;
    const planeSelection = document.getElementById("plane-selection").value;
    const userName = document.getElementById("user-name").value; // Retrieve user's name
  
    // Create the flight details text with the user's name
    const flightDetailsText = `Thank you for choosing LuxuryFlight:
      Name: ${userName}
      From: ${fromAirport}
      To: ${toAirport}
      Departure Date: ${departureDate}
      Return Date: ${returnDate}
      Time: 8:50pm
      Pilot: ${pilotSelection}
      Plane: ${planeSelection}
      `; // Include the user's name
  
    // Open a new window or tab with the flight details
    const newWindow = window.open("", "_blank");
    newWindow.document.write(`<pre>${flightDetailsText}</pre>`);
    newWindow.document.close();
  
    // Close the flight confirmation modal
    const confirmationModal = document.getElementById("flightDetailsModal"); // Update modal ID if necessary
    const confirmationModalInstance = bootstrap.Modal.getInstance(confirmationModal);
    confirmationModalInstance.hide();
  }

  function openModal(pilotName) {
    let modalContent = '';
  
    switch (pilotName) {
      case 'Reynolds':
        modalContent = "Captain Reynolds is an experienced pilot with a remarkable track record. With years of flying under his belt, he brings a wealth of knowledge and expertise to every flight. Known for his calm demeanor and exceptional decision-making skills, Captain Reynolds ensures a smooth and safe journey for all passengers on board.";
        break;
      case 'Max':
        modalContent = "Captain Max is a dynamic and passionate pilot who loves to push the boundaries of aviation. With his adventurous spirit and innovative approach, he constantly strives to deliver a unique and unforgettable flying experience. Captain Max's enthusiasm for flying is infectious, making every trip an exciting adventure in the skies.";
        break;
      case 'Emily':
        modalContent = "Captain Emily is a highly skilled pilot known for her exceptional precision and attention to detail. With a strong focus on safety and efficiency, she ensures that every flight is executed with the utmost care and professionalism. Captain Emily's commitment to excellence creates a sense of confidence and tranquility among passengers, making their journey a truly enjoyable one.";
        break;
      default:
        modalContent = 'No information available for this pilot.';
        break;
    }
  
    // Update the modal content
    document.getElementById('modal-pilot-info').textContent = modalContent;
  
    // Show the modal
    const modal = new bootstrap.Modal(document.getElementById('pilotModal'));
    modal.show();
  }

