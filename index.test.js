const createParser = require('./index.js');
const math = require('markdown-it-math');

const markdown = `![dan_estves](https://www.danielestves.com/static/media/favicons/favicon-32x32.png)

*[HTML]: Hyper Text Markup Language
*[W3C]:  World Wide Web Consortium

# Heading 1
Lorem **ipsum** dolor _sit_ ++amet++ :D.

The HTML ==specification== is maintained by the W3C.

- \`item 1\`
- item 2
- item 3

Term 1
  ~ Definition 1

Term 2
  ~ Definition 2a
  ~ Definition 2b

\`\`\`js
function greeting() {
	return 'hello world!';
}
\`\`\`

@[youtube](ajLJOhf-WdA)

[dan_estves](https://www.danielestves.com/)
`;

const markdownWithMath = `Pythagoran theorem is $$a^2 + b^2 = c^2$$.

Bayes theorem:

$$$
P(A | B) = (P(B | A)P(A)) / P(B)
$$$`;

describe('dan_estves Markdown parser', () => {
  it('should work without arguments', () => {
    expect(createParser()(markdown)).toMatchSnapshot();
  });

  it('should have link with attr noopener', () => {
    const html = createParser()(markdown);
    expect(html.indexOf('rel="nofollow noopener"') !== -1).toBe(true);
  });

  describe('Options test', () => {
    it('should work with options', () => {
      expect(
        createParser({
          html: false
        })(markdown)
      ).toMatchSnapshot();
    });

    it('should break without an object as options', () => {
      expect(() => createParser('fake options')).toThrowErrorMatchingSnapshot();
    });
  });

  describe('Extra plugins test', () => {
    it('should work with extra plugins', () => {
      expect(
        createParser(undefined, [
          math,
          [
            math,
            {
              inlineOpen: '$$'
            }
          ]
        ])(markdownWithMath)
      ).toMatchSnapshot();
    });

    it('should break without an array as extra plugins', () => {
      expect(() =>
        createParser(undefined, 'fake extra plugins')
      ).toThrowErrorMatchingSnapshot();
    });
  });
});
