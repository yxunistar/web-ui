import React from "react";
import Item from "./Item";
import ItemGroup from "./ItemGroup";

const Menu = props => {
    return <nav className="unistar-split-layout-menu">{props.children}</nav>;
};
Menu.Item = Item;
Menu.ItemGroup = ItemGroup;
export { Item, ItemGroup };
export default Menu;
