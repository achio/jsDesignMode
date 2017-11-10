// (function() {
  var decorator = function(target, type, fn) {
    if(typeof target !== 'object'){
    	throw new Error('Wrong DOMObject');
    }
    var event = "on" + type;
    if(typeof target[event] === 'function') {
      var oldEvent = target[event];
      // console.log(oldEvent);
      target[event] = function() {
      	oldEvent();
      	fn();
      }
    }else {
      target[event] = fn;
    }
  }

  var text = document.getElementById('text');
  var border = text.style.border;
  text.onfocus = function() {
  	text.style.border = "1px solid red";
  	text.style.outline = "none";
  }
  decorator(text, 'focus', function() {
    text.value = 'beck.lee';
  })
  decorator(text, 'blur', function() {
    text.value = '';
    text.style.border = border;
  })
// })();