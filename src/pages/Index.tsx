
import { useState } from "react";
import TamilNaduMap from "../components/TamilNaduMap";
import SearchBar from "../components/SearchBar";
import MapLegend from "../components/MapLegend";
import DistrictCard from "../components/DistrictCard";
import { schoolsData, District } from "../data/schoolsData";

const Index = () => {
  const [selectedDistrict, setSelectedDistrict] = useState<District | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredDistricts = schoolsData.filter(district =>
    district.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold">Tamil Nadu Schools District Mapper</h1>
              <p className="text-blue-100 mt-2">Explore educational institutions across all 38 districts</p>
            </div>
            <div className="flex items-center gap-2 text-sm bg-white/10 px-4 py-2 rounded-full">
              <span className="font-semibold">Total Schools:</span>
              <span className="bg-white text-blue-600 px-2 py-1 rounded-full font-bold">
                {schoolsData.reduce((total, district) => total + district.totalSchools, 0).toLocaleString()}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Panel - Search and District Info */}
          <div className="lg:col-span-1 space-y-6">
            <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
            
            {selectedDistrict ? (
              <DistrictCard district={selectedDistrict} />
            ) : (
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">District Information</h3>
                <p className="text-gray-600 mb-4">Click on any district to view detailed school information</p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <div className="text-blue-600 font-semibold">Total Districts</div>
                    <div className="text-2xl font-bold text-blue-800">38</div>
                  </div>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <div className="text-green-600 font-semibold">Avg Schools/District</div>
                    <div className="text-2xl font-bold text-green-800">
                      {Math.round(schoolsData.reduce((total, district) => total + district.totalSchools, 0) / schoolsData.length)}
                    </div>
                  </div>
                </div>
              </div>
            )}

            <MapLegend />
          </div>

          {/* Right Panel - Map */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <TamilNaduMap 
                selectedDistrict={selectedDistrict}
                onDistrictSelect={setSelectedDistrict}
                filteredDistricts={filteredDistricts}
              />
            </div>
          </div>
        </div>

        {/* Districts Grid */}
        {searchTerm && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Search Results ({filteredDistricts.length} districts)
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {filteredDistricts.map((district) => (
                <div
                  key={district.id}
                  onClick={() => setSelectedDistrict(district)}
                  className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer border border-gray-100 hover:border-blue-300 p-4"
                >
                  <h3 className="font-semibold text-gray-800 mb-2">{district.name}</h3>
                  <div className="text-sm text-gray-600">
                    <div>Schools: <span className="font-medium text-blue-600">{district.totalSchools}</span></div>
                    <div>Students: <span className="font-medium text-green-600">{district.totalStudents?.toLocaleString()}</span></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
