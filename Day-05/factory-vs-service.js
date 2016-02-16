Create a spinner object that has the following behavior

var spinner = ...
spinner.up() // => 1
spinner.up() // => 2
spinner.up() // => 3
spinner.up() // => 4

spinner.down() //=> 3
spinner.down() //=> 2
spinner.down() //=> 1
spinner.down() //=> 0
spinner.down() //=> -1

//factory
function spinnerFactory(){
    var count = 0;
    function increment(){
        return ++count;
    }
    function decrement(){
        return --count;
    }
    return {
        up : increment,
        down : decrement
    }
}

//Class (service)
function Spinner(){
    var count = 0;
    this.up = function(){ return ++count; };
    this.down = function(){ return --count;};
}

