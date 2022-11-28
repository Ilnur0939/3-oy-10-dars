
// 1 - MASALA

function func(index, inStr){
    let strIndex = index.split(" ")
    let result = inStr.split(" ")
    let n = ''
    for(let i = 0; i < strIndex.length; i++){
        if(strIndex[i] == result){
            return n += i

        }

    }
    return n
}

console.log(func('hi edabit fgh abc' , 'fgh'));




// 2 - MASALA

// function func(index){
//     let strIndex = index.split('  ')
//     let n = ''
//     for(let i = 0; i < strIndex.length; i++){
//         // n += strIndex[i]
//         n += strIndex[i].split(' ').reverse()[0];
//     }
//     return n
// }

// console.log(func('hi edabit fgh abc'));
