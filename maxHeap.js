function heapSort(arr  ){

    var newArr = [ ] ;               //sorting array
    var loopIndex = 0;            //initial Index

  while(loopIndex !==-1){

    var loopIndex = Math.floor ((arr.length/2) - 1);
    
    for(var  i = loopIndex ; i>=0 ; i--){

        if(i*2+2 <= arr.length || i*2+1 <= arr.length){

              var j = 2;

              while(j!=0){

               if(arr[i] < arr[i*2+j] && arr[i*2+j] !== undefined){
                   var temp = arr[i];                                                        //swaping node value
                   arr[i] = arr[i*2+j];
                   arr[i*2+j] = temp;
                   j--;
                 }
               else{
                   arr[i] = arr[i];
                   j--;
               }
              }
        }
       }

       var temp = arr[0];                               //then transfer upper to lower
       arr[0] = arr[arr.length-1];
       arr[arr.length-1] = temp;

       var value = arr.pop();
       newArr.push(value);
     
  }

  return newArr;
//   console.log(newArr.reverse());
    }
   
 














const arr = [11,23,12,24,4,2,1];
var result  = heapSort(arr );
console.log(result);