let _modPath;

exports.initialize = (modPath) => {
    _modPath = modPath;

    //New Components
        //Developer
    ComponentNames.SenderComponent = 'sendercomponent';
    Components.push({
        name: ComponentNames.SenderComponent,
        employeeLevel: Enums.EmployeeLevels.Intermediate,
        icon: modPath + 'graphics/developer/sendercomponent.png',
        employeeTypeName: Enums.EmployeeTypeNames.Developer,
        type: ComponentTypes.Component,
        produceHours: 12
    });
    ComponentNames.CondensedComponent = 'condensedcomponent';
    Components.push({
        name: ComponentNames.CondensedComponent,
        employeeLevel: Enums.EmployeeLevels.Intermediate,
        icon: modPath + 'graphics/developer/condensedcomponent.png',
        employeeTypeName: Enums.EmployeeTypeNames.Developer,
        type: ComponentTypes.Component,
        produceHours: 12
    });
    ComponentNames.UserInteractionComponent = 'userinteractioncomponent';
    Components.push({
        name: ComponentNames.UserInteractionComponent,
        employeeLevel: Enums.EmployeeLevels.Intermediate,
        icon: modPath + 'graphics/developer/userinteractioncomponent.png',
        employeeTypeName: Enums.EmployeeTypeNames.Developer,
        type: ComponentTypes.Component,
        produceHours: 12
    });
    ComponentNames.ServerInteractionComponent = 'serverinteractioncomponent';
    Components.push({
        name: ComponentNames.ServerInteractionComponent,
        employeeLevel: Enums.EmployeeLevels.Intermediate,
        icon: modPath + 'graphics/developer/serverinteractioncomponent.png',
        employeeTypeName: Enums.EmployeeTypeNames.Developer,
        type: ComponentTypes.Component,
        produceHours: 12
    });
        //Designer
    ComponentNames.UICompatibilityComponent = 'uicompatibilitycomponent';
    Components.push({
        name: ComponentNames.UICompatibilityComponent,
        employeeLevel: Enums.EmployeeLevels.Intermediate,
        icon: modPath + 'graphics/designer/uicompatibilitycomponent.png',
        employeeTypeName: Enums.EmployeeTypeNames.Designer,
        type: ComponentTypes.Component,
        produceHours: 12
    });
    ComponentNames.DevDesCompatibilityComponent = 'devdescompatibilitycomponent';
    Components.push({
        name: ComponentNames.DevDesCompatibilityComponent,
        employeeLevel: Enums.EmployeeLevels.Intermediate,
        icon: modPath + 'graphics/designer/devdescompatibilitycomponent.png',
        employeeTypeName: Enums.EmployeeTypeNames.Designer,
        type: ComponentTypes.Component,
        produceHours: 12
    });
    ComponentNames.FullUISet = 'fulluiset';
    Components.push({
        name: ComponentNames.FullUISet,
        employeeLevel: Enums.EmployeeLevels.Intermediate,
        icon: modPath + 'graphics/designer/fulluiset.png',
        employeeTypeName:Enums.EmployeeTypeNames.Designer,
        type: ComponentTypes.Module,
        requirements: {
            'UiElement': 1,
            'aestheticscomponent': 1,
            'UiSet': 1,
            'uicompatibilitycomponent': 1
        }
    });
        //SysAdmin
    ComponentNames.ServerMonitorComponent = 'servermonitorcomponent';
    Components.push({
        name: ComponentNames.ServerMonitorComponent,
        employeeLevel: Enums.EmployeeLevels.Intermediate,
        icon: modPath + 'graphics/sysadmin/servermonitorcomponent.png',
        employeeTypeName: Enums.EmployeeTypeNames.SysAdmin,
        type: ComponentTypes.Component,
        produceHours: 12
    });
    ComponentNames.ServerConnectionComponent = 'serverconnectioncomponent';
    Components.push({
        name: ComponentNames.ServerConnectionComponent,
        employeeLevel: Enums.EmployeeLevels.Intermediate,
        icon: modPath + 'graphics/sysadmin/serverconnectioncomponent.png',
        employeeTypeName: Enums.EmployeeTypeNames.SysAdmin,
        type: ComponentTypes.Component,
        produceHours: 12
    });
    ComponentNames.IntermediateSysSet = 'intermediatesysset';
    Components.push({
        name: ComponentNames.IntermediateSysSet,
        employeeLevel: Enums.EmployeeLevels.Intermediate,
        icon: modPath + 'graphics/sysadmin/intermediatesysset.png',
        employeeTypeName:Enums.EmployeeTypeNames.SysAdmin,
        type: ComponentTypes.Module,
        requirements: {
            'ProcessManagement': 1,
            'CronJob': 1,
            'monitorset': 1,
            'serverconnectioncomponent': 1,
            "servermonitorcomponent": 1
        }
    });
        //Lead Developer
    ComponentNames.UserConnectionModule = 'userconnectionmodule';
    Components.push({
        name: ComponentNames.UserConnectionModule,
        employeeLevel: Enums.EmployeeLevels.Intermediate,
        icon: modPath + 'graphics/leaddev/userconnectionmodule.png',
        employeeTypeName:Enums.EmployeeTypeNames.LeadDeveloper,
        type: ComponentTypes.Module,
        requirements: {
            'serversideprocess': 1,
            'InterfaceModule': 1,
            'FrontendModule': 1,
            'csspack': 1,
            "devdescompatibilitycomponent": 1,
            "userinteractioncomponent": 1,
            "serverinteractioncomponent": 1
        }
    });
    ComponentNames.InteractableModule = 'interactablemodule';
    Components.push({
        name: ComponentNames.InteractableModule,
        employeeLevel: Enums.EmployeeLevels.Intermediate,
        icon: modPath + 'graphics/leaddev/interactablemodule.png',
        employeeTypeName:Enums.EmployeeTypeNames.LeadDeveloper,
        type: ComponentTypes.Module,
        requirements: {
            'InputModule': 1,
            'programmodule': 1,
            'serversideprocess': 1,
            'csspack': 1,
            "devdescompatibilitycomponent": 1,
            "sendercomponent": 1
        }
    });
    ComponentNames.ConstantFixesModule = 'constantfixesmodule';
    Components.push({
        name: ComponentNames.ConstantFixesModule,
        employeeLevel: Enums.EmployeeLevels.Intermediate,
        icon: modPath + 'graphics/leaddev/constantfixesmodule.png',
        employeeTypeName:Enums.EmployeeTypeNames.LeadDeveloper,
        type: ComponentTypes.Module,
        requirements: {
            'basicalgorithm': 1,
            'BackendModule': 1,
            'programmodule': 1,
            'monitorset': 1,
            "condensedcomponent": 2
        }
    });
    ComponentNames.SustainingModule = 'sustainingmodule';
    Components.push({
        name: ComponentNames.SustainingModule,
        employeeLevel: Enums.EmployeeLevels.Intermediate,
        icon: modPath + 'graphics/leaddev/sustainingmodule.png',
        employeeTypeName:Enums.EmployeeTypeNames.LeadDeveloper,
        type: ComponentTypes.Module,
        requirements: {
            'basicinterface': 1,
            'StorageModule': 1,
            'developerintegration': 1,
            'programmodule': 1,
            "processhandler": 1,
            "intermediatesysset": 1
        }
    });
    ComponentNames.ServerStrengthModule = 'serverstrengthmodule';
    Components.push({
        name: ComponentNames.ServerStrengthModule,
        employeeLevel: Enums.EmployeeLevels.Intermediate,
        icon: modPath + 'graphics/leaddev/serverstrengthmodule.png',
        employeeTypeName:Enums.EmployeeTypeNames.LeadDeveloper,
        type: ComponentTypes.Module,
        requirements: {
            'ContentManagementModule': 3,
            'monitorset': 1,
            'intermediatesysset': 1
        }
    });
    ComponentNames.IntermediateDesignerModule = 'intermediatedesignermodule';
    Components.push({
        name: ComponentNames.IntermediateDesignerModule,
        employeeLevel: Enums.EmployeeLevels.Intermediate,
        icon: modPath + 'graphics/leaddev/intermediatedesignermodule.png',
        employeeTypeName:Enums.EmployeeTypeNames.LeadDeveloper,
        type: ComponentTypes.Module,
        requirements: {
            'uicompatibilitycomponent': 1,
            'fulluiset': 1,
            'ResponsiveUi': 1,
            "beginnerdesignermodule": 1
        }
    });

    //Adding components and modules to respective research
    ResearchItems.find(item => item.name == ResearchItemNames.IntermediateDevkit).unlocks.push(
        ComponentNames.SenderComponent,
        ComponentNames.CondensedComponent,
        ComponentNames.UserInteractionComponent,
        ComponentNames.ServerInteractionComponent
    )
    ResearchItems.find(item => item.name == ResearchItemNames.IntermediateDesignerKit).unlocks.push(
        ComponentNames.UICompatibilityComponent,
        ComponentNames.DevDesCompatibilityComponent,
        ComponentNames.FullUISet
    )
    ResearchItems.find(item => item.name == ResearchItemNames.IntermediateSysAdminKit).unlocks.push(
        ComponentNames.ServerMonitorComponent,
        ComponentNames.ServerConnectionComponent,
        ComponentNames.IntermediateSysSet
    )
    ResearchItems.find(item => item.name == ResearchItemNames.IntermediateLeadDevkit).unlocks.push(
        ComponentNames.UserConnectionModule,
        ComponentNames.InteractableModule,
        ComponentNames.ConstantFixesModule,
        ComponentNames.SustainingModule,
        ComponentNames.ServerStrengthModule,
        ComponentNames.IntermediateDesignerModule
    )

    //Updated module recipes
        //Designer
    Components.find(component => component.name == ComponentNames.UiSet).requirements = 
    {
        "WireframeComponent": 2,
        "UiElement": 2,
        "csscomponent": 2,
        "uicompatibilitycomponent": 1
    }
    Components.find(component => component.name == ComponentNames.ResponsiveUi).requirements = 
    {
        "WireframeComponent": 2,
        "UiElement": 2,
        "uicompatibilitycomponent": 1,
        "devdescompatibilitycomponent": 1
    }
        //SysAdmin
    Components.find(component => component.name == ComponentNames.VirtualContainer).requirements = 
    {
        "VirtualHardware": 1,
        "OperatingSystem": 1,
        "ProcessManagement": 1,
        "ContinuousIntegration": 1,
        "CronJob": 1,
        "monitorset": 1,
        "servermonitorcomponent": 1
    }
    Components.find(component => component.name == ComponentNames.MaintenancePack).requirements = 
    {
        'basicsecuritysystem': 2,
        'ProcessManagement': 1,
        'monitorset': 1,
        "intermediatesysset": 1
    }
        //Lead Developer
            //Intermediate Modules
    Components.find(component => component.name == ComponentNames.SeoModule).requirements = 
    {
        "FrontendModule": 1,
        "SemanticComponent": 1,
        "backgroundtasks": 1,
        "processhandler": 1,
        "basicalgorithm": 1,
        "beginnerdevmodule": 1,
        "condensedcomponent": 1
    }
    Components.find(component => component.name == ComponentNames.EmailModule).requirements = 
    {
        "SmtpComponent": 1,
        "BackendModule": 1,
        "processhandler": 1,
        "presentationmodule": 1,
        "crossovermodule": 1,
        "userinteractioncomponent": 1,
        "devdescompatibilitycomponent": 1
    }
    Components.find(component => component.name == ComponentNames.DatabaseLayer).requirements = 
    {
        "DatabaseComponent": 1,
        "BackendComponent": 2,
        "NetworkComponent": 1,
        "databasebacking": 1,
        "serversideprocess": 1,
        "filemanager": 1,
        "serverinteractioncomponent": 1
    }
    Components.find(component => component.name == ComponentNames.NotificationModule).requirements = 
    {
        "UiComponent": 1,
        "BackendComponent": 1,
        "NetworkComponent": 1,
        "csscomponent": 1,
        "presentationmodule": 1,
        "beginnerdesignermodule": 1,
        "userinteractioncomponent": 1,
        "fulluiset": 1
    }
    Components.find(component => component.name == ComponentNames.AuthenticationModule).requirements = 
    {
        "DatabaseComponent": 1,
        "EncryptionComponent": 1,
        "BackendModule": 1,
        "basicinterface": 1,
        "processhandler": 1,
        "frameworkmodule": 1,
        "authcomponent": 1,
        "userinteractioncomponent": 1,
        "serverinteractioncomponent": 1
    }
            //Expert modules
    Components.find(component => component.name == ComponentNames.PaymentGatewayModule).requirements = 
    {
        "DatabaseLayer": 1,
        "ApiClientModule": 1,
        "AuthenticationModule": 1,
        "condensedfeatures": 1,
        "efficiencycomponent": 1,
        "crossovermodule": 1,
        "interactablemodule": 1
    }
    Components.find(component => component.name == ComponentNames.LocalizationModule).requirements = 
    {
        "I18nComponent": 1,
        "FrontendModule": 1,
        "condensedfeatures": 1,
        "efficiencycomponent": 1,
        "crossovermodule": 1,
        "constantfixesmodule": 1
    }
    Components.find(component => component.name == ComponentNames.SearchModule).requirements = 
    {
        "DatabaseComponent": 1,
        "SearchAlgorithmComponent": 1,
        "BackendComponent": 1,
        "condensedfeatures": 1,
        "efficiencycomponent": 1,
        "crossovermodule": 1,
        "userconnectionmodule": 1
    }
    Components.find(component => component.name == ComponentNames.BandwidthCompressionModule).requirements = 
    {
        "CompressionComponent": 1,
        "NetworkComponent": 1,
        "BackendComponent": 1,
        "condensedfeatures": 1,
        "efficiencycomponent": 1,
        "crossovermodule": 1,
        "condensedcomponent": 1,
        "sustainingmodule": 1,
        "serverstrengthmodule": 1
    }
    Components.find(component => component.name == ComponentNames.CodeOptimizationModule).requirements = 
    {
        "BackendModule": 2,
        "DatabaseLayer": 2,
        "FrontendModule": 2,
        "condensedfeatures": 1,
        "efficiencycomponent": 1,
        "crossovermodule": 1,
        "condensedcomponent": 1
    }
    Components.find(component => component.name == ComponentNames.ApiClientModule).requirements = 
    {
        "BackendModule": 1,
        "DatabaseLayer": 1,
        "CompressionComponent": 1,
        "condensedfeatures": 1,
        "efficiencycomponent": 1,
        "crossovermodule": 1,
        "intermediatedesignermodule": 1
    }

    //NO REQUIRED FEATURE RECIPE UPDATES
    
    //Localizor and Load
    exports.onLoadGame = settings => {
        
        $rootScope = GetRootScope();
        if($rootScope.options.language === "en"){
            //Developer
            Language['sendercomponent'] = "Sender Component"; //Graphics done
            Language['condensedcomponent'] = "Condensed Component"; //Graphics Done
            Language['userinteractioncomponent'] = "User Interaction Component"; //Graphics Done
            Language['serverinteractioncomponent'] = "Server Interaction Component"; //Graphics Done
            //Designer
            Language['uicompatibilitycomponent'] = "UI Compatibility Component"; //Graphics Done
            Language['devdescompatibilitycomponent'] = "Dev-Des Compatibility Component"; //Graphics Done
            Language['fulluiset'] = "Full UI Set"; //Graphics Done
            //SysAdmin
            Language['servermonitorcomponent'] = "Server Monitor Component"; //Graphics Done
            Language['serverconnectioncomponent'] = "Server Connection Component"; //Graphics Done
            Language['intermediatesysset'] = "Intermediate SysSet"; //Graphics Done
            //Lead Developer
            Language['userconnectionmodule'] = "User Connection Module"; //Graphics Done
            Language['interactablemodule'] = "Interactable Module"; //Graphics Done
            Language['constantfixesmodule'] = "Constant Fixes Module"; //Graphics Done
            Language['sustainingmodule'] = "Sustaining Module"; //Graphics Done
            Language['serverstrengthmodule'] = "Server Strength Module"; //Graphics Done
            Language['intermediatedesignermodule'] = "Intermediate Designer Module"; //Graphics Done
        }
    }
}