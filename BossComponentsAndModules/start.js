let _modPath;

exports.initialize = (modPath) => {
    _modPath = modPath;


    //New Components
        //Beginner Developer Components
    ComponentNames.BackgroundTasks = 'backgroundtasks';
    Components.push({
        name: ComponentNames.BackgroundTasks,
        employeeLevel: Enums.EmployeeLevels.Beginner,
        icon: modPath + 'images/bdevbackgroundtasks.png',
        employeeTypeName:Enums.EmployeeTypeNames.Developer,
        type: ComponentTypes.Component,
        produceHours: 4
    });
    ComponentNames.ControlComponent = 'controlcomponent';
    Components.push({
        name: ComponentNames.ControlComponent,
        employeeLevel: Enums.EmployeeLevels.Beginner,
        icon: modPath + 'images/bdevcontrolcomponent.png',
        employeeTypeName: Enums.EmployeeTypeNames.Developer,
        type: ComponentTypes.Component,
        produceHours: 4
    });
    ComponentNames.HTMLBase = 'htmlbase';
    Components.push({
        name: ComponentNames.HTMLBase,
        employeeLevel: Enums.EmployeeLevels.Beginner,
        icon: modPath + 'images/bdevhtmlbase.png',
        employeeTypeName:Enums.EmployeeTypeNames.Developer,
        type: ComponentTypes.Component,
        produceHours: 4
    });
        //Intermediate Developer Components
    ComponentNames.OverlookComponent = 'overlookcomponent';
    Components.push({
        name: ComponentNames.OverlookComponent,
        employeeLevel: Enums.EmployeeLevels.Intermediate,
        icon: modPath + 'images/idevoverlookcomponent.png',
        employeeTypeName:Enums.EmployeeTypeNames.Developer,
        type: ComponentTypes.Component,
        produceHours: 6
    });
    ComponentNames.SystemManagement = 'systemmanagement';
    Components.push({
        name: ComponentNames.SystemManagement,
        employeeLevel: Enums.EmployeeLevels.Intermediate,
        icon: modPath + 'images/idevsystemmanagement.png',
        employeeTypeName:Enums.EmployeeTypeNames.Developer,
        type: ComponentTypes.Component,
        produceHours: 6
    });
    ComponentNames.FilingBase = 'filingbase';
    Components.push({
        name: ComponentNames.FilingBase,
        employeeLevel: Enums.EmployeeLevels.Intermediate,
        icon: modPath + 'images/idevfilingbase.png',
        employeeTypeName:Enums.EmployeeTypeNames.Developer,
        type: ComponentTypes.Component,
        produceHours: 8
    });
        //Expert Developer Components
    ComponentNames.AnalysisComponent = 'analysiscomponent';
    Components.push({
        name: ComponentNames.AnalysisComponent,
        employeeLevel: Enums.EmployeeLevels.Expert,
        icon: modPath + 'images/edevanalysiscomponent.png',
        employeeTypeName:Enums.EmployeeTypeNames.Developer,
        type: ComponentTypes.Component,
        produceHours: 6
    });
    ComponentNames.AlgorithmUpdater = 'algorithmupdater';
    Components.push({
        name: ComponentNames.AlgorithmUpdater,
        employeeLevel: Enums.EmployeeLevels.Expert,
        icon: modPath + 'images/edevalgorithmupdater.png',
        employeeTypeName:Enums.EmployeeTypeNames.Developer,
        type: ComponentTypes.Component,
        produceHours: 8
    });
    ComponentNames.HighEndController = 'highendcontroller';
    Components.push({
        name: ComponentNames.HighEndController,
        employeeLevel: Enums.EmployeeLevels.Expert,
        icon: modPath + 'images/edevhighendcontroller.png',
        employeeTypeName:Enums.EmployeeTypeNames.Developer,
        type: ComponentTypes.Component,
        produceHours: 8
    });
    //DESIGNER
        //Beginner Designer Components
    ComponentNames.CSSComponent = 'csscomponent';
    Components.push({
        name: ComponentNames.CSSComponent,
        employeeLevel: Enums.EmployeeLevels.Beginner,
        icon: modPath + 'images/bdescsscomponent.png',
        employeeTypeName:Enums.EmployeeTypeNames.Designer,
        type: ComponentTypes.Component,
        produceHours: 4
    });
    ComponentNames.Aesthetics = 'aesthetics';
    Components.push({
        name: ComponentNames.Aesthetics,
        employeeLevel: Enums.EmployeeLevels.Beginner,
        icon: modPath + 'images/bdesaesthetics.png',
        employeeTypeName:Enums.EmployeeTypeNames.Designer,
        type: ComponentTypes.Component,
        produceHours: 4
    });
    ComponentNames.ImplementationAssets = 'implementationassets';
    Components.push({
        name: ComponentNames.ImplementationAssets,
        employeeLevel: Enums.EmployeeLevels.Beginner,
        icon: modPath + 'images/bdesimplementationassets.png',
        employeeTypeName:Enums.EmployeeTypeNames.Designer,
        type: ComponentTypes.Component,
        produceHours: 6
    });
        //Intermediate Designer Components
    ComponentNames.UIFix = 'uifix';
    Components.push({
        name: ComponentNames.UIFix,
        employeeLevel: Enums.EmployeeLevels.Intermediate,
        icon: modPath + 'images/idesuifix.png',
        employeeTypeName:Enums.EmployeeTypeNames.Designer,
        type: ComponentTypes.Component,
        produceHours: 6
    });
    ComponentNames.BlueprintComponentII = 'blueprintcomponentii';
    Components.push({
        name: ComponentNames.BlueprintComponentII,
        employeeLevel: Enums.EmployeeLevels.Intermediate,
        icon: modPath + 'images/idesblueprintcomponentii.png',
        employeeTypeName:Enums.EmployeeTypeNames.Designer,
        type: ComponentTypes.Component,
        produceHours: 6
    });
    ComponentNames.DesignAssets = 'designassets';
    Components.push({
        name: ComponentNames.DesignAssets,
        employeeLevel: Enums.EmployeeLevels.Intermediate,
        icon: modPath + 'images/idesdesignassets.png',
        employeeTypeName:Enums.EmployeeTypeNames.Designer,
        type: ComponentTypes.Component,
        produceHours: 8
    });
    //Expert Designer Components
    ComponentNames.CompleteUI = 'completeui';
    Components.push({
        name: ComponentNames.CompleteUI,
        employeeLevel: Enums.EmployeeLevels.Expert,
        icon: modPath + 'images/edescompleteui.png',
        employeeTypeName:Enums.EmployeeTypeNames.Designer,
        type: ComponentTypes.Module,
        requirements: {
            'UiElement':2,
            'UiSet':2,
            'ResponsiveUi':2,
            'uifix':2
        }
    });
    ComponentNames.PleasingAesthetics = 'pleasingaesthetics';
    Components.push({
        name: ComponentNames.PleasingAesthetics,
        employeeLevel: Enums.EmployeeLevels.Expert,
        icon: modPath + 'images/edespleasingaesthetics.png',
        employeeTypeName:Enums.EmployeeTypeNames.Designer,
        type: ComponentTypes.Component,
        produceHours: 18
    });
    ComponentNames.MasterBlueprint = 'masterblueprint';
    Components.push({
        name: ComponentNames.MasterBlueprint,
        employeeLevel: Enums.EmployeeLevels.Expert,
        icon: modPath + 'images/edesmasterblueprint.png',
        employeeTypeName:Enums.EmployeeTypeNames.Designer,
        type: ComponentTypes.Component,
        produceHours: 24
    });

    //Beginner Lead Developer Components
    ComponentNames.FrameworkModule = 'frameworkmodule';
    Components.push({
        name: ComponentNames.FrameworkModule,
        employeeLevel: Enums.EmployeeLevels.Beginner,
        icon: modPath + 'images/bldframeworkmodule.png',
        employeeTypeName:Enums.EmployeeTypeNames.LeadDeveloper,
        type: ComponentTypes.Module,
        requirements: {
            'controlcomponent': 1,
            'implementationassets': 1,
            'DatabaseComponent': 2,
            'BackendComponent': 1
        }
    });
    ComponentNames.AestheticsModule = 'aestheticsmodule';
    Components.push({
        name: ComponentNames.AestheticsModule,
        employeeLevel: Enums.EmployeeLevels.Beginner,
        icon: modPath + 'images/bldaestheticsmodule.png',
        employeeTypeName:Enums.EmployeeTypeNames.LeadDeveloper,
        type: ComponentTypes.Module,
        requirements: {
            'GraphicsComponent': 2,
            'UiElement': 1,
            'designassets': 1,
            'aesthetics': 2
        }
    });
    ComponentNames.ControlsModule = 'controlsmodule';
    Components.push({
        name: ComponentNames.ControlsModule,
        employeeLevel: Enums.EmployeeLevels.Beginner,
        icon: modPath + 'images/bldcontrolsmodule.png',
        employeeTypeName:Enums.EmployeeTypeNames.LeadDeveloper,
        type: ComponentTypes.Module,
        requirements: {
            'controlcomponent': 2,
            'systemmanagement': 1,
            'BackendComponent': 1
        }
    });
    ComponentNames.FeatureUpgrader = 'featureupgrader';
    Components.push({
        name: ComponentNames.FeatureUpgrader,
        employeeLevel: Enums.EmployeeLevels.Beginner,
        icon: modPath + 'images/bldfeatureupgrader.png',
        employeeTypeName:Enums.EmployeeTypeNames.LeadDeveloper,
        type: ComponentTypes.Module,
        requirements: {
            'NetworkComponent': 1,
            'BlueprintComponent': 1,
            'backgroundtasks': 1
        }
    });
    //INTERMEDIATE LEAD DEVELOPER MODULES
    ComponentNames.Package = 'package';
    Components.push({
        name: ComponentNames.Package,
        employeeLevel: Enums.EmployeeLevels.Intermediate,
        icon: modPath + 'images/ildpackage.png',
        employeeTypeName:Enums.EmployeeTypeNames.LeadDeveloper,
        type: ComponentTypes.Module,
        requirements: {
            'uifix': 1,
            'filingbase': 1,
            'frameworkmodule': 1
        }
    });
    ComponentNames.IntermediateAssetsPack = 'intermediateassetspack';
    Components.push({
        name: ComponentNames.IntermediateAssetsPack,
        employeeLevel: Enums.EmployeeLevels.Intermediate,
        icon: modPath + 'images/ildintermediateassetspack.png',
        employeeTypeName:Enums.EmployeeTypeNames.LeadDeveloper,
        type: ComponentTypes.Module,
        requirements: {
            'implementationassets': 1,
            'designassets': 1,
            'ContentManagementModule': 1,
            'controlsmodule': 1
        }
    });
    ComponentNames.SupplementalBacking = 'supplementalbacking';
    Components.push({
        name: ComponentNames.SupplementalBacking,
        employeeLevel: Enums.EmployeeLevels.Intermediate,
        icon: modPath + 'images/ildsupplementalbacking.png',
        employeeTypeName:Enums.EmployeeTypeNames.LeadDeveloper,
        type: ComponentTypes.Module,
        requirements: {
            'systemmanagement': 1,
            'blueprintcomponentii': 1,
            'frameworkmodule': 1
        }
    });
    ComponentNames.IntermediateBuilds = 'intermediatebuilds';
    Components.push({
        name: ComponentNames.IntermediateBuilds,
        employeeLevel: Enums.EmployeeLevels.Intermediate,
        icon: modPath + 'images/ildintermediatebuilds.png',
        employeeTypeName:Enums.EmployeeTypeNames.LeadDeveloper,
        type: ComponentTypes.Module,
        requirements: {
            'systemmanagement': 1,
            'designassets': 1,
            'frameworkmodule': 1,
            'DatabaseLayer': 1
        }
    });
    //EXPERT LEAD DEVELOPER MODULES
    ComponentNames.AdvancedTasks = 'advancedtasks';
    Components.push({
        name: ComponentNames.AdvancedTasks,
        employeeLevel: Enums.EmployeeLevels.Expert,
        icon: modPath + 'images/eldadvancedtasks.png',
        employeeTypeName:Enums.EmployeeTypeNames.LeadDeveloper,
        type: ComponentTypes.Module,
        requirements: {
            'algorithmupdater': 1,
            'highendcontroller': 1,
            'masterblueprint': 1,
            'ContentManagementModule': 1
        }
    });
    ComponentNames.SpeedClient = 'speedclient';
    Components.push({
        name: ComponentNames.SpeedClient,
        employeeLevel: Enums.EmployeeLevels.Expert,
        icon: modPath + 'images/eldspeedclient.png',
        employeeTypeName:Enums.EmployeeTypeNames.LeadDeveloper,
        type: ComponentTypes.Module,
        requirements: {
            'analysiscomponent': 1,
            'overlookcomponent': 1,
            'supplementalbacking': 1,
            'package': 1
        }
    });
    ComponentNames.OptimizedAlgorithm = 'optimizedalgorithm';
    Components.push({
        name: ComponentNames.OptimizedAlgorithm,
        employeeLevel: Enums.EmployeeLevels.Expert,
        icon: modPath + 'images/eldoptimizedalgorithm.png',
        employeeTypeName:Enums.EmployeeTypeNames.LeadDeveloper,
        type: ComponentTypes.Module,
        requirements: {
            'algorithmupdater': 1,
            'controlsmodule': 1,
            'SearchAlgorithmComponent': 2,
            'intermediatebuilds': 1
        }
    });
    ComponentNames.CompleteAssets = 'completeassets';
    Components.push({
        name: ComponentNames.CompleteAssets,
        employeeLevel: Enums.EmployeeLevels.Expert,
        icon: modPath + 'images/eldcompleteassets.png',
        employeeTypeName:Enums.EmployeeTypeNames.LeadDeveloper,
        type: ComponentTypes.Module,
        requirements: {
            'completeui': 1,
            'pleasingaesthetics': 1,
            'intermediateassetspack': 1,
            'GraphicsComponent': 1
        }
    });

    //Include the research for new items
    //DEVELOPER RESEARCH
    ResearchItems.find(item => item.name == ResearchItemNames.BeginnerDevkit).unlocks.push(
        ComponentNames.BackgroundTasks,
        ComponentNames.ControlComponent,
        ComponentNames.HTMLBase
    )
    ResearchItems.find(item => item.name == ResearchItemNames.IntermediateDevkit).unlocks.push(
        ComponentNames.OverlookComponent,
        ComponentNames.SystemManagement,
        ComponentNames.FilingBase
    )
    ResearchItems.find(item => item.name == ResearchItemNames.ExpertDevkit).unlocks.push(
        ComponentNames.AnalysisComponent,
        ComponentNames.AlgorithmUpdater,
        ComponentNames.HighEndController
    )
    //DESIGNER RESEARCH
    ResearchItems.find(item => item.name == ResearchItemNames.BeginnerDesignerKit).unlocks.push(
        ComponentNames.Aesthetics,
        ComponentNames.ImplementationAssets
    )
    ResearchItems.find(item => item.name == ResearchItemNames.IntermediateDesignerKit).unlocks.push(
        ComponentNames.UIFix,
        ComponentNames.BlueprintComponentII,
        ComponentNames.DesignAssets
    )
    ResearchItems.find(item => item.name == ResearchItemNames.ExpertDesignerKit).unlocks.push(
        ComponentNames.CompleteUI,
        ComponentNames.PleasingAesthetics,
        ComponentNames.MasterBlueprint
    )
    //LEAD DEVELOPER RESEARCH
    ResearchItems.find(item => item.name == ResearchItemNames.BeginnerLeadDevkit).unlocks.push(
        ComponentNames.FrameworkModule,
        ComponentNames.AestheticsModule,
        ComponentNames.ControlsModule,
        ComponentNames.FeatureUpgrader
    )
    ResearchItems.find(item => item.name == ResearchItemNames.IntermediateLeadDevkit).unlocks.push(
        ComponentNames.Package,
        ComponentNames.IntermediateAssetsPack,
        ComponentNames.SupplementalBacking,
        ComponentNames.IntermediateBuilds
    )
    ResearchItems.find(item => item.name == ResearchItemNames.ExpertLeadDevkit).unlocks.push(
        ComponentNames.AdvancedTasks,
        ComponentNames.SpeedClient,
        ComponentNames.OptimizedAlgorithm,
        ComponentNames.CompleteAssets
    )

    //New Recipes for Existing Lead Developer Modules
    Components.find(component => component.name == ComponentNames.InterfaceModule).requirements = 
    {
        "UiElement": 2,
        "WireframeComponent": 1,
        "csscomponent": 1,
        "aesthetics": 2
    }
    Components.find(component => component.name == ComponentNames.FrontendModule).requirements = 
    {
        "UiElement": 1,
        "InterfaceModule": 1,
        "implementationassets": 1
    }
    Components.find(component => component.name == ComponentNames.BackendModule).requirements = 
    {
        "BackendComponent": 2,
        "NetworkComponent": 1,
        "backgroundtasks": 2
    }
    Components.find(component => component.name == ComponentNames.InputModule).requirements = 
    {
        "UiComponent": 1,
        "BackendComponent": 1,
        "htmlbase": 1,
        "filingbase": 1
    }
    Components.find(component => component.name == ComponentNames.StorageModule).requirements = 
    {
        "FilesystemComponent": 1,
        "BackendComponent": 1,
        "htmlbase": 1,
        "filingbase": 1
    }
    Components.find(component => component.name == ComponentNames.ContentManagementModule).requirements = 
    {
        "FrontendModule": 1,
        "InputModule": 1,
        "BackendModule": 1,
        "overlookcomponent": 4
    }
    Components.find(component => component.name == ComponentNames.VideoPlaybackModule).requirements = 
    {
        "VideoComponent": 1,
        "FrontendModule": 1,
        "BackendModule": 1,
        "systemmanagement": 1,
        "blueprintcomponentii": 1
    }
    //Intermediate
    Components.find(component => component.name == ComponentNames.SeoModule).requirements = 
    {
        "FrontendModule": 1,
        "SemanticComponent": 1,
        "overlookcomponent": 1,
        "controlsmodule": 1
    }
    Components.find(component => component.name == ComponentNames.EmailModule).requirements = 
    {
        "SmtpComponent": 1,
        "BackendComponent": 1,
        "filingbase": 1
    }
    Components.find(component => component.name == ComponentNames.DatabaseLayer).requirements = 
    {
        "DatabaseComponent": 1,
        "BackendComponent": 1,
        "NetworkComponent": 1,
        "controlsmodule": 1,
        "systemmanagement": 1
    }
    Components.find(component => component.name == ComponentNames.NotificationModule).requirements = 
    {
        "UiComponent": 1,
        "BackendComponent": 1,
        "EmailModule": 1,
        "systemmanagement": 2,
        "designassets": 1,
        "aestheticsmodule": 1
    }
    Components.find(component => component.name == ComponentNames.AuthenticationModule).requirements = 
    {
        "DatabaseComponent": 1,
        "EncryptionComponent": 1,
        "BackendModule": 1,
        "filingbase": 1,
        "implementationassets": 1
    }
    //Expert
    Components.find(component => component.name == ComponentNames.PaymentGatewayModule).requirements = 
    {
        "DatabaseLayer": 1,
        "ApiClientModule": 1,
        "AuthenticationModule": 1,
        "package": 1
    }
    Components.find(component => component.name == ComponentNames.LocalizationModule).requirements = 
    {
        "I18nComponent": 1,
        "FrontendModule": 1,
        "advancedtasks": 1,
        "supplementalbacking": 1
    }
    Components.find(component => component.name == ComponentNames.SearchModule).requirements = 
    {
        "DatabaseComponent": 1,
        "SearchAlgorithmComponent": 1,
        "BackendComponent": 1,
        "optimizedalgorithm": 1
    }
    Components.find(component => component.name == ComponentNames.BandwidthCompressionModule).requirements = 
    {
        "CompressionComponent": 1,
        "NetworkComponent": 1,
        "BackendComponent": 1,
        "speedclient": 1
    }
    Components.find(component => component.name == ComponentNames.CodeOptimizationModule).requirements = 
    {
        "BackendModule": 2,
        "DatabaseLayer": 2,
        "FrontendModule": 2,
        "completeassets": 1
    }
    Components.find(component => component.name == ComponentNames.ApiClientModule).requirements = 
    {
        "BackendModule": 1,
        "DatabaseLayer": 1,
        "CompressionComponent": 1,
        "controlsmodule": 1
    }

    //Feature Recipe Edits
    Object.assign(Features.find(feature => feature.name == FeatureNames.LandingPage).requirements,
        {
            "featureupgrader": 1
        }
    )
    Object.assign(Features.find(feature => feature.name == FeatureNames.ItemListing).requirements,
        {
            "frameworkmodule": 1,
            "featureupgrader": 1
        }
    )
    Object.assign(Features.find(feature => feature.name == FeatureNames.SharingFunctionality).requirements,
        {
            "aestheticsmodule": 1,
        }
    )
    Object.assign(Features.find(feature => feature.name == FeatureNames.ImageUpload).requirements,
        {
            "controlsmodule": 1,
            "featureupgrader": 1
        }
    )
    Object.assign(Features.find(feature => feature.name == FeatureNames.PaymentSystem).requirements,
        {
            "package": 1,
            "featureupgrader": 1
        }
    )
    Object.assign(Features.find(feature => feature.name == FeatureNames.ChatSystem).requirements,
        {
            "speedclient": 1,
            "completeassets": 1,
            "featureupgrader": 1
        }
    )
    Object.assign(Features.find(feature => feature.name == FeatureNames.LiveStreaming).requirements,
        {
            "featureupgrader": 1
        }
    )
    Object.assign(Features.find(feature => feature.name == FeatureNames.CommentFunctionality).requirements,
        {
            "featureupgrader": 1
        }
    )
    Object.assign(Features.find(feature => feature.name == FeatureNames.OfflineContent).requirements,
        {
            "controlsmodule": 1,
            "featureupgrader": 1
        }
    )
    Object.assign(Features.find(feature => feature.name == FeatureNames.VideoEditor).requirements,
        {
            "intermediateassetspack": 1,
            "featureupgrader": 1
        }
    )
    Object.assign(Features.find(feature => feature.name == FeatureNames.VideoFunctionality).requirements,
        {
            "implementationassets": 1,
            "featureupgrader": 1
        }
    )

};

exports.onLoadGame = settings => {

    $rootScope = GetRootScope();
    if($rootScope.options.language === "en") {
        //Developer
        Language['backgroundtasks'] = "Background Tasks";
        Language['controlcomponent'] = "Control Component";
        Language['htmlbase'] = "HTML Base";
        Language['overlookcomponent'] = "Overlook Component";
        Language['systemmanagement'] = "System Management";
        Language['filingbase'] = "Filing Base";
        Language['analysiscomponent'] = "Analysis Component";
        Language['algorithmupdater'] = "Algorithm Updater";
        Language['highendcontroller'] = "High-End Controller";
        //Designer
        Language['csscomponent'] = "CSS Component";
        Language['aesthetics'] = "Aesthetics";
        Language['implementationassets'] = "Implementation Assets";
        Language['uifix'] = "UI Fix";
        Language['blueprintcomponentii'] = "Blueprint Component II";
        Language['designassets'] = "Design Assets";
        Language['completeui'] = "Complete UI";
        Language['pleasingaesthetics'] = "Pleasing Aesthetics";
        Language['masterblueprint'] = "Master Blueprint";
        //Lead Developer
        Language['frameworkmodule'] = "Framework Module";
        Language['aestheticsmodule'] = "Aesthetics Module";
        Language['controlsmodule'] = "Controls Module";
        Language['featureupgrader'] = "Feature Upgrader";
        Language['package'] = "Package";
        Language['intermediateassetspack'] = "Intermediate Assets Pack";
        Language['supplementalbacking'] = "Supplemental Backing";
        Language['intermediatebuilds'] = "Intermediate Builds";
        Language['advancedtasks'] = "Advanced Tasks";
        Language['speedclient'] = "Speed Client";
        Language['optimizedalgorithm'] = "Optimized Algorithm";
        Language['completeassets'] = "Complete Assets";
    }
};

exports.onNewHour = settings => {};
exports.onNewDay = settings => {};