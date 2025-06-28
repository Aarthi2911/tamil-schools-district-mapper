
import { GraduationCap, Users, MapPin, School } from "lucide-react";
import { District } from "../data/schoolsData";

interface DistrictCardProps {
  district: District;
}

const DistrictCard = ({ district }: DistrictCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white p-6">
        <div className="flex items-center gap-3">
          <MapPin className="h-6 w-6" />
          <div>
            <h3 className="text-xl font-bold">{district.name}</h3>
            <p className="text-blue-100">District Information</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-6">
        {/* Key Statistics */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-blue-50 rounded-lg p-4 text-center">
            <School className="h-8 w-8 text-blue-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-blue-800">{district.totalSchools}</div>
            <div className="text-sm text-blue-600">Total Schools</div>
          </div>
          <div className="bg-green-50 rounded-lg p-4 text-center">
            <Users className="h-8 w-8 text-green-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-green-800">{district.totalStudents?.toLocaleString()}</div>
            <div className="text-sm text-green-600">Students</div>
          </div>
        </div>

        {/* School Types Breakdown */}
        <div>
          <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <GraduationCap className="h-5 w-5" />
            School Categories
          </h4>
          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <span className="text-gray-700">Government Schools</span>
              <span className="font-semibold text-blue-600">{district.governmentSchools}</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <span className="text-gray-700">Private Schools</span>
              <span className="font-semibold text-green-600">{district.privateSchools}</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <span className="text-gray-700">Aided Schools</span>
              <span className="font-semibold text-orange-600">{district.aidedSchools}</span>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="pt-4 border-t border-gray-100">
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-gray-500">Literacy Rate</span>
              <div className="font-semibold text-gray-800">{district.literacyRate}%</div>
            </div>
            <div>
              <span className="text-gray-500">Primary Schools</span>
              <div className="font-semibold text-gray-800">{district.primarySchools}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DistrictCard;
