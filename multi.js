const multi = (arr) =>{

    
    let node = arr.length + 1 ;
    let dist = []
     dist[arr.length] = 0; 
     let path = [ ];
    
    for (let i = node-2 ; i >= 0 ; i--) 
    { 
  
       
        dist[i] = 999; 
  
       
        for (let j = i ; j < node ; j++) 
        { 
           
            if (arr[i][j] === 999) {
                continue; 
            }
  
           
            dist[i] = Math.min(dist[i], arr[i][j]+dist[j] ); 
          //  path.push(i);

            
                
        } 
    } 
    //console.log(path);
    return dist[0]; 
} 















const arr = [[999, 1, 2, 5, 999, 999, 999, 999], 
[999, 999, 999, 999, 4, 11, 999, 999], 
[999, 999, 999, 999, 9, 5, 16, 999], 
[999, 999, 999, 999, 999, 999, 2, 999], 
[999, 999, 999, 999, 999, 999, 999, 18], 
[999, 999, 999, 999, 999, 999, 999, 13], 
[999, 999, 999, 999, 999, 999, 999, 2]]; 
var result = multi ( arr);
console.log(result) ; 