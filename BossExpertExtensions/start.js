let _modPath;

exports.initialize = (modPath) => {
    _modPath = modPath;

    //New Components
        //Developer
    ComponentNames.AdvancedAlgorithmComponent = 'advancedalgorithmcomponent';
    Components.push({
        name: ComponentNames.AdvancedAlgorithmComponent,
        employeeLevel: Enums.EmployeeLevels.Expert,
        icon: modPath + 'graphics/developer/advancedalgorithmcomponent.png',
        employeeTypeName: Enums.EmployeeTypeNames.Developer,
        type: ComponentTypes.Component,
        produceHours: 24
    });
    ComponentNames.AdvancedInterface = 'advancedinterface';
    Components.push({
        name: ComponentNames.AdvancedInterface,
        employeeLevel: Enums.EmployeeLevels.Expert,
        icon: modPath + 'graphics/developer/advancedinterface.png',
        employeeTypeName: Enums.EmployeeTypeNames.Developer,
        type: ComponentTypes.Component,
        produceHours: 24
    });
    ComponentNames.SiteWideIntegration = 'sitewideintegration';
    Components.push({
        name: ComponentNames.SiteWideIntegration,
        employeeLevel: Enums.EmployeeLevels.Expert,
        icon: modPath + 'graphics/developer/sitewideintegration.png',
        employeeTypeName: Enums.EmployeeTypeNames.Developer,
        type: ComponentTypes.Component,
        produceHours: 24
    });
    ComponentNames.LargeSiteFramework = 'largesiteframework';
    Components.push({
        name: ComponentNames.LargeSiteFramework,
        employeeLevel: Enums.EmployeeLevels.Expert,
        icon: modPath + 'graphics/developer/largesiteframework.png',
        employeeTypeName: Enums.EmployeeTypeNames.Developer,
        type: ComponentTypes.Component,
        produceHours: 24
    });
        //Designer
    ComponentNames.DesignExecutionComponent = 'designexecutioncomponent';
    Components.push({
        name: ComponentNames.DesignExecutionComponent,
        employeeLevel: Enums.EmployeeLevels.Expert,
        icon: modPath + 'graphics/designer/designexecutioncomponent.png',
        employeeTypeName: Enums.EmployeeTypeNames.Designer,
        type: ComponentTypes.Component,
        produceHours: 24
    }); 
    ComponentNames.ExpertDesignIntegration = 'expertdesignintegration';
    Components.push({
        name: ComponentNames.ExpertDesignIntegration,
        employeeLevel: Enums.EmployeeLevels.Expert,
        icon: modPath + 'graphics/designer/expertdesignintegration.png',
        employeeTypeName: Enums.EmployeeTypeNames.Designer,
        type: ComponentTypes.Component,
        produceHours: 24
    }); 
    ComponentNames.ExpertDesignSet = 'expertdesignset';
    Components.push({
        name: ComponentNames.ExpertDesignSet,
        employeeLevel: Enums.EmployeeLevels.Expert,
        icon: modPath + 'graphics/designer/expertdesignset.png',
        employeeTypeName: Enums.EmployeeTypeNames.Designer,
        type: ComponentTypes.Module,
        requirements: {
            'DocumentationComponent': 1,
            'DesignGuidelines': 1,
            'designexecutioncomponent': 1,
            'expertdesignintegration': 1
        }
    }); 
        //SysAdmin
    ComponentNames.ConnectionHandling = 'connectionhandling';
    Components.push({
        name: ComponentNames.ConnectionHandling,
        employeeLevel: Enums.EmployeeLevels.Expert,
        icon: modPath + 'graphics/sysadmin/connectionhandling.png',
        employeeTypeName: Enums.EmployeeTypeNames.SysAdmin,
        type: ComponentTypes.Component,
        produceHours: 24
    }); 
    ComponentNames.FullSystemSet = 'fullsystemset';
    Components.push({
        name: ComponentNames.FullSystemSet,
        employeeLevel: Enums.EmployeeLevels.Expert,
        icon: modPath + 'graphics/sysadmin/fullsystemset.png',
        employeeTypeName: Enums.EmployeeTypeNames.SysAdmin,
        type: ComponentTypes.Module,
        requirements: {
            'basicsecuritysystem': 1,
            'intermediatesysset': 1,
            'Cluster': 1,
            'connectionhandling': 1
        }
    }); 
        //Lead Developer
    ComponentNames.ExpertSupplementModule = 'expertsupplementmodule';
    Components.push({
        name: ComponentNames.ExpertSupplementModule,
        employeeLevel: Enums.EmployeeLevels.Expert,
        icon: modPath + 'graphics/leaddev/expertsupplementmodule.png',
        employeeTypeName: Enums.EmployeeTypeNames.LeadDeveloper,
        type: ComponentTypes.Module,
        requirements: {
            'advancedalgorithmcomponent': 1,
            'advancedinterface': 1,
            'largesiteframework': 1
        }
    }); 
    ComponentNames.FinalIntegrationModule = 'finalintegrationmodule';
    Components.push({
        name: ComponentNames.FinalIntegrationModule,
        employeeLevel: Enums.EmployeeLevels.Expert,
        icon: modPath + 'graphics/leaddev/finalintegrationmodule.png',
        employeeTypeName: Enums.EmployeeTypeNames.LeadDeveloper,
        type: ComponentTypes.Module,
        requirements: {
            'serverinteractioncomponent': 2,
            'sitewideintegration': 1
        }
    }); 

    //Respective Researches
    ResearchItems.find(item => item.name == ResearchItemNames.ExpertDevkit).unlocks.push(
        ComponentNames.AdvancedAlgorithmComponent,
        ComponentNames.AdvancedInterface,
        ComponentNames.SiteWideIntegration,
        ComponentNames.LargeSiteFramework
    )
    ResearchItems.find(item => item.name == ResearchItemNames.ExpertDesignerKit).unlocks.push(
        ComponentNames.DesignExecutionComponent,
        ComponentNames.ExpertDesignIntegration,
        ComponentNames.ExpertDesignSet
    )
    ResearchItems.find(item => item.name == ResearchItemNames.ExpertSysAdminKit).unlocks.push(
        ComponentNames.ConnectionHandling,
        ComponentNames.FullSystemSet
    )
    ResearchItems.find(item => item.name == ResearchItemNames.ExpertLeadDevkit).unlocks.push(
        ComponentNames.ExpertSupplementModule,
        ComponentNames.FinalIntegrationModule
    )

    //Updated Feature Recipes (expert recipes)
    Object.assign(Features.find(feature => feature.name == FeatureNames.PaymentSystem).requirements,
        {
            "DatabaseLayer": 2,
            "FrontendModule": 1,
            "PaymentGatewayModule": 1,
            "EmailModule": 1,
            "DesignGuidelines": 1,
            "condensedfeatures": 1,
            "featureupgrader": 1,
            "featurefinalizer": 1,
            "beginnerdevmodule": 1,
            "fullsystemset": 1,
            "expertsupplementmodule": 1,
            "finalintegrationmodule": 1
        }
    )
    Object.assign(Features.find(feature => feature.name == FeatureNames.ChatSystem).requirements,
        {
            "DatabaseLayer": 1,
            "InputModule": 1,
            "NotificationModule": 2,
            "NetworkComponent": 3,
            "ApiClientModule": 2,
            "DesignGuidelines": 1,
            "condensedfeatures": 1,
            "featureupgrader": 1,
            "featurefinalizer": 1,
            "crossovermodule": 1,
            "expertdesignset": 1,
            "finalintegrationmodule": 1
        }
    )
    Object.assign(Features.find(feature => feature.name == FeatureNames.HelpSystem).requirements,
        {
            "ContentManagementModule": 4,
            "InputModule": 4,
            "FrontendModule": 3,
            "BackendModule": 3,
            "UiSet": 2,
            "DesignGuidelines": 1,
            "condensedfeatures": 1,
            "featureupgrader": 1,
            "featurefinalizer": 1,
            "basicalgorithm": 1,
            "finalintegrationmodule": 1
        }
    )

    //Localizor and Load
    exports.onLoadGame = settings => {
        
        $rootScope = GetRootScope();
        if($rootScope.options.language === "en"){
            //Developer
            Language['advancedalgoritmcomponent'] = "Advanced Algorithm Component"; //Graphics Done
            Language['advancedintergace'] = "Advanced Interface"; //Graphics Done
            Language['sitewideintegration'] = "Sitewide Integration"; //Graphics Done
            Language['largesiteframework'] = "Large Site Framework"; //Graphics Done
            //Designer
            Language['designexecutioncomponent'] = "Design Execution Component"; //Graphics Done
            Language['expertdesignintegration'] = "Expert Design Integration"; //Graphics Done
            Language['expertdesignset'] = "Expert Design Set"; //Graphics Done
            //SysAdmin
            Language['connectionhandling'] = "Connection Handling";
            Language['fullsystemset'] = "Full System Set";
            //Lead Developer
            Language['expertsupplementmodule'] = "Expert Supplement Module";
            Language['finalintegrationmodule'] = "Final Integration Module";
        }
    }
}