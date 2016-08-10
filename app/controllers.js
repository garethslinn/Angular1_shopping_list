myApp.controller('TodoCtrl', ['$scope', function($scope) {

    $scope.items = [
        {text:'first item', done:true},
        {text:'second item', done:false}
    ];

    $scope.addItem = function() {
        $scope.items.push({text:$scope.itemText, done:false});
        $scope.itemText = '';
    };

    $scope.outstanding = function() {
        var count = 0;
        angular.forEach($scope.items, function(item) {
            count += item.done ? 0 : 1;
        });
        return count;
    };

    $scope.store= function() {
        var archive = $scope.items;
        $scope.items = [];
        angular.forEach(archive, function(item) {
            if (!item.done) $scope.items.push(item);
        });
    };

}]);