/*
async -> the caller doesn't wait for it to complete
         -> non-blocking

*/

function addSync(x,y){
    console.log("[Provider] processing ", x , " and ", y);
    var result = x + y;
    console.log("[Provider] returning result");
    return result;
}

function addSyncClient(x,y){
    console.log("[Consumer] triggering addSync");
    var result = addSync(x,y);
    console.log("[Consumer] result = ", result);
}

//Using callback
function addAsync(x,y, onResult){
    console.log("[Provider] processing ", x , " and ", y);
    setTimeout(function(){
        var result = x + y;
        console.log("[Provider] returning result");
        if (typeof onResult === 'function')
            onResult(result);
    }, 5000);
}

function addAsyncClient(x,y){
    console.log("[Consumer] triggering addAsync");
    addAsync(x,y, function(result){
        console.log("[Consumer] result = ", result);
    });
}


//Using Events
var adder = (function(){
    var callbacks = [];
    function add(x,y){
        console.log("[Provider] processing ", x , " and ", y);
        setTimeout(function(){
            var result = x + y;
            console.log("[Provider] returning result");
            callbacks.forEach(function(callback){
                callback(result);
            });
        }, 5000);
    }
    function onResult(callbackFn){
        callbacks.push(callbackFn);
    }
    return {
        add : add,
        onResult : onResult
    }
})();
