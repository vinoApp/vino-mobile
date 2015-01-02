var urls = {
    'dev': 'http://localhost:8080',
    'prod': 'http://localhost:8080'
};

var server = function (env) {
    if (!env) {
        env = 'dev';
    }
    return urls[env];
};

angular
    .module('vino')
    .constant('serverUrl', server());
