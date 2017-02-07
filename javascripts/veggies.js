"use strict";

// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  var veggiesPrices = {
  	"noVeggies": 0.00,
  	"lettuce": 1.50,
  	"tomato": 1.30,
  	"olives": 1.15,
  	"spinach": 2.50
  };

  // Augment the original object with another method
  maker.addVeggies = function(veggies) {
  	console.log(veggiesPrices[veggies]);
    return veggiesPrices[veggies];
  };

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker || {});