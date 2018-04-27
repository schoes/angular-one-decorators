import * as _ from 'lodash';
import * as angular from 'angular';

function _getModule(moduleName: string): angular.IModule {
    let module: angular.IModule;
    try {
        module = angular.module(moduleName);
    } catch (err) {
        module = angular.module(moduleName, []);
    }
    return module;
}

export interface ModuleOptions {
    module: string;
}

export interface ComponentOptions extends angular.IComponentOptions, ModuleOptions {
    selector: string;
    styles?: string;
}

export function NG1Component(options: ComponentOptions): Function {

    return (controller: Function) => {
        let component: ComponentOptions = _.assign(options, {controller});
        if (typeof angular !== 'undefined') {
            _getModule(component.module)
                .component(getComponentNameFromSelector(component), component);
        }
        return controller;
    };

    function getComponentNameFromSelector(component: ComponentOptions): string {
        return _.camelCase(component.selector);
    }
};

export function Component(options: ComponentOptions): Function {

    return (controller: Function) => {
        let component: ComponentOptions = _.assign(options, {controller});
        if (typeof angular !== 'undefined') {
            _getModule(component.module)
                .component(getComponentNameFromSelector(component), component);
        }
        return controller;
    };

    function getComponentNameFromSelector(component: ComponentOptions): string {
        return _.camelCase(component.selector);
    }
};

export interface ServiceOptions extends ModuleOptions {
    serviceName: string;
}

export function NG1Service(options: ServiceOptions): Function {
    return (service: Function) => {
        if (typeof angular !== 'undefined') {
            _getModule(options.module)
                .service(options.serviceName, service);
        }
        return service;
    };
};

export function Service(options: ServiceOptions): Function {
    return (service: Function) => {
        if (typeof angular !== 'undefined') {
            _getModule(options.module)
                .service(options.serviceName, service);
        }
        return service;
    };
};

export interface ProviderOptions extends ModuleOptions {
    providerName: string;
}

export function NG1Provider(options: ProviderOptions): Function {
    return (provider: angular.IServiceProvider) => {
        if (typeof angular !== 'undefined') {
            _getModule(options.module)
                .provider(options.providerName, provider);
        }
        return provider;
    };
};

export function Provider(options: ProviderOptions): Function {
    return (provider: angular.IServiceProvider) => {
        if (typeof angular !== 'undefined') {
            _getModule(options.module)
                .provider(options.providerName, provider);
        }
        return provider;
    };
};

export interface FactoryOptions extends ModuleOptions {
    factoryName: string;
}

export function NG1Factory(options: FactoryOptions): Function {
    return (factory: Function) => {
        if (typeof angular !== 'undefined') {
            _getModule(options.module)
                .factory(options.factoryName, factory);
        }
        return factory;
    };
};

export function Factory(options: FactoryOptions): Function {
    return (factory: Function) => {
        if (typeof angular !== 'undefined') {
            _getModule(options.module)
                .factory(options.factoryName, factory);
        }
        return factory;
    };
};

export interface FilterOptions extends ModuleOptions {
    filterName: string;
}

export function NG1Filter(options: FilterOptions) {
    return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
        if (typeof angular !== 'undefined') {
            _getModule(options.module)
                .filter(options.filterName, descriptor.value);
        }
        return descriptor.value;
    };
};

export function Filter(options: FilterOptions) {
    return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
        if (typeof angular !== 'undefined') {
            _getModule(options.module)
                .filter(options.filterName, descriptor.value);
        }
        return descriptor.value;
    };
};

export function NG1Config(options: ModuleOptions) {
    return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
        if (typeof angular !== 'undefined') {
            _getModule(options.module)
                .config(descriptor.value);
        }
        return descriptor.value;
    };
};

export function Config(options: ModuleOptions) {
    return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
        if (typeof angular !== 'undefined') {
            _getModule(options.module)
                .config(descriptor.value);
        }
        return descriptor.value;
    };
};


export function NG1Run(options: ModuleOptions) {
    return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
        if (typeof angular !== 'undefined') {
            _getModule(options.module)
                .run(descriptor.value);
        }
        return descriptor.value;
    };
};

export function Run(options: ModuleOptions) {
    return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
        if (typeof angular !== 'undefined') {
            _getModule(options.module)
                .run(descriptor.value);
        }
        return descriptor.value;
    };
};

