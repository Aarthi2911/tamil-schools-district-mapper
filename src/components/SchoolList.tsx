
import { School, GraduationCap, MapPin } from "lucide-react";
import { District } from "../data/schoolsData";

interface SchoolListProps {
  selectedDistrict: District | null;
  allDistricts: District[];
}

const SchoolList = ({ selectedDistrict, allDistricts }: SchoolListProps) => {
  // Generate sample school names based on district data
  const generateSchoolNames = (district: District) => {
    const schoolTypes = [
      "Government Higher Secondary School",
      "Municipal Primary School", 
      "Private Matriculation School",
      "Government Middle School",
      "Aided High School",
      "Corporation Primary School",
      "Government Elementary School",
      "Private CBSE School"
    ];

    const areas = [
      "Main Road", "Market Street", "Gandhi Nagar", "Anna Nagar", 
      "Nehru Street", "Railway Station Road", "Bus Stand", "Town Hall",
      "Collectorate", "Hospital Road", "Temple Street", "Park Road"
    ];

    const schools = [];
    const numSchools = Math.min(district.totalSchools, 15); // Show max 15 schools

    for (let i = 0; i < numSchools; i++) {
      const schoolType = schoolTypes[i % schoolTypes.length];
      const area = areas[i % areas.length];
      schools.push(`${schoolType}, ${area}, ${district.name}`);
    }

    return schools;
  };

  const displayData = selectedDistrict 
    ? [selectedDistrict] 
    : allDistricts.slice(0, 5); // Show top 5 districts when none selected

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
      <div className="flex items-center gap-3 mb-6">
        <School className="h-6 w-6 text-blue-600" />
        <div>
          <h3 className="text-xl font-bold text-gray-800">
            {selectedDistrict ? `Schools in ${selectedDistrict.name}` : "Top Districts - School Names"}
          </h3>
          <p className="text-sm text-gray-600">
            {selectedDistrict 
              ? `Showing ${Math.min(selectedDistrict.totalSchools, 15)} of ${selectedDistrict.totalSchools} schools`
              : "Click on a district to see all its schools"
            }
          </p>
        </div>
      </div>

      <div className="space-y-6">
        {displayData.map((district) => {
          const schoolNames = generateSchoolNames(district);
          
          return (
            <div key={district.id}>
              {!selectedDistrict && (
                <div className="flex items-center gap-2 mb-3 p-3 bg-blue-50 rounded-lg">
                  <MapPin className="h-4 w-4 text-blue-600" />
                  <h4 className="font-semibold text-blue-800">{district.name}</h4>
                  <span className="text-sm text-blue-600 ml-auto">
                    {district.totalSchools} schools
                  </span>
                </div>
              )}
              
              <div className="space-y-2">
                {schoolNames.map((schoolName, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <GraduationCap className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <div className="flex-1">
                      <div className="text-sm font-medium text-gray-800">
                        {schoolName}
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                        School #{index + 1} • Est. Students: {Math.floor(Math.random() * 500) + 100}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {!selectedDistrict && district.totalSchools > 15 && (
                <div className="text-center mt-3">
                  <span className="text-sm text-gray-500">
                    + {district.totalSchools - 15} more schools
                  </span>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {selectedDistrict && selectedDistrict.totalSchools > 15 && (
        <div className="mt-6 p-4 bg-blue-50 rounded-lg text-center">
          <p className="text-sm text-blue-700">
            <strong>Note:</strong> Showing first 15 schools out of {selectedDistrict.totalSchools} total schools in {selectedDistrict.name}.
          </p>
        </div>
      )}
    </div>
  );
};

export default SchoolList;
