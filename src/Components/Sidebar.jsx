import React from 'react';
import { 
  LayoutGrid, ShoppingCart, Tag, Layers, Gift, 
  Target, Monitor, ClipboardList, Truck, 
  Users, UserCircle, Settings, Globe, ChevronRight, ChevronsUpDown
} from 'lucide-react';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  
  const NavItem = ({ icon: Icon, label, active = false, hasSubmenu = false }) => (
    <div className={`flex items-center justify-between px-6 py-3 cursor-pointer transition-all duration-200 group
      ${active 
        ? 'text-gray-900 bg-[#F4F5F7] font-semibold' 
        : 'text-[#4B5563] hover:text-[#10B981] hover:bg-gray-50'}`}>
      <div className="flex items-center">
        
        <Icon size={20} strokeWidth={1.5} className={active ? 'text-gray-900' : 'text-gray-500 group-hover:text-[#10B981]'} />
        {isOpen && <span className="ml-4 text-[15px]">{label}</span>}
      </div>
      {isOpen && hasSubmenu && <ChevronRight size={16} className="text-gray-400" />}
    </div>
  );

  const CategoryLabel = ({ children }) => (
    isOpen ? (
      <p className="px-6 mt-8 mb-4 text-[14px] font-medium text-gray-400">
        {children}
      </p>
    ) : <div className="h-px w-full bg-gray-100 my-6"></div>
  );

  return (
    <>
      <div className={`fixed inset-0 bg-black/40 z-40 lg:hidden transition-opacity ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`} onClick={toggleSidebar}></div>

      <aside className={`fixed lg:static inset-y-0 left-0 bg-white border-r border-gray-100 z-50 transition-all duration-300 flex flex-col
        ${isOpen ? 'w-[280px] translate-x-0' : 'w-20 lg:translate-x-0 -translate-x-full'}`}>
        
        
        <div className="p-4 mx-4 my-4 bg-[#F4F5F7] rounded-xl flex items-center gap-3">
          <div className="text-[#10B981]">
            <ShoppingCart size={28} strokeWidth={2.5} />
          </div>
          {isOpen && <h1 className="text-3xl font-bold text-[#374151] tracking-tight">Dashtar</h1>}
        </div>

       
        <div className="flex-1 overflow-y-auto custom-scrollbar">
          <CategoryLabel>General</CategoryLabel>
          <NavItem icon={LayoutGrid} label="Dashboard" />

          <CategoryLabel>Catalog</CategoryLabel>
          <NavItem icon={ShoppingCart} label="Products" active={true} />
          <NavItem icon={Tag} label="Categories" />
          <NavItem icon={Layers} label="Attributes" />
          <NavItem icon={Gift} label="Coupons" />
          <NavItem icon={Target} label="Campaigns" />
          <NavItem icon={Monitor} label="Product Sliders" />

          <CategoryLabel>Sales</CategoryLabel>
          <NavItem icon={ClipboardList} label="Orders" />
          <NavItem icon={Truck} label="Delivery Boys" />
          <NavItem icon={Users} label="Customers" />

          <CategoryLabel>Staff</CategoryLabel>
          <NavItem icon={UserCircle} label="Our Staff" />

          <CategoryLabel>Settings</CategoryLabel>
          <NavItem icon={Settings} label="Settings" hasSubmenu={true} />

          <CategoryLabel>International</CategoryLabel>
          <NavItem icon={Globe} label="Localization" hasSubmenu={true} />
        </div>

        
        <div className="p-4 bg-[#F9FAFB] border-t border-gray-100">
          <div className="flex items-center justify-between p-2 rounded-xl bg-white border border-gray-100 shadow-sm cursor-pointer hover:bg-gray-50 transition-colors">
            <div className="flex items-center gap-3">
              <img 
                src="https://ui-avatars.com/api/?name=Admin&background=10B981&color=fff" 
                alt="admin" 
                className="w-10 h-10 rounded-full border border-gray-100"
              />
              {isOpen && (
                <div className="overflow-hidden">
                  <p className="text-[14px] font-bold text-gray-800 leading-none">admin</p>
                  <p className="text-[12px] text-gray-500 mt-1 truncate">admin@gmail.com</p>
                </div>
              )}
            </div>
            {isOpen && <ChevronsUpDown size={16} className="text-gray-400" />}
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;