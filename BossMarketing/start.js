let _modPath;

exports.initialize = (modPath) => {
    _modPath = modPath;

    //New Marketing Components
    ComponentNames.OnlineInterview = 'onlineinterview';
    Components.push({
        name:ComponentNames.OnlineInterview,
        employeeLevel:Enums.EmployeeLevels.Beginner,
        icon: modPath + 'images/bmonlineinterview.png',
        employeeTypeName:Enums.EmployeeTypeNames.Marketer,
        type: ComponentTypes.Component,
        produceHours: 12
    });
    ComponentNames.PushNotices = 'pushnotices';
    Components.push({
        name:ComponentNames.PushNotices,
        employeeLevel:Enums.EmployeeLevels.Beginner,
        icon: modPath + 'images/bmpushnotices.png',
        employeeTypeName:Enums.EmployeeTypeNames.Marketer,
        type: ComponentTypes.Component,
        produceHours: 10
    });
    ComponentNames.MarketBacking = 'marketbacking';
    Components.push({
        name:ComponentNames.MarketBacking,
        employeeLevel:Enums.EmployeeLevels.Beginner,
        icon: modPath + 'images/bmmarketbacking.png',
        employeeTypeName:Enums.EmployeeTypeNames.Marketer,
        type: ComponentTypes.Component,
        produceHours: 10
    });
    //Intermediate
    ComponentNames.TextKit = 'textkit';
    Components.push({
        name:ComponentNames.TextKit,
        employeeLevel:Enums.EmployeeLevels.Intermediate,
        icon: modPath + 'images/imtextkit.png',
        employeeTypeName:Enums.EmployeeTypeNames.Marketer,
        type: ComponentTypes.Module,
        requirements: {
            'TextFormat': 1,
            'controlcomponent': 1,
            'marketbacking': 1
        }
    });
    ComponentNames.DataSet = 'dataset';
    Components.push({
        name:ComponentNames.DataSet,
        employeeLevel:Enums.EmployeeLevels.Intermediate,
        icon: modPath + 'images/imdataset.png',
        employeeTypeName:Enums.EmployeeTypeNames.Marketer,
        type: ComponentTypes.Component,
        produceHours: 18
    });
    ComponentNames.PleasingCampaign = 'pleasingcampaign';
    Components.push({
        name:ComponentNames.PleasingCampaign,
        employeeLevel:Enums.EmployeeLevels.Intermediate,
        icon: modPath + 'images/impleasingcampaign.png',
        employeeTypeName:Enums.EmployeeTypeNames.Marketer,
        type: ComponentTypes.Component,
        produceHours: 18
    });
    //Expert
    ComponentNames.FullSurvey = 'fullsurvey';
    Components.push({
        name:ComponentNames.FullSurvey,
        employeeLevel:Enums.EmployeeLevels.Expert,
        icon: modPath + 'images/emfullsurvey.png',
        employeeTypeName:Enums.EmployeeTypeNames.Marketer,
        type: ComponentTypes.Component,
        produceHours: 24
    });
    ComponentNames.CompleteResearchKit = 'completeresearchkit';
    Components.push({
        name:ComponentNames.CompleteResearchKit,
        employeeLevel:Enums.EmployeeLevels.Expert,
        icon: modPath + 'images/emcompleteresearchkit.png',
        employeeTypeName:Enums.EmployeeTypeNames.Marketer,
        type: ComponentTypes.Module,
        requirements: {
            'AnalyticsResearch': 1,
            'dataset': 1,
            'marketbacking': 1
        }
    });
    ComponentNames.FormatSet = 'formatset';
    Components.push({
        name:ComponentNames.FormatSet,
        employeeLevel:Enums.EmployeeLevels.Expert,
        icon: modPath + 'images/emformatset.png',
        employeeTypeName:Enums.EmployeeTypeNames.Marketer,
        type: ComponentTypes.Module,
        requirements: {
            'AudioFormat': 1,
            'VideoFormat': 1,
            'textkit': 1,
            'marketbacking': 1
        }
    });

    //Research for new components/modules
    ResearchItems.find(item => item.name == ResearchItemNames.BeginnerMarketingKit).unlocks.push(
        ComponentNames.OnlineInterview,
        ComponentNames.PushNotices,
        ComponentNames.MarketBacking
    )
    ResearchItems.find(item => item.name == ResearchItemNames.IntermediateMarketingKit).unlocks.push(
        ComponentNames.TextKit,
        ComponentNames.DataSet,
        ComponentNames.PleasingCampaign
    )
    ResearchItems.find(item => item.name == ResearchItemNames.ExpertMarketingKit).unlocks.push(
        ComponentNames.FullSurvey,
        ComponentNames.CompleteResearchKit,
        ComponentNames.FormatSet
    )

    //Updated campaign recipes
    MarketingPackages.find(marketingpackage => marketingpackage.name == MarketingPackageNames.TextAds).requirements = 
    {
        "Copywriting": 1,
        "TextFormat": 1,
        "marketbacking": 1
    }
    MarketingPackages.find(marketingpackage => marketingpackage.name == MarketingPackageNames.BannerAds).requirements = 
    {
        "Copywriting": 4,
        "TextFormat": 4,
        "ImageFormat": 4,
        "pushnotices": 4,
        "marketbacking": 4
    }
    MarketingPackages.find(marketingpackage => marketingpackage.name == MarketingPackageNames.VideoAds).requirements = 
    {
        "Copywriting": 9,
        "VideoFormat": 9,
        "ImageFormat": 9,
        "onlineinterview": 9,
        "textkit": 9,
        "pleasingcampaign": 10,
        "marketbacking": 7
    }
    MarketingPackages.find(marketingpackage => marketingpackage.name == MarketingPackageNames.PodcastCommercial).requirements = 
    {
        "Copywriting": 12,
        "AudioFormat": 12,
        "fullsurvey": 12,
        "dataset": 9,
        "pleasingcampaign": 12,
        "marketbacking": 9
    }
    MarketingPackages.find(marketingpackage => marketingpackage.name == MarketingPackageNames.TvCommercial).requirements = 
    {
        "Copywriting": 20,
        "AudioFormat": 30,
        "ContractAgreement": 30,
        "completeresearchkit": 10,
        "formatset": 10,
        "pleasingcampaign": 20,
        "marketbacking": 12
    }

    //Updated feedback recipes
};

exports.onLoadGame = settings => {
    $rootScope = GetRootScope();
    if($rootScope.options.language === "en") {
        //Marketer
        Language['onlineinterview'] = "Online Interview";
        Language['pushnotices'] = "Push Notices";
        Language['marketbacking'] = "Market Backing";
        Language['textkit'] = "Text Kit";
        Language['dataset'] = "Data Set";
        Language['pleasingcampaign'] = "Pleasing Campaign";
        Language['fullsurvey'] = "Full Survey";
        Language['completeresearchkit'] = "Complete Research Kit";
        Language['formatset'] = "Format Set";
    }
};

exports.onNewHour = settings => {};
exports.onNewDay = settings => {};