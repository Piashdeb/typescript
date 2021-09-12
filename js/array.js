"use strict";
const salary = 7500;
const friendsSalaries = [7500, 12300, 15000, 9000, 8500];
const friends = ['sakib', 'rakib', 'nakib', 'dakib'];
friendsSalaries[0] = 10500;
friendsSalaries.push(13000);
friends.push('bakib');
friends[2] = 'Quakib';
let max = 0;
for (const salary of friendsSalaries) {
    if (salary > max) {
        max = salary;
    }
}
