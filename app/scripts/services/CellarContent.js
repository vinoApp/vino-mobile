'use strict';

angular.module('vino')
    .service('CellarContent', function ($resource, Backend) {

        var CellarContent = $resource(Backend.getActiveEnvBackendUrl() + '/api/cellars/:id/content');

        var prepareToServer = function (type, record, qty) {

            var cloned = _.cloneDeep(record);

            return angular.extend(new CellarContent(), {
                '@class': 'com.vino.domain.Movement',
                movementType: type,
                amount: qty,
                record: {
                    '@class': 'com.vino.domain.WineCellarRecord',
                    _id: cloned._id,
                    code: cloned.code,
                    domain: _.isObject(cloned.domain) ? cloned.domain._id : cloned.domain,
                    vintage: cloned.vintage,
                    quantity: cloned.quantity
                }
            });
        };

        return angular.extend(CellarContent, {
            getContent: function (id) {
                return CellarContent.query({id: id});
            },
            in: function (cellarKey, record, qty, handlers) {
                var content = prepareToServer('IN', record, qty);
                return content.$save({id: cellarKey}, handlers.success, handlers.error);
            },
            out: function (cellarKey, record, qty, handlers) {
                var content = prepareToServer('OUT', record, qty);
                return content.$save({id: cellarKey}, handlers.success, handlers.error);
            }
        });
    });