const shortPath =  ( matrix) =>{
    //At first find length
    const length = matrix.length;
    
    for (var k = 0 ;k < length ; k++)
    {
        for(var i = 0 ; i < length ; i++)
        {
            if(k === i){    //ignore i when k==i
                continue;
            }
           
            for(var j = 0 ; j < length ; j++ )
            {
                if (k===j){        //ignore j when k==i
                    continue;
                }
                else{
                    matrix[i][j] = Math.min(matrix[i][j] , matrix[i][k] + matrix[k][j]);
                }
            }
        }
    }

    console.log(matrix);

}
const matrix = [[0,9,-4,999],[6,0,999,2],[999,5,0,999],[999,999,1,0]];
shortPath(matrix)