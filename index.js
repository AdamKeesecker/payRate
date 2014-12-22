(function(){
  'use strict';


  $(document).ready(init);
  /*on page-load, prepare listeners*/

  function init(){
    /*My listeners:*/
    $('#submitBaseRate').on('click', setBaseRate);
    $('#addRule').on('click', newRule);
    $('#ruleDisplay').on('submit', '.ruleRow', function(event){
      event.preventDefault();
      applyRule(event);
    });
  };

  var originBaseRate = 0;
  var currentRate = 0;

  function display(newRate){
    /* updates the current rate on submit */
    $('#currentRate').text('Your current rate: $ ' + newRate + '/hr');
    if(newRate < 0){
      $('#currentRate').text('Your current rules are making you pay the client!!!');
    }
  };

  function setBaseRate(){
    /* reads input, sets base rate, and shows new controls */
    originBaseRate = $('#baseRate').val();
    if(originBaseRate == isNaN){
      originBaseRate = 0;
    }
    display(originBaseRate);
    $('#baseRateContainer').hide();
    $('#controlsContainer').css("visibility", "visible");
  };

  function newRule(){
    /*    rowString creates a select, two inputs, and a close button
      form.ruleRow
        input
        input
        submit button .submit
      /form
    */

    var rowString = '<form class="ruleRow">$<input type="text" name="hourlyRateMod" placeholder="-20">/hr<br><input type="text" placeholder="Description" name="description"><input type="submit" class="submit"></form>';
    $('#ruleDisplay').append(rowString);
  };

  function moveRule(row){
    /* moves rule (.row) out of form and into active div */
    row.remove();
    var ruleAmount = row[0].value;
    var ruleDescript = row[1].value;
    $('#activeRules').append("<div>" + ruleAmount + " : " + ruleDescript + "</div><br>");
  };

  function applyRule(caughtEvent){
    /* takes values and applies math to current and appends text for descript */
    var mod = caughtEvent.currentTarget[0].value;
    var descript = caughtEvent.currentTarget[1].value;
    if(mod == ""){
      // empty field
      console.log('null error catch');
    }else if(mod > 0){
      // positive number
      increaseRate(mod);
    }else if(mod == 0){
      // zero
      console.log('zero error catch');
    }else if(mod < 0){
      // negative number
      decreaseRate(mod);
    }else{
      // General error catch (usually letters in input)
      console.log('input error catch (probably a faceroll)');
    };
    moveRule(caughtEvent.currentTarget);
  };

  function increaseRate(mod){
    currentRate = currentRate + Math.round(mod);
    display(currentRate);
  };

  function decreaseRate(mod){
    currentRate = currentRate + Math.round(mod);
    display(currentRate);
  };

})();
