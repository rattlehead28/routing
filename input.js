angular.module('project').controller('input_ctrl',function($scope,serv){
	  $scope.arr=[];
	  $scope.obj={};
	  $scope.addr={};
	  
	 $scope.imageUrl=function(){
	  	var x = document.getElementById("myFile").value.replace(/C:\\fakepath\\/, "\\images\\");

	  	console.log(x);
	  	$scope.obj.Image=x;
	  }
      $scope.addRow = function(){ 
      	var flag=1;
      	var x = localStorage.getItem("Details");

      	if(x){
				
				$scope.arr=JSON.parse(x);
				
			}  
			console.log($scope.Image);
      //var allDetails = localStorage.getItem("Details") ? JSON.parse(localStorage.getItem("Details")) : [];
      for(var i=0;i<$scope.arr.length;i++)
      {
      	if($scope.arr[i].Email==$scope.obj.Email)
      	{
      		alert("Email ID already exists")
      		
      		flag=0;
      		break;
      		
      	}
      }
      
      if(flag==1){
      $scope.arr.push({ 'Name':$scope.obj.Name, 'Phone': $scope.obj.Phone, 'Email':$scope.obj.Email, 
      	'Address':{ 'Flat':$scope.obj.Address.Flat,
      				'Street':$scope.obj.Address.Street, 
      				'City': $scope.obj.Address.City,
      				'State':$scope.obj.Address.State,
      				'Country':$scope.obj.Address.Country,
      				'Pin':$scope.obj.Address.Pin},

      'Image':$scope.obj.Image});
      console.log($scope.obj.Address);
      localStorage.setItem("Details",JSON.stringify($scope.arr));
      
      $scope.obj={ Name : '', Phone : '', Email : '', Address : { Flat : ''},Image:''};
      //$scope.arr = JSON.parse(localStorage.getItem("Details"));
      }

    };
})