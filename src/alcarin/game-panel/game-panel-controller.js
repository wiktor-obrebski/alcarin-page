angular.module('alcarin').controller('GamePanelController', GamePanelController);

function GamePanelController(
    $scope, socket, $stateParams, $state, EventsManager
) {
    var vm = this;

    vm.activateCharacter = activateCharacter;
    vm.loadEvents = loadEvents;
    vm.talkToAll = talkToAll;

    activate();

    ///

    function activateCharacter() {
        var data = {
            charId: $stateParams.charId
        };
        return socket.emit('char.activate', data)
            .then(function () {
                vm.activate = true;
            })
            .catch('permission.denied', function () {
                $state.go('home');
            })
            .catch('validation.failed', function () {
                $state.go('home');
            });
    }

    function loadEvents() {
        socket.emit('char.events').then(function (events) {
            vm.gameEvents = events.map(function (ev) {
                return EventsManager.split(ev);
            });
        });
    }

    function talkToAll() {
        if ($scope.sayingForm.$valid) {
            socket.emit('char.say', {content: vm.saying})
            .then(function () {
                vm.saying = '';
                // # temporary
                vm.loadEvents();
            });
        }
    }

    function activate() {
        vm.activateCharacter().then(function () {
            vm.loadEvents();
        });
    }
}
