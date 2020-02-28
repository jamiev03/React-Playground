import { transform } from "@babel/core";
import * as babel from "@babel/core";
let React = require('react');
let ReactDOM = require('react-dom');
var babel = require("@babel/core");


babel.transform(code, options, function(err, result) {
    result; // => { code, map, ast }
  });

function Person() {
    return (
    <div class="person">
        <h1>Jamie</h1>
        <p>My Age: 32</p>
    </div>
    );
}

ReactDOM.render(<Person />, document.querySelector('#p1'));