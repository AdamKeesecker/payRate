(function(){
  'use strict';


  $(document).ready(init);
//------on page-load, prepare listeners-------

  function init(){
//------My listeners:--------
    $('#submitBaseRate').click(setBaseRate);
    $('#addRule').click(newRule);
  };

  var originBaseRate = 0;
  var totalRules = 0;

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
    totalRules += 1;

    var bigString = "<div id=div"
                    +totalRules.toString()+
                    "><input id=input"
                    +totalRules+
                    "><button>X</button></div>"

    $('#ruleDisplay').append(bigString);


    // var divBegin =
    // var divEnd =
    // var ruleBegin = '<input id=rule';
    // var ruleEnd = '><button>x</button><br>'
    //
    // var concatRule = 'ruleBegin+totalRules+ruleEnd
    // $('#ruleDisplay').append(concatRule);
  };

  // function increaseRate(){};
  // function decreaseRate(){};
})();
