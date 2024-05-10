const students = [ 
  { id: 1, name: 'Alice', age: 20, grade: 'A' }, 
  { id: 2, name: 'Bob', age: 22, grade: 'B' }, 
  { id: 3, name: 'Charlie', age: 21, grade: 'C' }, 
  { id: 4, name: 'David', age: 19, grade: 'B' }, 
  { id: 5, name: 'Eva', age: 23, grade: 'A' }
  ]
 
 
//  Use the map() method to create a new array named studentNames, containing only the names of the students from the students array.
//  Print the studentNames array to the console.
//  Use the forEach() method to print each student's information from the students array to the console.
//  Use the filter() method to create a new array named topStudents, containing only the students with a grade of 'A' from the students array.
//  Print the topStudents array to the console.

const studentNames = students.map((student) => student.name);
console.log(studentNames);

students.forEach((student) => {
  console.log(student);
});

const topStudents = students.filter((student) => student.grade === 'A');

// 1. Write a function named calculateGrade that takes a numerical score as input and returns the corresponding letter grade (A, B, C, D, or F) based on the following grading scale:
// A: 90-100
// B: 80-89
// C: 70-79
// D: 60-69
// F: Below 60
// Test the function with different scores and log the results to the console.

function calculateGrade(score) {
  if (score >= 90 && score <= 100) {
    return 'A';
  } else if (score >= 80 && score <= 89) {
    return 'B';
  } else if (score >= 70 && score <= 79) {
    return 'C';
  } else if (score >= 60 && score <= 69) {
    return 'D';
  } else {
    return 'F';
  }
}

console.log(calculateGrade(95)); // A
console.log(calculateGrade(85)); // B
console.log(calculateGrade(75)); // C
console.log(calculateGrade(65)); // D
console.log(calculateGrade(55)); // F


// 2. Write a function named fahrenheitToCelsius that takes a temperature in Fahrenheit as input and returns the equivalent temperature in Celsius.
// Test the function with different scores and log the results to the console.

function fahrenheitToCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

// 3. Grade Classification
// Write a JavaScript function named classifyGrade that takes a student's score as input and returns a classification based on the following criteria:
// If the score is greater than or equal to 90, return "A".
// If the score is between 80 and 89 (inclusive), return "B".
// If the score is between 70 and 79 (inclusive), return "C".
// If the score is between 60 and 69 (inclusive), return "D".
// Otherwise, return "F". 

// Test your function with different scores and log the results to the console.

function classifyGrade(score) {
  if (score >= 90) {
    return 'A';
  } else if (score >= 80) {
    return 'B';
  } else if (score >= 70) {
    return 'C';
  } else if (score >= 60) {
    return 'D';
  } else {
    return 'F';
  }
}

console.log(classifyGrade(95)); // A
console.log(classifyGrade(85)); // B
console.log(classifyGrade(75)); // C
console.log(classifyGrade(65)); // D
console.log(classifyGrade(55)); // F
