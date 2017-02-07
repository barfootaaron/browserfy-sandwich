"use strict";

// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  var meatPrices = {
  	"noMeat": 0.00,
  	"turkey": 1.50,
  	"ham": 1.30,
  	"salami": 1.15,
  	"mysterymeat": 2.50
  };

  // Augment the original object with another method
  maker.addMeat = function(meat) {
  	console.log(meatPrices[meat]);
    return meatPrices[meat];
  };

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker || {});