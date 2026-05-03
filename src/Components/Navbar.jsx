const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className="h-16 bg-white border-b border-gray-100 flex items-center justify-between px-6 sticky top-0 z-20">
      
      
      <div className="flex items-center">
        <button 
          onClick={toggleSidebar}
          className="p-2 rounded-md border border-gray-200 text-gray-500 hover:text-[#FA6C48] hover:bg-orange-50 transition-all"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
        </button>
      </div>

      
      <div className="flex items-center gap-4 md:gap-6">
        
        
        <div className="relative hidden lg:block">
          <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </span>
          <input 
            type="text" 
            placeholder="Search" 
            className="pl-10 pr-12 py-1.5 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-[#FA6C48] w-64"
          />
          <span className="absolute inset-y-0 right-0 pr-3 flex items-center text-[10px] text-gray-400 font-bold border-l border-gray-200 ml-2 pl-2">
            ⌘ K
          </span>
        </div>

        
        <span className="text-xs font-bold text-gray-700 cursor-pointer hidden sm:block">GBEN</span>

        
        <button className="text-gray-500 hover:text-[#FA6C48] transition-colors">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1m-16 0H1m15.364 1.636l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
        </button>

        
        <div className="flex items-center gap-1 cursor-pointer">
          <div className="w-4 h-4 rounded-full bg-emerald-600 border-2 border-white shadow-sm"></div>
          <svg className="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
        </div>

        
        <button className="relative text-gray-500 hover:text-[#FA6C48]">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
          <span className="absolute -top-1.5 -right-1.5 bg-red-500 text-white text-[9px] px-1.5 py-0.5 rounded-full font-bold border-2 border-white">
            9+
          </span>
        </button>

        
        <div className="w-9 h-9 rounded-full overflow-hidden border border-gray-200 cursor-pointer hover:border-[#FA6C48] transition-all">
          <img 
            src="https://i.ibb.co/5GzXy0V/user-avatar.jpg" 
            alt="admin" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;