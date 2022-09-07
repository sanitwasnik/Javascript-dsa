const strings = ['a','b','c','d'];


// push operation adds item at the end of array o(1)
strings.push('e'); 


// pop operation delete the last item in an array o(1)
strings.pop();



// splice operation adds item in between in an array o(n)
strings.splice(2,0,'aliensanit');




// unshift operation ads item at start in an array o(n)
strings.unshift('x');


console.log(strings);