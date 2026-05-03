import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import ProductsContent from './components/ProductsContent'; // 1. IMPORT IT HERE

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="flex min-h-screen font-sans antialiased">
      {/* Sidebar Section */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Right Side Container */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Navbar Section */}
        <Navbar toggleSidebar={toggleSidebar} />
        
        {/* 2. PLACE IT HERE - This is what actually shows it on the screen */}
        <div className="flex-1 overflow-y-auto">
          <ProductsContent />
        </div>
      </div>
    </div>
  );
}

export default App;