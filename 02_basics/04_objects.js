const tinderUser = new Object();
// const tinderUser = {};

// console.log(tinderUser);
// console.log(typeof tinderUser);


tinderUser.id = '124562';
tinderUser.name = "Anubhav";
tinderUser.isLoggedIn = true;

// console.log(tinderUser);

const regularUser = {
    email: "anubhav@gmail.com",
    fullName: {
        userFullName: {
            firstName: "Anubhav",
            lastName: "Tiwari"
        }
    }
}

// console.log(regularUser.fullName.userFullName.firstName);   // Anubhav
// console.log(regularUser.fullName.userFullName);   // { firstName: 'Anubhav', lastName: 'Tiwari' }
// console.log(regularUser.fullName);   // { userFullName: { firstName: 'Anubhav', lastName: 'Tiwari' } }
// console.log(regularUser);
/* {
    email: 'anubhav@gmail.com',
    fullName: { userFullName: { firstName: 'Anubhav', lastName: 'Tiwari' } }
} */



const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "a", 4: "b"};
const obj21 = {5: "a", 6: "b"};

// const obj3 = {obj1, obj2};
// console.log(obj3);  // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }


// const obj3 = Object.assign(obj1, obj2);
// console.log(obj3);  // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
// console.log(obj1);  // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }


// better way to do
// Object.assign(target, source);
// const obj3 = Object.assign({}, obj1, obj2, obj21);
// console.log(obj3);  // { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }


const obj3 = {...obj1, ...obj2, ...obj21};
// console.log(obj3); // { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }


const users = [
    {
        id: 1,
        email: 'foo@bar.com',
    },
    {
        id: 2,
        email: 'foo@bar.com',
    },
    {
        id: 3,
        email: 'foo@bar.com',
    },
    {
        id: 4,
        email: 'foo@bar.com',
    },
    {
        id: 5,
        email: 'foo@bar.com',
    },
];

// console.log(users[1].email);

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(typeof Object.keys(tinderUser));

// console.log(Object.entries(tinderUser));

// to check property
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));   // true
// console.log(tinderUser.hasOwnProperty('isLogged'));   // true


const course = {
    courseName: "javascript",
    price: "999",
    courseInstructor: "anubhav"
}

// console.log(course.courseInstructor);


// better way to write or doing destructuring of objects

// const {courseInstructor} = course;
// console.log(courseInstructor);  // anubhav
const {courseInstructor: instructor} = course;
console.log(instructor); // anubhav


// json is also an object
// {
//     "name": 'Anubhav',
//     "courseName": 'javascript',
//     "price": "free",
// }

// [
//     {},
//     {},
//     {},
// ]