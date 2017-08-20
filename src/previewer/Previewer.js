import React, { Component } from 'react';
import Marked from 'marked';

import HtmlPanel from './HtmlPanel';
import MarkdownPanel from './MarkdownPanel';

import { initialText } from '../config';

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
