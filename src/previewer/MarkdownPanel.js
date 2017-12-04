import React, { Component } from 'react';

export default class MarkdownPanel extends Component {
    
    handleChange(e) {
        this.props.onChange(e.target.value);
    }
    
    render() {
        return (
        <div className="panel-container">
            <textarea 
            id="editor" 
            onInput={this.handleChange.bind(this)} 
            defaultValue={this.props.currentMarkdown}
            rows={40}
            >
            </textarea>
        </div>
        );
        }
    }