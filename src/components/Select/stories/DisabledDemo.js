import React from "react";
import { Row } from "layout";
import Select from "components/Select";

const DisabledDemo = () => {
    return (
        <>
            <Row>
                <Select placeholder="全部" onSelect={e => console.warn(e)} disabled={true}>
                    <Select.Menu>
                        <Select.Item eventKey="全部">全部</Select.Item>
                        <Select.Item eventKey="棋牌">棋牌</Select.Item>
                        <Select.Item eventKey="真人娱乐">真人娱乐</Select.Item>
                        <Select.Item eventKey="全民皆贏游戏">全民皆贏游戏</Select.Item>
                    </Select.Menu>
                </Select>
            </Row>
        </>
    );
};

export default DisabledDemo;
