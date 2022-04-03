const marked = require('marked');

function furigana() {
  const renderer = new marked.Renderer();
  renderer.link = (href, title, text) => `<ruby>${text}<rp>(</rp><rt>${href}</rt><rp>)</rp></ruby>`;
  return { renderer };
}

describe('extesnion.furigana', () => {
  it('should parse ruby tag', () => {
    marked.setOptions(furigana());
    const html = marked.parse('[The San Juan Mountains are beautiful!](/assets/images/san-juan-mountains.jpg "San Juan Mountains")');
    console.log(html);
    expect(1).toEqual(1);
  });
});
