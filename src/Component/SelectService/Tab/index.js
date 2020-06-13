import React, { useState } from "react";
import { TabWrapper, Tabs, TabItem } from "./styles";

export default function Tab(props) {
    if (!props["tabs"] || !Array.isArray(props["tabs"]) || Array.isArray(props["tabs"]) && props["tabs"].length <= 0) {
        return "";
    }
    const { tabs = [] } = props;
    const [activeTab, setActiveTab] = useState(tabs[0]);

    return <TabWrapper>
        <Tabs>
            {tabs.map(({ label, id }, index) => {
                return <TabItem
                    onClick={() => setActiveTab(tabs[index])}
                    active={activeTab.id === id}
                >
                    {label}
                </TabItem>
            })
            }
        </Tabs>
        {activeTab.Component ? <activeTab.Component activeId={activeTab.id} /> : null}
    </TabWrapper>
}

