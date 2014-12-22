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
    console.log(newRate);
    $('#currentRate').text('Your current rate: $ ' + newRate + '/hr');
    if(newRate < 0){
      $('#currentRate').text('Your current rules are making you pay the client!!!');
    }
  };

  function setBaseRate(){
    originBaseRate = $('#baseRate').val();
    console.log(originBaseRate);
    if(originBaseRate == isNaN){
      originBaseRate = 0;
    }
    display(originBaseRate);
    $('#baseRateContainer').hide();
    $('#controlsContainer').css("visibility", "visible");
    $('#disappear').fadeOut({duration:5200});
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
    row.remove();
    console.log(row);
    var ruleAmount = row[0].value;
    var ruleDescript = row[1].value;
    $('#activeRules').append("<div>" + ruleAmount + " : " + ruleDescript + "</div><br>");
  };

  function applyRule(caughtEvent){
    var mod = caughtEvent.currentTarget[0].value;
    var descript = caughtEvent.currentTarget[1].value;
    console.log(mod);
    console.log(descript);
    if(mod == ""){
      console.log('null error catch');
    }else if(mod > 0){
      increaseRate(mod);
    }else if(mod == 0){
      console.log('zero error catch');
    }else if(mod < 0){
      decreaseRate(mod);
    }else{
      console.log('input error catch (probably a faceroll)');
    };
    moveRule(caughtEvent.currentTarget);
  };

  // function calculate(){
    //
    // /* CONDENSE THIS!!!!! (aka case statement) */
    // var mod;
    // var $base = $('.baseRateMod');
    // if($base.length > 1){
    //   mod = $base;
    //   for(var i =0; i < $base.length; i++){
    //     if(mod[i].value == ""){
    //       console.log('null error catch');
    //     }else if(mod[i].value > 0){
    //       increaseRate(mod);
    //     }else if(mod[i].value == 0){
    //       console.log('zero error catch');
    //     }else if(mod[i].value < 0){
    //       decreaseRate(mod);
    //     }else{
    //       console.log('input error catch');
    //     }
    //   }
    // }else{
    //   mod = $base.val();
    //   for(var i =0; i < $base.length; i++){
    //     if(mod == ""){
    //       console.log('null error catch');
    //     }else if(mod > 0){
    //       increaseRate(mod);
    //     }else if(mod == 0){
    //       console.log('zero error catch');
    //     }else if(mod < 0){
    //       decreaseRate(mod);
    //     }else{
    //       console.log('input error catch');
    //     };
    //   }
    // }
  // };

  function increaseRate(mod){
    console.log('increaseRate mod: ' + mod);
    currentRate = currentRate + Math.round(mod);
    console.log('increaseRate current: ' + currentRate);
    display(currentRate);
  };

  function decreaseRate(mod){
    console.log('decreaseRate mod: ' + mod);
    currentRate = currentRate + Math.round(mod);
    console.log('decreaseRate current: ' + currentRate);
    display(currentRate);
  };

})();
