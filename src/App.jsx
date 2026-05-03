import React, { useState } from 'react';
import Sidebar from '../Components/Sidebar';
import Navbar from '../Components/Navbar';
import ProductsContent from '../Components/ProductsContent.jsx'; 

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="flex min-h-screen font-sans antialiased">
     
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        
        <Navbar toggleSidebar={toggleSidebar} />
        
        
        <div className="flex-1 overflow-y-auto">
          <ProductsContent />
        </div>
      </div>
    </div>
  );
}

export default App;