"use strict"


// Task #1
const user = { firstName: 'Ivan', lastName: 'Vasylchenko' };

function addFullName(passedUser) {
    passedUser.fullName = `${passedUser.firstName} ${passedUser.lastName}`;
}

addFullName(user);
// user === { firstName: 'Ivan', lastName: 'Vasylchenko', fullName: 'Ivan Vasylchenko' }

console.log(user);