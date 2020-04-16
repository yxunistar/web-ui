import React from "react";
import List from "List";

const DefaultDemo = () => {
    return (
        <List>
            <List.Item>付款时不可修改转账金额，否则会不到账</List.Item>
            <List.Item>请在二维码过期前进行付款，否则会不到账</List.Item>
        </List>
    );
};

export default DefaultDemo;
