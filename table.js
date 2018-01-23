
		angular.module('project').controller('table_ctrl', function($scope,$window,serv) {
    	//$scope.arr=[];
    	//$scope.obj={};
    	//$scope.addr={};
    	var index;
    	var x = localStorage.getItem("Details");
			if(x){
				
				$scope.arr=JSON.parse(x);
				
			}
			$scope.addUpdate=function(index){
				
				$scope.obj={ 'Name':$scope.arr[index].Name, 'Phone': $scope.arr[index].Phone, 'Email':$scope.arr[index].Email, 
      	'Address':{ 'Flat':$scope.arr[index].Address.Flat,
      				'Street':$scope.arr[index].Address.Street, 
      				'City': $scope.arr[index].Address.City,
      				'State':$scope.arr[index].Address.State,
      				'Country':$scope.arr[index].Address.Country,
      				'Pin':$scope.arr[index].Address.Pin},

      'Image':$scope.arr[index].Image};
				serv.setData($scope.obj);
				serv.setIndex(index);
				$window.location.href = '#!/update';
				
				
				
				console.log($scope.obj);
			}
			$scope.del=function(index){
				if(confirm("Are you sure you want to delete this data ?")){
				$scope.arr = JSON.parse(localStorage.getItem("Details"));
				
				$scope.arr.splice(index,1);
				localStorage.setItem("Details",JSON.stringify($scope.arr));

			}
			}
		

		})
	
