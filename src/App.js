import React, { Component } from "react";
import marked from "marked";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const placeholder = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://create-react-app.dev/img/logo.svg)
`;
class App extends Component {
  state = {
    text: placeholder,
  };

  handleChange = (e) => {
    this.setState({
      text: e.target.value,
    });
  };
  getMarkdownText = () => {
    var rawMarkup = marked(this.state.text, { breaks: true });
    return { __html: rawMarkup };
  };
  render() {
    const { text } = this.state;

    return (
      <div className="App container-fluid">
        <header className="header">
          <h2 className="text-center u-text-white">Markdown Previewer </h2>
        </header>
        <main className="main">
          <div className="row">
            <div className="col-xs-12 col-md-6">
              <h4 className="text-center u-text-white">Editor</h4>
              <textarea
                onChange={this.handleChange}
                value={text}
                name="editor"
                id="editor"
                className="form-control"
              />
            </div>
            <div className="col">
              <h4 className="text-center u-text-white">Preview</h4>
              <div
                id="preview"
                dangerouslySetInnerHTML={this.getMarkdownText()}
              ></div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
