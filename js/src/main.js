(function() {
  var $ = require('jquery');
  'use strict';

  // Add additional JS in separate include files and require them with relative paths
  require('../libs/tooltipster.bundle.min.js');

  $(document).ready(function() {
    $('.cloud-diagram__item').tooltipster({
      animation: 'fade',
      interactive: true,
      theme: 'tooltipster-shadow'
    });
  });

}());