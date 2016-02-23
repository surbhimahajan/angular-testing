exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['tests/e2e/*.js'],
  
  //using with react
  onPrepare: function() {
    browser.ignoreSynchronization = true;
}
};


