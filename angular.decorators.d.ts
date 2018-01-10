import * as angular from 'angular';
export interface ModuleOptions {
    module: string;
}
export interface ComponentOptions extends angular.IComponentOptions, ModuleOptions {
    selector: string;
    styles?: string;
}
export declare function NG1Component(options: ComponentOptions): Function;
export interface ServiceOptions extends ModuleOptions {
    serviceName: string;
}
export declare function NG1Service(options: ServiceOptions): Function;
export interface ProviderOptions extends ModuleOptions {
    providerName: string;
}
export declare function NG1Provider(options: ProviderOptions): Function;
export interface FactoryOptions extends ModuleOptions {
    factoryName: string;
}
export declare function NG1Factory(options: FactoryOptions): Function;
export interface FilterOptions extends ModuleOptions {
    filterName: string;
}
export declare function NG1Filter(options: FilterOptions): (target: any, propertyKey: string, descriptor: PropertyDescriptor) => any;
export declare function NG1Config(options: ModuleOptions): (target: any, propertyKey: string, descriptor: PropertyDescriptor) => any;
export declare function NG1Run(options: ModuleOptions): (target: any, propertyKey: string, descriptor: PropertyDescriptor) => any;
