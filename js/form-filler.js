//
// Form-filler.js
// Advania CORP.
// Snær Seljan Þóroddsson
// 25.06.2015
// Usage: Just include script somewhere on the page
// Example : http://lisadevsite.throun.skyrr.is/forms
//


// DOM CONTENT LOADED
function domReady () {
    
    //date today
    var date = new Date().toISOString().substring(0, 10),
        // Typical input types
        types = {
            checkbox : 'checked',	
            date : date,	
            datetime : date,	
            email :	'test@test.is',
            number : 10,	
            radio : true,
            search : 'Leita',
            tel : '5555555',
            text : 'This is text',
            time : '17:12',
            url : 'www.mbl.is',
            color : '#ff0000'
        },
        // Special strings if needed
        strings = {
            textarea: 'This is textarea',
        };
    
    
    // Inputs on page
    var inputs = document.querySelectorAll('input, select, textarea');
    
    // Loop through every input and 
    // find corresponding input and autofill it
    Array.prototype.slice.call( inputs ).forEach( function( el, i ) { 
        var tagName =  el.tagName, 
            elementType = el.getAttribute('type');
        if(tagName === 'SELECT') {
            el.childNodes[0].setAttribute('selected', 'selected')
        }
        else if(tagName === 'TEXTAREA') {
            el.value = strings.textarea;
        }
        else {
            for(var key in types) {
                if(types.hasOwnProperty(key)) {
                    if(key  === elementType) {
                        if(elementType === 'checkbox') {
                            el.setAttribute('checked','checked');
                        }
                        else if(elementType === 'radio') {
                            el.checked = types[key];         
                        }
                        else  {
                            el.value = types[key];
                        }   
                    } 
                } 
            } 
        }
    });
}



// Mozilla, Opera, Webkit 
if ( document.addEventListener ) {
  document.addEventListener( "DOMContentLoaded", function(){
    document.removeEventListener( "DOMContentLoaded", arguments.callee, false);
    domReady();
  }, false );

// If IE event model is used
} else if ( document.attachEvent ) {
  // ensure firing before onload
  document.attachEvent("onreadystatechange", function(){
    if ( document.readyState === "complete" ) {
      document.detachEvent( "onreadystatechange", arguments.callee );
      domReady();
    }
  });
}
