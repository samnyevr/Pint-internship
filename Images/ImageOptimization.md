#Image Optimization

## Image Format
![Zoomed- in vector image vs raster image](https://web-dev.imgix.net/image/admin/dJuB2DQcbhtwD5VdPVlR.png?auto=format&w=1170

### Vector Graphics
use lines, points, and polygons to represent an image
use for logo, text, icons, drawing, shapes

#### Pixel
<table>
	<tr>
		<th>Screen resolution</th>
		<th>Total pixels</th>
		<th>Uncompressed filesize (4 bytes per pixel)
	</tr>
	<tr>
		<td>1x</td>
		<td>100 x 100 = 10,000</td>
		<td>40,000 bytes</td>
	</tr>
	<tr>
		<td>2x</td>
		<td>100 x 100 x 4= 40,000</td>
		<td>160,000 bytes</td>
	</tr>
	<tr>
		<td>3x</td>
		<td>100 x 100 x 9 = 90,000</td>
		<td>360,000 bytes</td>
	</tr>
</table>

higher resolution screen require higher resolution images
	
>use vector images whenever possible, and use responsive images if raster image is required

#### Image Format
- SVG - Scalable Vector Graphics (.svg)
	- **Compression:** 
		- Size reduction by complexity reduction
	- **functionality:** 
		- With CSS Tricks, can probably produce the same outcome


### Raster graphics
represent an image by encoding the individual values of each pixel within a rectangular grid. 
use for high resolution illustration or photograph

<table>
	<tr>
		<th>Format</th>
		<th>Transparency</th>
		<th>Animation</th>
		<th>Modern Browser</th>
	</tr>
	<tr>
		<td>GIF</td>
		<td>Yes</td>
		<td>Yes</td>
		<td>All</td>
	</tr>
	<tr>
		<td>PNG</td>
		<td>Yes</td>
		<td>No</td>
		<td>All</td>
	</tr>
	<tr>
		<td>JPEG</td>
		<td>No</td>
		<td>No</td>
		<td>All</td>
	</tr>
	<tr>
		<td>WebP</td>
		<td>Yes</td>
		<td>Yes</td>
		<td>All*</td>
	</tr>
</table>

*[WebP doesn't support IE](https://caniuse.com/webp)

#### Image Format

- **JPEG** - Joint Photographic Experts Group (.jpg, .jpeg)
	- *Compression:* 
		- Lossy
	- *functionality:*
		- may load progressively
		- large color palette
- **PNG** - Porttable Network Graphics(.png, .png ico, .apng)
	- *Compression:*
		- Lossless, can be made lossy
	- *functionality:*
		- interlaced
- **WebP** (.webp)
	- *Compression:*
		- Lossless ~25% smaller than PNG
		- Lossy ~25-30% smaller than JPEG
- **GIF** (.gif)
	- *Compression:* 
		- Lossless
	- *funcitonality:*
		- gif compression loses value at higher resolution images
		- when using gif, 
- **Bitmap** (.bmp, .bmp ico)
	- *Compression:* None
- **EPS** (.eps)
	- *Compression:* None
- **RAW images Files** (.raw, .r2, .nef, etc.)
	- *Compression:* None

## Image Optimization
- bundle as sprites where appropriate
- choose the right format
- size appropriately
- adapt intelligently
- compress carefully
- prioritize critical images
- lazy load the rest
- automate process with tools carefully

###Approaches
>Less data, less often, when needed from nearby

- Using `<picture>` tag
	- fall through for unsupported types
	- serving a different asset from a set URI depending on the language

```
<picture>
	<course srcset="/path/to/image.webp" type="image/webp">
	<img src="/path/to/image.jpg alt="alt text here">
</picture>
```
- Using `<video>` instead of GIPa or aPNG
- Image Sprites
	- create a sprite sheet that holds many images in a single one
		- use css and/or JS to select the portion to show
- Set dimensions in `<img>` tag
- Don't scale the image
- Load only when needed
	- possibility using preload techniques with headers or `<link>` tag
	- Preload
		- easily performed with `<link rel="preload" href="assetURL">`
		- be careful about preloading assets that aren't used
- use the `<img>` attribute `lowsrc`
- inline images
	- concerns with both size and potentially security

## From Web.dev on WebP
- Webp format will generally provide better compression than older formats
- in terms of older image formats
	- if you need animation, use `<video>` 
	- [replace animated GIFs with video](https://web.dev/replace-gifs-with-videos/)
- if you need to preserve fine detail with highest resolution, **use PNG**
	- has higher filesize
	- if with geometric shapes, use svg
	- if need text, use web font
- if you optimize a photo, screenshot, or image asset, **use JPEG**

## Some Other Insights
### Critical Rendering Path

### Preload
- use `rel=` attribute in `<link>` tag to turn it into a preloader
- use the `as` attribute, can help the browser to prioritize resources
- can use media for image preload under different query sizes


## Conclusion
- in general use SVG
- if raster images are to be used
	- use optimized PNG
	- use TIFF or other raw formats if print output requires it
	- avoid JPEG
		- exceptions use JPEG for charts
	- when doing compound documents consider PDF, HTML or Markdown or Officus suits or Bi platforms 

## Links
[Google web dev image optimization](https://web.dev/choose-the-right-image-format/)

[Web Design Image Comparisons](https://webdesignref.com/examples/design_examples.htm)

[Preload](https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types/preload)