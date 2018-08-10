/**
  transform this simple sorting algorithm into a unique sort.
  It should not return any duplicate values in the sorted array

  input  [1,5,2,1] => [1,2,5]
  input  [4,2,2,3,2,2,2] => [2,3,4]
 */


 const uniqSort = (arr) => {
   const breadCrumb = {}
   const result = []
   for (let i = 0; i < arr.length; i++){
     if(!breadCrumb[arr[i]]){
       result.push(arr[i])
       breadCrumb[arr[i]] = true
     }
   }
   return result.sort((a,b) => a - b)
 }

 const res = uniqSort([4,4,2,3,2,2,2])

 console.log('res', res)
 
