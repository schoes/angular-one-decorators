import * as angular from 'angular';
export interface ModuleOptions {
    module: string;
}
export interface ComponentOptions extends angular.IComponentOptions, ModuleOptions {
    selector: string;
    styles?: string;
}
export declare const Component: (options: ComponentOptions) => Function;
export interface ServiceOptions extends ModuleOptions {
    serviceName: string;
}
export declare const Service: (options: ServiceOptions) => Function;
export interface ProviderOptions extends ModuleOptions {
    providerName: string;
}
export declare const Provider: (options: ProviderOptions) => Function;
export interface FactoryOptions extends ModuleOptions {
    factoryName: string;
}
export declare const Factory: (options: FactoryOptions) => Function;
export interface FilterOptions extends ModuleOptions {
    filterName: string;
}
export declare const Filter: (options: FilterOptions) => (target: any, propertyKey: string, descriptor: PropertyDescriptor) => any;
export declare const Config: (options: ModuleOptions) => (target: any, propertyKey: string, descriptor: PropertyDescriptor) => any;
export declare const Run: (options: ModuleOptions) => (target: any, propertyKey: string, descriptor: PropertyDescriptor) => any;
