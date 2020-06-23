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

* What are Scopes?
  * Scope is concept of where something is available
  * Functions and variables have scopes

* Types of scope:

  * Global scope
    * anything declared in this scope are accessible everywhere in your javascript code.
    * Not declared inside a function or block

  * Function Scope
    * Functions create a new execution context with its own scope
    * Can not reference anything declared inside of a function, outside of it

  * Block scope
    * Variables declared with var are not block-scoped
    * Variables declared with const and let are block-scoped

* Anything declared without the key words const, let, var are always globally scoped

* Scope chain
  * Every function has access to a scope chain
  * When you create a variable inside a function that gets invoked, its creating a local variable
  * The local variable gets recognized first bcause the js engine see’s its reference.
  * Then when it gets to a variable from an outer scope, it goes looking in the outer scope to find a match.
  * Functions have access to all variables and functions declared in its outer scope
  * Scope chains are nested systems
  * Scope chains only go in one direction
  * Can not go from outer to inner

* The JavaScript Engine

  * When js engine runs in the browser, the js engine makes 2 passes over the code

  * Compilation phase
    * First pass is the compilation phase: engine steps through our code line by line
    * When engine sees a variable declaration, it allocates memory and sets up a reference to the variables identifier
    * When the engine sees a function declaration it:
       1. Allocates memory and sets up reference to the functions identifier
       2. Creates a new execution context with a new scope
       3. Adds a reference to the parent scope to the scope chain, allowing reference to anything declared in the outer scope

  * Execution phase
    * Second pass
    * This time it goes line by line and actually runs our code, assigning values to variables and invoking functions

  * Identifier resolution
    * Happens during second phase of engine running
    * Engine sees an identifier and resolves it to a value

  * Reference errors
    * Happens during second phase of js engine.
    * Occurs because it can not find a match to the identifier
