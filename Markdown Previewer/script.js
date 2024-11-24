import React from "https://esm.sh/react";
import ReactDOM from "https://esm.sh/react-dom";

const markdownText = `

# Welcome!

## This is a markdown previewer! Feel free to edit by clicking any text on the left window and watch your text change in real time! Want some inspiration? Just follow along with the editor!

## This is how you do a subheading!

### Look at what you can also do:

\`<div>The quick brown fox jumped over the lazy dog!</div>\`

\`\`\`
class MyComponent extends React.Component {
    render() {
        return <h1>Hello World!</h1>
      }
}
\`\`\`
**GIANT BOLD TEXT TO THE EXTREME**

> Two reasons why you should learn to program:

1. It's awesome!
2. Instant gratification for the problem solvers.

[Click here to find a valuable resource for learning how to code!](https://www.freecodecamp.org/)

This is JavaScript, one of the langauges that you will learn if you want to program.

![javascript-logo](https://i.postimg.cc/Zq9qBS0C/javascript-logo-javascript-icon-transparent-free-png.webp)
`;

marked.setOptions({
  breaks: true,
  highlight: function (code) {
    return Prism.highlight(code, Prism.languages.javascript, 'javascript')
  }
});

const renderer = new marked.Renderer();
renderer.link = function (href, title, text) {
  return `<a target="_blank" href="${href}">${text}</a>`;
};

const Editor = ({ content, handleTextChange }) =>
  <textarea value={content} onChange={handleTextChange} id="editor" />

const Previewer = ({content}) => (
  <div id="preview"
    dangerouslySetInnerHTML={{
      __html: marked(content, {renderer: renderer})
    }}
  />
);

const App = () => {
  const [content, setContent] = React.useState(markdownText)
  
  const handleTextChange = (event) => {
    setContent(event.target.value)
  }
  
  return (
    <div class="main">
      <Editor content={content} handleTextChange= {handleTextChange} />
      <Previewer content={content} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'));
