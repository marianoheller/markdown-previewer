import React, { Component } from 'react';
import MarkedBase from 'marked';

import HtmlPanel from './HtmlPanel';
import MarkdownPanel from './MarkdownPanel';

import { initialText } from '../config';


MarkedBase.setOptions({
  breaks: true,
});
const renderer = new MarkedBase.Renderer();
const linkRenderer = renderer.link;
renderer.link = (href, title, text) => {
    const html = linkRenderer.call(renderer, href, title, text);
    return html.replace(/^<a /, '<a target="_blank" rel="nofollow" ');
};
const Marked = mdText => MarkedBase(mdText, { renderer });

const initialState = {
  currentMarkdown: initialText,
  currentPreview: Marked(initialText),
}

export default class Previewer extends Component {

    constructor(props) {
        super(props);

        this.state = initialState;
    }

    handleTextChange(newMdText) {
        this.setState( {
            ...this.state,
            currentMarkdown: newMdText,
            currentPreview: Marked(newMdText),
        })
    }
    
    render() {
        const { currentPreview, currentMarkdown } = this.state;

        return (
        <div>
            <div className="pure-g">
                <div className="pure-u-1">
                    <h1 className="title">
                        Mardown Previewer
                    </h1>
                    <hr />
                </div>
            </div>
            <div className="pure-g">
                <div className="pure-u-1-2">
                    <MarkdownPanel currentMarkdown={currentMarkdown} onChange={this.handleTextChange.bind(this)}/>
                </div>
                <div className="pure-u-1-2">
                    <HtmlPanel currentPreview={currentPreview}/>
                </div>
            </div>
        </div>
        );
    }
}
