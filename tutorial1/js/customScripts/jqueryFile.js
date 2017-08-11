define(['jquery', 'methods'], function($, methods) {
  // jquery and methods loaded async
  $('#clickMe').click(function() {
    methods.changeHTML('I was clicked!')
    methods.showAlert('I was clicked!')
  })
})
