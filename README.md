## Typescript 2 Decorators for angular 1
Here you can find some useful decorators written in Typescript 2 for angular 1 project.
### Goal of these decorators
To help you out with the new semantic of angular 2 components I wrote some simple decorators in Typescript
## Examples
Below you will find useful examples of the different decorators
### Service
```typescript 
@Service({
    module: 'service.module' // name of the angular module where you would like to attach this service,
    serviceName: 'yourServiceName' // then name under which this service will be injected
})
export class YourNewService{
}
```
export class MyMobiliarContractService implements ContractService {
### Component
```typescript 
@Component({
    selector: 'httml-selector', // the name of your html-element
    module: 'component.module'  //name of the angular module where you would like to attach this component ,
    template: require('./your.template.html') // the template you want to use
})
export class YourComponentController {}
```
### Filter
```typescript 
export class YourFilterClass {
    @Filter({
        filterName: 'filter1',
        module: 'filter.module'
    })
    public filter1() {
        return (input: any) => {
           // do something with the input
        };
    }

    @Filter({
        filterName: 'filter2',
        module: 'filter.module'
    })
    public filter2() {
        return (input:any) => {
            console.log('vnKey', input);
        };
    }
}

```
