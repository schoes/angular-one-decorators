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

export interface ComponentOptions extends angular.IComponentOptions {
    module: string;
    selector: string;
}
export const Component = (options: ComponentOptions): Function => {

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

export interface ServiceOptions {
    module: string;
    serviceName: string;
}
export const Service = (options: ServiceOptions): Function => {
    return (service: Function) => {
        if (typeof angular !== 'undefined') {
            _getModule(options.module)
                .service(options.serviceName, service);
        }
        return service;
    };
};

export interface FilterOptions {
    module: string;
    filterName: string;
}
export const Filter = (options: FilterOptions) => {
    return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
        if (typeof angular !== 'undefined') {
            _getModule(options.module)
                .filter(options.filterName, descriptor.value);
        }
        return descriptor.value;
    };
};