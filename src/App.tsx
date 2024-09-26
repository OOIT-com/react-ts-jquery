import React from 'react';
import {button, div, link, today} from './app-ui';
import $ from 'jquery';

function App() {
    return (
        <div style={{padding: '4em'}}>
            <h2>Welcome to React, TS and JQuery</h2>
            <div ref={(ref: HTMLInputElement) => $(ref).empty().append(jqueryApp())}/>
        </div>
    );
}

export default App;

let counter = 0;

function jqueryApp(): JQuery {
    //ReactDOM.render(<MyDiv />, document.getElementById('root'));

    counter++;
    return $('<div>')
        .css({
            border: '1px dashed gray',
            padding: '1em'
        })
        .append(
            $('<h4>', {text: 'JQuery Successfully Started! '}),
            today(),
            button({
                text: 'Click Me Quick',
                onClick: () => alert('Good boy, you clicked me!'),
                title: 'Just a Button!'
            }),
            '<hr />',
            link({
                text: 'Click Me Quick',
                onClick: () => alert('Good boy, you clicked me!'),
                title: 'Just a Link!'
            }),
            '<hr />',
            div({
                text: 'This is a simple div with text and children content.',
                children: ['<h1>Children</h1>', div({text: 'footer...'})],
                onClick: () => alert('You clicked on a simple div...'),
                title: 'A simple div example'
            }),
            `<div>counter is ${counter}</div>`
        );
}
