
var app = angular.module("ngrepeatApp", []);

app.controller("ngrepeatCtrl", function ($scope) {

    $scope.params = [
        {
            Title: "Title",
            Description: "Type Title Here",
            Value: "",
            MaxLength: 10
        },
        {
            Title: "DisplayName",
            Description: "Type Title Here",
            Value: "",
            MaxLength: 15
        },
        {
            Title: "Category",
            Description: "Type Category Here",
            Value: "",
            MaxLength: 6
        }
    ];

});
