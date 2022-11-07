let array = [28, 43, -12, 30, 4, 0, 12]

// For-Case solution
let k = 1

for(i=0; i<array.length; i++){
    for(k=1; k<=6; k++){
        switch(array[i] + array[i+k]){
            case 0:
                console.log(`true`)
                break;
            default:
                if(i===6 && k === 7){
                    console.log(`false`)
                } else{
                   k+1
                }   
        }
    }
}






// For-If solution

// for(i=0; i<array.length; i++){
//     if(array[i] + array[i+1] === 0){
//         console.log(`true`)
//         break
//     } else {
//         i+1
//     }
//     if(array[i] + array[i+2] === 0){
//         console.log(`true`)
//         break
//     } else {
//         i+1
//     }
//     if(array[i] + array[i+3] === 0){
//         console.log(`true`)
//         break
//     } else {
//         i+1
//     }
//     if(array[i] + array[i+4] === 0){
//         console.log(`true`)
//         break
//     } else {
//         i+1
//     }
//     if(array[i] + array[i+5] === 0){
//         console.log(`true`)
//         break
//     } else {
//         i+1
//     }
//     if(array[i] + array[i+6] === 0){
//         console.log(`true`)
//         break
//     } else {
//         i+1
//     }
// } 

// if(array[0] != array[6]){
//     console.log(`false`)
// }
