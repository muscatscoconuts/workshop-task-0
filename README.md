# workshop-task-0

# Workshop 0 notes

Functions are blocks of code
Draw is a loop
CreateCanvas draws the canvas, numbers determine size of canvas
Background determines the color using RGB (three values) — this is a nice yellow (569,679,54)
—— a single parameter gives you a grayscale value
Make sure to include shapes in the dry function by enclosing the whole section in {} or else you will get nothing!!!!
Always end function with semicolon
Everything that happens in the code runs by order of line
Variable is something that contains data and can change over time
System variables are a part of p5js
Conditionals check to see if something is true, then do something based on the answer
Highlighting, holding ctrl and pressing forward slash will hide section of code so the program doesn’t execute it

code glossary
rect - rectangle, 4 parameters for x position, y position, width and height
stroke - outline of shape, (enter RGB values)
fill - the fill duh (enter RGB values), 4th value can be added to determine transparency range is from 0 to 255
let - declares a variable (x) e.g. let x = 0; x = x + (number) will make a shape move
console.log - displays the numerical values created by the x equation
mouseX or mouseY - makes the rectangle follow the mouse across the x axis
if - conditional statement e.g. if(x </> width)
 {} brackets then give the instructions to do if the condition occurs
width - width of canvas
else - if a conditional is not true


# Task notes
I want to make a spinning triangle that changes colors…
To make it spin I have to figure out which variables I have to make move, if I can’t make it spin ill just make it pulsate or wiggle
— spinning is in fact too hard, had to play around with x1 and y1 variables to make the triangle move funny
I had to make the canvas taller to see what was going on but now that I have one corner moving I can do the same to all the others - top corner will move divided by 2 and right corner will move by -2
x1 = 150
y1 = 200
x2 = 200
y2 = 150
x3 = 250
y3 = 250
 In the end I liked how the triangle would butt up against the corner and then change shape so I left it as is, plus a conditional that changed the color of the triangle - its kind of perpetual.
