# CSS

Concept of style sheet is to separate the structure of the document(HTML) from the style/presentation of document(CSS)

CSS Basic

```css
h1 /* Selector */ {
  font-size/* Property Name */
  : /* Declaration */ xx-large /* Value */; /* Declaration Separation */
  color: red;
}
```

## Ways to add style

1. External style sheet
   - **Pros:** Can set styles for many pages in a site with one document
   - **Cons:** Extra download for style sheet
   - linked style sheets
     - `<link rel="stylesheet" href="screenstyle.css" type="text/css">`
     - with optional `media` attribute
     - can use JavaScript to target specific style sheet to toggle between them
2. Document wide style sheets
   - **Pros:** Control document style in one place. No additional download
   - **Cons:** Need to reapply style for subsequent pages
3. Inline style
   - **Pros:** Can control style to a single character, overrides other styles
   - **Cons:** Need to reapply for every document. Bound too closely to tages so as to be little more than a new tag
   - these properties will always beat out others, except when `!important` is applied

## Importing Styles

`@import` can be used to import other stylesheet into the current stylesheet

## Selectors

### Basic Selectors

- [`id`](https://developer.mozilla.org/en-US/docs/Web/CSS/ID_selectors) Selectors (#)
  - `#example`
  - should only appear once in each document
- [`class`](https://developer.mozilla.org/en-US/docs/Web/CSS/Class_selectors) Selectors (.)
  - `.example`
  - to create a grouping or to associate like elements
- [Type](https://developer.mozilla.org/en-US/docs/Web/CSS/Type_selectors) Selectors
  - `h2`
  - select all `h2` element

### Grouping Selectors

- [`,`](https://developer.mozilla.org/en-US/docs/Web/CSS/Selector_list) Selectors
  - `h1, h2`
  - select all `h1` and `h2`

### Combinators

- [&nbsp; (space)](https://developer.mozilla.org/en-US/docs/Web/CSS/Descendant_combinator) All Child Selector
  - `body p`
  - select all `p` in `body` with nesting
- [`>`](https://developer.mozilla.org/en-US/docs/Web/CSS/Child_combinator) Direct Child Selector
  - `body > p`
  - select all `p` in `body` without nesting
- [`+`](https://developer.mozilla.org/en-US/docs/Web/CSS/Adjacent_sibling_combinator) Adjacent sibling Selector
  - `h1 + p`
  - select only the `p` that follows immediately after `h1`
- [`~`](https://developer.mozilla.org/en-US/docs/Web/CSS/General_sibling_combinator) General sibling Selector
  - `h1 + p`
  - select all `p` that follows `h1`

### Attribute Selectors

- [General syntax](https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors)
  - element[attribute=value]
  - `[attr]`
    - Represents elements with an attribute name of attr.
    - `[href]`
    - target any element with attribute `href`
  - `[attr=value]`
    - Represents elements with an attribute name of attr whose value is exactly value.
    - `[href="hello.com"]`
    - target any element with attribute `href="hello.com"`
  - `[attr~=value]`
    - Represents elements with an attribute name of attr whose value is a whitespace-separated list of words, one of which is exactly value.
    - `[href~="hello"]`
    - target any element with attribute `href` that contains `hello`
  - `[attr|=value]`
    - Represents elements with an attribute name of attr whose value can be exactly value or can begin with value immediately followed by a hyphen, - (U+002D). It is often used for language subcode matches.
    - `[id|="fig"]`
    - target any element with attribute `id` that start with `fig` follow by a `-`
  - `[attr^=value]`
    - Represents elements with an attribute name of attr whose value is prefixed (preceded) by value.
    - `[href^="https"]`
    - target any element with attribute `href` that starts with `https`
  - `[attr$=value]`
    - Represents elements with an attribute name of attr whose value is suffixed (followed) by value.
    - `[href$=".net"]`
    - target any element with attribute `href` that ends with `.net`
  - `[attr*=value]`
    - Represents elements with an attribute name of attr whose value contains at least one occurrence of value within the string.
    - `[href*="hello"]`
    - target any element with attribute `href` that contains the word `hello`
  - `[attr operator value i]`
    - Adding an i (or I) before the closing bracket causes the value to be compared case-insensitively (for characters within the ASCII range).
    - `[href="hello.com" i]`
    - target any element with attribute `href` that is case insensitive
    - `[href="hello.com" s]`
    - target any element with attribute `href` that is case sensitive

### Pseudo

#### Pseudo elements

- pseudo elements is a keyword added to a selector that lets you style a specific part of the selected element(s)
- can only use one pseudo element in a selector
- double colon should be used instead of single colon to distinguishes pseudo-classes with pseudo-elements

#### Pseudo Classes

- a pseudo class is added to a selector that specifies a special state of the selected element
- apply style to external factors like the history of the navigator or position of the mouse, or the status of its content

## Inheritance - Tree in Use

- elements inherit the rules of their enclosing parents
- **Note** Not every rule inherits
- **Note** Defaults inherit too

## Specifity

> the more specific the rule the more power it has

| Priority | CSS source type                          | Description                                                                                  |
| -------- | ---------------------------------------- | -------------------------------------------------------------------------------------------- |
| 1        | Importance                               | The **_"!important"_** annotation overwrites the previous priority types                     |
| 2        | Inline                                   | A style applied to an HTML element via HTML "style" attribute                                |
| 3        | Media Type                               | A property definition applies to all media typee, unless a media specific CSS is defined     |
| 4        | User Defined                             | Most browsers have the accessibility feature: a user defined CSS                             |
| 5        | Selector Specificty                      | A specific contextual selector (#heading p) overwrittes generic definition                   |
| 6        | Rule Order                               | Last rule declaration has a higher priority                                                  |
| 7        | Parent Inheritance                       | If a property is not specified, it is inherited from a parent element                        |
| 8        | CSS Property Definition in HTML document | CSS rule or CSS inline style overwrites a default browser value                              |
| 9        | Browser Default                          | The lowest priority: browser default value is determined by W3C initial value specifications |

## CSS Measurements (Units)

- pixels (px)
- points (pt)
- inches (in)
- metric centimeters (cm), millimeters (mm)
- picas (pc)
- em measurements (em, rem) and ex measurements (ex)
- characters (ch)
- percentage values (%)
- view point dimensions (vh, vw)
- etc...

## Font Properties

- `font-family`
  - used to set to the font family used to render text
  - may be generic name or specific font type
  - all browser support
    - _Serif_
    - _Sans-serif_
    - _Cursive_
    - _Fantasy_
    - _Monospace_
- `font-size`
  - used to set the relative or physical size of the font
- `font-style`
  - **values:** _normal_, _italic_, or _oblique_
- `font-weight`
  - used to select the weight or darkness of hte font
  - **values:** range from _100_-_900_ with keyword values
- `font-variant`
  - used to set a variation of the current font
  - **values:** _small-caps_ and _normal_
- `font-stretch`
  - used to stretch or condense fonts and text
  - **values:** _ultra-condensed_, _condensed_, _expanded_
- `font-size-adjust`
  - used to scale fonts to make content take up similar space regardless of font availability
- `font`
  - short hand form and allows all font-properties to be specified
  - `font: font-style font-variant font-weight font-size/line-height font-family`

## Text Properties

- `text-fransform`
  - can be used to effect the capitalization of the text
  - **values:** _capitalize_, _uppercase_, _lowercase_
- `text-decoration`
  - can be used to define an effect on text
  - **values:** _line-through_, _overline_, _underline_, and _none_
- `word-spacing`
  - specifies the amount of space between words
- `letter-spacing`
  - specifies the amount of space between letters
- `text-align`
  - determines how text in a block-level element is horizontally aligned
  - **values**: _left_, _right_, _center_, _justify_
- `text-indent`
  - sets the indentation for text in the first line of a block-level element
- `line-height`
  - sets the height between lines in a block-level element
- `white-space`
  - controls how space, tabs, and newline characters are handles in an element
  - **values:** _normal_, _pre_, _nowrap_
- `text-shadow`
  - create drop shadows on text

## Vertical Alignment

- `vertical-align`
  - controls the vertical positioning of text and images with respect to the baseline currently in effect
  - **values:** _baseline_, _sub_, _super_, _top_, _text-top_, _middle_, _bottom_, _text-bottom_, and percentage values

## List Properties

- `list-style-type`
  - sets the type of the list numbering or bullet for `<ol>` and `<ul>`
  - **values:** _decimal_, _lower-roman_, _upper-roman_, _lower-alpha_, _upper-alpha_, _disc_, _circle_, _square_, and _none_
- `list-style-imge`
  - can be used to set the bullet to an image
- `list-style-position`
  - can be used to set where the labels for the list are positioned relative to the box/block that makes up the list
  - **values:** _inside_ and _outside_
- `list-style`
  - short hand for all the above

## Colors

- colors can be specified in many ways
  - color names
  - hex
  - rgb
  - rgba
  - hsl

## Background Properties

-
