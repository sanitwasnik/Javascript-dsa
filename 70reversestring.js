// creating the function that reverses the string.
//  "Hello my name is alien-programmmer"

function reverse(str){
    if(!str || str.length <2 || typeof str !== 'string'){
        return('hmm! something went wrong ')
    }

    const backwards = [];
    const totalItem = str.length - 1;
    for(let i = totalItem; i>=0 ; i--){
        backwards.push(str[i]);
    }
    console.log(backwards);
    return backwards.join('')
    // console.log(backwards.join(''));
}

reverse('sanit')

// **************************************/
function reverse2(str){
    return str.split('').reverse().join('')
//   console.log(str)
}
reverse2("Hello my name is alien-programmmer")




const reverse3 = str => [...str].reverse().join('');

reverse3('sanit wasnik')


function reverse(s){
    return s.split("").reverse().join("");
}
reverse("sanit")