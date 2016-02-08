function TimeService(){
    this.getTime = function(){
        return new Date();
    }
}

function Greeter(timeService){
    this.name = '';
    this.message = '';
    this.greet = function(){
        if (timeService.getTime().getHours() < 12){
            this.message = 'Hi ' + this.name + ', Good Morning';
        } else {
            this.message = 'Hi ' + this.name + ', Good Afternoon';
        }
    }
}

function FakeTimeServiceForMorning(){
    this.getTime = function(){
        return new Date(2016,1,8,9,0,0);
    }
}


function FakeTimeServiceForAfternoon(){
    this.getTime = function(){
        return new Date(2016,1,8,13,0,0);
    }
}

function greeterMorningTest(){
    //Arrange
    var timeServiceForMorning = new FakeTimeServiceForMorning();
    var greeter = new Greeter(timeServiceForMorning);
    var name = 'Magesh';
    var expectedResult = 'Hi Magesh, Good Morning'
    //Act
    greeter.name = name;
    greeter.greet();

    //Assert
    console.log(greeter.message === expectedResult ? "Test Passed..": "Test Failed..");
}

function greeterAfternoonTest(){
    //Arrange
    var timeServiceForAfternoon = new FakeTimeServiceForAfternoon();
    var greeter = new Greeter(timeServiceForAfternoon);
    var name = 'Magesh';
    var expectedResult = 'Hi Magesh, Good Afternoon';
    //Act
    greeter.name = name;
    greeter.greet();

    //Assert
    console.log(greeter.message === expectedResult ? "Test Passed..": "Test Failed..");
}
