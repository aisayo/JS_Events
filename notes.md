# Event Handling

* Event handling is making something happen

* How it happens?
  * An event is triggered and a callback function is invoked to make something happen
  * Javascript will ‘listen’ for things that happen inside of a browser, these things are events

* Types of events?
  * Most common events => 'Click (Mouse Click)', Key press, Form Submission
  * There is a list of js events:  
    * <https://developer.mozilla.org/en-US/docs/Web/Events>
    * <http://help.dottoro.com/larrqqck.php>

* How do we tell a node/element to listen for an event?
  * Addeventlistener: <https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener>
  * Takes in two arguments: name of the event and callback function
  * We can also add an event to the element

* Can not manipulate DOM before page is fully loaded

* DomContentLoaded
  * Helps ensure code runs at the right time
  * Ensures that js code is being executed immediately after HTML is finished loading
  * Browsers built in way to indicate when a page is loaded
  * DomContentLoaded event fires when your page’s DOM is fully parsed
  * <https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event>
  
* Load
  * fires off when a resource and its dependent resources like CSS, JS have finished loading
  * <https://developer.mozilla.org/en-US/docs/Web/API/Window/load_event>

* Let's Talk Functions

  * One of the most important parts of JavaScript
  * A way to group together related bits of JS code, abstractions
  * They combine series of steps under a new name
  * Makes it easier to read, debug and improve
  * It is an object. We can execute or call it multiple times(invoke)
  * First class citizens: meaning they can be treated as any other variable, assigned to variable, stored in data structure, passed as an argument to another function, or be return value of another function.
  * To invoke a function, () must be added, () is the invocation operator that tells JS to invoke the function
  * Functions must be declared before trying to call

* Parameters
  * Locally scoped variables that are usable(“scoped”) to inside the function
  * Allows for code to be reusable, helps create general versions of function

* Return Values
  * Functions can return values
  * “Like a summary of what happened in the function”
  * When a return is reached, no further code behavior will happen
  * Can be saved to variables
  * Can be used as inputs to other functions
