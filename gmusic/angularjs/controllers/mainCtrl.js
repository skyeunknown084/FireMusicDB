GMusic.controller('mainCtrl', function($scope, $http, $firebaseArray, $firebaseObject){
    // alert("mainCtrl");
    //Firebase Functions

    // add
    var ref = firebase.database().ref().child('Songs');
    $scope.playlists = $firebaseArray(ref);
    console.log($scope.playlists);
    $scope.add = function() {
        $scope.playlists.$add($scope.gmusic);
        $scope.gmusic = "";
    }
    // edit
    $scope.edit = function(id){
        var ref = firebase.database().ref().child('Songs/' + id);
        $scope.editdata = $firebaseObject(ref);
        console.log($scope.editdata);

    }
    // save what you edit
    $scope.save = function(id){
        var ref = firebase.database().ref().child('Songs/' + id);
        ref.update({
            song_title: $scope.editdata.song_title,
            song_artist: $scope.editdata.song_artist,
            song_size: $scope.editdata.song_size
        }).then(function(ref){
            $('#editModal').modal('hide');
        }, function(err){
            console.log(err);
        });
    };
    // delete modal get the ID to delete
    $scope.deleteData = function(item){
        $scope.deleteItem = item;
        console.log(item);
    }
    $scope.delete = function(deleteItem){
        $scope.playlists.$remove(deleteItem);
        $('#deleteModal').modal('hide');
    }

});