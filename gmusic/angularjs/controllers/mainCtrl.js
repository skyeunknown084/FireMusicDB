GMusic.controller('mainCtrl', function($scope, $filter, $firebaseArray){
  // alert("test");  
  // firebase.initializeApp(config);
  // const rootRef = firebase.database().ref().child('firemusicdb');
  // this.playlists = $firebaseObject(ref);
  // const ref = rootRef.child('playlists');
  // this.playlists = $firebaseObject(ref);

  // $scope.currentPage = 0;
  // $scope.pageSize = 10;
  // $scope.data = [];
  $scope.q = '';
  // $scope.getData = function () {
  //   return $filter('filter')($scope.playlists, $scope.q)
  // }
  // $scope.numberOfPages=function(){
  //   return Math.ceil($scope.getData().length/$scope.pageSize);
  // }

  // for (var i=0; i<65; i++) {
  //     $scope.data.push("Item "+i);
  // }

  // $scope.$watch('q', function(newValue,oldValue){                       
  //   if(oldValue!=newValue){
  //     $scope.currentPage = 0;
  //   }
  //   },true);
  // }]);

  //Firebase Functions
  var ref = firebase.database().ref();

  $scope.playlists = $firebaseArray(ref);
  $scope.q='';
  $scope.add=function () {
      $scope.playlists.$add($scope.gmusic);
      $scope.gmusic = "";
  }
  $scope.edit=function () {
    // body...
    // $scope.playlists.$update($scope.gmusic);
  }

  $scope.clearForm = function(gmusic){
        $scope.gmusic = "";
  }   
  // $scope.playlists="brook - binkusu sake";


  //Filter
  // GMusic.filter('startFrom', function() {
  //   return function(input, start) {
  //       start = +start;
  //       return input.slice(start);
  //   }
  // });


});