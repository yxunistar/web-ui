import React from "react";
import { Block, Row } from "layout";
import List from "List";

const Examples = () => {
    return (
        <>
            <Block title="Default(Default)">
                <Row>
                    <List>
                        <List.Item>付款时不可修改转账金额，否则会不到账</List.Item>
                        <List.Item>请在二维码过期前进行付款，否则会不到账</List.Item>
                    </List>
                </Row>
            </Block>
            <Block title="Ordered">
                <Row>
                    <List type="ordered">
                        <List.Item>付款时不可修改转账金额，否则会不到账</List.Item>
                        <List.Item>请在二维码过期前进行付款，否则会不到账</List.Item>
                    </List>
                </Row>
            </Block>
            <Block title="Exclamation">
                <Row>
                    <List type="exclamation">
                        <List.Item>付款时不可修改转账金额，否则会不到账</List.Item>
                        <List.Item>请在二维码过期前进行付款，否则会不到账</List.Item>
                    </List>
                </Row>
            </Block>
        </>
    );
};

export default Examples;
