var myApp=angular.module("myApp",[]);
myApp.controller("RegisterController",function($scope,$http){
  let submit = function(){
 let data ={
  "username":$scope.username,
  "pwd":$scope.pwd,
  "surname":$scope.surname,
  "other_names":$scope.other_names,
  "dob":$scope.dob,
  "email":$scope.email,
  "tel":$scope.tel,
  "add":$scope.add,
  "ptc":$scope.ptc

}
$http.post("http://localhost:3050/add",data).then(function(response){
  $scope.datas=response.data;

});


}
});
myApp.controller("ContactController",function($scope,$http){
  let submit= function(){
 let data ={
 "fname":$scope.fname,
 "lname":$scope.lname,
 "country":$scope.country
}
$http.post("http://localhost:3050/add1",data).then(function(response){
  $scope.datas=response.data;

});


}
})


myApp.controller("loginController",function($scope,$http){
  let submit= function(){
 let data ={
 "uname":$scope.uname,
 "password":$scope.lname,

}
$http.post("http://localhost:3050/login",data).then(function(response){
  $scope.datas=response.data;

});


}
})
myApp.controller("checkinController",function($scope,$http){
  let submit= function(){
 let data ={
 "fname":$scope.fname,
 "email":$scope.email,
 "city":$scope.city,
 "state":$scope.state,
 "date":$scope.date,

}
$http.post("http://localhost:3050/check1",data).then(function(response){
  $scope.datas=response.data;

});


}
})
