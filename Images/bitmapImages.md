# Bitmap/Raster Images

Bitmap is an array of bits that store the color of each pixel in a rectangular array of pixels. Bitmap file usually contain one or more information blocks that store information such as the number of bits per pixel, number of pixels in each row, and number of rows in the array. Sometimes it contains a color table called color palette.
A bitmap that stores indexes into a color table is called a palette indexed bitmap. Some bitmaps can store the colors themselves rather than indexes into a color table

| Bits per pixel | Number of colors that can be assigned to a pixel |
| -------------- | ------------------------------------------------ |
| 1              | 2^1 = 2                                          |
| 2              | 2 ^ 2 = 4                                        |
| 4              | 2^4 = 16                                         |
| 8              | 2^8 = 256                                        |
| 16             | 2^16 = 65,536                                    |
| 24             | 2^24 = 16,777,216                                |

1. storing color value itself,
   - RGB component
     - least effective as human eyes can capture more color
     - inefficient for common operations such as brighten
2. transparency of each pixel
   - critical for edge of non-rectangular images
   - each pixel needs to have its level of transparency(opacity) set from 0% to 100%
3. Bitmap metadata
   - information about the image which can range from color table and resolution to the onwer of the image

Due to the large amount of byte a bitmap takes up, compression is the key for a new format to develop

## Compression

- lossy compression
  - Finding patterns that repeat in a file and then in a second case just point back to the first run
  - uses exclusively for pictures and never in games
- Lossless compression
  - compress with no loss of information
  - compressing the image takes more time than decompressing them
  - not idea to store in a lossless format on the fly

## Transparency

- has three types
  1. First type - None
  - the bitmap is a rectangle and will obscure every pixel below it
  2. Second type - binary
  - either completely transparent or completely opaque
  3. Third type - Many bits of transparency (commonly 8)
     - i.e. 256 values from 0-100% for each pixel
     - provide an image that has finer graduations than the human eye can discern

## Resolution

- normally described as DPI (Dots Per Inch)
- need to provide the ability for the calling program to se the DPI

## Some Major File formats

### Most common formats

> This list is list out as most to the least recommended for performance

- AVIF
  - high performance
  - royalty free image format
  - much better compression than PNG or JPEG
  - higher color depth, animated frames, transparency
  - aren't well supported by all the browser
  - slightly better compression than WebP
- WEBP
  - great for both image and animated image
  - much better compression than PNG or JPEG
  - higher color depth, animated frames, transparency
  - doesn't support progresssive rendering
- JPEG
  - 24-bit
  - lossy
  - small file size
  - most popular for still image
  - when higher compression is needed
- PNG
  - 32-bit
  - lossless
  - slightly bigger file size
  - support transparency
  - more precise reproduction of source images than JPEG
- GIF
  - 8-bit
  - lossy
  - smallest file size
  - good for simple image and animation
  - place multiple GIF bitmaps in a single file which is how animated image is formed

| Format | Transparency | Animation | Lossless/Lossy   | Progressive Rendering | Compression | Supported by all major Browser |
| ------ | ------------ | --------- | ---------------- | --------------------- | ----------- | ------------------------------ |
| avif   | Yes          | Yes       | Lossless         | No                    | excellent   | No                             |
| webP   | Yes          | Yes       | Lossy & Lossless | No                    | excellent   | No                             |
| jpeg   | No           | No        | Lossy            | Yes                   | good        | Yes                            |
| png    | Yes          | No        | Lossless         | interlaced            | ok          | Yes                            |
| gif    | Yes          | Yes       | Lossless         | interlaced            | ok          | Yes                            |

### format that are left on the web

- APNG
  - lossless
  - provide animationsequences
- ICO
  - icon file used to represent applications on the desktop
- BMP
  - from 1 up to 32-bit
  - lossless
  - large file size
- TIFF
  - for government data?
