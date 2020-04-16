import React from "react";
import Layout from "components/Layout";

const DefaultDemo = () => {
    return (
        <Layout className="outer">
            <Layout.Section>
                <div className="inner block">Section A</div>
            </Layout.Section>
            <Layout.Section>
                <div className="inner block">Section B</div>
            </Layout.Section>
        </Layout>
    );
};

export default DefaultDemo;
