import { makeObservable, observable, action, runInAction } from "mobx";
import flightData from "../database/flightData";

export class FlightDataStore {
  selectedFlight = "";

  set = (key, value) => {
    runInAction(() => {
      this[key] = value;
    });
  };

  // Generation
  generateFlightNumber = () => {
    let flightNumber = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" + "0123456789";
    for (let i = 1; i <= 6; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      flightNumber += str.charAt(char);
    }
    return flightNumber;
  };

  generateLocations = () => {
    let countryList = [
      "Afghanistan",
      "Albania",
      "Algeria",
      "Andorra",
      "Angola",
      "Antigua & Deps",
      "Argentina",
      "Armenia",
      "Australia",
      "Austria",
      "Azerbaijan",
      "Bahamas",
      "Bahrain",
      "Bangladesh",
      "Barbados",
      "Belarus",
      "Belgium",
      "Belize",
      "Benin",
      "Bhutan",
      "Bolivia",
      "Bosnia Herzegovina",
      "Botswana",
      "Brazil",
      "Brunei",
      "Bulgaria",
      "Burkina",
      "Burundi",
      "Cambodia",
      "Cameroon",
      "Canada",
      "Cape Verde",
      "Central African Rep",
      "Chad",
      "Chile",
      "China",
      "Colombia",
      "Comoros",
      "Congo",
      "Congo {Democratic Rep}",
      "Costa Rica",
      "Croatia",
      "Cuba",
      "Cyprus",
      "Czech Republic",
      "Denmark",
      "Djibouti",
      "Dominica",
      "Dominican Republic",
      "East Timor",
      "Ecuador",
      "Egypt",
      "El Salvador",
      "Equatorial Guinea",
      "Eritrea",
      "Estonia",
      "Ethiopia",
      "Fiji",
      "Finland",
      "France",
      "Gabon",
      "Gambia",
      "Georgia",
      "Germany",
      "Ghana",
      "Greece",
      "Grenada",
      "Guatemala",
      "Guinea",
      "Guinea-Bissau",
      "Guyana",
      "Haiti",
      "Honduras",
      "Hungary",
      "Iceland",
      "India",
      "Indonesia",
      "Iran",
      "Iraq",
      "Ireland {Republic}",
      "Israel",
      "Italy",
      "Ivory Coast",
      "Jamaica",
      "Japan",
      "Jordan",
      "Kazakhstan",
      "Kenya",
      "Kiribati",
      "Korea North",
      "Korea South",
      "Kosovo",
      "Kuwait",
      "Kyrgyzstan",
      "Laos",
      "Latvia",
      "Lebanon",
      "Lesotho",
      "Liberia",
      "Libya",
      "Liechtenstein",
      "Lithuania",
      "Luxembourg",
      "Macedonia",
      "Madagascar",
      "Malawi",
      "Malaysia",
      "Maldives",
      "Mali",
      "Malta",
      "Marshall Islands",
      "Mauritania",
      "Mauritius",
      "Mexico",
      "Micronesia",
      "Moldova",
      "Monaco",
      "Mongolia",
      "Montenegro",
      "Morocco",
      "Mozambique",
      "Myanmar, {Burma}",
      "Namibia",
      "Nauru",
      "Nepal",
      "Netherlands",
      "New Zealand",
      "Nicaragua",
      "Niger",
      "Nigeria",
      "Norway",
      "Oman",
      "Pakistan",
      "Palau",
      "Panama",
      "Papua New Guinea",
      "Paraguay",
      "Peru",
      "Philippines",
      "Poland",
      "Portugal",
      "Qatar",
      "Romania",
      "Russian Federation",
      "Rwanda",
      "St Kitts & Nevis",
      "St Lucia",
      "Saint Vincent & the Grenadines",
      "Samoa",
      "San Marino",
      "Sao Tome & Principe",
      "Saudi Arabia",
      "Senegal",
      "Serbia",
      "Seychelles",
      "Sierra Leone",
      "Singapore",
      "Slovakia",
      "Slovenia",
      "Solomon Islands",
      "Somalia",
      "South Africa",
      "South Sudan",
      "Spain",
      "Sri Lanka",
      "Sudan",
      "Suriname",
      "Swaziland",
      "Sweden",
      "Switzerland",
      "Syria",
      "Taiwan",
      "Tajikistan",
      "Tanzania",
      "Thailand",
      "Togo",
      "Tonga",
      "Trinidad & Tobago",
      "Tunisia",
      "Turkey",
      "Turkmenistan",
      "Tuvalu",
      "Uganda",
      "Ukraine",
      "United Arab Emirates",
      "United Kingdom",
      "United States",
      "Uruguay",
      "Uzbekistan",
      "Vanuatu",
      "Vatican City",
      "Venezuela",
      "Vietnam",
      "Yemen",
      "Zambia",
      "Zimbabwe",
    ];
    let rand1 = Math.floor(Math.random() * countryList.length);
    let rand2 = Math.floor(Math.random() * countryList.length);
    while (rand1 === rand2) {
      rand2 = Math.floor(Math.random() * countryList.length);
    }
    let randOrigin = countryList[rand1];
    let randDestination = countryList[rand2];

    const locations = { origin: randOrigin, destination: randDestination };
    return locations;
  };

  generateDate = () => {};

  generateTimes = () => {};

  fillFlights = () => {
    while (flightData.length < 100) {
      for (let i = 0; i < 100; i++) {
        let fn = this.generateFlightNumber();
        let loc = this.generateLocations();
        let or = loc.origin;
        let des = loc.destination;
        let flight = {
          flightNumber: fn,
          origin: or,
          destination: des,
        };
        flightData.push(flight);
      }
      console.log(flightData);
    }
  };

  // Getters
  getFlight = (id) => {
    for (let i = 0; i < flightData.length; i++) {
      if (id == flightData[i].flightNumber) {
        //flight found
        const flight = {
          flightNumber: flightData[i].flightNumber,
          origin: flightData[i].origin,
          destination: flightData[i].destination,
        };
        return flight;
      }
    }
  };

  constructor() {
    makeObservable(this, {
      selectedFlight: observable,
      set: action,
    });
  }
}
export const FlightStore = new FlightDataStore();
