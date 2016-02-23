describe("greet module", function(){

    beforeEach(module("myApp.greet"));

    describe("greetController", function(){
        it("Should initialize the name with empty string", inject(function($controller){

            //Arrange
            var dummyScope = {};

            //Act
            $controller("greetController", {$scope : dummyScope});

            //Assert
            expect(dummyScope.name).toBe('');
        }));

        it("Should initialize the message with empty string", inject(function($controller){

            //Arrange
            var dummyScope = {};

            //Act
            $controller("greetController", {$scope : dummyScope});

            //Assert
            expect(dummyScope.message).toBe('');
        }));

        it("Should populate the message when greeted", inject(function($controller){

            //Arrange
            var dummyScope = {};
            var expectedMessage = 'Hi Magesh, Have a nice day!';

            //Act
            $controller("greetController", {$scope : dummyScope});
            dummyScope.name = 'Magesh';
            dummyScope.greet();
            //Assert
            expect(dummyScope.message).toBe(expectedMessage);
        }));

    });

    describe("trimTextFilter", function(){
       it("Should return the given text if short", inject(function($filter){
           //Arrange
           var input = 'shortString',
               expectedOutput = 'shortString';

           //Act
           var trimTextFilter = $filter('trimText');
           var output = trimTextFilter(input);

           //Assert
           expect(output).toBe(expectedOutput);
       }));

       it("Should return the truncated text if long", inject(function($filter){
           //Arrange
           var input = 'This is a long string for testing the long string case of trim text filter',
               expectedOutput = 'This is a long string for test...';

           //Act
           var trimTextFilter = $filter('trimText');
           var output = trimTextFilter(input);

           //Assert
           expect(output).toBe(expectedOutput);
       }));
    });
});
