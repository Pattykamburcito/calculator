//Initialize variables to display results
let currentDisplay = "0"
let resultDisplay = false;

//function to append a value to the current display
function appendToDisplay(value){
    if (currentDisplay === "0" || resultDisplay){
        // If the current display is "0" or the result is already displayed, replace it with the new value
        currentDisplay = value;
        //otherwise, concatenate the  new value to the current display
    }else {
        currentDisplay += value;
    }
    //reset the result to display flag to false, as the user entered a new value
    resultDisplay = false;
    
    //update the calculator to display to show the new content
    updateDisplay();
}

//function to update the calculator display with the current content
function updateDisplay(){
    const displayElement = document.getElementById('display');
    displayElement.textContent = currentDisplay;
}

//function to calculate and display the result
function calculateResult(){
try{
    //use the eval() function to evaluate the mathematical expression
    const result = eval(currentDisplay);
    //append the result to the current display, preceded by an equal sign(=)
    currentDisplay += "\n=" + result.toString();
    // update the calculator display with the result
    updateDisplay(); 
     } catch (error){
        //if there is an error in the expression, display an error message
        currentDisplay += "\nError";
     //update the calculator display to show the error message
     updateDisplay();
     }
     // set the result display flag to true to indicate that the result is displayed
     resultDisplay - true;
}

//las function to clear the last element from the current display
function clearLastElement(){
    currentDisplay = currentDisplay.slice(0, -1);

    //if the current display becomes empty, set it back to "0"
    if (currentDisplay === ""){
        currentDisplay = "0";
    }
    updateDisplay();
}

//function to clear the entire display
function clearDisplay(){
    currentDisplay = "0"; // reset the current display to "0"
    resultDisplay = false; //reset the result display flag to false
    //update the calculator to display to show the cleared content
    updateDisplay();
}