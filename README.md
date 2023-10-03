## Install

```
$ npm install find-country-state-city
```

## Usage
```
const findCountryStateCity = require('find-country-state-city');

// If Get All Country that Call below method
findCountryStateCity.getCountry();

// If Get Specific Country that Call below method
findCountryStateCity.getCountry('india');

output
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