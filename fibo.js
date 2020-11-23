const fibo =  (n) =>  {
    var arr = [1, 1]
      
    if (n === 0 || n === 1) {
      return 1;  
    }
    for ( var i = 2; i < n; i++) {
      arr.push(arr[0] + arr[1]);

      arr.shift();
    }
  
    return arr[0] + arr[1];
  }

  const result = fibo(8);
  console.log(result);