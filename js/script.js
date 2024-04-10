// Copyright (c) 2024 Kai Nguyen All rights reserved
//
// Created by: Kai Nguyen
// Created on: Mar 2024
// This file contains the JS functions for index.html
"use strict"

function findCelciusClicked() {
  // Use parseFloat so the user can input a decimal
  const tempInput = parseFloat(document.getElementById("temp-entered").value)
  // Create a variable named "celsius" which calculates the conversion formula and add decimals to the end so the system will use the fraction as a float instead of an integer
  const celcius = (tempInput - 32) * 5.0/9.0
  // Ouput the answer to the user in the class "answer"
  document.getElementById("answer").innerHTML = "If the temperature in fahrenheit is " + tempInput + "<sup>o</sup>F" + ", then the temperature in celcius is " + celcius.toFixed(3) + "<sup>o</sup>C"
}
