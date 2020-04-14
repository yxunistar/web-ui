import React from "react";
import { Block, Row } from "layout";
import DatePicker from "DatePicker";

const Examples = () => {
    return (
        <>
            <Block title="Default">
                <Row>
                    <DatePicker.RangePicker />
                </Row>
            </Block>
            <Block title="Default">
                <Row>
                    <DatePicker.RangePickerFilter />
                </Row>
            </Block>
        </>
    );
};

export default Examples;
