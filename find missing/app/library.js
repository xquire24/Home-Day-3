module.exports={

findMissing: function(arr1,arr2){

  var firstArrayLength=arr1.length;
  
  var secondArrayLength=arr2.length;
  
  var result=[];
  
  for (var i=0; i<firstArrayLength; i++){
    if (arr2.indexOf(arr1[i])=== -1){
      result.push(arr1[i]);
    }
  }
  
  for (i=0; i<secondArrayLength; i++) {
    if (arr1.indexOf(arr2[i])=== -1) {
      result.push(arr2[i]);
    }
  }

  if(firstArrayLength===secondArrayLength){
    return 0;
  }else{
  	return result[0];
    }
  }

 }