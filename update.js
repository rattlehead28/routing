angular.module('project').controller("update_ctrl",function($scope,serv){
	$scope.objUpdate=serv.getData();
	$scope.arrIndex=serv.getIndex();
	$scope.imageUrl=function(){
	  	var x = document.getElementById("myFile").value.replace(/C:\\fakepath\\/, "\\images\\");

	  	console.log(x);
	  	$scope.objUpdate.Image=x;
	  }
	$scope.updateRow=function(){
		$scope.arr = JSON.parse(localStorage.getItem("Details"));

		$scope.updatedData={ 'Name':$scope.objUpdate.Name, 'Phone': $scope.objUpdate.Phone, 'Email':$scope.objUpdate.Email, 
      	'Address':{ 'Flat':$scope.objUpdate.Address.Flat,
      				'Street':$scope.objUpdate.Address.Street, 
      				'City': $scope.objUpdate.Address.City,
      				'State':$scope.objUpdate.Address.State,
      				'Country':$scope.objUpdate.Address.Country,
      				'Pin':$scope.objUpdate.Address.Pin},

      'Image':$scope.objUpdate.Image};
		$scope.arr.splice($scope.arrIndex,1,$scope.updatedData);

		localStorage.setItem("Details",JSON.stringify($scope.arr));

		$scope.objUpdate={ Name : '', Phone : '', Email : ''};
	}
})