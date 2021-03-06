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
Example:
Calculate the Area of a Rectangle

 */

//variables
    var width;          //define variables width and height
    var height;         //this will make it loop the first time
    var area;           //variable to store results of function

//functions
    function calculateArea(w, h) {  //use function to determine area
        return w * h;               //calculate are by multiplying variables
    }

//main body
    //prompt user for width, using while statement, width = "" to begin

    width = prompt("Enter the width of a rectangle");
    while (width === "") {
        width = prompt("Please, enter the width of the rectangle: ");
    }

    //prompt user for height, using while statement, height = "" to begin
    height = prompt("Enter the height of the rectangle");
    while (height === "") {
        height = prompt("Please enter the height of the rectangle: ");
    }

    //invoke function to determine area and store value in variable
    area = calculateArea(Number(width), Number(height));

    //display the results within the beloved console log
    console.log("The area of the rectangle is " + (area) + ".");

















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

//clear some space on the console log
console.log("\n");

//variables

    var radius; //Radius of circle, input by user
    var result; //result of the funtion called below (circumference)



//functions

    //define the Function to determine the circumference of the circle
    function circum(radInput) {
        //calculate circumference and round to nearest whole number and return value of function to main script
        return Math.ceil(2 * 3.1415 * radInput);;
    }


//body

    // Display the intentions of the script within the console log
    console.log("This script will determine the circumference of a circle, the user will input the radius.");


    // prompt the user to input the radius of the circle and store the user's input within the variable radius
    radius = prompt("Please enter the radius of the circle (in inches): ");


    // Validate the user input, until they enter something
    while (radius === "") {
        radius = prompt("You need to enter a NUMBER, please enter the radius: ");

    }
    //Thank the user for their input
    console.log("Thank you. You entered " + (radius) + ".");


    //invoke or call the function radius
    result = circum(radius);


    //display the radius and result within a statement
    console.log("A circle with a radius of " + (radius) + " inches will have a circumference of almost " + (result) + " inches.");







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


//clear some space on the console log
console.log("\n");


//variables
    var victimWeight;   //weight of victim as input by user
    var totalStings;    //total number of stings required to be fatal, as calculated by function


//functions
    function beeStings(victimWeight) {  //beeStings will return the totalStings value to the main program
        var numStings = 8.666666667;        //function variable for number of stings per pound required to kill an animal
        return Math.ceil(victimWeight * numStings);    //return the totalStings to the program
    }


//body

    //Inform user of script intentions
    console.log("This script will calculate the number of bee stings required to kill an animal, based on the weight of the animal.");

    //prompt user for weight of animal
    victimWeight = prompt("Enter the weight (in pounds) of the victim: ");

    //Validate the user's input
    while (victimWeight === "") {   //Respond and require proper input from the user
        victimWeight = prompt("Stop fooling around, enter the weight of the victim: ");
    }

    //invoke the function to calculate the result
    totalStings = beeStings(victimWeight);

    //display the results of this portion of the program
    console.log("For a " + (victimWeight) + " lb animal, it would require " + (totalStings) + " bee stings to be fatal.");













