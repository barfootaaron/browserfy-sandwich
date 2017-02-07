"use strict";

// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  var breadPrices = {
  	"noBread": 0.00,
  	"wheat": 1.50,
  	"white": 1.30,
  	"sourdough": 1.15,
  	"pita": 2.50
  };

  // Augment the original object with another method
  maker.addBread = function(bread) {
  	console.log(breadPrices[bread]);
    return breadPrices[bread];
  };

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker || {});