const nemo = ["Nemo"];

function findNemo(array){

  let t0 = performance.now();
  for(let i=0; i<array.length; i++){
    if(array[i] === "Nemo"){
      console.log("Find Nemo");
    }
  }
  let t1 = performance.now();
  console.log("Time taken to run " + (t1-t0) + "millisec.");
}
findNemo(nemo);
