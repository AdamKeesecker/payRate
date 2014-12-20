(function(){
  'use strict';


  $(document).ready(init);
  /*on page-load, prepare listeners*/

  function init(){
    /*My listeners:*/
    $('#submitBaseRate').on('click', setBaseRate);
    $('#addRule').on('click', newRule);
    $('#ruleDisplay').on('click', '.closeButton', this, deleteRow);
    $('#calculate').on('click', calculate);
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
    /*    rowString creates a select, two inputs, and a close button
      div
        select
          option (+)
          option (-)
        input (Base rate modifier)
        input (Modifier description)
        button (delete row)
    */

    var rowString = '<div class="row">$<input class="baseRateMod" placeholder="-10"/>/hr<br><input class="modDescription" placeholder="Description"/><button class="closeButton">X</button></div>';
    $('#ruleDisplay').append(rowString);
  };

  function deleteRow(row){
    $(row.currentTarget).parent().remove();
  };

  function calculate(){
    /* CONDENSE THIS!!!!! */
    var mod;
    var $base = $('.baseRateMod');
    if($base.length > 1){
      mod = $base;
      for(var i =0; i < $base.length; i++){
        if(mod[i].value == ""){
          console.log('null');
        }else if(mod[i].value > 0){
          console.log('positive number');
        }else if(mod[i].value == 0){
          console.log('zero');
        }else if(mod[i].value < 0){
          console.log('negative number');
        }else{
          console.log('error catch');
        }
      }
    }else{
      mod = $base.val();
      for(var i =0; i < $base.length; i++){
        console.log(mod);
        if(mod == ""){
          console.log('null');
        }else if(mod > 0){
          console.log('positive number');
        }else if(mod == 0){
          console.log('zero');
        }else if(mod < 0){
          console.log('negative number');
        }else{
          console.log('error catch');
        };
      }
    }
  };

  // function increaseRate(){};
  // function decreaseRate(){};
})();
