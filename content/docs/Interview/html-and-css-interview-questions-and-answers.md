---
title: HTML & CSS Interview Questions and Answers
---

## Table of Contents
 
### HTML Questions

<details>
<summary><strong>Basic Level</strong></summary>

- [Q1: What is HTML?](#q1-what-is-html)
- [Q2: What is the difference between HTML elements and tags?](#q2-what-is-the-difference-between-html-elements-and-tags)
- [Q3: What are semantic HTML elements?](#q3-what-are-semantic-html-elements)
- [Q4: What is the difference between `<div>` and `<span>`?](#q4-what-is-the-difference-between-div-and-span)
- [Q5: What are void/self-closing elements?](#q5-what-are-voidself-closing-elements)
- [Q6: What is the purpose of the DOCTYPE declaration?](#q6-what-is-the-purpose-of-the-doctype-declaration)
- [Q7: What is the difference between `<strong>` and `<b>`, `<em>` and `<i>`?](#q7-what-is-the-difference-between-strong-and-b-em-and-i)
- [Q8: What are data attributes?](#q8-what-are-data-attributes)
- [Q9: What is the difference between `id` and `class` attributes?](#q9-what-is-the-difference-between-id-and-class-attributes)
- [Q10: What are HTML entities?](#q10-what-are-html-entities)

</details>

<details>
<summary><strong>Intermediate Level</strong></summary>

- [Q11: `<script>` vs `async` vs ` defer ` ] (#q11-what-is-the-difference-between-script-script-async-and-script-defer)
- [Q12: Meta tags](#q12-what-are-meta-tags-and-why-are-they-important)
- [Q13: localStorage vs sessionStorage vs cookies](#q13-what-is-the-difference-between-localstorage-sessionstorage-and-cookies)
- [Q14: HTML5 input types](#q14-what-are-the-different-input-types-in-html5)
- [Q15: `<picture>` element](#q15-what-is-the-picture-element)
- [Q16: HTML5 form validations](#q16-what-are-html5-form-validations)
- [Q17: `<section>` vs `<article>` vs `<div>`](#q17-what-is-the-difference-between-section-article-and-div)
- [Q18: Accessibility in HTML](#q18-what-is-accessibility-in-html)
- [Q19: ARIA attributes](#q19-what-are-aria-attributes)
- [Q20: `srcset` attribute](#q20-what-is-the-srcset-attribute)

</details>

<details>
<summary><strong>Advanced Level</strong></summary>

- [Q21: Shadow DOM](#q21-what-is-the-shadow-dom)
- [Q22: Web Components](#q22-what-are-web-components)
- [Q23: `DOMContentLoaded` vs `load`](#q23-what-is-the-difference-between-domcontentloaded-and-load-events)
- [Q24: Critical Rendering Path](#q24-what-is-critical-rendering-path)
- [Q25: SEO best practices](#q25-what-are-the-best-practices-for-seo-in-html)

</details>


### CSS Questions

<details>
<summary><strong>Basic Level</strong></summary>

- [Q26: What is CSS?](#q26-what-is-css)
- [Q27: Ways to apply CSS](#q27-what-are-the-different-ways-to-apply-css)
- [Q28: CSS Box Model](#q28-what-is-the-css-box-model)
- [Q29: Margin vs Padding](#q29-what-is-the-difference-between-margin-and-padding)
- [Q30: CSS selectors](#q30-what-are-css-selectors)
- [Q31: CSS specificity](#q31-what-is-css-specificity)
- [Q32: `display:none` vs `visibility:hidden`](#q32-what-is-the-difference-between-display-none-and-visibility-hidden)
- [Q33: Pseudo-classes vs pseudo-elements](#q33-what-are-pseudo-classes-and-pseudo-elements)
- [Q34: CSS positioning](#q34-what-is-the-difference-between-absolute-relative-fixed-and-sticky-positioning)
- [Q35: CSS units](#q35-what-are-css-units)

</details>

<details>
<summary><strong>Intermediate Level</strong></summary>

- [Q36: Flexbox](#q36-what-is-flexbox)
- [Q37: CSS Grid](#q37-what-is-css-grid)
- [Q38: Flexbox vs Grid](#q38-what-is-the-difference-between-flexbox-and-grid)
- [Q39: CSS variables](#q39-what-are-css-variables-custom-properties)
- [Q40: `z-index`](#q40-what-is-the-z-index-property)
- [Q41: CSS preprocessors](#q41-what-are-css-preprocessors)
- [Q42: `em` vs `rem`](#q42-what-is-the-difference-between-em-and-rem)
- [Q43: Media queries](#q43-what-are-media-queries)
- [Q44: Mobile-first design](#q44-what-is-mobile-first-design)
- [Q45: `calc()`](#q45-what-is-the-css-calc-function)
- [Q46: Transitions vs animations](#q46-what-are-transitions-and-animations-in-css)
- [Q47: `box-sizing: border-box`](#q47-what-is-box-sizing-border-box)
- [Q48: Vendor prefixes](#q48-what-are-vendor-prefixes)
- [Q49: CSS float](#q49-what-is-the-css-float-property)
- [Q50: CSS reset vs normalize](#q50-what-is-a-css-reset-or-normalize)

</details>

<details>
<summary><strong>Advanced Level</strong></summary>

- [Q51: CSS Cascade](#q51-what-is-the-css-cascade)
- [Q52: CSS containment](#q52-what-are-css-containment-and-the-contain-property)
- [Q53: `will-change`](#q53-what-is-the-css-will-change-property)
- [Q54: Critical CSS](#q54-what-is-critical-css)
- [Q55: CSS Modules](#q55-what-are-css-modules)
- [Q56: BEM](#q56-what-is-bem-block-element-modifier)
- [Q57: CSS-in-JS](#q57-what-is-css-in-js)
- [Q58: CSS Houdini](#q58-what-are-css-houdini-apis)
- [Q59: `auto-fit` vs `auto-fill`](#q59-what-is-the-difference-between-css-grids-auto-fit-and-auto-fill)
- [Q60: Logical properties](#q60-what-are-logical-properties-in-css)
- [Q61: `clip-path`](#q61-what-is-the-clip-path-property)
- [Q62: CSS counters](#q62-what-are-css-counters)
- [Q63: `object-fit` and `object-position`](#q63-what-is-object-fit-and-object-position)
- [Q64: `@supports`](#q64-what-is-the-supports-rule)
- [Q65: CSS filters](#q65-what-are-css-filters)
- [Q66: `backdrop-filter`](#q66-what-is-the-backdrop-filter-property)
- [Q67: `nth-child` vs `nth-of-type`](#q67-what-is-the-difference-between-nth-child-and-nth-of-type)
- [Q68: `aspect-ratio`](#q68-what-is-the-css-aspect-ratio-property)
- [Q69: Container queries](#q69-what-are-container-queries)
- [Q70: `clamp()`](#q70-what-is-the-clamp-function)
- [Q71: Subgrid and nested grids](#q71-what-are-subgrid-and-nested-grids)
- [Q72: `inset`](#q72-what-is-the-inset-property)
- [Q73: CSS scroll snap](#q73-what-are-css-scroll-snap-properties)
- [Q74: `currentColor` vs CSS variables](#q74-what-is-the-difference-between-currentcolor-and-css-variables)
- [Q75: CSS performance considerations](#q75-what-are-performance-considerations-in-css)

</details>

</details>



## HTML Questions

### Basic Level

###**Q1: What is HTML?** HTML (HyperText Markup Language) is the standard markup language used to create web pages. It describes the structure and content of a webpage using elements and tags.

**Q2: What is the difference between HTML elements and tags?** HTML tags are the markup syntax (e.g., `<p>`, `</p>`), while HTML elements consist of the opening tag, content, and closing tag together (e.g., `<p>This is content</p>`).

**Q3: What are semantic HTML elements?** Semantic elements clearly describe their meaning to both the browser and developer. Examples include `<header>`, `<nav>`, `<article>`, `<section>`, `<aside>`, `<footer>`, `<main>`. They improve accessibility and SEO.

**Q4: What is the difference between `<div>` and `<span>`?**

- `<div>` is a block-level element that takes up the full width available and starts on a new line
- `<span>` is an inline element that only takes up as much width as necessary and doesn't start on a new line

**Q5: What are void/self-closing elements?** Elements that don't have closing tags and can't contain content. Examples: `<img>`, `<br>`, `<hr>`, `<input>`, `<meta>`, `<link>`.

**Q6: What is the purpose of the DOCTYPE declaration?** `<!DOCTYPE html>` tells the browser which version of HTML the page is written in and ensures the page is rendered in standards mode.

**Q7: What is the difference between `<strong>` and `<b>`, `<em>` and `<i>`?**

- `<strong>` and `<em>` are semantic (indicate importance and emphasis)
- `<b>` and `<i>` are presentational (just make text bold or italic)
- Use semantic tags for better accessibility and SEO

**Q8: What are data attributes?** Custom attributes that start with `data-` and allow you to store extra information on HTML elements. Example: `<div data-user-id="123">`.

**Q9: What is the difference between `id` and `class` attributes?**

- `id` must be unique on a page and has higher CSS specificity
- `class` can be used on multiple elements and elements can have multiple classes

**Q10: What are HTML entities?** Special characters represented by codes, like `&lt;` for <, `&gt;` for >, `&amp;` for &, `&nbsp;` for non-breaking space, `&copy;` for ©.

### Intermediate Level

**Q11: What is the difference between `<script>`, `<script async>`, and `<script defer>`?**

- Regular `<script>`: Blocks HTML parsing, downloads and executes immediately
- `async`: Downloads in parallel, executes as soon as downloaded (may block parsing)
- `defer`: Downloads in parallel, executes after HTML parsing is complete, in order

**Q12: What are meta tags and why are they important?** Meta tags provide metadata about the HTML document. Important ones include:

- `<meta charset="UTF-8">` - Character encoding
- `<meta name="viewport" content="width=device-width, initial-scale=1.0">` - Responsive design
- `<meta name="description" content="...">` - SEO description
- `<meta property="og:title" content="...">` - Social media sharing

**Q13: What is the difference between localStorage, sessionStorage, and cookies?**

- `localStorage`: Persists indefinitely, ~5-10MB storage, client-side only
- `sessionStorage`: Persists until tab/window closes, ~5-10MB storage, client-side only
- `cookies`: Can be set to expire, ~4KB, sent with every HTTP request

**Q14: What are the different input types in HTML5?** `text`, `password`, `email`, `number`, `tel`, `url`, `date`, `time`, `datetime-local`, `color`, `range`, `search`, `checkbox`, `radio`, `file`, `submit`, `button`, `hidden`.

**Q15: What is the `<picture>` element?** Allows responsive images by specifying multiple sources. The browser selects the most appropriate image based on device characteristics.

```html
<picture>
  <source media="(min-width: 800px)" srcset="large.jpg">
  <source media="(min-width: 400px)" srcset="medium.jpg">
  <img src="small.jpg" alt="Description">
</picture>
```

**Q16: What are HTML5 form validations?** Built-in validation attributes like `required`, `pattern`, `min`, `max`, `minlength`, `maxlength`, `type="email"`, etc.

**Q17: What is the difference between `<section>`, `<article>`, and `<div>`?**

- `<section>`: Thematic grouping of content, usually with a heading
- `<article>`: Self-contained, independently distributable content
- `<div>`: Generic container with no semantic meaning

**Q18: What is accessibility in HTML?** Making web content usable for people with disabilities. Key practices include:

- Using semantic HTML
- Adding `alt` text to images
- Using ARIA attributes when needed
- Ensuring keyboard navigation
- Proper heading hierarchy

**Q19: What are ARIA attributes?** Accessible Rich Internet Applications attributes that improve accessibility for screen readers. Examples: `role`, `aria-label`, `aria-labelledby`, `aria-hidden`, `aria-expanded`.

**Q20: What is the `srcset` attribute?** Allows specifying multiple image sources for different screen sizes/resolutions:

```html
<img src="small.jpg" 
     srcset="small.jpg 500w, medium.jpg 1000w, large.jpg 1500w"
     sizes="(max-width: 600px) 500px, 1000px">
```

### Advanced Level

**Q21: What is the Shadow DOM?** A way to encapsulate markup, styles, and behavior in a web component, keeping it isolated from the main document DOM.

**Q22: What are Web Components?** Reusable custom elements with encapsulated functionality. They consist of Custom Elements, Shadow DOM, HTML Templates, and ES Modules.

**Q23: What is the difference between `DOMContentLoaded` and `load` events?**

- `DOMContentLoaded`: Fires when HTML is parsed and DOM is built (doesn't wait for stylesheets, images)
- `load`: Fires when entire page including all resources is fully loaded

**Q24: What is Critical Rendering Path?** The sequence of steps the browser takes to render a page: DOM construction → CSSOM construction → Render Tree → Layout → Paint.

**Q25: What are the best practices for SEO in HTML?**

- Semantic HTML structure
- Proper heading hierarchy (h1-h6)
- Meta tags (title, description)
- Alt text for images
- Clean URL structure
- Schema markup
- Fast loading times

---

## CSS Questions

### Basic Level

**Q26: What is CSS?** Cascading Style Sheets is a styling language used to describe the presentation of HTML documents, controlling layout, colors, fonts, and responsive design.

**Q27: What are the different ways to apply CSS?**

- Inline: `<div style="color: red;">`
- Internal: `<style>` tag in HTML head
- External: Separate `.css` file linked with `<link>`
- Import: `@import` in CSS file

**Q28: What is the CSS Box Model?** Every element is a rectangular box consisting of:

- Content: The actual content
- Padding: Space between content and border
- Border: Surrounds padding
- Margin: Space outside the border

**Q29: What is the difference between `margin` and `padding`?**

- Padding is inside the element's border (affects background color)
- Margin is outside the element's border (transparent, creates space between elements)

**Q30: What are CSS selectors?** Patterns used to select elements:

- Element: `p`
- Class: `.classname`
- ID: `#idname`
- Attribute: `[type="text"]`
- Descendant: `div p`
- Child: `div > p`
- Pseudo-class: `:hover`, `:first-child`
- Pseudo-element: `::before`, `::after`

**Q31: What is CSS specificity?** How browsers decide which CSS rule applies when multiple rules target the same element. Hierarchy:

1. Inline styles (1000)
2. IDs (100)
3. Classes, attributes, pseudo-classes (10)
4. Elements, pseudo-elements (1) `!important` overrides everything (avoid if possible).

**Q32: What is the difference between `display: none` and `visibility: hidden`?**

- `display: none`: Removes element from document flow (no space taken)
- `visibility: hidden`: Hides element but maintains space in layout

**Q33: What are pseudo-classes and pseudo-elements?**

- Pseudo-classes (`:hover`, `:focus`, `:nth-child`): Select elements in a specific state
- Pseudo-elements (`::before`, `::after`, `::first-letter`): Style specific parts of elements

**Q34: What is the difference between `absolute`, `relative`, `fixed`, and `sticky` positioning?**

- `relative`: Positioned relative to its normal position
- `absolute`: Positioned relative to nearest positioned ancestor
- `fixed`: Positioned relative to viewport (doesn't scroll)
- `sticky`: Toggles between relative and fixed based on scroll position

**Q35: What are CSS units?**

- Absolute: `px`, `pt`, `cm`, `mm`, `in`
- Relative: `%`, `em`, `rem`, `vw`, `vh`, `vmin`, `vmax`, `ch`, `ex`

### Intermediate Level

**Q36: What is Flexbox?** A one-dimensional layout system for arranging items in rows or columns. Key properties:

- Container: `display: flex`, `flex-direction`, `justify-content`, `align-items`, `flex-wrap`
- Items: `flex-grow`, `flex-shrink`, `flex-basis`, `align-self`, `order`

**Q37: What is CSS Grid?** A two-dimensional layout system for creating complex layouts with rows and columns. Key properties:

- Container: `display: grid`, `grid-template-columns`, `grid-template-rows`, `gap`, `grid-template-areas`
- Items: `grid-column`, `grid-row`, `grid-area`

**Q38: What is the difference between Flexbox and Grid?**

- Flexbox: One-dimensional (row or column), content-first, better for components
- Grid: Two-dimensional (rows and columns), layout-first, better for page layouts

**Q39: What are CSS variables (Custom Properties)?** Reusable values defined with `--` prefix:

```css
:root {
  --primary-color: #007bff;
}
.button {
  background-color: var(--primary-color);
}
```

**Q40: What is the `z-index` property?** Controls stacking order of positioned elements. Higher values appear in front. Only works on positioned elements (not static).

**Q41: What are CSS preprocessors?** Tools like Sass, Less, and Stylus that extend CSS with variables, nesting, mixins, functions, and other features. They compile to regular CSS.

**Q42: What is the difference between `em` and `rem`?**

- `em`: Relative to parent element's font size
- `rem`: Relative to root element's (`<html>`) font size

**Q43: What are media queries?** Apply different styles based on device characteristics:

```css
@media screen and (max-width: 768px) {
  .container { width: 100%; }
}
```

**Q44: What is mobile-first design?** Designing for mobile devices first, then progressively enhancing for larger screens using `min-width` media queries.

**Q45: What is the CSS `calc()` function?** Performs calculations in CSS:

```css
width: calc(100% - 50px);
height: calc(100vh - 80px);
```

**Q46: What are transitions and animations in CSS?**

- Transitions: Smooth changes between states (requires trigger like `:hover`)
- Animations: More complex, can loop, use keyframes, don't require trigger

**Q47: What is `box-sizing: border-box`?** Makes the width and height include padding and border (not just content), making sizing more intuitive.

**Q48: What are vendor prefixes?** Browser-specific prefixes for experimental features: `-webkit-`, `-moz-`, `-ms-`, `-o-`. Examples: `-webkit-transform`, `-moz-border-radius`.

**Q49: What is the CSS `float` property?** Originally for wrapping text around images, later used for layouts (now replaced by Flexbox/Grid). Values: `left`, `right`, `none`.

**Q50: What is a CSS reset or normalize?**

- CSS Reset: Removes all default browser styling
- Normalize.css: Makes default styles consistent across browsers while preserving useful defaults

### Advanced Level

**Q51: What is the CSS Cascade?** The algorithm that determines which styles apply when multiple rules target the same element, based on: origin, specificity, order of appearance, and importance.

**Q52: What are CSS containment and the `contain` property?** Tells the browser that an element's subtree is independent, allowing performance optimizations. Values: `size`, `layout`, `style`, `paint`.

**Q53: What is the CSS `will-change` property?** Hints to the browser that an element will change, allowing optimization:

```css
.element {
  will-change: transform, opacity;
}
```

Use sparingly as it can hurt performance if overused.

**Q54: What is Critical CSS?** The minimum CSS needed to render above-the-fold content. Inlined in HTML for faster initial page load.

**Q55: What are CSS Modules?** A way to scope CSS locally to components, avoiding naming conflicts. Class names are automatically made unique at build time.

**Q56: What is BEM (Block Element Modifier)?** A CSS naming methodology:

- Block: `.block`
- Element: `.block__element`
- Modifier: `.block--modifier`, `.block__element--modifier`

**Q57: What is CSS-in-JS?** Writing CSS in JavaScript files. Libraries include styled-components, Emotion, JSS. Provides scoping, dynamic styles, and better integration with component logic.

**Q58: What are CSS Houdini APIs?** Low-level APIs that expose parts of the CSS engine, allowing developers to extend CSS. Includes Paint API, Layout API, Animation API, Properties and Values API.

**Q59: What is the difference between CSS Grid's `auto-fit` and `auto-fill`?**

- `auto-fill`: Creates as many tracks as fit, even if empty
- `auto-fit`: Creates tracks but collapses empty ones

**Q60: What are logical properties in CSS?** Direction-agnostic properties for better internationalization:

- `margin-inline-start` instead of `margin-left`
- `padding-block-end` instead of `padding-bottom`
- `inline-size` instead of `width`

**Q61: What is the `clip-path` property?** Creates clipping regions to show only part of an element:

```css
clip-path: circle(50%);
clip-path: polygon(0 0, 100% 0, 50% 100%);
```

**Q62: What are CSS counters?** Variables maintained by CSS that can be incremented and displayed:

```css
body { counter-reset: section; }
h2::before {
  counter-increment: section;
  content: "Section " counter(section) ": ";
}
```

**Q63: What is `object-fit` and `object-position`?**

- `object-fit`: Controls how replaced content (img, video) fits its container (`contain`, `cover`, `fill`, `none`, `scale-down`)
- `object-position`: Specifies alignment of content within the element

**Q64: What is the `@supports` rule?** Feature queries to apply styles only if a browser supports specific CSS:

```css
@supports (display: grid) {
  .container { display: grid; }
}
```

**Q65: What are CSS filters?** Apply graphical effects like blur, brightness, contrast:

```css
img {
  filter: blur(5px) brightness(1.2) contrast(1.5);
}
```

**Q66: What is the `backdrop-filter` property?** Applies filters to the area behind an element:

```css
.glass {
  backdrop-filter: blur(10px);
  background: rgba(255, 255, 255, 0.1);
}
```

**Q67: What is the difference between `nth-child()` and `nth-of-type()`?**

- `nth-child()`: Selects based on position among all siblings
- `nth-of-type()`: Selects based on position among siblings of the same element type

**Q68: What is the CSS `aspect-ratio` property?** Sets a preferred aspect ratio for an element:

```css
.video {
  aspect-ratio: 16 / 9;
}
```

**Q69: What are container queries?** Apply styles based on a container's size rather than viewport size:

```css
@container (min-width: 700px) {
  .card { display: flex; }
}
```

**Q70: What is the `clamp()` function?** Sets a value that stays within a range:

```css
font-size: clamp(1rem, 2.5vw, 2rem);
/* min, preferred, max */
```

**Q71: What are subgrid and nested grids?**

- Nested grid: A grid item becomes a new grid container
- Subgrid: A grid item inherits the parent grid's tracks (`grid-template-columns: subgrid`)

**Q72: What is the `inset` property?** Shorthand for `top`, `right`, `bottom`, `left`:

```css
.element {
  inset: 10px; /* all sides */
  inset: 10px 20px; /* top/bottom, left/right */
}
```

**Q73: What are CSS scroll snap properties?** Control scrolling behavior to snap to specific points:

```css
.container {
  scroll-snap-type: x mandatory;
}
.item {
  scroll-snap-align: center;
}
```

**Q74: What is the difference between `currentColor` and CSS variables?**

- `currentColor`: References the current value of the `color` property
- CSS variables: Custom properties that can hold any value and be changed dynamically

**Q75: What are performance considerations in CSS?**

- Minimize specificity wars
- Avoid expensive properties (box-shadow on large areas, heavy filters)
- Use `transform` and `opacity` for animations (GPU accelerated)
- Reduce repaints and reflows
- Minimize CSS file size
- Use CSS containment
- Avoid universal selectors in large stylesheets