"use strict";

const countryJSON = require('./assets/country.json');
const stateJSON = require('./assets/state.json');
const cityJSON = require('./assets/city.json');
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


const KEYS = [
	"name",
	"countryCode",
	"stateCode",
	"latitude",
	"longitude"
]
function getCities(name) {
    if (!name) {
        const result = cityJSON.map((subArr) => {
            return Object.fromEntries(KEYS.map((key, index) => [key, subArr[index]]))
        });
        return (result)
    } else {
        const result = cityJSON.map((subArr) => {
            return Object.fromEntries(KEYS.map((key, index) => [key, subArr[index]]))
        });
        let newArray = result.filter(function (el) {
            return el.name.toLocaleLowerCase() === name.toLocaleLowerCase()
        });
        return newArray;
    }
}

// Get a list of cities belonging to a specific country.
function getCitiesOfCountry(countryCode) {
    if (!countryCode) return [];

	const cityList = getCities();
	const cities = cityList.filter((value) => {
		return value.countryCode.toLocaleLowerCase() === countryCode.toLocaleLowerCase();
	});
	return cities.sort();
}

// Get a list of cities belonging to a specific state and country.
function getCitiesOfState(countryCode, stateCode) {
    if (!stateCode) return [];
	if (!countryCode) return [];

	const cityList = getCities();
	const cities = cityList.filter((value) => {
		return value.countryCode.toLocaleLowerCase() === countryCode.toLocaleLowerCase() && value.stateCode.toLocaleLowerCase() === stateCode.toLocaleLowerCase();
	});

	return cities;
}


module.exports.getCountry = getCountry;
module.exports.getState = getState;
module.exports.getCities = getCities;
module.exports.getCitiesOfCountry = getCitiesOfCountry;
module.exports.getCitiesOfState = getCitiesOfState;
