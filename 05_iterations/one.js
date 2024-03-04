// for

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];   

// }



// for (let index = 0; index < 10; index++) {
//     const element = index;
    
//     if (element == 5) {
//         console.log(`${element} is the best`);
//     }
//     console.log(element);
// }

// console.log(element);    // error



// for (let index = 0; index < 10; index++) {
//     console.log(`outer loop ${index}`);

//     for (let i = 0; i < 10; i++) {
//         console.log(`inner loop value ${i} and inner loop ${index}`);
//     }
    
// }



// for (let index = 0; index < 10; index++) {
//     console.log(`outer loop ${index}`);

//     for (let i = 1; i <= 10; i++) {
//         console.log(`${index} * ${i} = ${i*index}`);
//     }
    
// }



// const arr = ['BMW', 'MG Hector', 'Tata Motors'];

// for (let index = 0; index < arr.length; index++) {
//     console.log(`${arr[index]}`);
// }



// break and continue

for (let index = 0; index <= 10; index++) {
    if (index == 7) {
        console.log('skipping 7');
        continue;
    }

    if (index == 5) {
        console.log('exiting from 5');
        break;
    }
    console.log(`${index}`);
}