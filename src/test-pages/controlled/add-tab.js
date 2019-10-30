import {useState} from 'react';
import TabStrip from "../../components/TabPanel/TabStrip"

const App = () => {
  const [selectedTab, setSelectedTab] = useState('t2');
  const [tabs, setTabs] = useState([
    {
      title: 'Tab 1',
      id: 't1',
    },
    {
      title: 'Tab 2',
      id: 't2',
    },
  ]);

  return (
  <div>
    <TabStrip tabs={tabs} selectedTab={selectedTab}/>
    <button
      onClick={() => {
        setTabs([...tabs, {title: 'Tab3', id: 't3'}])
      }}
    >
      Add Tab
    </button>
  </div>
  );
}

export default App;
