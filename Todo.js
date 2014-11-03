
var TodoApp = angular.module('TodoApp', []);

TodoApp.controller('TodoCtrl', ['$scope', function ($scope) {
    $scope.todos = [];
    index = 0;

    $scope.add = function() {
        $scope.todos.push({id: index, message: $scope.message, date: $scope.getDate(), done: false});
        $scope.message = "";
        index++;
    };

    $scope.update = function(todo) {
        var message = window.prompt("変更",todo.message);
        if (message) {
            $scope.todos.forEach(function(td) {
                if (td.id == todo.id) {
                    td.message = message;
                    td.date = $scope.getDate();
                }
            });
        }
    }

    $scope.delete = function(todo) {
        var index = 1;
        var t;
        for (var i = 0; $scope.todos.length; i++) {
            t = $scope.todos[i];
            if (t.id == todo.id) {
                index = i;
                break;
            }
        }
        $scope.todos.splice(index, 1);
    }

    $scope.remaining = function() {
        var count = 0;
        $scope.todos.forEach(function(todo) {
            count += todo.done;
        });
        return count;
    }

    $scope.complate = function() {
        $scope.todos.forEach(function(todo) {
            todo.done = true;
        });
    }

    $scope.getDate = function() {
        var date = new Date();

        return date.getFullYear() + "/" +
               date.getMonth() + "/" +
               date.getDate() + " " +
               date.getHours() + ":" +
               date.getMinutes() + ":" +
               date.getSeconds()
    }
}]);