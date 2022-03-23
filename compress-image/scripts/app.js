'use strict';

var app = angular.module('angNewsApp', ['ngImageCompress']);

app.controller('demoCtrl', function($scope){
  $scope.deleteImage = function(keyImage,index){

    localStorage.removeItem(keyImage)
  /*  $scope.image1.splice(index,1);
    console.log("deleted successfully");
    console.log("array after removing element :")*/
    console.log($scope.image1);
    $scope.image1=mySplice($scope.image1,index,1)
  }

  $('input[name="test"]').click(function(){

    if($('input[name="test"]:checked').val() == "non"){
      $scope.val1=false;
      $scope.val2=false;
      $scope.val3 =false;
      
    }
})

 var mySplice= function(array, index, count)
  {    
      var newArray = [];
      if( count > 0 ) 
          { count--;}
      else
          { count++;}
      for(var i = 0; i <array.length; i++)
          {
              if(!((i <= index + count && i >=  index) || (i <= index && i >=  index + count)))  
              {
                 newArray.push(array[i])
              }            
          }      
      return newArray;
  }
  



 
})
