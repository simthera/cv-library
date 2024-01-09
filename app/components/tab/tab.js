'use client'

import React,{useState} from "react"
import { TabsNavWrapper,TabsNav } from "./tab.styles"
import FirstTab from "../first-tab/first-tab"
import TabNavItem from "../tab-nav-item/tab-nav-item"
import TabContent from "../tab-content/tab-content"

const Tabs = () => {
    const [activeTab, setActiveTab] = useState("tab1");

    return (
        <TabsNavWrapper>
            <TabsNav>
                <TabNavItem title="Jobs by Location" id="tab1" activeTab={activeTab} setActiveTab={setActiveTab}/>
                <TabNavItem title="Jobs by Industry" id="tab2" activeTab={activeTab} setActiveTab={setActiveTab}/>
            </TabsNav>
            <div className="outlet">
                <TabContent id="tab1" activeTab={activeTab}>
                <ul>
                    <li>Aberdeen</li>
                     <li>Basingstoke</li>
                      <li>Berkshire</li> 
                      <li>Birmingham</li> 
                      <li>Bradford</li> 
                      <li>Bristol</li>
                    </ul>
                    <ul>
                    <li>Derby</li>
                     <li>Doncaster</li>
                      <li>Edinburgh</li> 
                      <li>Essex</li> 
                      <li>Exeter</li> 
                      <li>Glasgow</li>

                           
                    </ul>
                </TabContent>
                <TabContent id="tab2" activeTab={activeTab}>
                    <ul>
                        <li>Accounting</li> 
                        <li>Administration</li>
                        <li>Agriculture</li> 
                        <li>Arts</li> 
                        <li>Automotive</li> 
                        <li>Catering</li>
                    </ul>
                    <ul>
                        <li>Distribution</li> 
                        <li>Driving</li>
                        <li>Education</li>  
                        <li>Electronics</li>
                        <li>Engineering</li>
                        <li>Financial Services</li>  
                    </ul>

                </TabContent>
            </div>
        </TabsNavWrapper>
    );
}

export default Tabs;