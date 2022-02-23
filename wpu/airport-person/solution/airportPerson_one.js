const Person = {
    name: "Budi",
    city: "Jakarta",
    money: 10000,
    age: 21,
    origin: "KUL", // malaysia airport
    destination: "CGK", // indonesia airport
    flightType: "International",
    flightClass: "Economy",
    flightAirline: "Garuda Indonesia",
  }
  
  let ticketPriceList = {
    "Economy": {
      "International": {
        "CGK": 8000
      },
      "Domestic": {
        "CGK": 50000
      },
    }
  }
  
  class Airport {
    constructor(destination) {
      this.destination = destination
    }
  
    getStatus() {
      return `${Person.name} has arrived at ${this.destination} with ${Person.flightType} flight class ${Person.flightClass} and ${Person.flightAirline} Airline.`
    }
  }
  
  class Plane {
    constructor(person, destination = "") {
      this.person = person
      this.destination = destination
    }
  
    flight() {
      let destinationAirport = new Airport(this.destination)
      destinationAirport.person = this.person
  
      return destinationAirport
    }
  
    getStatus() {
      return `${this.person.name} is flying to ${this.destination}`
    }
  }
  
  class Flight {
    constructor(person) {
      this.person = person
    }
  
    getFlightType() {
      return this.person.flightType
    }
  
    getFlightClass() {
      return this.person.flightClass
    }
  
    getFlightAirlines() {
      return this.person.flightAirline
    }
  
    fly() {
      let plane = new Plane(this.person, this.person.destination)
      return plane.flight()
    }
  }
  
  class TicketOffice {
    constructor(person) {
      this.person = person
    }
  
    getTicketPrice() {
      let flight = new Flight(this.person)
      let flightType = flight.getFlightType()
      let flightClass = flight.getFlightClass()
      let price = ticketPriceList[flightClass][flightType][this.person.destination]
      return price
    }
  
    onboard() {
      if (this.person.money >= this.getTicketPrice()) {
        let flyingPlane = new Flight(this.person)
        return flyingPlane
      } else {
        throw new Error(`${this.person.name} dont have enough money, need ${this.getTicketPrice()}`)
      }
    }
  }
  
  const Receptionist = (person) => {
    const ticketOffice = new TicketOffice(person)
  
    return ticketOffice
  }
  
  function airportPerson() {
     let BudiFlight = Receptionist(Person)
                        .onboard()
                        .fly()
                        .getStatus()
  
     return BudiFlight
  }
  
  // dont change code below
  exports.airportPerson = airportPerson
  exports.Person = Person
  exports.Plane = Plane
  exports.Flight = Flight
  exports.TicketOffice = TicketOffice
  exports.Receptionist = Receptionist