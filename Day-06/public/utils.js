var utils = angular.module("utils", []);
utils.value('defaultTrimLength', 50);
utils.filter('trimText', function(defaultTrimLength){
    //returning the actual filter
    return function(data, trimLength){
        trimLength = trimLength || defaultTrimLength;
        return data.length <= trimLength ? data : data.substr(0,trimLength) + '...';
    };
});

utils.value('momentApi', moment);
utils.filter('elapsed', function(momentApi){
    return function(data){
        return momentApi(data).fromNow();
    };
});
