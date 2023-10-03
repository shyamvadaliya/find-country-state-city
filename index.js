"use strict";

const countryJSON = require('./assets/country.json');
const stateJSON = require('./assets/state.json');
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


function getState(code) {
    if (!code) {
        return stateJSON;
    } else {
        let newArray = stateJSON.filter(function (el) {
            return el.countryCode.toLocaleLowerCase() === code.toLocaleLowerCase()
        });
        return newArray;
    }
}

module.exports.getCountry = getCountry;
module.exports.getState = getState;