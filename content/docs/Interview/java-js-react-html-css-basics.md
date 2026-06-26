---
title: Java, JS, React, HTML, CSS Basics
---

# PART 1: JAVA PROGRAMMING (Complete)


### **Question 1: What is Java?**

**Answer:** Java is a programming language that works on any computer (Windows, Mac, Linux). It's used to make applications, websites, and mobile apps.

---

### **Question 2: What is JDK, JRE, and JVM?**

**Answer:**

- **JDK** (Java Development Kit) - Tools to write Java programs
- **JRE** (Java Runtime Environment) - Tools to run Java programs
- **JVM** (Java Virtual Machine) - Converts Java code so computer can understand

**Simple:** JDK = Complete toolkit, JRE = Runner, JVM = Translator

---

### **Question 3: What are data types in Java?**

**Answer:**

**Primitive types (8 types):**

- **byte** - very small numbers
- **short** - small numbers
- **int** - normal whole numbers
- **long** - very large numbers
- **float** - decimal numbers (less precise)
- **double** - decimal numbers (more precise)
- **char** - single character
- **boolean** - true/false

**Non-primitive:** String, Array, Class, Interface

---

### **Question 4: Difference between `==` and `.equals()`?**

**Answer:**

- **==** compares memory location (reference)
- **.equals()** compares actual values

**Example:** Two houses with same design. == checks if same house, .equals() checks if design is same.

---

### **Question 5: What are loops in Java?**

**Answer:**

**1. for loop** - when you know how many times to repeat **2. while loop** - when you don't know how many times **3. do-while loop** - runs at least once, then checks condition

---

### **Question 6: What is an array?**

**Answer:** Array is a container that holds multiple values of the same type. Like a row of boxes where you store similar items.

**Example:** int[] numbers = {10, 20, 30, 40};

---

### **Question 7: What is String?**

**Answer:** String is a sequence of characters (text).

**Types:**

- **String** - Cannot change (immutable)
- **StringBuilder** - Can change, faster, not thread-safe
- **StringBuffer** - Can change, slower, thread-safe

---

### **Question 8: What is `static` keyword?**

**Answer:** Static means it belongs to the class, not to individual objects. You don't need to create an object to use it.

**Uses:**

- Static variable - shared by all objects
- Static method - can call without creating object
- Static block - runs once when class loads

---

### **Question 9: What is `this` keyword?**

**Answer:** `this` refers to the current object. Used to avoid confusion between class variables and parameters with same name.

---

### **Question 10: What is method overloading?**

**Answer:** Same method name but different parameters (number, type, or order).

**Example:** Calculator can add(2 numbers), add(3 numbers), add(decimal numbers) - same name, different parameters.

---

### **Question 11: What is a constructor?**

**Answer:** Constructor is a special method that runs automatically when you create an object. It has the same name as the class and no return type.

**Types:**

- **Default constructor** - no parameters
- **Parameterized constructor** - with parameters

---

### **Question 12: What is `final` keyword?**

**Answer:**

- **final variable** - value cannot change (constant)
- **final method** - cannot be overridden by child class
- **final class** - cannot be inherited

---

### **Question 13: What is exception handling?**

**Answer:** Exception handling prevents the program from crashing when an error occurs.

**Keywords:**

- **try** - code that might cause error
- **catch** - handles the error
- **finally** - always executes (cleanup code)
- **throw** - manually throw an exception
- **throws** - declares method might throw exception

---

### **Question 14: Difference between `throw` and `throws`?**

**Answer:**

- **throw** - used inside method to throw an exception
- **throws** - used in method signature to declare exceptions

---

### **Question 15: What is access modifier?**

**Answer:** Controls who can access variables and methods.

- **public** - accessible everywhere
- **private** - only within same class
- **protected** - within package and subclasses
- **default** - only within same package

---

### **Question 16: What is package in Java?**

**Answer:** Package is a folder that groups related classes together. Like organizing files in folders.

**Example:** java.util package contains ArrayList, HashMap, etc.

---

### **Question 17: What is wrapper class?**

**Answer:** Wrapper classes convert primitive types into objects.

- int → Integer
- double → Double
- char → Character
- boolean → Boolean

**Why needed?** Collections (ArrayList, HashMap) work only with objects, not primitives.

---

### **Question 18: What is autoboxing and unboxing?**

**Answer:**

- **Autoboxing** - automatic conversion from primitive to wrapper object
- **Unboxing** - automatic conversion from wrapper object to primitive

---

### **Question 19: What is break and continue?**

**Answer:**

- **break** - exits the loop completely
- **continue** - skips current iteration, goes to next iteration

---

### **Question 20: What is switch statement?**

**Answer:** Switch is used when you want to check one variable against multiple values. Cleaner than multiple if-else.

---

# PART 2: OBJECT-ORIENTED PROGRAMMING (Complete - MOST IMPORTANT)

### **Question 21: What is Object-Oriented Programming?**

**Answer:** OOP is a programming approach that uses objects and classes. We model real-world things as objects in code.

**Example:** A Car object with properties (color, model) and behaviors (drive, brake).

---

### **Question 22: What is a Class and Object?**

**Answer:**

- **Class** - Blueprint/Template (house design)
- **Object** - Actual instance created from class (real house)

One class can create many objects.

---

### **Question 23: What are the 4 Pillars of OOP? (VERY IMPORTANT)**

**Answer:**

1. **Encapsulation** - Hiding data
2. **Inheritance** - Reusing code from parent
3. **Polymorphism** - Many forms
4. **Abstraction** - Showing only essential details

---

### **Question 24: Explain Encapsulation with example**

**Answer:** Encapsulation means wrapping data (variables) and code (methods) together and hiding data from outside.

**How?** Make variables private and provide public getter/setter methods.

**Why?** To protect data from unauthorized access and invalid changes.

**Real example:** ATM card - you can't directly access bank's database, you use ATM (methods) to deposit/withdraw.

---

### **Question 25: Explain Inheritance with example**

**Answer:** Inheritance is when a child class acquires properties and methods from a parent class. Promotes code reusability.

**Types:**

- **Single** - One parent, one child
- **Multilevel** - Grandparent → Parent → Child
- **Hierarchical** - One parent, multiple children
- **Multiple** - One child, multiple parents (NOT in Java with classes, but possible with interfaces)

**Real example:** Animal (parent) → Dog (child), Dog (parent) → Puppy (child)

**Keyword:** `extends`

---

### **Question 26: Explain Polymorphism with example**

**Answer:** Polymorphism means "many forms". Same action behaves differently in different situations.

**Types:**

**1. Compile-time Polymorphism (Method Overloading)**

- Same method name, different parameters
- Decided at compile time

**2. Runtime Polymorphism (Method Overriding)**

- Child class changes parent's method
- Decided at runtime
- Keyword: `@Override`

**Real example:** Payment - can pay by card, cash, or UPI (same action, different methods)

---

### **Question 27: What is method overriding?**

**Answer:** When child class provides its own implementation of a method already defined in parent class.

**Rules:**

- Same method name, same parameters
- Child class changes the behavior
- Cannot override static, final, or private methods

---

### **Question 28: Difference between Overloading and Overriding?**

**Answer:**

|Overloading|Overriding|
|---|---|
|Same class|Different classes (parent-child)|
|Different parameters|Same parameters|
|Compile-time|Runtime|
|No inheritance needed|Requires inheritance|

---

### **Question 29: Explain Abstraction with example**

**Answer:** Abstraction means hiding implementation details and showing only essential features.

**Example:** When you drive a car, you use steering, brake, accelerator. You don't need to know how engine works internally.

**How to achieve:**

- Abstract classes (0-100% abstraction)
- Interfaces (100% abstraction)

---

### **Question 30: What is abstract class?**

**Answer:** Abstract class is a class that cannot be instantiated (cannot create objects). Used as a base for other classes.

**Features:**

- Can have abstract methods (no body) and normal methods
- Use `abstract` keyword
- Child class must implement all abstract methods

---

### **Question 31: What is interface?**

**Answer:** Interface is a blueprint of a class that contains only abstract methods (from Java 8, can have default and static methods).

**Features:**

- All methods are public and abstract by default
- All variables are public, static, and final
- Use `implements` keyword
- Class can implement multiple interfaces (multiple inheritance)

---

### **Question 32: Difference between Abstract Class and Interface?**

**Answer:**

|Abstract Class|Interface|
|---|---|
|Can have abstract and normal methods|Only abstract methods (before Java 8)|
|Can have constructors|Cannot have constructors|
|Can have any access modifiers|Only public|
|Single inheritance (extends one)|Multiple inheritance (implements many)|
|Use when classes are related|Use when classes are not related but share behavior|

---

### **Question 33: Can we create object of abstract class?**

**Answer:** No, we cannot create object of abstract class directly. But we can create reference variable of abstract class type.

---

### **Question 34: What is constructor chaining?**

**Answer:** Calling one constructor from another constructor in the same or different class.

**Types:**

- **Same class** - use `this()`
- **Parent class** - use `super()`

---

### **Question 35: What is `super` keyword?**

**Answer:** `super` refers to the parent class.

**Uses:**

- Access parent class variables
- Call parent class methods
- Call parent class constructor

---

### **Question 36: Can constructor be inherited?**

**Answer:** No, constructors are not inherited. But child class can call parent constructor using `super()`.

---

### **Question 37: What is multiple inheritance? Why not supported in Java?**

**Answer:** Multiple inheritance means one class inheriting from multiple parent classes.

**Not supported in Java (for classes)** because of Diamond Problem - confusion when two parents have same method.

**Workaround:** Use interfaces - a class can implement multiple interfaces.

---

### **Question 38: What is composition?**

**Answer:** Composition is "has-a" relationship. One class contains object of another class.

**Example:** Car has-a Engine, House has-a Room

**Difference from Inheritance:**

- Inheritance = "is-a" (Dog is-a Animal)
- Composition = "has-a" (Car has-a Engine)

---

### **Question 39: What is association, aggregation, and composition?**

**Answer:**

**Association** - Basic relationship between two classes **Aggregation** - "has-a" weak relationship (objects can exist independently) **Composition** - "has-a" strong relationship (objects cannot exist independently)

**Example:**

- Aggregation: Teacher and Student (student can exist without teacher)
- Composition: House and Room (room cannot exist without house)

---

### **Question 40: Can we override static methods?**

**Answer:** No, static methods cannot be overridden. They can be hidden (method hiding), but it's not polymorphism.

---

# PART 3: JAVASCRIPT (Complete)

### **Question 41: What is JavaScript?**

**Answer:** JavaScript is a programming language used to make websites interactive. It runs in web browsers.

**Uses:** Form validation, animations, dynamic content, games

---

### **Question 42: Difference between `var`, `let`, and `const`?**

**Answer:**

|Feature|var|let|const|
|---|---|---|---|
|Scope|Function scope|Block scope|Block scope|
|Reassign|Yes|Yes|No|
|Redeclare|Yes|No|No|
|Hoisting|Yes (undefined)|Yes (temporal dead zone)|Yes (temporal dead zone)|

**Best practice:** Use `const` by default, `let` if you need to change value, avoid `var`.

---

### **Question 43: What are JavaScript data types?**

**Answer:**

**Primitive (7 types):**

1. Number
2. String
3. Boolean
4. Undefined
5. Null
6. Symbol
7. BigInt

**Non-primitive:**

- Object
- Array
- Function

---

### **Question 44: What is difference between `null` and `undefined`?**

**Answer:**

- **undefined** - variable declared but not assigned a value
- **null** - intentionally empty value (assigned by programmer)

---

### **Question 45: What is hoisting?**

**Answer:** Hoisting means JavaScript moves declarations to the top of the code before execution.

**Note:** Only declarations are hoisted, not initializations.

---

### **Question 46: What is closure?**

**Answer:** Closure is when a function remembers variables from its outer function even after the outer function has finished.

**Use:** Data privacy, creating private variables

---

### **Question 47: What is callback function?**

**Answer:** A callback is a function passed as an argument to another function and executed later.

**Example:** Event handlers, setTimeout, array methods (map, filter)

---

### **Question 48: What is promise?**

**Answer:** Promise is an object representing the eventual completion or failure of an asynchronous operation.

**States:**

- Pending
- Fulfilled (resolved)
- Rejected

---

### **Question 49: What is async/await?**

**Answer:** async/await is a modern way to handle asynchronous operations. Makes asynchronous code look like synchronous code.

- **async** - function returns a promise
- **await** - waits for promise to resolve

---

### **Question 50: What is arrow function?**

**Answer:** Arrow function is a shorter syntax for writing functions.

**Differences from regular function:**

- No `this` binding
- Cannot be used as constructor
- No `arguments` object

---

### **Question 51: What is `this` keyword in JavaScript?**

**Answer:** `this` refers to the object that is executing the current function.

**Context matters:**

- In object method → refers to object
- Alone → refers to window object
- In function → refers to window object
- In arrow function → inherits from parent scope

---

### **Question 52: What is event bubbling and capturing?**

**Answer:**

**Event Bubbling** - Event starts from target element and bubbles up to parent elements

**Event Capturing** - Event starts from root and goes down to target element

**Default:** Bubbling

---

### **Question 53: What is event delegation?**

**Answer:** Event delegation means attaching event listener to a parent element instead of multiple child elements. Improves performance.

---

### **Question 54: What are template literals?**

**Answer:** Template literals use backticks (`) for strings and allow embedded expressions.

**Features:**

- Multi-line strings
- String interpolation with ${}

---

### **Question 55: What is destructuring?**

**Answer:** Destructuring is extracting values from arrays or objects into separate variables.

**Makes code cleaner and more readable.**

---

### **Question 56: What is spread operator?**

**Answer:** Spread operator (...) expands an array or object.

**Uses:**

- Copying arrays/objects
- Merging arrays/objects
- Passing array elements as arguments

---

### **Question 57: What is rest parameter?**

**Answer:** Rest parameter (...) collects multiple elements into an array. Used in function parameters.

---

### **Question 58: Difference between `==` and `===`?**

**Answer:**

- **==** (loose equality) - compares values, does type conversion
- **===** (strict equality) - compares values and types, no conversion

**Best practice:** Always use ===

---

### **Question 59: What is typeof operator?**

**Answer:** typeof returns the data type of a variable as a string.

---

### **Question 60: What are higher-order functions?**

**Answer:** Higher-order function is a function that:

- Takes another function as argument, OR
- Returns a function

**Examples:** map, filter, reduce, forEach

---

### **Question 61: What is map, filter, and reduce?**

**Answer:**

**map** - Creates new array by transforming each element **filter** - Creates new array with elements that pass a test **reduce** - Reduces array to a single value

---

### **Question 62: What is setTimeout and setInterval?**

**Answer:**

**setTimeout** - Executes function once after specified delay **setInterval** - Executes function repeatedly at specified intervals

---

### **Question 63: What is JSON?**

**Answer:** JSON (JavaScript Object Notation) is a format for storing and transporting data.

**Methods:**

- JSON.stringify() - converts object to JSON string
- JSON.parse() - converts JSON string to object

---

### **Question 64: What is localStorage and sessionStorage?**

**Answer:**

**localStorage** - Stores data with no expiration time **sessionStorage** - Stores data for one session (until browser closed)

Both store data as key-value pairs in the browser.

---

### **Question 65: What is strict mode?**

**Answer:** Strict mode is a way to opt into a restricted variant of JavaScript. Helps catch common coding errors.

**Enable:** Add "use strict" at the beginning of file or function.

---

# PART 4: REACT JS (Complete)

### **Question 66: What is React?**

**Answer:** React is a JavaScript library for building user interfaces, especially single-page applications. Developed by Facebook.

---

### **Question 67: What are features of React?**

**Answer:**

- Virtual DOM for fast performance
- Component-based architecture
- Unidirectional data flow
- JSX syntax
- Reusable components

---

### **Question 68: What is JSX?**

**Answer:** JSX (JavaScript XML) is a syntax extension that allows writing HTML-like code in JavaScript.

**Benefits:** Makes code more readable and easier to write UI components.

---

### **Question 69: What is Virtual DOM?**

**Answer:** Virtual DOM is a lightweight copy of the real DOM. React updates Virtual DOM first, compares with real DOM, and updates only changed parts.

**Why faster?** Avoids updating entire real DOM, which is slow.

---

### **Question 70: What is component in React?**

**Answer:** Component is a reusable, independent piece of UI.

**Types:**

1. **Functional Component** - JavaScript function that returns JSX
2. **Class Component** - ES6 class that extends React.Component

**Modern practice:** Use functional components with hooks.

---

### **Question 71: Difference between Functional and Class Component?**

**Answer:**

|Functional|Class|
|---|---|
|Simple function|ES6 class|
|No `this` keyword|Uses `this`|
|Use Hooks for state|Use `this.state`|
|Less code|More code|
|Preferred now|Old way|

---

### **Question 72: What is state in React?**

**Answer:** State is an object that holds data that can change over time. When state changes, component re-renders.

**Functional component:** Use `useState` hook **Class component:** Use `this.state`

---

### **Question 73: What are props?**

**Answer:** Props (properties) are used to pass data from parent component to child component. Props are read-only (immutable).

---

### **Question 74: Difference between state and props?**

**Answer:**

|State|Props|
|---|---|
|Managed within component|Passed from parent|
|Mutable (can change)|Immutable (read-only)|
|Can be changed with setState/useState|Cannot be changed by child|
|Local to component|Passed between components|

---

### **Question 75: What are React Hooks?**

**Answer:** Hooks are functions that let you use state and other React features in functional components.

**Common Hooks:**

- useState - manage state
- useEffect - side effects
- useContext - access context
- useRef - reference DOM elements
- useMemo - memoize values
- useCallback - memoize functions

---

### **Question 76: Explain useState hook**

**Answer:** useState is a hook that adds state to functional components.

**Returns:** Array with two elements:

1. Current state value
2. Function to update state

---

### **Question 77: Explain useEffect hook**

**Answer:** useEffect performs side effects in functional components (like componentDidMount, componentDidUpdate, componentWillUnmount in class components).

**Common uses:**

- Fetching data
- Setting up subscriptions
- Manually changing DOM
- Timers

**Dependency array controls when effect runs:**

- No array - runs after every render
- Empty array [] - runs once (on mount)
- With values [count] - runs when those values change

---

### **Question 78: What is useContext hook?**

**Answer:** useContext allows you to access data from Context without prop drilling (passing props through many levels).

**Use case:** Global state management (theme, user authentication)

---

### **Question 79: What is useRef hook?**

**Answer:** useRef creates a mutable reference that persists across renders.

**Uses:**

- Accessing DOM elements directly
- Storing mutable values without causing re-render

---

### **Question 80: What is conditional rendering?**

**Answer:** Conditional rendering means showing different UI based on certain conditions.

**Methods:**

- if-else statements
- Ternary operator (? :)
- Logical && operator
- Switch case

---

### **Question 81: What is list rendering?**

**Answer:** Rendering a list of items using the map() method. Each item needs a unique `key` prop.

**Why key?** Helps React identify which items changed, added, or removed.

---

### **Question 82: What is key prop and why important?**

**Answer:** Key is a special prop that helps React identify which items in a list have changed.

**Rules:**

- Must be unique among siblings
- Should be stable (not change between renders)
- Don't use array index as key (unless list is static)

---

### **Question 83: What is event handling in React?**

**Answer:** Event handling is responding to user actions (click, input, submit).

**Differences from HTML:**

- React events are named using camelCase (onClick not onclick)
- Pass function reference, not string
- Cannot return false to prevent default; must call preventDefault()

---

### **Question 84: What is controlled vs uncontrolled component?**

**Answer:**

**Controlled Component:**

- Form data handled by React state
- Value controlled by React
- Recommended approach

**Uncontrolled Component:**

- Form data handled by DOM
- Use ref to access values
- Like traditional HTML forms

---

### **Question 85: What is lifting state up?**

**Answer:** Lifting state up means moving state to the closest common parent when multiple components need to share the same state.

---

### **Question 86: What is prop drilling?**

**Answer:** Prop drilling is passing props through multiple nested components to reach a deeply nested component.

**Problem:** Makes code harder to maintain **Solution:** Use Context API or state management libraries

---

### **Question 87: What is React Router?**

**Answer:** React Router is a library for handling navigation and routing in React applications.

**Key components:**

- BrowserRouter - wrapper component
- Routes - container for routes
- Route - defines a route
- Link - navigation without page reload
- useNavigate - programmatic navigation

---

### **Question 88: What is lazy loading?**

**Answer:** Lazy loading means loading components only when needed, not all at once.

**Benefits:** Faster initial load time, better performance

**How:** Use React.lazy() and Suspense

---

### **Question 89: What is React Fragment?**

**Answer:** Fragment lets you group multiple elements without adding extra DOM nodes.

**Why?** Component can return only one element; Fragment helps return multiple without wrapper div.

---

### **Question 90: What is Higher Order Component (HOC)?**

**Answer:** HOC is a function that takes a component and returns a new enhanced component.

**Use:** Code reuse, logic abstraction

---

### **Question 91: What is pure component?**

**Answer:** Pure component is a component that renders the same output for the same props and state. It implements shallow comparison for props and state to avoid unnecessary re-renders.

---

### **Question 92: What is React lifecycle?**

**Answer:** Lifecycle methods are hooks that run at specific times during a component's life.

**Phases (Class Component):**

1. **Mounting:** constructor → render → componentDidMount
2. **Updating:** render → componentDidUpdate
3. **Unmounting:** componentWillUnmount

**Functional Component:** Use useEffect for lifecycle methods

---

### **Question 93: What is Redux?**

**Answer:** Redux is a state management library for managing global state in large applications.

**Core Concepts:**

- Store - single source of truth
- Action - describes what happened
- Reducer - specifies how state changes
- Dispatch - sends action to reducer

---

### **Question 94: What is Context API?**

**Answer:** Context API is React's built-in solution for passing data through component tree without prop drilling.

**Use case:** Theme, authentication, language preferences

---

### **Question 95: What is error boundary?**

**Answer:** Error boundary is a component that catches JavaScript errors in child components, logs errors, and displays fallback UI.

**Note:** Only works in class components (not functional)

---

# PART 5: HTML (Complete)

### **Question 96: What is HTML?**

**Answer:** HTML (HyperText Markup Language) is the standard language for creating web pages. It describes the structure of content.

---

### **Question 97: What is the difference between HTML and HTML5?**

**Answer:**

**HTML5 improvements:**

- Semantic elements (header, footer, article, section)
- Audio and video support
- Canvas for graphics
- Local storage
- Form enhancements
- Better support for mobile devices

---

### **Question 98: What are semantic HTML elements?**

**Answer:** Semantic elements clearly describe their meaning to both browser and developer.

**Examples:**

- `<header>` - page header
- `<nav>` - navigation links
- `<main>` - main content
- `<article>` - independent content
- `<section>` - thematic grouping
- `<aside>` - side content
- `<footer>` - page footer

**Why use?** Better SEO, accessibility, code readability

---

### **Question 99: What is the difference between `<div>` and `<span>`?**

**Answer:**

**`<div>`:**

- Block-level element
- Takes full width
- Starts on new line

**`<span>`:**

- Inline element
- Takes only necessary width
- Stays in same line

---

### **Question 100: What are HTML attributes?**

**Answer:** Attributes provide additional information about HTML elements. Written inside opening tag.

**Common attributes:**

- id - unique identifier
- class - for styling
- src - source for images/videos
- href - link destination
- alt - alternative text
- title - tooltip text
- style - inline CSS

---

### **Question 101: Difference between `id` and `class`?**

**Answer:**

|id|class|
|---|---|
|Unique (one per page)|Can be reused|
|Higher CSS specificity|Lower CSS specificity|
|Used with # in CSS|Used with . in CSS|
|One id per element|Multiple classes per element|

---

### **Question 102: What is the difference between `<link>` and `<a>` tag?**

**Answer:**

**`<link>`:**

- Links external resources (CSS, favicon)
- In `<head>` section
- Not clickable

**`<a>`:**

- Creates hyperlinks
- In `<body>` section
- Clickable by user

---

### **Question 103: What are form elements in HTML?**

**Answer:**

Common form elements:

- `<input>` - text, email, password, checkbox, radio
- `<textarea>` - multi-line text
- `<select>` - dropdown list
- `<button>` - clickable button
- `<label>` - label for input
- `<form>` - form container

---

### **Question 104: What are input types in HTML5?**

**Answer:**

New HTML5 input types:

- email
- url
- tel (telephone)
- number
- date
- time
- color
- range (slider)
- search

---

### **Question 105: What is the difference between `<button>` and `<input type="button">`?**

**Answer:**

**`<button>`:**

- Can contain HTML content (text, images)
- More flexible styling
- Better for accessibility

**`<input type="button">`:**

- Only text content
- Limited styling
- Self-closing tag

---

### **Question 106: What are meta tags?**

**Answer:** Meta tags provide metadata about HTML document. Placed in `<head>` section.

**Common meta tags:**

- charset - character encoding
- viewport - responsive design
- description - page description for SEO
- keywords - keywords for SEO
- author - page author

---

### **Question 107: What is viewport meta tag?**

**Answer:** Viewport meta tag controls page dimensions and scaling on mobile devices.

**Essential for responsive design.**

---

### **Question 108: What is the difference between `<script>` in head vs body?**

**Answer:**

**In `<head>`:**

- Loads before page content
- Blocks HTML parsing
- Use `defer` or `async` attribute

**In `<body>` (bottom):**

- Loads after page content
- Better for performance
- Recommended placement

---

### **Question 109: What are `async` and `defer` attributes?**

**Answer:**

**async:**

- Downloads script in parallel
- Executes immediately when downloaded
- Doesn't guarantee order

**defer:**

- Downloads script in parallel
- Executes after HTML parsing
- Maintains order

---

### **Question 110: What is the difference between `<ol>`, `<ul>`, and `<dl>`?**

**Answer:**

**`<ol>`:** Ordered list (numbered) **`<ul>`:** Unordered list (bullets) **`<dl>`:** Description list (term and description pairs)

---

### **Question 111: What are HTML entities?**

**Answer:** HTML entities are used to display reserved characters or special symbols.

**Examples:**

- `&lt;` for
- `&gt;` for >
- `&amp;` for &
- `&nbsp;` for non-breaking space
- `&copy;` for ©

---

### **Question 112: What is `<iframe>`?**

**Answer:** iframe (inline frame) embeds another HTML document within current page.

**Uses:** Embedding videos (YouTube), maps, external content

---

### **Question 113: What is the difference between `<img>` and `<figure>`?**

**Answer:**

**`<img>`:** Just displays image

**`<figure>`:** Semantic container for image with optional caption (`<figcaption>`)

---

### **Question 114: What are data attributes?**

**Answer:** Data attributes (data-*) store custom data on HTML elements.

**Use:** Store information that doesn't fit standard attributes; accessible via JavaScript.

---

### **Question 115: What is localStorage vs sessionStorage vs cookies?**

**Answer:**

|Feature|localStorage|sessionStorage|Cookies|
|---|---|---|---|
|Expiry|No expiry|Session ends|Can set expiry|
|Storage|10MB|10MB|4KB|
|Sent to server|No|No|Yes (every request)|
|Access|Client-side|Client-side|Client & Server|

---

# PART 6: CSS (Complete)

### **Question 116: What is CSS?**

**Answer:** CSS (Cascading Style Sheets) is used to style and layout web pages - colors, fonts, spacing, positioning.

---

### **Question 117: What are the ways to add CSS?**

**Answer:**

1. **Inline CSS:** In HTML element using style attribute
2. **Internal CSS:** In `<style>` tag in `<head>`
3. **External CSS:** Separate .css file linked with `<link>`

**Best practice:** External CSS (reusable, organized)

---

### **Question 118: What is CSS selector?**

**Answer:** Selectors target HTML elements to apply styles.

**Types:**

- Element selector (p, div)
- Class selector (.classname)
- ID selector (#idname)
- Universal selector (*)
- Attribute selector ([type="text"])
- Pseudo-class selector (:hover, :focus)
- Pseudo-element selector (::before, ::after)

---

### **Question 119: What is CSS specificity?**

**Answer:** Specificity determines which CSS rule applies when multiple rules target same element.

**Priority (high to low):**

1. Inline styles (1000)
2. IDs (100)
3. Classes, attributes, pseudo-classes (10)
4. Elements, pseudo-elements (1)

**!important overrides everything (avoid using!)**

---

### **Question 120: What is Box Model?**

**Answer:** Box model describes the rectangular boxes around HTML elements.

**Components (outside to inside):**

1. **Margin** - space outside border
2. **Border** - border around element
3. **Padding** - space inside border
4. **Content** - actual content

---

### **Question 121: What is the difference between `margin` and `padding`?**

**Answer:**

**Margin:**

- Space outside element
- Separates element from others
- Can be negative
- Doesn't have background color

**Padding:**

- Space inside element
- Separates content from border
- Cannot be negative
- Has element's background color

---

### **Question 122: What is CSS positioning?**

**Answer:**

**Types:**

1. **static:** Default, normal flow
2. **relative:** Relative to normal position
3. **absolute:** Relative to nearest positioned parent
4. **fixed:** Relative to viewport (stays on scroll)
5. **sticky:** Switches between relative and fixed

---

### **Question 123: What is the difference between `display: none` and `visibility: hidden`?**

**Answer:**

**display: none:**

- Element completely removed from layout
- Takes no space
- Cannot interact with it

**visibility: hidden:**

- Element hidden but still takes space
- Layout not affected
- Still in document flow

---

### **Question 124: What is Flexbox?**

**Answer:** Flexbox is a layout model for arranging elements in rows or columns.

**Main concepts:**

- Container (parent) with `display: flex`
- Items (children) arranged automatically
- Easy alignment and distribution

**Properties:**

- justify-content - horizontal alignment
- align-items - vertical alignment
- flex-direction - row or column
- flex-wrap - wrap to next line

---

### **Question 125: What is CSS Grid?**

**Answer:** CSS Grid is a 2D layout system for rows and columns.

**Use case:** Complex layouts, precise control

**Key properties:**

- grid-template-columns
- grid-template-rows
- gap
- grid-column / grid-row

---

### **Question 126: Difference between Flexbox and Grid?**

**Answer:**

**Flexbox:**

- One-dimensional (row OR column)
- Content-first design
- Best for components

**Grid:**

- Two-dimensional (rows AND columns)
- Layout-first design
- Best for page layouts

---

### **Question 127: What are pseudo-classes?**

**Answer:** Pseudo-classes define special state of an element.

**Common examples:**

- :hover - mouse over
- :active - being clicked
- :focus - has focus
- :first-child - first child
- :nth-child(n) - specific child
- :not() - exclude elements

---

### **Question 128: What are pseudo-elements?**

**Answer:** Pseudo-elements style specific part of an element.

**Common examples:**

- ::before - insert content before
- ::after - insert content after
- ::first-letter - first letter
- ::first-line - first line
- ::selection - selected text

---

### **Question 129: What is the difference between `relative`, `absolute`, and `fixed` positioning?**

**Answer:**

**relative:**

- Relative to its normal position
- Other elements not affected
- Still occupies original space

**absolute:**

- Relative to nearest positioned ancestor
- Removed from normal flow
- Doesn't occupy space

**fixed:**

- Relative to viewport
- Stays in place on scroll
- Removed from normal flow

---

### **Question 130: What is `z-index`?**

**Answer:** z-index controls stacking order of positioned elements. Higher z-index = appears on top.

**Note:** Only works on positioned elements (not static)

---

### **Question 131: What are CSS units?**

**Answer:**

**Absolute units:**

- px - pixels (fixed size)

**Relative units:**

- % - percentage of parent
- em - relative to parent font size
- rem - relative to root font size
- vh - viewport height (1vh = 1% of viewport height)
- vw - viewport width (1vw = 1% of viewport width)

**Best practice:** Use relative units for responsive design

---

### **Question 132: What is the difference between `em` and `rem`?**

**Answer:**

**em:**

- Relative to parent element's font size
- Can compound (nested elements multiply)

**rem:**

- Relative to root element's font size
- More predictable, doesn't compound

**Recommendation:** Use rem for consistency

---

### **Question 133: What is responsive design?**

**Answer:** Responsive design makes websites work well on all devices (desktop, tablet, mobile) by adapting layout based on screen size.

**Techniques:**

- Media queries
- Flexible grids
- Flexible images
- Viewport meta tag

---

### **Question 134: What are media queries?**

**Answer:** Media queries apply different styles based on device characteristics (screen size, orientation).

**Use:** Create responsive designs

---

### **Question 135: What is mobile-first approach?**

**Answer:** Mobile-first means designing for mobile devices first, then adding styles for larger screens.

**Benefits:** Better performance, forces focus on essential content

---

### **Question 136: What is CSS transition?**

**Answer:** Transition creates smooth animation when property values change.

**Properties:**

- transition-property - what to animate
- transition-duration - how long
- transition-timing-function - speed curve
- transition-delay - delay before start

---

### **Question 137: What is CSS animation?**

**Answer:** Animation creates complex animations using keyframes.

**More powerful than transitions:**

- Multiple stages
- Can loop
- Can run automatically

---

### **Question 138: What is the difference between `transition` and `animation`?**

**Answer:**

**Transition:**

- Triggered by state change (:hover, :focus)
- Two states (start and end)
- Simpler

**Animation:**

- Can run automatically
- Multiple stages with keyframes
- More control

---

### **Question 139: What is CSS preprocessor?**

**Answer:** CSS preprocessor extends CSS with variables, nesting, mixins, functions.

**Popular preprocessors:**

- SASS/SCSS
- LESS
- Stylus

**Benefits:** DRY code, better organization, reusability

---

### **Question 140: What is the difference between `inline`, `block`, and `inline-block`?**

**Answer:**

**inline:**

- Stays in same line
- Width/height ignored
- Examples: span, a

**block:**

- Starts on new line
- Takes full width
- Can set width/height
- Examples: div, p, h1

**inline-block:**

- Stays in same line
- Can set width/height
- Best of both

---

### **Question 141: What is CSS float?**

**Answer:** Float positions element to left or right, allowing text to wrap around it.

**Values:** left, right, none

**Common use:** Image with text wrap (though Flexbox/Grid preferred now)

---

### **Question 142: What is CSS clear property?**

**Answer:** Clear controls behavior of floating elements. Prevents element from appearing next to floated elements.

**Values:** left, right, both, none

---

### **Question 143: What is overflow property?**

**Answer:** Overflow controls what happens when content is too big for container.

**Values:**

- visible - content shown outside (default)
- hidden - content clipped
- scroll - always show scrollbar
- auto - scrollbar only when needed

---

### **Question 144: What is `opacity` vs `rgba()`?**

**Answer:**

**opacity:**

- Affects entire element (including children)
- Value: 0 to 1

**rgba():**

- Affects only color (background, text)
- Doesn't affect children
- Last value is alpha (transparency)

---

### **Question 145: What is CSS specificity calculation?**

**Answer:**

Count selectors:

- Inline style = 1000 points
- ID = 100 points
- Class/attribute/pseudo-class = 10 points
- Element/pseudo-element = 1 point

Higher total wins!

---

### **Question 146: What is the difference between `class` and `id` in CSS?**

**Answer:**

**class:**

- Can be used multiple times
- Lower specificity (10)
- Select with .classname
- Best for reusable styles

**id:**

- Should be unique
- Higher specificity (100)
- Select with #idname
- Best for unique elements

---

### **Question 147: What is CSS variable (custom property)?**

**Answer:** CSS variables store values to reuse throughout document.

**Benefits:**

- Easy to update theme
- Reduce repetition
- Better maintainability

---

### **Question 148: What is the difference between `absolute` and `relative` units?**

**Answer:**

**Absolute (px):**

- Fixed size
- Same on all devices
- Less flexible

**Relative (%, em, rem, vh, vw):**

- Scales based on reference
- Responsive
- Better for different screen sizes

---

### **Question 149: What is the `calc()` function?**

**Answer:** calc() performs calculations to determine CSS property values.

**Can mix units (px, %, em, etc.)**

---

### **Question 150: What is the difference between `reset.css` and `normalize.css`?**

**Answer:**

**reset.css:**

- Removes all default browser styles
- Start from zero
- More aggressive

**normalize.css:**

- Makes styles consistent across browsers
- Keeps useful defaults
- More moderate

**Most developers prefer normalize.css**

---

## **BONUS: Common Coding Questions (If Asked)**

### **Find Prime Number**

Check if number divisible by any number from 2 to square root of number.

### **Reverse a String**

Start from last character, go backwards to first.

### **Palindrome Check**

Compare string with its reverse.

### **Fibonacci Series**

Each number is sum of previous two: 0, 1, 1, 2, 3, 5, 8...

### **Factorial**

Multiply number by all numbers below it: 5! = 5×4×3×2×1 = 120

### **Find Duplicate in Array**

Use nested loops or use Set/Map.

### **Sum of Array Elements**

Loop through array and add each element.

### **Largest/Smallest in Array**

Assume first element, compare with rest.

### **Vowel Count**

Check each character if it's a, e, i, o, u.

### **Armstrong Number**

Sum of cubes of digits equals the number: 153 = 1³+5³+3³

---

## **INTERVIEW TIPS:**

1. **Stay Calm** - Take your time to think
2. **Ask Questions** - If unclear, ask for clarification
3. **Think Aloud** - Explain your thought process
4. **Be Honest** - If you don't know, say "I'm not sure, but I think..."
5. **Give Examples** - Real-world examples show understanding
6. **Use Simple Language** - Don't try to sound too technical
7. **Practice Common Questions** - Prepare answers beforehand
8. **Be Confident** - Believe in yourself!
