
angular.module('project').controller('myCtrl', function($scope) {
      
    console.log();

    });

angular.module('project').service("serv",function(){
  this.temp="";
  this.setData=function(d){
    this.temp=d;
  }
  this.setIndex=function(i){
    this.tempIndex=i;
  }
  this.getData=function(){
    return this.temp;
  }
  this.getIndex=function(){
    return this.tempIndex;
  }
  
});