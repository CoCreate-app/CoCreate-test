// component implementation:
// 1. it should have programming api as well as html or attribute api
// 2. Includes semantic

import utils from '@cocreate/utils';
import CoCreateAction from '@cocreate/action';


  function s1() {
    console.log("Action Start ----- Test1");
    setTimeout(function() {
      console.log("Action End ----- Test1");
      document.dispatchEvent(new CustomEvent('End_S1'));
    }, 1000)
  }
  
  function s2() {
    console.log("Action Start ----- Test2");
    setTimeout(function() {
      console.log("Action End ----- Test2");
      document.dispatchEvent(new CustomEvent('End_S2'));
    }, 1000)
  }


  CoCreateAction.init({
      action: 'test_s1', 
      callback: function() {
          s1();
      },
      endEvent: "End_S1"
  })
  
  CoCreateAction.init({
      action: 'test_s2', 
      callback: function() {
          s2();
      },
      endEvent: "End_S2"
  })

