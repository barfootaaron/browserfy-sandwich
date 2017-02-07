"use strict";

// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  var cheesePrices = {
  	"noCheese": 0.00,
  	"american": 1.50,
  	"cheddar": 1.30,
  	"provolone": 1.15,
  	"pepperjack": 2.50
  };

  // Augment the original object with another method
  maker.addCheese = function(cheese) {
  	console.log(cheesePrices[cheese]);
    return cheesePrices[cheese];
  };

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker || {});