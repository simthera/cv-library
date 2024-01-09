import React from "react";

import { TabContentWrapper } from "./tab-conent.styles"
 
const TabContent = ({id, activeTab, children}) => {
 return (
   activeTab === id ? <TabContentWrapper>
     { children }
   </TabContentWrapper>
   : null
 );
};
 
export default TabContent;