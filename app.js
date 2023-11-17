let array = [3,5,4,9,8,1,10]
let s=0
for(let i=0;i<array.length;i++){
    if(array[i]==array[0]||array[i]==array[array.length-1]){
        s=s+array[i]
    }
    }
console.log(s)
let array1= [3,5,4,9,8,1,10]
array1.push(20)
console.log(array1)
let s1=0
for(let i=0;i<array1.length;i++){
    if(array1[i]==array1[array1.length-1]||array1[i]==array1[0]){
        s1=s1+array1[i]
    }
}
console.log(s1)