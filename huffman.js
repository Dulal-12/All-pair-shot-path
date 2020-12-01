const huffman = (str)=>{
    
        var str1 = str.split('');
        var arr = [ ];
        for (var i in str1)
            if(arr.indexOf(str1[i]) == -1) arr.push(str1[i])
       
       var character = [ ];
       for(var i in arr)
       {
           let num = 0;
           for(var j in str1){
               if(arr[i] === str1[j])
               {                                                                                                           //This hole section is count how many different character in msg 
                    num++;
               }
           }
           let value = { char : arr[i] , count : num};
           character.push(value);
       }

       //console.log(character);
      //sort by number of letter
       var shortChar = character.sort(function(a,b){
                 
        return a.count - b.count;
       });

    //console.log(shortChar);




   let distance = [ ]
  for(let i = 0; i<shortChar.length ;i++){


        if(i === 0 )
        {
            distance[i] = { char : shortChar[i].char , distance :  0};
        }
           
        else{
            var count = 0;
            distance[i] = { char : shortChar[i].char , distance :  1};
            count++;
        }
           
       for(var j = i-1 ;j >= 0 ;j--)
       {
        distance[j] = { char : shortChar[j].char , distance :  distance[j].distance + 1};
        //console.log(distance[j]);
       }
          }

  //console.log(distance);


 let messageSize = 0 ;
 for(let i in shortChar){
     messageSize += shortChar[i].count * distance[i].distance;
 }

     // console.log(messageSize);  
     var bit = 0;
     for(let i in distance){
         bit+= distance[i].distance;
     }
    
     
      const totalSizeInAscii = messageSize + (shortChar.length*8) +bit;
      console.log(totalSizeInAscii);
}


const str = 'aaaadddddddbbbbbbbbcccccccc';
huffman(str);