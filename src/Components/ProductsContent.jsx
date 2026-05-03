import React from 'react';
import { FiPlus, FiUpload, FiDownload, FiTrash2, FiSearch, FiPlusCircle, FiColumns } from 'react-icons/fi';
import ProductTable from './ProductTable';

const ProductsContent = () => {
  
  const products = [
    { id: 1, name: 'TEST BANGLA', category: 'Home', price: 25, salePrice: 25, stock: 23, published: true, featured: true, image: 'https://www.dailysabah.com/business/automotive/luxury-cars-hit-record-sales-as-demand-rebounds-from-pandemic' },
    { id: 2, name: 'Himalaya Powder', category: 'Skin Care', price: 174, salePrice: 160, stock: 5468, published: true, featured: true, image: 'https://www.dailysabah.com/business/automotive/luxury-cars-hit-record-sales-as-demand-rebounds-from-pandemic' },
    { id: 3, name: 'Sold Out Item', category: 'Cosmetics', price: 10, salePrice: 10, stock: 0, published: false, featured: true, image: 'https://www.dailysabah.com/business/automotive/luxury-cars-hit-record-sales-as-demand-rebounds-from-pandemic' },
    { id: 5, name: 'TEST BANGLA', category: 'Home', price: 25, salePrice: 25, stock: 23, published: true, featured: true, image: 'https://www.dailysabah.com/business/automotive/luxury-cars-hit-record-sales-as-demand-rebounds-from-pandemic' },
    { id: 6, name: 'Himalaya Powder', category: 'Skin Care', price: 174, salePrice: 160, stock: 5468, published: true, featured: true, image: 'https://www.dailysabah.com/business/automotive/luxury-cars-hit-record-sales-as-demand-rebounds-from-pandemic' },
    { id: 7, name: 'Sold Out Item', category: 'Cosmetics', price: 10, salePrice: 10, stock: 0, published: false, featured: true, image: 'https://www.dailysabah.com/business/automotive/luxury-cars-hit-record-sales-as-demand-rebounds-from-pandemic' },
    { id: 8, name: 'TEST BANGLA', category: 'Home', price: 25, salePrice: 25, stock: 23, published: true, featured: true, image: 'https://www.dailysabah.com/business/automotive/luxury-cars-hit-record-sales-as-demand-rebounds-from-pandemic' },
    { id: 9, name: 'Himalaya Powder', category: 'Skin Care', price: 174, salePrice: 160, stock: 5468, published: true, featured: true, image: 'https://www.dailysabah.com/business/automotive/luxury-cars-hit-record-sales-as-demand-rebounds-from-pandemic' },
    { id: 10, name: 'Sold Out Item', category: 'Cosmetics', price: 10, salePrice: 10, stock: 0, published: false, featured: true, image: 'https://www.dailysabah.com/business/automotive/luxury-cars-hit-record-sales-as-demand-rebounds-from-pandemic' },
    
  ];

  return (
    <div className="flex-1 bg-[#F4F5F7] p-4 md:p-8 min-h-screen">
      <div className="max-w-[1600px] mx-auto">
        
        
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <div>
            <h1 className="text-[20px] font-bold text-[#374151]">Products</h1>
            <p className="text-[14px] text-[#6B7280]">Manage your products inventory</p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-xs font-medium text-gray-600 hover:bg-gray-50 transition-all"><FiUpload /> Export</button>
            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-xs font-medium text-gray-600 hover:bg-gray-50 transition-all"><FiDownload /> Import</button>
            <button className="px-4 py-2 bg-[#FFEDEB] text-[#FA6C48] rounded-lg text-xs font-bold hover:bg-[#FFD9D4]">Bulk Action</button>
            <button className="p-2.5 bg-[#F3F4F6] text-[#9CA3AF] rounded-lg border border-gray-200 hover:text-red-500"><FiTrash2 size={16} /></button>
            <button className="flex items-center gap-2 px-5 py-2 bg-[#7E3AF2] text-white rounded-lg text-xs font-bold hover:bg-[#6c2bd9] shadow-sm"><FiPlus size={18} strokeWidth={3} /> Add Product</button>
          </div>
        </div>

        
        <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm mb-6 flex flex-col lg:flex-row justify-between gap-4">
          <div className="flex flex-1 items-center gap-3">
            <div className="relative flex-1 max-w-sm">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400"><FiSearch size={16} /></span>
              <input type="text" placeholder="Search by product name" className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-[13px] focus:outline-none focus:ring-1 focus:ring-[#7E3AF2]" />
            </div>
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg text-xs font-bold text-gray-700 hover:bg-gray-50"><FiPlusCircle className="text-gray-400" /> Category</button>
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg text-xs font-bold text-gray-700 hover:bg-gray-50"><FiPlusCircle className="text-gray-400" /> Price</button>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg text-xs font-bold text-gray-700 hover:bg-gray-50 self-end md:self-auto"><FiColumns className="rotate-90" /> View</button>
        </div>

       
        <ProductTable products={products} />
      </div>
    </div>
  );
};

export default ProductsContent;