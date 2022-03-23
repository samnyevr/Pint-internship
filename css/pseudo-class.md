# Pseudo Classes

> \+ are the more commonly used ones, \* are the experimental ones, \*\* need to be reviewed, % doesnt have full browser support

> @ possible form demo, # demo in general

- a pseudo class is added to a selector that specifies a special state of the selected element
- apply style to external factors like the history of the navigator or position of the mouse, or the status of its content
- +[`:active`](https://developer.mozilla.org/en-US/docs/Web/CSS/:active)
  - this pseudo class represents an element that is being activated by the user
  - must only apply to the primary button
  - put the `:active` rule after all other link-related rules
  - `:link` -> `:visited` -> `:hover` -> `:active`
- [`:any-link`](https://developer.mozilla.org/en-US/docs/Web/CSS/:any-link)
  - this pseudo class represents an element that acts as the source anchor of a hyperlink
  - matches every `<a>` or `<area>` that has an `href` attribute
  - all elements that match `:link` or `:visited`
- [`:autofill`](https://developer.mozilla.org/en-US/docs/Web/CSS/:autofill)
  - this pseudo class matches when an `<input>` element has its value autofilled by the browser
- \*[`:blank`](https://developer.mozilla.org/en-US/docs/Web/CSS/:blank)
  - this pseudo class selects empty user input elements
- [`:checked`](https://developer.mozilla.org/en-US/docs/Web/CSS/:checked)
  - this pseudo class represents any radio element that is checked or toggled to an `on` state
  - this include `<input type="radio">`, `<input type="checkbox">`, or `<option>` in a `<select>`
- \*\*[`:current`](https://developer.mozilla.org/en-US/docs/Web/CSS/:current)
  - this pseudo class is a time dimensional pseudo class that represents the element, or an ancestor of the element that is currently being displayed
- [`:default`](https://developer.mozilla.org/en-US/docs/Web/CSS/:default)
  - this pseudo class selects from elements that are the default in a group of related elements
  - what this pseudo class matches are defined in [HTML Standard §4.16.3 Pseudo-classes](https://html.spec.whatwg.org/multipage/semantics-other.html#selector-default)
  - default `<option>` is the first one with `selected` attribute, multiple `<select>` can all match `:default`
  - `type=checkbox` and `type=radio` match if they have the `checked` attribute
  - `button`, `type=image`, or `type=submit` matches if they are in a `form`
- [`:defined`](https://developer.mozilla.org/en-US/docs/Web/CSS/:defined)
  - this pseudo class represent any element that has been defined
  - any standard element built into the browser
  - and any custom elements that have been defined through [CustomElementRegistry.define()](https://developer.mozilla.org/en-US/docs/Web/API/CustomElementRegistry/define)
- [`:dir()`](https://developer.mozilla.org/en-US/docs/Web/CSS/:dir)
  - this pseudo class targets elements based on the directionality of the text contained in them
  - this is different than `[dir=...]` in which this will target based on what the browser definition of the direction
- +[`:disabled`](https://developer.mozilla.org/en-US/docs/Web/CSS/:disabled)
  - this pseudo class represetns any disabled element
- [`:empty`](https://developer.mozilla.org/en-US/docs/Web/CSS/:empty)
  - this pseudo class represents any element that has no children.
  - older browsers will not target the element if there are white space in between the tags
  - all browser will not target the element if there are comment inside the tags
- +[`:enabled`](https://developer.mozilla.org/en-US/docs/Web/CSS/:enabled)
  - this pseudo class represents any enabled element
  - it is enabled if it can be activated(selected, clicked on, typed into, or accept focus)
- [`:first`](https://developer.mozilla.org/en-US/docs/Web/CSS/:first)
  - this pseudo class represetns the first page of a printed document
  - need to be combined with `@page`
  - can only change the margins, orphans, widows, and page break
  - may only use absolute length units
- +[`:first-child`](https://developer.mozilla.org/en-US/docs/Web/CSS/:first-child)
  - this pseudo class represents the first element among a group of sibling elements
- +[`:first-of-type`](https://developer.mozilla.org/en-US/docs/Web/CSS/:first-of-type)
  - this pseudo class represents the first element of its type among a group of sibling elements
- [`:fullscreen`](https://developer.mozilla.org/en-US/docs/Web/CSS/:fullscreen)
  - this pseudo class matches every element which is currently in fullscreen mode
- [`:future`](https://developer.mozilla.org/en-US/docs/Web/CSS/:future)
  - this pseudo class selector is a time-dimensional that will match for any element which appears entirely after an element that matches `:current`
- +[`:focus`](https://developer.mozilla.org/en-US/docs/Web/CSS/:focus)
  - this pseudo class represents an element that has received focus
  - usually triggered when the user clicks or <kbd>Tab</kbd>
- [`:focus-visible`](https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible)
  - this pseudo class applies while an element matches the `:focus` pseudo class and the browser determins if the said element should be focused
  - can have different effect with click vs <kbd>Tab</kbd>
- [`:focus-within`](https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-within)
  - this pseudo class matches if an element or its descendants are focused
  - this include descendants in shadow trees
- \*[`:has()`](https://developer.mozilla.org/en-US/docs/Web/CSS/:has)
  - this speudo class represents an element if any of the selectors passed as parameters
  - `a:has(> img)` will select any `<a>` with `<img>` directly inside it
- [`:host`](https://developer.mozilla.org/en-US/docs/Web/CSS/:host)
  - this pseudo class selects the shadow host of the shadow DOM
  - can target the custom element from the shadow DOM
- %[`:host-context()`](https://developer.mozilla.org/en-US/docs/Web/CSS/:host-context)
  - this pseudo class function selects the shadow host of the shadow DOM based on the element provided
  - can target the custom element from the shadow DOM that target the specifc element when the content are added within the custom element
- +[`:hover`](https://developer.mozilla.org/en-US/docs/Web/CSS/:hover)
  - this pseudo class matches when the user interacts with an element with a pointing device, but not necessarily activate it
- [`:indeterminate`](https://developer.mozilla.org/en-US/docs/Web/CSS/:indeterminate)
  - this pseudo class represents any form element whose state is indeterminated
  - meaning the initial state when some input isn't determined
  - this will target `<input type="checkbox">`, `<input type="radio">`, or `<progress>`
- [`:in-range`](https://developer.mozilla.org/en-US/docs/Web/CSS/:in-range)
  - this pseudo class represents an `<input>` element whose current value is within the range limits specified by the `min` and `max` attributes
- [`:invalid`](https://developer.mozilla.org/en-US/docs/Web/CSS/:invalid)
  - this pseudo class represents any `<input>`, `<form>`, or `<fieldset>` whose content fail to validate
- +[`:is()`](https://developer.mozilla.org/en-US/docs/Web/CSS/:is)
  - this pseudo class takes a selector list as its argument, and selects any element that can be selected on of the selectors in that list
  - this is aim to provide a more compacted way of writing a list of selectors
  - `:is(header, footer) p` is equivalent to `header p, footer p`
- [`:lang()`](https://developer.mozilla.org/en-US/docs/Web/CSS/:lang)
  - this pseudo class matcches elements based on the language they are determined to be in
- +[`:last-child`](https://developer.mozilla.org/en-US/docs/Web/CSS/:last-child)
  - this pseudo class represents the last element among a group of sibling elements
- [`:last-of-type`](https://developer.mozilla.org/en-US/docs/Web/CSS/:last-of-type)
  - this pseudo class represents the last element of its type among a group of sibling elemenets
- [`:left`](https://developer.mozilla.org/en-US/docs/Web/CSS/:left)
  - this pseudo class used with `@page` represents all left hand pagese of a printed document
- [`:link`](https://developer.mozilla.org/en-US/docs/Web/CSS/:link)
  - this pseudo class represents an element that has not yet been visited
- \*\*[`:local-link`](https://developer.mozilla.org/en-US/docs/Web/CSS/:local-link)
  - this pseudo class represents a link to the same document
- +[`:not()`](https://developer.mozilla.org/en-US/docs/Web/CSS/:not)
  - this pseudo class represesnts elements that do not match a list of selectors
  - this itself can be thought of as a single entity that has multiple meaning since it can't be used to exclude its ancestors
    - `:not(table) a` will still target the `<a>` inside the `td` since `td` isn't a `table` though it's included
  - this pseudo class can't be nested
  - this pseudo class will increase specificity
- +[`:nth-child()`](https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-child)
  - this pseudo class targets the elements based on their position in a group of siblings, starting from the first siblings
  - can take either a number or a formula with `<An + B>` in which A and B are variable
- +[`:nth-last-child()`](https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-last-child)
  - this pseudo class targets elements based on their position in a group of siblings, starting from the last of the siblings
  - can take either a number or a formula with `<An + B>` in which A and B are variable
- +[`:nth-last-of-type()`](https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-last-of-type)
  - this pseudo class targets elements based on their position of the same type of tag among the group of siblings, starting from the last sibling
- +[`:nth-of-type()`](https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-of-type)
  - this pseudo class targets elements based on their position of the same type of tag among the group of siblings, starting from the first sibling
- +[`:only-child`](https://developer.mozilla.org/en-US/docs/Web/CSS/:only-child)
  - this pseudo class targets an element when it has no siblings
- +[`:only-of-type`](https://developer.mozilla.org/en-US/docs/Web/CSS/:only-of-type)
  - this pseudo class targets an element when it has no siblings with the same tag
- +[`:optional`](https://developer.mozilla.org/en-US/docs/Web/CSS/:optional)
  - this pseudo class represents any `<input>`, `<select>`, or `<textarea>` when the `required` is not specified
- [`:out-of-range`](https://developer.mozilla.org/en-US/docs/Web/CSS/:out-of-range)
  - this pseudo class represents an `<input>` element whose current value is outside the rang of the spcified `min` and `max`
  - this only targets those that can specify the `min` and `max`
- [`:past`](https://developer.mozilla.org/en-US/docs/Web/CSS/:past)
  - this pseudo class selector is a time-dimensional pseudo class that will match for any element which appears entirely before an element that matches `:current`
- %[`:picture-in-picture`](https://developer.mozilla.org/en-US/docs/Web/CSS/:picture-in-picture)
  - this pseudo class matches the element which is currently in picture in picture mode
  - which can include a picture, a video source are being played, etc...
  - this can provide the user the option to continue consume the website while having the video or picture floating on the side
- [`:placeholder-shown`](https://developer.mozilla.org/en-US/docs/Web/CSS/:placeholder-shown)
  - this pseudo class represents any `<input>` or `<textarea>` element that is currently displaying placeholder text
- %[`:paused`](https://developer.mozilla.org/en-US/docs/Web/CSS/:paused)
  - this pseudo class represents when an element is paused in media such as audio or video
- %[`:playing`](https://developer.mozilla.org/en-US/docs/Web/CSS/:playing)
  - this pseudo class represents when an element is playing in media such as audio or video
- [`:read-only`](https://developer.mozilla.org/en-US/docs/Web/CSS/:read-only)
  - this pseudo class represents an element when it can be edited by the user
  - this is to style the form when it can not be edited
- [`:read-write`](https://developer.mozilla.org/en-US/docs/Web/CSS/:read-write)
  - this pseudo class represents an element when the field is editable by the user
  - this is to provide the option to future style the field that can be edited that can help the user to be more aware of the option
- +[`:required`](https://developer.mozilla.org/en-US/docs/Web/CSS/:required)
  - this pseudo class represents any `<input>`, `<select>`, or `<textarea>` element that has the `required` attribute set on it
- [`:right`](https://developer.mozilla.org/en-US/docs/Web/CSS/:right)
  - this pseudo class used with `@page` represents all right hand pagese of a printed document
- [`:root`](https://developer.mozilla.org/en-US/docs/Web/CSS/:root)
  - this pseudo class targets the root element of the tree
  - this is useful to declare the global variable that can be used in all of its descendents
- [`:scope`](https://developer.mozilla.org/en-US/docs/Web/CSS/:scope)
  - this pseudo class represents elements that are a reference point for selectors to match against
  - in a stylesheet, it function the same as `:root`
  - however, for DOM API, `:scope` is matched with the element on which the method is called
- [`:target`](https://developer.mozilla.org/en-US/docs/Web/CSS/:target)
  - this pseudo class targets the element when an interal link is clicked and the target is pointed at the corresponding element
  - `<section id="example"></section>` and `<a href="#example">` when clicked the target can attach a styling to `section`
- \*[`:target-within`](https://developer.mozilla.org/en-US/docs/Web/CSS/:target-within)
  - this pseudo class targets all of the descendent of an element when an interal link is clicked and the target is pointed at the corresponding element
  - `<section id="example"><p>some things</p></section>` and `<a href="#example">` when clicked the target can attach a styling to `section` and `<p>`
- \*[`:user-invalid`](https://developer.mozilla.org/en-US/docs/Web/CSS/:user-invalid)
  - this pseudo class represents any validated form element whose value isn't valid
  - this can be when it's `:invalid`, `:out-of-range`, or when `required` is on an `input` but it is a blank element
- +[`:valid`](https://developer.mozilla.org/en-US/docs/Web/CSS/:valid)
  - this pseudo class represents any `<form>` element whose contents validate successfully
  - this can provide simple validation to when the user input correct corresponding input type
- +[`:visited`](https://developer.mozilla.org/en-US/docs/Web/CSS/:visited)
  - this pseudo class represents links that the user has already visited
- [`:where`](https://developer.mozilla.org/en-US/docs/Web/CSS/:where)
  - this pseudo class takes a selector list as its argument and selects any element that can be selected by on of the selectors in that list
  - difference between `:where` and `:is` is that `:where` always have 0 specificity
  - the difference between listing out selector and using `:where` is that, if one of the selector is invalid in a browser, the styling will not work, whereas in `:where` and `:is` the rest will still compute