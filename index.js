(function(){
  'use strict';


  $(document).ready(init);
//------on page-load, prepare listeners-------

  function init(){
//------My listeners:--------
    $('#submitBaseRate').click(setBaseRate);
    // $('#').click();
    // $('#').click();
    // $('#').click();
  };

  function display(newRate){
    $('#currentRate').text(newRate);
  }

  function setBaseRate(){
    var originBaseRate = $('#baseRate').val();
    display(originBaseRate);
  };

  // function increaseRate(){};
  // function decreaseRate(){};
})();
