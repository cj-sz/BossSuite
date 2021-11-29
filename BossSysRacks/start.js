let _modPath;

exports.initialize = (modPath) => {
    _modPath = modPath;

    //Beginner SysAdmin components
    ComponentNames.Security = 'security';
    Components.push({
        name:ComponentNames.Security,
        employeeLevel:Enums.EmployeeLevels.Beginner,
        icon: modPath + 'images/bsasecurity.png',
        employeeTypeName:Enums.EmployeeTypeNames.SysAdmin,
        type: ComponentTypes.Component,
        produceHours: 4
    });
    ComponentNames.VerificationService = 'verificationservice';
    Components.push({
        name:ComponentNames.VerificationService,
        employeeLevel:Enums.EmployeeLevels.Beginner,
        icon: modPath + 'images/bsaverificationservice.png',
        employeeTypeName:Enums.EmployeeTypeNames.SysAdmin,
        type: ComponentTypes.Component,
        produceHours: 4
    });
    ComponentNames.Throughput = 'throughput';
    Components.push({
        name:ComponentNames.Throughput,
        employeeLevel:Enums.EmployeeLevels.Beginner,
        icon: modPath + 'images/bsathroughput.png',
        employeeTypeName:Enums.EmployeeTypeNames.SysAdmin,
        type: ComponentTypes.Component,
        produceHours: 4
    });
    ComponentNames.SiteAdditives = 'siteadditives';
    Components.push({
        name:ComponentNames.SiteAdditives,
        employeeLevel:Enums.EmployeeLevels.Beginner,
        icon: modPath + 'images/bsasiteadditives.png',
        employeeTypeName:Enums.EmployeeTypeNames.SysAdmin,
        type: ComponentTypes.Component,
        produceHours: 6
    });
    ComponentNames.Accommodations = 'accommodations';
    Components.push({
        name:ComponentNames.Accommodations,
        employeeLevel:Enums.EmployeeLevels.Beginner,
        icon: modPath + 'images/bsaaccommodations.png',
        employeeTypeName:Enums.EmployeeTypeNames.SysAdmin,
        type: ComponentTypes.Component,
        produceHours: 6
    });
    //Intermediate Components + Modules
    ComponentNames.AutomaticUpdate = 'automaticupdate';
    Components.push({
        name:ComponentNames.AutomaticUpdate,
        employeeLevel:Enums.EmployeeLevels.Intermediate,
        icon: modPath + 'images/isaautomaticupdate.png',
        employeeTypeName:Enums.EmployeeTypeNames.SysAdmin,
        type: ComponentTypes.Component,
        produceHours: 10
    });
    ComponentNames.SecurityCheck = 'securitycheck';
    Components.push({
        name:ComponentNames.SecurityCheck,
        employeeLevel:Enums.EmployeeLevels.Intermediate,
        icon: modPath + 'images/isasecuritycheck.png',
        employeeTypeName:Enums.EmployeeTypeNames.SysAdmin,
        type: ComponentTypes.Component,
        produceHours: 10
    });
    ComponentNames.SecuritySet = 'securityset';
    Components.push({
        name:ComponentNames.SecuritySet,
        employeeLevel:Enums.EmployeeLevels.Intermediate,
        icon: modPath + 'images/isasecurityset.png',
        employeeTypeName:Enums.EmployeeTypeNames.SysAdmin,
        type: ComponentTypes.Module,
        requirements:{
            'security': 2,
            'securitycheck': 1,
            'verificationservice': 1
        }
    });
    ComponentNames.AdditivesSet = 'additivesset';
    Components.push({
        name:ComponentNames.AdditivesSet,
        employeeLevel:Enums.EmployeeLevels.Intermediate,
        icon: modPath + 'images/isaadditivesset.png',
        employeeTypeName:Enums.EmployeeTypeNames.SysAdmin,
        type: ComponentTypes.Module,
        requirements: {
            'siteadditives': 2,
            'accommodations': 1
        }
    });
    ComponentNames.ResponsiveServers = 'responsiveservers';
    Components.push({
        name:ComponentNames.ResponsiveServers,
        employeeLevel:Enums.EmployeeLevels.Intermediate,
        icon: modPath + 'images/isaresponsiveservers.png',
        employeeTypeName:Enums.EmployeeTypeNames.SysAdmin,
        type: ComponentTypes.Component,
        produceHours: 12
    });
    //Expert Components and Modules
    ComponentNames.DDosHandler = 'ddoshandler';
    Components.push({
        name:ComponentNames.DDosHandler,
        employeeLevel:Enums.EmployeeLevels.Expert,
        icon: modPath + 'images/esaddoshandler.png',
        employeeTypeName:Enums.EmployeeTypeNames.SysAdmin,
        type: ComponentTypes.Component,
        produceHours: 24
    });
    ComponentNames.MaximumHosting = 'maximumhosting';
    Components.push({
        name:ComponentNames.MaximumHosting,
        employeeLevel:Enums.EmployeeLevels.Expert,
        icon: modPath + 'images/esamaximumhosting.png',
        employeeTypeName:Enums.EmployeeTypeNames.SysAdmin,
        type: ComponentTypes.Component,
        produceHours: 24
    });
    ComponentNames.ServerSideMaintenance = 'serversidemaintenance';
    Components.push({
        name:ComponentNames.ServerSideMaintenance,
        employeeLevel:Enums.EmployeeLevels.Expert,
        icon: modPath + 'images/esaserversidemaintenance.png',
        employeeTypeName:Enums.EmployeeTypeNames.SysAdmin,
        type: ComponentTypes.Module,
        requirements: {
            'additivesset': 1,
            'securityset': 1
        }
    });

    //Researches with new Components/Modules
    ResearchItems.find(item => item.name == ResearchItemNames.BeginnerSysAdminKit).unlocks.push(
        ComponentNames.Security,
        ComponentNames.VerificationService,
        ComponentNames.Throughput,
        ComponentNames.SiteAdditives,
        ComponentNames.Accommodations
    )
    ResearchItems.find(item => item.name == ResearchItemNames.IntermediateSysAdminKit).unlocks.push(
        ComponentNames.AutomaticUpdate,
        ComponentNames.SecurityCheck,
        ComponentNames.SecuritySet,
        ComponentNames.AdditivesSet,
        ComponentNames.ResponsiveServers
    )
    ResearchItems.find(item => item.name == ResearchItemNames.ExpertSysAdminKit).unlocks.push(
        ComponentNames.DDosHandler,
        ComponentNames.MaximumHosting,
        ComponentNames.ServerSideMaintenance
    )

    //Updated, existing Expert Module Recipes
    Components.find(component => component.name == ComponentNames.VirtualContainer).requirements = 
    {
        "VirtualHardware": 1,
        "OperatingSystem": 1,
        "ProcessManagement": 1,
        "ContinuousIntegration": 1,
        "CronJob": 1,
        "additivesset": 1
    }
    Components.find(component => component.name == ComponentNames.Cluster).requirements = 
    {
        "VirtualContainer": 1,
        "Firewall": 10,
        "securityset": 1,
        "responsiveservers": 1
    }
    Components.find(component => component.name == ComponentNames.SwarmManagement).requirements = 
    {
        "Cluster": 1,
        "VirtualContainer": 1,
        "securitycheck": 1,
        "responsiveservers": 1
    }

    //Updated, existing Rack Upgrade recipes
    RackDevices[RackDeviceNames.WebserverSmall].requirements = {
        "Firewall": 2,
        "VirtualHardware": 2,
        "OperatingSystem": 2,
        "security": 2
    }
    RackDevices[RackDeviceNames.CacheSmall].requirements = {
        "Firewall": 2,
        "VirtualHardware": 2,
        "OperatingSystem": 2,
        "security": 2
    }
    RackDevices[RackDeviceNames.DatabaseSmall].requirements = {
        "Firewall": 2,
        "VirtualHardware": 2,
        "OperatingSystem": 2,
        "siteadditives": 2
    }
    RackDevices[RackDeviceNames.WebserverMedium].requirements = {
        "Firewall": 4,
        "VirtualHardware": 4,
        "OperatingSystem": 4,
        "ProcessManagement": 2,
        "CronJob": 2,
        "automaticupdate": 1,
        "securitycheck": 1
    }
    RackDevices[RackDeviceNames.CacheMedium].requirements = {
        "Firewall": 4,
        "VirtualHardware": 4,
        "OperatingSystem": 4,
        "ProcessManagement": 2,
        "CronJob": 2,
        "automaticupdate": 1,
        "responsiveservers": 1
    }
    RackDevices[RackDeviceNames.DatabaseMedium].requirements = {
        "Firewall": 4,
        "VirtualHardware": 4,
        "OperatingSystem": 4,
        "ProcessManagement": 2,
        "CronJob": 2,
        "automaticupdate": 1,
        "securitycheck": 1
    }
    RackDevices[RackDeviceNames.WebserverLarge].requirements = {
        "Firewall": 15,
        "VirtualHardware": 15,
        "OperatingSystem": 15,
        "ProcessManagement": 4,
        "CronJob": 4,
        "ContinuousIntegration": 4,
        "automaticupdate": 2,
        "securityset": 1
    }
    RackDevices[RackDeviceNames.CacheLarge].requirements = {
        "Firewall": 15,
        "VirtualHardware": 15,
        "OperatingSystem": 15,
        "ProcessManagement": 4,
        "CronJob": 4,
        "ContinuousIntegration": 4,
        "automaticupdate": 2,
        "additivesset": 1
    }
    RackDevices[RackDeviceNames.DatabaseLarge].requirements = {
        "Firewall": 15,
        "VirtualHardware": 15,
        "OperatingSystem": 15,
        "ProcessManagement": 4,
        "CronJob": 4,
        "ContinuousIntegration": 4,
        "automaticupdate": 2,
        "securityset": 1
    }
    RackDevices[RackDeviceNames.WebserverX].requirements = {
        "VirtualContainer": 8,
        "Cluster": 5,
        "SwarmManagement": 5,
        "automaticupdate": 3,
        "ddoshandler": 2,
        "maximumhosting": 2,
        "serversidemaintenance": 2
    }
    RackDevices[RackDeviceNames.CacheX].requirements = {
        "VirtualContainer": 8,
        "Cluster": 5,
        "SwarmManagement": 5,
        "automaticupdate": 3,
        "ddoshandler": 2,
        "maximumhosting": 2,
        "serversidemaintenance": 2
    }
    RackDevices[RackDeviceNames.DatabaseX].requirements = {
        "VirtualContainer": 8,
        "Cluster": 5,
        "SwarmManagement": 5,
        "automaticupdate": 3,
        "ddoshandler": 2,
        "maximumhosting": 2,
        "serversidemaintenance": 2,
    }

},

exports.onLoadGame = settings => {

    $rootScope = GetRootScope();
    if($rootScope.options.language === "en") {
        Language['security'] = "Security";
        Language['verificationservice'] = "Verification Service";
        Language['throughput'] = "Throughput";
        Language['siteadditives'] = "Side Additives";
        Language['accommodations'] = "Accommodations";
        Language['automaticupdate'] = "Automatic Update";
        Language['securitycheck'] = "Security Check";
        Language['securityset'] = "Security Set";
        Language['additivesset'] = "Additives Set";
        Language['ddoshandler'] = "DDoS Handler";
        Language['maximumhosting'] = "Maximum Hosting";
        Language['serversidemaintenance'] = "Server-Side Maintenance";
    }

},

exports.onNewHour = settings => {};
exports.onNewDay = settings => {};