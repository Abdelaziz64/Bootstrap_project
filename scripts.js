const cityAirports = {
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
  