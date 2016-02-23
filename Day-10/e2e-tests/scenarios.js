'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */
/* Protractor API ref - http://angular.github.io/protractor/#/api */

describe('my app', function() {


  it('should automatically redirect to /view1 when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/view1");
  });


  describe('view1', function() {

    beforeEach(function() {
      browser.get('index.html#/view1');
    });


    it('should render view1 when user navigates to /view1', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 1/);
    });

  });


  describe('view2', function() {

    beforeEach(function() {
      browser.get('index.html#/view2');
    });


    it('should render view2 when user navigates to /view2', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 2/);
    });

  });

  describe('greet', function() {

    beforeEach(function() {
      browser.get('index.html#/greet');
    });


    it('should display the message when greeted', function() {
        //locate the text box
        var txtName = element(by.model("name"));
        txtName.sendKeys('Magesh');

        //locate the button
        var btnGreet = element(by.buttonText("Greet"));
        btnGreet.click();

        var expectedMessage = 'Hi Magesh, Have a nice day!';
        //locate the div
        var divMessage = element(by.binding("message"));
        var actualMessage = divMessage.getText();

        expect(actualMessage).toBe(expectedMessage);

    });

  });

});
