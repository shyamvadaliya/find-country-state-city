## Install

```
$ npm install find-country-state-city
```

## Usage
### Country
```
const findCountryStateCity = require('find-country-state-city');

// If Get All Country that Call below method
findCountryStateCity.getCountry();

// If Get Specific Country that Call below method
findCountryStateCity.getCountry('india');

output return a country array
    "name": "India",
    "code": "IN",
    "id": 103,
    "phone": 91,
    "symbol": "₹",
    "capital": "New Delhi",
    "currency": "INR",
    "continent": "Asia",
    "continent_code": "AS",
    "alpha_3": "IND"
```

### State
```
const findCountryStateCity = require('find-country-state-city');

// If Get All State that Call below method
findCountryStateCity.getState();

// If Get Specific Country State that Call below method
findCountryStateCity.getState("IN"); // Country Code

output return a state array
    name: 'Rajasthan',
    isoCode: 'RJ',
    countryCode: 'IN',
    latitude: '27.02380360',
    longitude: '74.21793260'
```

### Get Cities
```
const findCountryStateCity = require('find-country-state-city');

// If Get All State that Call below method
findCountryStateCity.getCities();

// If Get Specific City that Call below method
findCountryStateCity.getCities('Delhi');

output return a city array
    "name": "Delhi",
    "stateCode": "DL",
    "countryCode": "IN",
    "latitude": "28.70405920",
    "longitude": "77.10249020"
```

### Get Cities Of Country
```
const findCountryStateCity = require('find-country-state-city');

// Get a list of cities belonging to a specific state that Call below method
findCountryStateCity.getCitiesOfCountry("IN");

output return a city array
    "name": "Gondal",
    "stateCode": "GJ",
    "countryCode": "IN",
    "latitude": "21.96074000",
    "longitude": "70.80255000"
```


### Get Cities Of State
```
const findCountryStateCity = require('find-country-state-city');

// Get a list of cities belonging to a specific state and country that Call below method
findCountryStateCity.getCitiesOfState("IN", "GJ");

output return a city array
    "name": "Gondal",
    "stateCode": "GJ",
    "countryCode": "IN",
    "latitude": "21.96074000",
    "longitude": "70.80255000"
```