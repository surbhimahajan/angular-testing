describe('myController', function () {

  it('the dom initially has a greeting', function () {
    browser.get('http://localhost:8888/#/one');
    expect(element(by.id('greeting')).getText()).toEqual('Hello, World!');
  });

});

describe('TestOneController', function () {
//access input form with element and adding text using sendKeys() method
  var greeting = element(by.id('greeting'));
  var textInputBox = element(by.css('[ng-model="newText"]'));
  var changeGreetingButton = element(by.css('.btn-default'));
  //state updates on the button click
  beforeEach(function() {
    browser.get('http://localhost:8888/#/one');
  });
  //asserting that the text contained within the HTML element with an id of "greeting" is as expected
  it('initially has a greeting', function () {
    expect(greeting.getText()).toEqual('Hello, World!');
  });

  it('clicking the button changes the greeting if text is inputed', function () {
    textInputBox.sendKeys('Hi!');
    changeGreetingButton.click();
    expect(greeting.getText()).toEqual('Hi!');
  });

  it('clicking the button does not change the greeting if text is not inputed', function () {
    textInputBox.sendKeys('');
    changeGreetingButton.click();
    expect(greeting.getText()).toEqual('Hello, World!');
  });

});

describe('TestThreeController', function () {

  var modalNumber = element.all(by.tagName('span')).get(1);
  var modalButton = element(by.tagName('button'));
  var iterateButton = element(by.css('[ng-click="changeModalText()"]'));
  var hideButton = element(by.css('[ng-click="$hide()"]'));
  var justSomeText = element(by.tagName('h2'));

  beforeEach(function() {
    browser.get('http://localhost:8888/#/three');
  });

  it('initially has a modalNumber', function () {
    modalButton.click();
    expect(modalNumber.getText()).toEqual('1');
  });

  it('updates the `modalNumber` when a value is added', function () {
    modalButton.click();
    iterateButton.click();
    expect(modalNumber.getText()).toEqual('2');
    iterateButton.click().click().click();
    expect(modalNumber.getText()).toEqual('5');
    hideButton.click();
    expect(justSomeText.getText()).toEqual('Just a modal');
  });
});

describe('TestFourController', function () {

  var loadButton = element(by.tagName('button'));
  var ul = element.all(by.tagName('ul'));
  var li = element.all(by.tagName('li'));

  beforeEach(function() {
    browser.get('http://localhost:8888/#/four');
  });

  it('updates the DOM when the button is clicked', function () {
    expect(ul.count()).toEqual(1);
    expect(li.count()).toEqual(5);
    loadButton.click();
    expect(ul.count()).toEqual(1);
    expect(li.count()).toEqual(5);
  });

});
