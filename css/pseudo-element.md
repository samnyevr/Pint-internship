# Pseudo elements

- pseudo elements is a keyword added to a selector that lets you style a specific part of the selected element(s)
- can only use one pseudo element in a selector
- double colon should be used instead of single colon to distinguishes pseudo-classes with pseudo-elements
- [`::after (:after)`](https://developer.mozilla.org/en-US/docs/Web/CSS/::after)
  - creates a pseudo element that is the last child of the selected element
  - must contain `content` property
  - this element is inline by default
- [`::before (:before)`](https://developer.mozilla.org/en-US/docs/Web/CSS/::before)
  - creates a pseudo element that is the first child of the selected element
  - must contain `content` property
  - this element is inline by default
- [`::cue`](https://developer.mozilla.org/en-US/docs/Web/CSS/::cue)
  - this pseudo element matches [WebVTT](https://developer.mozilla.org/en-US/docs/Web/API/WebVTT_API) cues within a selected element, can be used to style captions and other cues in media with VTT tracks
- [`::first-letter (:first-letter)`](https://developer.mozilla.org/en-US/docs/Web/CSS/::first-letter)
  - this pseudo element applies styles to the first letter of the first line of a block-level element, and only when it's not preceded by other content
  - Punctuation that precedes or immediately follow the first letter is included
  - `::before` pseudo element can have `content` property, and `::first-letter` will target the first letter of that
- [`::first-line (:first-line)`](https://developer.mozilla.org/en-US/docs/Web/CSS/::first-line)
  - this pseudo element applies styles to the first line of a block level element
  - it is limited by the length and content of the first line of text in the element
  - have no effect when the first child of the element is an inline element
- [`::file-selector-button`](https://developer.mozilla.org/en-US/docs/Web/CSS/::file-selector-button)
- [`::marker`](https://developer.mozilla.org/en-US/docs/Web/CSS/::marker)
  - this pseudo element selects the marker box of a list item, which are usually represented by a bullet point or a number
- [`::placeholder`](https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder)
  - this pseudo element represents the placeholder text in an `<input>` or `<textarea>` element
  - this pseudo element modify the button portion of the `<input>` of `type="file"`
- [`::selection`](https://developer.mozilla.org/en-US/docs/Web/CSS/::selection)
  - this pseudo element applies styles to the part of a document that has been highlighted by the user
- [`::slotted()`](https://developer.mozilla.org/en-US/docs/Web/CSS/::slotted)
  - this pseudo element represents any element that has been placed into a `<slot>` inside an HTML `<template>`
  - this only works when used inside CSS placed within a shadow DOM

#### Pseudo Elements still under experimentation

> these usually have limited browser support

- [`::part()`](https://developer.mozilla.org/en-US/docs/Web/CSS/::part)
  - this pseudo element represent any element within a shadow tree that has a matching `part` attribute
- [`::target-text`](https://developer.mozilla.org/en-US/docs/Web/CSS/::target-text)
  - this pseudo element represents the text that has been scrolled to if the browser supports scroll-to-text fragments.
  - it allows the author to choose how to highlight that section of text
