import React from "react";

class SelectMenu extends React.Component {
    render() {
        const { children } = this.props;
        return (
            <div className="menu">
                {React.Children.map(children, child => {
                    if (React.isValidElement(child)) {
                        return React.cloneElement(child, {
                            ...child.props,
                            onClick: this.props.onClick,
                            onSelect: this.props.onSelect,
                        });
                    }

                    return child;
                })}
            </div>
        );
    }
}

export default SelectMenu;
