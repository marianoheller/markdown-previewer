import React, { Component } from 'react';

export default class MarkdownPanel extends Component {
    
    handleChange(e) {
        this.props.onChange(e.target.value);
    }
    
    render() {
        return (
        <div className="panel-container">
            <textarea onChange={this.handleChange.bind(this)} value={this.props.currentMarkdown}>
                
            </textarea>
        </div>
        );
        }
    }