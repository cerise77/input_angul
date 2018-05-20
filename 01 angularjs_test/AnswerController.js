app.controller('AnswerController',
    function AnswerController($scope){
        $scope.save = function (answer, paramForm){
            if(paramForm.$valid){
                alert("Ваш ответ сохранен");

            }
        };
})
