alcarin
    .config ($stateProvider, $locationProvider)->
        $stateProvider
        .state 'gamepanel.home',
            url: '/home'
            templateUrl: '/static/alcarin/game-panel/home/index.html'
            # controllerAs: 'GamePanelCtrl'
            # controller: 'GamePanelController'
            permissions: 'LOGGED'
        .state 'gamepanel.chars',
            url: '/chars'
            templateUrl: '/static/alcarin/game-panel/chars/index.html'
            # controllerAs: 'GamePanelCtrl'
            # controller: 'GamePanelController'
            permissions: 'LOGGED'

