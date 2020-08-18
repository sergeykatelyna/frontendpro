"use strict"


// Task #1
const user = { firstName: 'Ivan', lastName: 'Vasylchenko' };

function addFullName(passedUser) {
    passedUser.fullName = `${passedUser.firstName} ${passedUser.lastName}`;
}

addFullName(user);
// user === { firstName: 'Ivan', lastName: 'Vasylchenko', fullName: 'Ivan Vasylchenko' }

console.log(user);




// Task #2
const users = [
    {
      firstName: undefined,
      lastName: 'Drogo',
      fullName: 'Ivan Drogo',
    },
    {
      firstName: undefined,
      lastName: 'Holy',
      fullName: 'Jack Holy',
    },
    {
      firstName: undefined,
      lastName: 'Doe',
      fullName: 'Doe Sam',
    },
    {
      firstName: "Ken",
      lastName: 'M',
      fullName: 'Ken M',
    },
];

function restoreNames(passedUsers) {
    passedUsers.forEach(el => {
        if (el.firstName === undefined) {
            const tempFirstName = el.fullName.replace(el.lastName, "").trim();
            el.firstName = tempFirstName;
        }
    });
}


restoreNames(users);
// users === [..., {firstName: 'Jack', lastName: 'Holy', fullName: 'Jack Holy'}, ...]

console.log(users);