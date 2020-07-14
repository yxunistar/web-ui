import React from "react";
import { Row } from "layout";
import Select from "./components/Select";

const TwoLevelSelectDemo = () => {
    return (
        <>
            <Row>
                <Select placeholder="全部">
                    <Select.Menu>
                        <Select.Item eventKey="全部">全部</Select.Item>
                        <Select.Item eventKey="老虎机">
                            老虎机
                            <Select.Item eventKey="PT游戏">PT游戏</Select.Item>
                            <Select.Item eventKey="MGS游戏">MGS游戏</Select.Item>
                            <Select.Item eventKey="LX游戏">LX游戏</Select.Item>
                            <Select.Item eventKey="TTG游戏">TTG游戏</Select.Item>
                            <Select.Item eventKey="连环夺宝游戏">连环夺宝游戏</Select.Item>
                        </Select.Item>
                        <Select.Item eventKey="棋牌">棋牌</Select.Item>
                        <Select.Item eventKey="真人娱乐">真人娱乐</Select.Item>
                        <Select.Item eventKey="全民皆贏游戏">全民皆贏游戏</Select.Item>
                    </Select.Menu>
                </Select>
            </Row>
        </>
    );
};

export default TwoLevelSelectDemo;
