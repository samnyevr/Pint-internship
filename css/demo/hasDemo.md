# The `:has()` pseudo-class

Often times when styling elements we'll want to select an element based on what elements that element _has_ (has here meaning that one element has a specific element descending from its tree).

Let's look at an example:

```html
<ul>
  <li>Some list item</li>
</ul>
```

Here, we can say that `<ul>` _has_ the `<li>` item since the `<li>` item is a descendant of `<ul>`. This is where the `:has()` selector can come in handy.

```css
ul:has(li) {
  color: red;
}
```

In the above example we are stating that all `<ul>` elements that have `<li>` elements as descendents should have a red font color. This might not look super useful right now, but consider the following example:

```html
<section>
  <p class="fancy">Some text</p>
</section>
<section>
  <p>Some text</p>
</section>
```

If we wanted to select the first `<section>` element, we could utilize the fact that it has a descendant with the class `fancy` and the second section doesn't, selecting it like this:

```css
section:has(.fancy) {
  background-color: lightgreen;
}
```

which will only select the first `<section>` with the `<p>` tag that has the `class="fancy"`

We can go into more specific on the selection with the the child selector

```css
section:has(> span) {
  background-color: lightblue;
}
```

This will select the `<section>` that has a direct child of `<p>`

One thing to note is that, we are selecting the ancestor element using `:has()` instead of targting the descendent element
