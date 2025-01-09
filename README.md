# pnp-pdf v0.0.4

Plug and play PDF files using pdf.js. One of the easiest way to render PDF files on browsers.

## [Example A](https://github.com/abhisekdutta507/pnp-pdf-example)

## Installation

Install npm globally (ignore if already installed):

```bash
npm i -g npm
```

Install the `pnp-pdf` library:

```bash
npm i pnp-pdf@0.0.4
```

## Setup the pnp-pdf library on a JavaScript project

**Step 1:** Add the HTML file from here [https://github.com/abhisekdutta507/pnp-pdf-example](https://github.com/abhisekdutta507/pnp-pdf-example).

```html
<body tabindex="0">
  <div id="outerContainer">

    <!-- sidebarContainer -->

    <div id="mainContainer">
      <div class="toolbar"></div>

      <div id="viewerContainer" tabindex="0">
        <div id="viewer" class="pdfViewer"></div>
      </div>
    </div> <!-- mainContainer -->

    <!-- dialogContainer -->

    <!-- editorUndoBar -->

  </div> <!-- outerContainer -->
  <div id="printContainer"></div>
</body>
```

**Step 2:** Import the styles

```css
@import 'pnp-pdf/web/styles.css';
```

**Step 3:** Open the file on browser

```js
import { open } from 'pnp-pdf';

const file = "https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/web/compressed.tracemonkey-pldi-09.pdf";

open(file);
```

## Setup the pnp-pdf library on a React.js project

**Step 1:** Import the `PDFViewer` JSX component

```jsx
"use client";
import { PDFViewer } from "pnp-pdf";

const file = "https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/web/compressed.tracemonkey-pldi-09.pdf";

export default function ReactComponent() {
  return (
    <div className="relative w-screen h-screen">
      <PDFViewer file={file} style={{}} />
    </div>
  );
}
```

**Step 2:** Legacy projects which do not support external JSX imports, create the JSX component like [react_pdf_viewer](./web/react_pdf_viewer.jsx).

```jsx
/* eslint-disable jsx-a11y/aria-role */
/* eslint-disable jsx-a11y/role-has-required-aria-props */
/* eslint-disable jsx-a11y/role-supports-aria-props */
/* eslint-disable jsx-a11y/anchor-is-valid */

import { useEffect } from "react";
import { open } from 'pnp-pdf';
import "pnp-pdf/web/styles.css";

/**
 * @param {{
 *    file: string;
 *    style: CSSProperties;
 * }} props 
 * @returns 
 */
export const PDFViewer = ({
  file,
  style,
}) => {
  useEffect(() => {    
    open(file);
  }, [file]);

  return (
    <div id="pdfViewerReactComponent" tabIndex={0} style={style}>
      {/* static JSX template from the react_pdf_viewer.jsx file */}
    </div>
  );
};

export default PDFViewer;
```

**Step 3:** Use the JSX component in your project

```jsx
import { PDFViewer } from "./react_pdf_viewer";

const file = "https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/web/compressed.tracemonkey-pldi-09.pdf";

export default function ReactComponent() {
  return (
    <div className="relative w-screen h-screen">
      <PDFViewer file={file} style={{}} />
    </div>
  );
}
```

## Best Practices

- Make sure the `PDFViewer` component has some fixed height. By default, width is 100%. If the wrapper does not have a fixed height the script will fail to display the pdf file.
- It works best when displayed full screen.
- In real world projects we can not always use it fullscreen. Then, `style={{ minWidth: 760 }}` will give the best view.

## Credits

1. [pdfjs-dist](https://www.npmjs.com/package/pdfjs-dist)


## Source Code

See the [package source](https://github.com/abhisekdutta507/pnp-pdf) for more details.
