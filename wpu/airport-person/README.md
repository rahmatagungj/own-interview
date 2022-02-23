# Airport Person
Basicly a person will go to other city (ex: Indonesia), and then go to the airport for taking a ticket.
You need to write a program to help the person move to another city by creating an airport system with the following rules:
- The airport system has a list of cities, and each city has a list of flights.
- Each flight has a destination city and a price.
- The person can only move to the next city by paying the price of the flight.
- Airport must have a ticket office to making the payment and give the ticket to the person.

### Input
```js
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
```

### Output
```js
Budi has arrived at CGK with International flight class Economy and Garuda Indonesia Airline.
```

## Instructions
1. You need to complete the function answer on `airportPerson.js` file.
2. The function `airportPerson` should return a string same as the output.
3. Run the tests to see the results `node run`