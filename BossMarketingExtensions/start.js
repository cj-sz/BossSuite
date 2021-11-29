let _modPath;

exports.initialize = (modPath) => {
    _modPath = modPath;

    

    //Localizor and Load
    exports.onLoadGame = settings => {
        
        $rootScope = GetRootScope();
        if($rootScope.options.language === "en"){
            //Beginner
            //Intermediate
            //Expert
        }
    }
}