import React from "react";
import SplitLayout from "SplitLayout";

const News = () => <div>News Page.</div>;
const AnotherNews = () => <div>Another News Page.</div>;

const MultiLayerDemo = () => {
    return (
        <>
            <SplitLayout
                type="deposit"
                menu={
                    <SplitLayout.Menu>
                        <SplitLayout.Item
                            key={1}
                            type="BADGE"
                            valueOfType={5}
                            to="/news"
                            onClick={() => {
                                location.href = location.href.replace(/#\/.*$/, "#/news");
                                console.log(location);
                            }}
                        >
                            公告新闻
                        </SplitLayout.Item>
                        <SplitLayout.Item
                            key={2}
                            type="TAG"
                            valueOfType={`good`}
                            to="/another-news"
                            onClick={() => {
                                location.href = location.href.replace(/#\/.*$/, "#/another-news");
                                console.log(location);
                            }}
                        >
                            其他新闻
                        </SplitLayout.Item>
                    </SplitLayout.Menu>
                }
                routes={[
                    {
                        path: "/news",
                        component: News,
                    },
                    {
                        path: "/another-news",
                        component: AnotherNews,
                    },
                ]}
            />
        </>
    );
};

export default MultiLayerDemo;
