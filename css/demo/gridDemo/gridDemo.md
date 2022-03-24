# Grid Demo

This demo is to show the power of grid on changing out the layout using css only and without modifying the html

By toggling between the buttons, we can see that the layout can change, but the contents remains the same

`grid` which is a short hand for `grid-template` can be used to set the `grid-template-area` and `grid-template-rows` and `grid-template-column`

```css
grid: "a b" 20px / 10px 10px;
```

means to set the grid with two cells named `a` and `b` with a row height of `20px` and each column width of `10px`
