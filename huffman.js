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
   let BinaryCode = [ ]
 
  
 
    for(let i = 0; i<shortChar.length ;i++){


        if(i === 0 )
        {
            BinaryCode[i] = { char : shortChar[i].char , distance :  0};
        }
           
        else{
            var count = 0;
            BinaryCode[i] = { char : shortChar[i].char , distance :  1};
            count++;
        }
           
       for(var j = i-1 ;j >= 0 ;j--)
       {
        BinaryCode[j] = { char : shortChar[j].char , distance :  BinaryCode[j].distance + 1};
        //console.log(BinaryCode[j]);

        
       }
         

          

              
    }

    

      console.log(BinaryCode);
          
}


const str = 'AAAAdddddddbbbbbbbbcccccccc';
huffman(str);