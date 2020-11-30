const multi = (arr) =>{

    
    let node = 8 ;
    let dist = []
     dist[7] = 0; 
    
    for (let i = node-2 ; i >= 0 ; i--) 
    { 
  
       
        dist[i] = 999; 
  
       
        for (let j = i ; j < node ; j++) 
        { 
           
            if (arr[i][j] === 999) {
                continue; 
            }
  
           
            dist[i] = Math.min(dist[i], arr[i][j]+dist[j] ); 
            
                
        } 
    } 
  
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