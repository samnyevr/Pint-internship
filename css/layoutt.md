# Layout

## with Position Layout

can position layout doing the following

1. Define a `position` method: _static_, _fixed_, _absolute_, _relative_

- can specify exactly where an element goes
  - _top_, _left_, _bottom_, _right_
- _static_
  - no reference point, default value
- _fixed_
  - fixed position within the viewport
  - element is **removed from normal document flow**
- _absolute_
  - fixed position within it's container's position
  - it's containing element is usually the viewport by default, however, if it's ancestor have a position of _fixed_, _absolute_, or _relative_ then they are consider it's new "containing element"
- _relative_
  - offset from it's normal static position
  - this can be modified by the _top_, _left_, _bottom_, _right_ valules

2. Define `offsets`: _top_, _left_, _bottom_, and _right_
3. Define `z-index` for overlapping layers

## calc()

it can be used to define numeric values in terms of expressions

## var()

can be used to define variable

## Background Images

- url()
- can use it to set a background image and style it

## Web Fonts

- use Google Font for easy implementation
- good practice to include a generic font-family for fall back
- can use @font-face to define own font

## Responsive Web Design

- set the `<meta name="viewport" content="width=device-width initial-scale=1.0">`
- use @media queries
- test the design with Chrome Inspector or using the actual device
- use Relative Units
  - percentage
    - more likely to work on different screen sizes
    - it's relative to its parents
- font sizes are usually defined with `em`
  - since `em` is relative to its parents
  - it might be better to use `rem` which doesn't change sine it's the root font size
  -
