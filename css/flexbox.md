# Flex

- one dimensional context
- there is a difference between the flex container and flex items within that container
- some property are reserved for each
- it is possible to nest flex

## Flex(container)

- `display`
  - **values:**
    - `flex`
      - sets the element as a block
    - `inline-flex`
      - sets the element as inline
- `flex-direction`
  - **values:**
    - `row`, `row-reverse`, `column`, `column-reverse`
  - to control the flow of the contents
- `flex-wrap`
  - **values:**
    - `nowrap`, `wrap`, `wrap-reverse`
  - controls whether the flex container is a single line or multi-line
  - `wrap` and `wrap-reverse` will preserve item width
- `flex-flow`
  - short hand to set `flex-direction` and `flex-wrap`
- `justify-content`
  - **values:**
    - `flex-start`, `flex-end`, `center`, `space-between`, `space-around`, `space-evenly`
  - determins how the items are placed along the main axis
- `align-items`
  - **values:**
    - `flex-start`, `flex-end`, `center`, `stretch`, `baseline`
  - determines how the items are placed along the cross axis
- `align-content`
  - **values:**
    - `flex-start`, `flex-end`, `center`, `stretch`, `space-between`, `space-around`
  - determines the extra spacing when there is multiple lines involved
- `row-gap` & `column-gap` & `gap`
  - this controls the space between flex items

## Flex(items)

- `order`
  - can determine where the item is positioned in a group
  - if multiple itmes have the same order, they revert back to the source order
- `flex-grow`
  - defines the ability for a flex item to grow if there is room
- `flex-strink`
  - defines the ability for a flex item to strink if it's possible
- `flex-basis`
  - **values:**
    - `auto`
      - factored in with the element's width and height
    - `content`, `max-content`, `min-content`, `fit-content`
  - defines the default width of the flex item
- `flex`
  - short hand for `flex-grow`, `flex-strink`, and `flex-basis`
  - default value is `0 1 auto`
- `align-self`
  - this allows the individual item to be assigned it's own ruling based on the `aglign-items`
