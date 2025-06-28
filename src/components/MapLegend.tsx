
import { School } from "lucide-react";

const MapLegend = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
      <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
        <School className="h-5 w-5" />
        Map Legend
      </h3>
      
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <div className="w-4 h-4 bg-red-500 rounded-full border-2 border-white shadow-sm"></div>
          <span className="text-sm text-gray-700">1500+ Schools</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-3.5 h-3.5 bg-orange-500 rounded-full border-2 border-white shadow-sm"></div>
          <span className="text-sm text-gray-700">1000-1499 Schools</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 bg-yellow-500 rounded-full border-2 border-white shadow-sm"></div>
          <span className="text-sm text-gray-700">500-999 Schools</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-2.5 h-2.5 bg-blue-500 rounded-full border-2 border-white shadow-sm"></div>
          <span className="text-sm text-gray-700">200-499 Schools</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 bg-green-500 rounded-full border-2 border-white shadow-sm"></div>
          <span className="text-sm text-gray-700">Under 200 Schools</span>
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-gray-100">
        <div className="text-xs text-gray-500">
          💡 Click on any district marker to view detailed school information
        </div>
      </div>
    </div>
  );
};

export default MapLegend;
