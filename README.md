# Sprint Challenge: JavaScript Fundamentals

This challenge allows you to practice the concepts and techniques learned over the past week and apply them in a survey of problems. This Sprint explored JavaScript Fundamentals. During this Sprint, you studied variables, functions, object literals, arrays, this keyword, prototypes, and class syntax. In your challenge this week, you will demonstrate proficiency by completing a survey of JavaScript problems.

## Instructions

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the Sprint Challenge. However, you are encouraged to follow the twenty-minute rule and seek support from your PM and Instructor in your cohort help channel on Slack. Your work reflects your proficiency in JavaScript fundamentals.

You have three hours to complete this challenge. Plan your time accordingly.

## Commits

Commit your code regularly and meaningfully. This helps both you (in case you ever need to return to old code for any number of reasons) and your project manager.

## Description

You will notice there are several JavaScript files being brought into the index.html file.  Each of those files contain JavaScript problems you need to solve.  If you get stuck on something, skip over it and come back to it later.

In meeting the minimum viable product (MVP) specifications listed below, you should have a console full of correct responses to the problems given.

## Self-Study Questions

Demonstrate your understanding of this week's concepts by answering the following free-form questions.

Edit this document to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read by your project manager

1. Describe the biggest difference between `.forEach` & `.map`.

The biggest difference between .forEach and .map is that the former is a higher order function that returns an edited version of the original array, and the latter will return an new array which was created by performing the operations in the callback function called in map.

2. What is the difference between a function and a method?

A method is a function that is defined in a object. To be able to use a method you'll need to call this method with your object. Functions aren't associated with objects a function can just exist on it's own in code.

3. What is closure?

Closure is the concept explaining how variables defined in functions are local to that the function it was created for. It works in tandem with the concept of scoping, and has to be carefully monitored to ensure that the variables that you're creating inside of your function can be accessed outside of your function if need be. One way that the variables enclosed in the function can be accessed outside of the function is if the function will return that variable.

4. Describe the four rules of the 'this' keyword.

The this keyword has four different bindings. The different bindings associated with this are: Global, New, Implicit, and Explicit.

Global binding is binding that is performed to bind to Javascript itself. This binding has to be placed outside of all functions. It is done with this command in Javascript: console.log(this);

New binding is binding that is performed when you initialize a new object using a pre-defined object definiton. It will create a new instance of the object in memory that will have memory allocated for all of the different methods(functions), and properties(variables/key-value pairs) associated with the object.

Explicit binding is when you use the .call and .apply functions on different objects to make an object be able to access the properities and methods of a completely different object.

Implicit binding is when you the .this keyword to access the object that that the this refers to contextually.

5. Why do we need super() in an extended class?

You need a super() in an extended class to be able to reach and intialize all of the methods and properities that are defined in the class that the object is inheriting from.

## Project Set up

Follow these steps to set up and work on your project:

- [X] Create a forked copy of this project.
- [ ] Add PM as collaborator on Github.
- [X] Clone your OWN version of Repo (Not Lambda's by mistake!).
- [X] Create a new Branch on the clone: git checkout -b `<firstName-lastName>`.
- [ ] Create a pull request before you start working on the project requirements.  You will continuously push your updates throughout the project.
- [X] You are now ready to build this project with your preferred IDE
- [X] Implement the project on your Branch, committing changes regularly.
- [X] Push commits: git push origin `<firstName-lastName>`.

Follow these steps for completing your project:

- [ ] Submit a Pull-Request to merge <firstName-lastName> Branch into master (student's  Repo).
- [ ] Add your Project Manager as a Reviewer on the Pull-request
- [ ] PM then will count the HW as done by  merging the branch back into master.


## Minimum Viable Product

Your finished project must include all of the following requirements:

**Pro tip for this challenge: If something seems like it isn't working locally, copy and paste your code up to codepen and take another look at the console.**

## Task 1: Objects and Arrays
Test your knowledge of objects and arrays. 
* [ ] Use the [objects-arrays.js](challenges/objects-arrays.js) link to get started.  Read the instructions carefully!

## Task 2: Functions
This challenge takes a look at callbacks and closures as well as scope. 
* [ ] Use the [functions.js](challenges/functions.js) link to get started. Read the instructions carefully!

## Task 3: Prototypes
Create constructors, bind methods, and create cuboids in this prototypes challenge.
* [ ] Use the [prototypes.js](challenges/prototypes.js) link to get started. Read the instructions carefully!

## Task 4: Classes
Once you have completed the prototypes challenge, it's time to convert all your hard work into classes.
* [ ] Use the [classes.js](challenges/classes.js) link to get started. Read the instructions carefully!

In your solutions, it is essential that you follow best practices and produce clean and professional results. Schedule time to review, refine, and assess your work and perform basic professional polishing including spell-checking and grammar-checking on your work. It is better to submit a challenge that meets MVP than one that attempts too much and does not.

## Stretch Problems

There are a few stretch problems found throughout the files, don't work on them until you are finished with MVP requirements!
