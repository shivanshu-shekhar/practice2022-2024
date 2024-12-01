import React from 'react';
//import Navbar from './components/Navbar';
import FullPageFlexbox from './components/FullPageFlexbox'
import { DataProvider } from './contexts/DataContext';

const App: React.FC = () => {
  return (
    <div>
      <DataProvider>
        <FullPageFlexbox/>
      </DataProvider>
      {/* <Navbar /> */}
      {/* Other components can go here */}
    </div>
  );
};

export default App;