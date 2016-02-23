describe('TestOneController', function () {

  var controller = null;
  $scope = null;
  //myApp is loaded
  beforeEach(function () {
    module('myApp');
  });
  //controller is instantiated, new scope is created
  beforeEach(inject(function ($controller, $rootScope) {
    $scope = $rootScope.$new();
    controller = $controller('TestOneController', {
      $scope: $scope
    });
  }));
  //test assets that the initial state of greeting is "Hello World"
  it('initially has a greeting', function () {
    assert.equal($scope.greeting, "Hello, World!");
  });
  //test assets that the changeGreeting() function actually changes the value of greeting
  it('Clicking the button changes the changes the greeting', function () {
    $scope.newText = "Hi!";
    $scope.changeGreeting();
    assert.equal($scope.greeting, "Hi!");
  });
  // should fail
   it('clicking the button does not change the greeting if text is not inputed', function () {
  $scope.changeGreeting();
  assert.equal($scope.greeting, "Hello, World!");
});

});