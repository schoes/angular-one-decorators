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
function NG1Component(options) {
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
exports.NG1Component = NG1Component;
;
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
function NG1Service(options) {
    return function (service) {
        if (typeof angular !== 'undefined') {
            _getModule(options.module)
                .service(options.serviceName, service);
        }
        return service;
    };
}
exports.NG1Service = NG1Service;
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
function NG1Provider(options) {
    return function (provider) {
        if (typeof angular !== 'undefined') {
            _getModule(options.module)
                .provider(options.providerName, provider);
        }
        return provider;
    };
}
exports.NG1Provider = NG1Provider;
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
function NG1Factory(options) {
    return function (factory) {
        if (typeof angular !== 'undefined') {
            _getModule(options.module)
                .factory(options.factoryName, factory);
        }
        return factory;
    };
}
exports.NG1Factory = NG1Factory;
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
function NG1Filter(options) {
    return function (target, propertyKey, descriptor) {
        if (typeof angular !== 'undefined') {
            _getModule(options.module)
                .filter(options.filterName, descriptor.value);
        }
        return descriptor.value;
    };
}
exports.NG1Filter = NG1Filter;
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
function NG1Config(options) {
    return function (target, propertyKey, descriptor) {
        if (typeof angular !== 'undefined') {
            _getModule(options.module)
                .config(descriptor.value);
        }
        return descriptor.value;
    };
}
exports.NG1Config = NG1Config;
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
function NG1Run(options) {
    return function (target, propertyKey, descriptor) {
        if (typeof angular !== 'undefined') {
            _getModule(options.module)
                .run(descriptor.value);
        }
        return descriptor.value;
    };
}
exports.NG1Run = NG1Run;
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