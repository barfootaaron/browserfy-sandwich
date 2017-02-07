"use strict";

// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  var condimentsPrices = {
  	"noCondiments": 0.00,
  	"mayo": 1.50,
  	"mustard": 1.30,
  	"oil": 1.15,
  	"vinegar": 2.50
  };

  // Augment the original object with another method
  maker.addCondiments = function(condiments) {
  	console.log(condimentsPrices[condiments]);
    return condimentsPrices[condiments];
  };

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker || {});