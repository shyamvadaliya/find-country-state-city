"use strict";

const countryJSON = require('./country.json');
function getCountry(name) {
    if (!name) {
        return countryJSON;
    } else {
        let newArray = countryJSON.filter(function (el) {
            return el.name.toLocaleLowerCase() === name.toLocaleLowerCase()
        });
        return newArray;
    }
}


function getState(name) {
    if (!name) {
        return countryJSON;
    } else {
        let newArray = countryJSON.filter(function (el) {
            return el.name.toLocaleLowerCase() === name.toLocaleLowerCase()
        });
        return newArray;
    }
}

module.exports.getCountry = getCountry;
module.exports.getState = getState;