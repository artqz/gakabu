'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _head = require('next\\dist\\lib\\head.js');

var _head2 = _interopRequireDefault(_head);

var _cowsayBrowser = require('cowsay-browser');

var _cowsayBrowser2 = _interopRequireDefault(_cowsayBrowser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\composter\\gakabu\\react\\pages\\index.js?entry';

console.log(_cowsayBrowser2.default.say({ text: 'Welcome to GaKaBu!' }));

exports.default = function () {
  return _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, _react2.default.createElement(_head2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, _react2.default.createElement('title', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, 'My page title'), _react2.default.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width', __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  })), _react2.default.createElement('p', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, 'Hello world!'));
};