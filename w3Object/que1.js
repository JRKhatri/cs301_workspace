/**
 1. Write the code, one line for each action:
a. Create an empty object car
b. Add the property name make with value Toyota
c. Add the property name model with value Camry
d. Print the object
e. Without modifying the code structure of the object, change the value of the model to
RAV4.
f. Print the object
g. Without modifying the code structure of the object, Remove property make from the
object
h. Print the object
 */
("use strict");



let  car = {};
car.name = "Toyota";
car.model = "Camry";
console.log(car);
car.model = "RAV4";
console.log(car["model"]);  // while assessining the property like model by [] style use "model".
delete car.name;
delete car.model;
console.log(car);