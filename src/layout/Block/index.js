import React, { useState } from "react";
import ThemeConsumer from "Theme/ThemeConsumer";
import "./style.sass";
import cx from "classnames";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx";
import { default as style } from "react-syntax-highlighter/dist/esm/styles/prism/coy";
import reactElementToJSXString from "react-element-to-jsx-string";
SyntaxHighlighter.registerLanguage("jsx", jsx);

const Block = props => {
    const [openCode, setOpenCode] = useState(false);
    return (
        <ThemeConsumer>
            {({ getThemeClass }) => {
                let code = "";
                if (props.demo) {
                    console.warn(props.demo.__source__);
                    code = props.demo.__source__;
                } else {
                    code = reactElementToJSXString(props.children, {
                        showDefaultProps: false,
                        maxInlineAttributesLineLength: 200,
                    })
                        .replace(/(<Row>|<Column>)/g, "<div>")
                        .replace(/(<\/Row>|<\/Column>)/g, "</div>");
                }

                return (
                    <div className={cx(getThemeClass("ui-block"))}>
                        <div className="main">
                            <h3>
                                {props.title}
                                <span
                                    className={cx({
                                        open: openCode,
                                    })}
                                    onClick={() => setOpenCode(!openCode)}
                                >
                                    <span>{`<`}</span>
                                    <span className="code-status">{`/`}</span>
                                    <span>{`>`}</span>
                                </span>
                            </h3>
                            {props.description && <p>{props.description}</p>}
                            {props.children}
                        </div>
                        <div
                            className={cx("code", {
                                open: openCode,
                            })}
                        >
                            <SyntaxHighlighter language="jsx" style={style}>
                                {code}
                            </SyntaxHighlighter>
                        </div>
                    </div>
                );
            }}
        </ThemeConsumer>
    );
};

export default Block;
