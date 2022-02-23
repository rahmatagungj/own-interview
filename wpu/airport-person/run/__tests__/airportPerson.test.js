const { airportPerson, Person, Plane, Flight, TicketOffice, Receptionist } = require('../wpu/airport-person/airportPerson')

describe("Person Object", () => {
  it("Person Object should be have name property", () => {
    expect(Person.name).toEqual('Budi')
  })

  it("Person Object should be have money property", () => {
    expect(Person.money).toEqual(10000)
  })

  it("Person Object should be have destination property", () => {
    expect(Person.destination).toEqual('CGK')
  })

  it("Person Object should be have flightType property", () => {
    expect(Person.flightType).toEqual('International')
  })
})

describe("Plane Object", () => {
  let plane
  beforeEach(() => {
    plane = new Plane(Person, Person.destination)
  })

  it("Plane Object should be have person property", () => {
    expect(plane).toBeType('object')
  })

  it("Plane Object should be have destination property", () => {
    expect(plane.destination).toEqual('CGK')
  })

  it("Plane Object should be have flight method", () => {
    expect(plane.flight).toBeType('function')
  })

  it("Plane Object should be have getStatus method", () => {
    expect(plane.getStatus).toBeType('function')
  })

  it("getStatus from Plane should be return string type", () => {
    expect(plane.getStatus()).toBeType('string')
    expect(plane.getStatus()).toEqual('Budi is flying to CGK')
  })

  it("flight method from Plane should be return Airport Object", () => {
    expect(plane.flight()).toBeType('object')
    expect(plane.flight().getStatus()).toEqual('Budi has arrived at CGK with International flight class Economy and Garuda Indonesia Airline.')
  })
})

describe("Flight Object", () => {
  let flight
  beforeEach(() => {
    flight = new Flight(Person)
  })

  it("Flight Object should be have person property", () => {
    expect(flight).toBeType('object')
  })

  it("Flight Object should be have getFlightType method", () => {
    expect(flight.getFlightType).toBeType('function')
  })

  it("getFlightType from Flight should be return string type", () => {
    expect(flight.getFlightType()).toBeType('string')
    expect(flight.getFlightType()).toEqual('International')
  })

  it("Flight Object should be have getFlightClass method", () => {
    expect(flight.getFlightClass).toBeType('function')
  })

  it("getFlightClass from Flight should be return string type", () => {
    expect(flight.getFlightClass()).toBeType('string')
    expect(flight.getFlightClass()).toEqual('Economy')
  })

  it("Flight Object should be have getFlightAirlines method", () => {
    expect(flight.getFlightAirlines).toBeType('function')
  })

  it("getFlightAirlines from Flight should be return string type", () => {
    expect(flight.getFlightAirlines()).toBeType('string')
    expect(flight.getFlightAirlines()).toEqual('Garuda Indonesia')
  })
})

describe("Receptionist Object", () => {
  it("Receptionist should be exist", () => {
    expect(Receptionist).toBeType('function')
  })

  it("Receptionist should be return object", () => {
    expect(Receptionist()).toBeType('object')
  })
})

describe("TicketOffice Object", () => {
  let ticketOffice
  beforeEach(() => {
    ticketOffice = new TicketOffice(Person)
  })

  it("TicketOffice should be exist", () => {
    expect(ticketOffice).toBeTruthy()
  })

  it("TicketOffice should be return object", () => {
    expect(ticketOffice).toBeType('object')
  })
})

describe('Airport Person', () => {
  it("airportPerson Function should be exist", () => {
    expect(airportPerson).toExist()
  })

  it("airportPerson Function should be not throw an error", () => {
    expect(() => {
      airportPerson()
    }).not().toThrowError()
  })
  
  it("airportPerson should return type string", () => {
    let output = airportPerson()
    expect(output).toBeType('string')
  })

  it("airportPerson should return: Budi has arrived at CGK with International flight class Economy and Garuda Indonesia Airline.", () => {
    let output = airportPerson()
    expect(output).toBe("Budi has arrived at CGK with International flight class Economy and Garuda Indonesia Airline.")
  })
})