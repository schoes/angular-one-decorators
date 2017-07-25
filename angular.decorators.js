"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("lodash");
var angular = require("angular");
function _getModule(moduleName) {
    var module;
    try {
        module = angular.module(moduleName);
    }
    catch (err) {
        module = angular.module(moduleName, []);
    }
    return module;
}
exports.Component = function (options) {
    return function (controller) {
        var component = _.assign(options, { controller: controller });
        if (typeof angular !== 'undefined') {
            _getModule(component.module)
                .component(getComponentNameFromSelector(component), component);
        }
        return controller;
    };
    function getComponentNameFromSelector(component) {
        return _.camelCase(component.selector);
    }
};
exports.Service = function (options) {
    return function (service) {
        if (typeof angular !== 'undefined') {
            _getModule(options.module)
                .service(options.serviceName, service);
        }
        return service;
    };
};
exports.Provider = function (options) {
    return function (provider) {
        if (typeof angular !== 'undefined') {
            _getModule(options.module)
                .provider(options.providerName, provider);
        }
        return provider;
    };
};
exports.Factory = function (options) {
    return function (factory) {
        if (typeof angular !== 'undefined') {
            _getModule(options.module)
                .factory(options.factoryName, factory);
        }
        return factory;
    };
};
exports.Filter = function (options) {
    return function (target, propertyKey, descriptor) {
        if (typeof angular !== 'undefined') {
            _getModule(options.module)
                .filter(options.filterName, descriptor.value);
        }
        return descriptor.value;
    };
};
exports.Config = function (options) {
    return function (target, propertyKey, descriptor) {
        if (typeof angular !== 'undefined') {
            _getModule(options.module)
                .config(descriptor.value);
        }
        return descriptor.value;
    };
};
exports.Run = function (options) {
    return function (target, propertyKey, descriptor) {
        if (typeof angular !== 'undefined') {
            _getModule(options.module)
                .run(descriptor.value);
        }
        return descriptor.value;
    };
};
//# sourceMappingURL=angular.decorators.js.map