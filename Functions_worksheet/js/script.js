/*
Eric Pfister
02/23/2015
SDI 1502
Section 01
Functions Worksheet

 */


/*
Activity: Functions Worksheet
(Week 4 Activities)

Comments! Each line
Givens as variables
Pass givens to function
calculations within the function
return the result to a result variable
dont forget to create the result variable
console log the result in concatenated statement
20+commits
 */







/*
Circumference
-------------
Calculate the circumference of a circle.
    Parameter(s) for function:
        Radius of the circle
    Return:
        Circumference of the circle
    Result to print to the console:
        The circumference of the circle is X
 */

var radius; //Radius of circle
var result;

// Display the intentions of the script within the console log
console.log("This script will determine the circumference of a circle, the user will input the radius.");

// prompt the user to input the radius of the circle and store the user's input within the variable radius
radius = prompt("Please enter the radius of the circle (in inches): ");

// Validate the user input with ternary statement, and prompt again or thank the user for their input
(radius=="") ? radius = prompt("You didn't enter anything, please enter the radius: ", "12"):console.log("Thank you. You entered " + (radius) + ".");

    circumference();

function circumference(radius) {
    var circ;   //Circumference of the circle


}









/*
Stung!
------
It takes 8.666666667 bee stings per pound to kill an animal. Calculate how many bee stings are needed to kill an animal
in a function
    Given:
        Victim's weight (in pounds)
    Parameter(s) for function:
        Victim's weight (in pounds)
    Return:
        Number of bee stings
    Result to print to the console:
        It takes X bee stings to kill this animal.
 */










