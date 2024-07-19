function findMax(arr){
    let max = arr[0];
    for(let i=0;i<arr.length;i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}
let arr = [21,23,1,222,21,87,43,3];
let result = findMax(arr);
console.log("Result: "+result)