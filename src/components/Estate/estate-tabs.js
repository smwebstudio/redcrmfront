import { Tabs } from "antd";
import React from "react";
import EstatesSection from "@/components/Estate/estates";

const onChange = (key) => {
    console.log(key);
};
const EstateTabs = () => (
    <div className="container pt-5 mt-5 border-top">
        <Tabs
            defaultActiveKey="1"
            onChange={onChange}
            items={[
                {
                    label: `Բոլորը`,
                    key: "1",
                    children: <EstatesSection type="best"/>
                },
                {
                    label: `Նոր ավելացված`,
                    key: "2",
                    children: <EstatesSection />
                },
                {
                    label: `Ամենադիտված`,
                    key: "3",
                    children: <EstatesSection />
                },
                {
                    label: `Շտապ`,
                    key: "4",
                    children: <EstatesSection />
                }
            ]}
        />

    </div>
);
export default EstateTabs;
