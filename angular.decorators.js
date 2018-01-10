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
function Component(options) {
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
}
exports.Component = Component;
;
function Service(options) {
    return function (service) {
        if (typeof angular !== 'undefined') {
            _getModule(options.module)
                .service(options.serviceName, service);
        }
        return service;
    };
}
exports.Service = Service;
;
function Provider(options) {
    return function (provider) {
        if (typeof angular !== 'undefined') {
            _getModule(options.module)
                .provider(options.providerName, provider);
        }
        return provider;
    };
}
exports.Provider = Provider;
;
function Factory(options) {
    return function (factory) {
        if (typeof angular !== 'undefined') {
            _getModule(options.module)
                .factory(options.factoryName, factory);
        }
        return factory;
    };
}
exports.Factory = Factory;
;
function Filter(options) {
    return function (target, propertyKey, descriptor) {
        if (typeof angular !== 'undefined') {
            _getModule(options.module)
                .filter(options.filterName, descriptor.value);
        }
        return descriptor.value;
    };
}
exports.Filter = Filter;
;
function Config(options) {
    return function (target, propertyKey, descriptor) {
        if (typeof angular !== 'undefined') {
            _getModule(options.module)
                .config(descriptor.value);
        }
        return descriptor.value;
    };
}
exports.Config = Config;
;
function Run(options) {
    return function (target, propertyKey, descriptor) {
        if (typeof angular !== 'undefined') {
            _getModule(options.module)
                .run(descriptor.value);
        }
        return descriptor.value;
    };
}
exports.Run = Run;
;
//# sourceMappingURL=angular.decorators.js.map