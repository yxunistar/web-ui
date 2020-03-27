var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from "react";
import ThemeContext from "./ThemeContext";
import cx from "classnames";
import { THEME } from "./constant";

var ThemeProvider = function (_React$Component) {
    _inherits(ThemeProvider, _React$Component);

    function ThemeProvider(props) {
        _classCallCheck(this, ThemeProvider);

        var _this = _possibleConstructorReturn(this, (ThemeProvider.__proto__ || Object.getPrototypeOf(ThemeProvider)).call(this, props));

        _this.switchTheme = function () {
            _this.setState({
                theme: _this.state.theme === THEME.EARLY ? THEME.NIGHT : THEME.EARLY
            });
        };

        _this.getThemeClass = function (suffixClass, _ref) {
            var _ref$theme = _ref.theme,
                theme = _ref$theme === undefined ? _this.state.theme : _ref$theme,
                _ref$custom = _ref.custom,
                custom = _ref$custom === undefined ? false : _ref$custom;

            if (!custom) {
                var _cx;

                return cx((_cx = {}, _defineProperty(_cx, "unistar-" + suffixClass, true), _defineProperty(_cx, "unistar-" + suffixClass + "-" + theme, !!theme), _cx));
            } else {
                var _cx2;

                return cx((_cx2 = {}, _defineProperty(_cx2, "custom-" + suffixClass, true), _defineProperty(_cx2, "custom-" + suffixClass + "-" + theme, !!theme), _cx2));
            }
        };

        _this.state = {
            theme: THEME.EARLY
        };
        return _this;
    }

    _createClass(ThemeProvider, [{
        key: "render",
        value: function render() {
            return React.createElement(
                ThemeContext.Provider,
                {
                    value: {
                        getThemeClass: this.getThemeClass
                    }
                },
                React.createElement(
                    "button",
                    { onClick: this.switchTheme },
                    "switch theme"
                ),
                this.props.children
            );
        }
    }]);

    return ThemeProvider;
}(React.Component);

export default ThemeProvider;