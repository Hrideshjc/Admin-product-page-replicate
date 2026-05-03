import React from 'react';
import { FiZoomIn, FiMoreHorizontal } from 'react-icons/fi';
import { 
  ChevronLeft, 
  ChevronRight, 
  ChevronsLeft, 
  ChevronsRight 
} from 'lucide-react';

const ProductTable = ({ products }) => {
  
  const StatusToggle = ({ checked, activeColor }) => (
    <label className="relative inline-flex items-center cursor-pointer">
      <input type="checkbox" defaultChecked={checked} className="sr-only peer" />
      <div className={`w-11 h-5 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all ${activeColor}`}></div>
    </label>
  );

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
      {/* Table Section */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[1100px]">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">
              <th className="px-4 py-4"><input type="checkbox" className="rounded border-gray-300 text-[#7E3AF2] focus:ring-[#7E3AF2]" /></th>
              <th className="px-4 py-4">Product Name</th>
              <th className="px-4 py-4">Category</th>
              <th className="px-4 py-4">Price</th>
              <th className="px-4 py-4">Sale Price</th>
              <th className="px-4 py-4 text-center">Stock</th>
              <th className="px-4 py-4">Status</th>
              <th className="px-4 py-4 text-center">View</th>
              <th className="px-4 py-4 text-center">Published</th>
              <th className="px-4 py-4 text-center">Featured</th>
              <th className="px-4 py-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-[13px] text-gray-600">
            {products.map((product) => (
              <tr key={product.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-4 py-4"><input type="checkbox" className="rounded border-gray-300 text-[#7E3AF2]" /></td>
                <td className="px-4 py-4 flex items-center gap-3">
                  <img src={product.image} className="w-8 h-8 rounded border border-gray-100 object-cover" alt="" />
                  <span className="font-medium text-gray-700">{product.name}</span>
                </td>
                <td className="px-4 py-4">{product.category}</td>
                <td className="px-4 py-4 font-bold text-gray-800">${product.price}.00</td>
                <td className="px-4 py-4 font-bold text-gray-800">${product.salePrice}.00</td>
                <td className="px-4 py-4 text-center font-medium">{product.stock}</td>
                <td className="px-4 py-4">
                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase ${
                    product.stock > 0 ? 'bg-emerald-500 text-white' : 'bg-red-100 text-red-600'
                  }`}>
                    {product.stock > 0 ? 'Selling' : 'Sold Out'}
                  </span>
                </td>
                <td className="px-4 py-4 text-center text-gray-400"><FiZoomIn size={18} className="mx-auto cursor-pointer hover:text-[#7E3AF2]" /></td>
                <td className="px-4 py-4 text-center"><StatusToggle checked={product.published} activeColor="peer-checked:bg-emerald-400" /></td>
                <td className="px-4 py-4 text-center"><StatusToggle checked={product.featured} activeColor="peer-checked:bg-pink-500" /></td>
                <td className="px-4 py-4 text-right"><FiMoreHorizontal size={18} className="ml-auto cursor-pointer" /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      
      <div className="px-6 py-4 bg-white border-t border-gray-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
        
       
        <div className="text-[13px] text-gray-500 font-medium">
          0 of 338 row(s) selected.
        </div>

        
        <div className="flex flex-wrap items-center gap-6">
          
          
          <div className="flex items-center gap-2">
            <span className="text-[13px] font-bold text-gray-700">Rows per page</span>
            <select className="bg-white border border-gray-200 rounded-lg text-[13px] px-2 py-1 focus:outline-none">
              <option>20</option>
              <option>50</option>
              <option>100</option>
            </select>
          </div>

          
          <div className="text-[13px] font-bold text-gray-700">
            Page 1 of 17
          </div>

          
          <div className="flex items-center gap-1">
            <button className="p-1.5 rounded-md border border-gray-200 text-gray-200 cursor-not-allowed">
              <ChevronsLeft size={16} />
            </button>
            <button className="p-1.5 rounded-md border border-gray-200 text-gray-200 cursor-not-allowed">
              <ChevronLeft size={16} />
            </button>
            <button className="p-1.5 rounded-md border border-gray-200 text-gray-700 hover:bg-gray-50">
              <ChevronRight size={16} />
            </button>
            <button className="p-1.5 rounded-md border border-gray-200 text-gray-700 hover:bg-gray-50">
              <ChevronsRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductTable;