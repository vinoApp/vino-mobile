var urls = {
    'home': 'http://192.168.0.15:8080',
    'dev': 'http://localhost:8080'
};

var server = function (env) {
    if (!env) {
        env = 'home';
    }
    return urls[env];
};

angular
    .module('vino')
    .constant('serverUrl', server());
