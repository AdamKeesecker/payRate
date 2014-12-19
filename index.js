(function(){
  'use strict';


  $(document).ready(init);
//------on page-load, prepare listeners-------

  function init(){
//------My listeners:--------
    $('#submitBaseRate').on('click', setBaseRate);
    $('#addRule').on('click', newRule);
    $('#ruleDisplay').on('click', '.closeButton', this, deleteRow);
  };

  var originBaseRate = 0;

  function display(newRate){
    $('#currentRate').text('Your current rate: '+newRate+'/hr');
  };

  function setBaseRate(){
    originBaseRate = $('#baseRate').val();
    display(originBaseRate);
    $('#baseRateContainer').hide();
    $('#controlsContainer').css("visibility", "visible");
    $('#disappear').fadeOut({duration:5200});
  };

  function newRule(){
    /*
      rowString creates a select, two inputs, and a close button

      div
        select
          option
          option
        input (Base rate modifier)
        input (Modifier description)
        button (delete row)

    */

    var rowString = '<div><select><option value="plus">+</option><option value="minus">-</option></select><input class="baseRateMod" placeholder="Base rate mod"/><input class="modDescription" placeholder="Description"/><button class="closeButton">X</button></div>';
    $('#ruleDisplay').append(rowString);
  };

  function deleteRow(row){
    $(row.currentTarget).parent().remove();
  };

  // function increaseRate(){};
  // function decreaseRate(){};
})();
