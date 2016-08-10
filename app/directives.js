myApp.directive("shoppingList", function() {
    return {
        restrict: 'E',
        templateUrl: './app/templates/shoppingList.html',
        replace: true
    }
});
