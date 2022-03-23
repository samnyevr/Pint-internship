# Focusability On Web Page

Being able to focus on a web page is crucial for accessebility, because not everyone has a mouse device and some times they are relying purely on keyboard control. We also want to indicate the importance of a user input field or sometimes a piece of information on the page.

We have 3 ways to target a focused field in css `:focus`, `:focus-within`, and `:focus-visiblle`

## `:focus`

bread and butter of how to change the styling of a focused field

## `:focus-within`

this will target the entire field sets when one of the field being is focused on

## `:focus-visible`

This will target the focusable field but based on the browser to determine whether the field is meant to be focued on or not

i.e. a `<p>` is usually not focusable, but with `tabindex` set on it, now we can focus on it. Thus we can navigate to it using <kbd>Tab</kbd> but clicking on it doesn't focus on it.
