// describe('TestFourController', function () {

//   var controller = null;
//   var $scope = null;
//   var $httpBackend = null;
//   var mockedDashboardJSON = null;

//   beforeEach(function () {
//     module('myApp', 'mockedDashboardJSON');
//   });

//     beforeEach(inject(function ($controller, $rootScope, _$httpBackend_, defaultJSON) {
//       $httpBackend = _$httpBackend_;
//       $scope = $rootScope.$new();
//       //use a mocking library since this request hits an external API with the help of $httpBackend directive
//       //app tries to make the HTTP request, it triggers $httpBackend, which, in turn, uses the defaultJSON value from mock.js
//       $httpBackend.when('GET','https://api.github.com/repositories').respond(defaultJSON.fakeData);
//       controller = $controller('TestFourController', {
//           $scope: $scope
//       });
//     }));

//     afterEach(function () {
//       //check that we are not missing any HTTP requests in our test via verifyNoOutstandingExpectation() and verifyNoOutstandingRequest() methods
//       $httpBackend.verifyNoOutstandingExpectation();
//       $httpBackend.verifyNoOutstandingRequest();
//     });

//   it('initially has repos', function () {
//     assert.isArray($scope.repos);
//     assert.deepEqual($scope.repos, []);
//   });

//   it('clicking the button updates the repos', function () {
//       $scope.loadRepos();
//       $httpBackend.flush();
//       assert.equal($scope.repos.length, 100);
//   });

// });