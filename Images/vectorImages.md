# Vector Files

Vector files uses vector data with specific magnitude and directionto draw on screen

The most popular used file format would be **SVG** (Scalable Vector Graphic), with the occasional usage of PDF files having vector graphics.

SVG is an XML based language so it's both searchable and indexable

Best use cases: logo, diagram, animated elements, charts, and graphs

Worst use cases: photo

## Advantagegs

- text in vector images remains accessible
- with SVG, can easily styling and scripting, because each component of the image is an element that can be styled via CSS or scripted via JS

## Disadvantage

- can get complicated very quickly
- complex SVg can take significant processing time
- can be harder to create

## Add SVG using `<img>` element

### pros

- quick, can make into hyperlink
- can be cache by the browser

### cons

- can't manipulate the image with js
- must use inline css, external stylesheet doesn't work on the file
- cna't restyle with css pseudoclasses

## Add SVG embed into HTML, wrap in `<svg>` element

### pros

- saves http request which reduce loading time
- can assign attributes to the element
- can be made into a hyperlink

### cons

- can only be placed in one place
- increase size of the HTMl file
- can't cache inline SVG
