
// TODO: it's hard to maintain, better to separate them

export var EVENT_TEMPLATE = (event) => {
    return `function btn${event}() {
        console.log('Hello, ${event}!');
    };
    `;
};


export var CONTROLLER_TEMPLATE = (module, controller, service, event) => {
    return `
angular.module('${module}').controller('${controller}', function ($scope, ${service}) {
    var vm = this;

    vm.hello = function () {
        console.log('world');
    }
    
    vm.btn${event} = ${EVENT_TEMPLATE(event)}
});
    `;
};

// TODO: add service template
export var FACTORY_TEMPLATE = (module, service, event?) => {
    return `
angular.module('${module}').factory('${service}', function () {
    return {
       greetMe: greetMe
    };
        
    function greetMe() {
        console.log("Hello world!");
    }
    
});
    `;
};


export var MODULE_TEMPLATE = (module) => {
    return `
angular.module('${module}', []);
    `;
};


export var PAGE_TEMPLATE = (module, controller, service, event) => {
    return `
${MODULE_TEMPLATE(module)}
${CONTROLLER_TEMPLATE(module, controller, service, event)}
${FACTORY_TEMPLATE(module, service)}
    `;
};


