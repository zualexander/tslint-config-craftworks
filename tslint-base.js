module.exports = {
    "rulesDirectory": [
        "codelyzer", 
        "tslint-consistent-codestyle", 
        "tslint-jasmine-rules"
    ],
    "extends": [
        "tslint:recommended", 
        "tslint-angular", 
        "tslint-config-prettier", 
        
        // rsjs-tslint-rules does not support rulesDirectory
        "rxjs-tslint-rules"
    ]
}