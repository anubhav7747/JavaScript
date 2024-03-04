// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }


// const month = 11;

// switch (month) {
//     case 1:
//         console.log('January');
//         break;
//     case 2:
//         console.log('February');
//         break;
//     case 3:
//         console.log('March');
//         break;
//     case 4:
//         console.log('April');
//         break;
//     case 5:
//         console.log('May');
//         break;
//     case 6:
//         console.log('June');
//         break;
//     case 7:
//         console.log('July');
//         break;
//     case 8:
//         console.log('August');
//         break;
//     case 9:
//         console.log('September');
//         break;
//     case 10:
//         console.log('October');
//         break;
//     case 11:
//         console.log('November');
//         break;
//     case 12:
//         console.log('December');
//         break;
//     default:
//         console.log('Not a month');
//         break;
// }


// in switch, if we don't use "break" statement, then the code below that particular case will also be executed except the default.


const month = "March";
switch (month) {
    case "January":
        console.log('January');
        break;
    case "February":
        console.log('February');
        break;
    case "March":
        console.log('March');
        // break;
    case "April":
        console.log('April');
        break;
    default:
        console.log('Unknown month');
        break;
}