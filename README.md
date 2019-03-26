[![npm version](https://img.shields.io/npm/v/@danestves/markdown.svg?style=flat-square)](https://www.npmjs.com/package/@danestves/markdown)[![Build Status](https://img.shields.io/travis/danestves/markdown/master.svg?style=flat-square)](https://travis-ci.org/danestves/markdown)

This is forked from [Platzi Flavored Markdown](https://github.com/PlatziDev/markdown)

### Features added:

- [markdown-it-highlightjs](https://github.com/valeriangalliat/markdown-it-highlightjs) for code.

# Original Documentation

This version of Markdown support the usual Github Flavored Markdown and Youtube videos, emojis, figure wrapping images, `<mark />` tags, underlines, abbr, highlightjs and definition lists.

## How use it

Install it with **npm**.

```bash
npm i @danestves/markdown

yarn add @danestves/markdown
```

Import it in your project.

```js
import createParser from '@danestves/markdown';
```

And the use it.

```js
const parser = createParser();

const html = parser(`**this is my text in bold**`);
```

## Contribute

- Fork the project.

- Modify `index.js`.

- Run tests `npm t`.

- Fix problems (or the test).

## Example Markdown

```markdown
![dan_estves](https://www.danielestves.com/static/media/favicons/favicon-32x32.png)

\*[HTML]: Hyper Text Markup Language

\*[W3C]: World Wide Web Consortium

# Heading 1

Lorem **ipsum** dolor _sit_ ++amet++ :D.

The HTML ==specification== is maintained by the W3C.

- item 1

- item 2

- item 3

Term 1

~ Definition 1

Term 2

~ Definition 2a

~ Definition 2b

@[youtube](ajLJOhf-WdA)
```
