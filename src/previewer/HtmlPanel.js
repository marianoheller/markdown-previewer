import React, { Component } from 'react';

export default class HtmlPanel extends Component {
    setPreview() {
        return { __html: this.props.currentPreview }
    }

    render() {
        
        return (
            <div  className="panel-container">
                <div dangerouslySetInnerHTML={this.setPreview()}>
                </div>
            </div>
        );
    }
}