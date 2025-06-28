import { MapPin } from "lucide-react";
import { District } from "../data/schoolsData";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";

interface TamilNaduMapProps {
  selectedDistrict: District | null;
  onDistrictSelect: (district: District) => void;
  filteredDistricts: District[];
}

const TamilNaduMap = ({ selectedDistrict, onDistrictSelect, filteredDistricts }: TamilNaduMapProps) => {
  // Simplified district coordinates for Tamil Nadu
  const districtPositions = [
    { id: 1, name: "Chennai", x: 65, y: 45, schools: 2500 },
    { id: 2, name: "Coimbatore", x: 25, y: 40, schools: 1800 },
    { id: 3, name: "Madurai", x: 40, y: 65, schools: 1600 },
    { id: 4, name: "Tiruchirappalli", x: 45, y: 50, schools: 1400 },
    { id: 5, name: "Salem", x: 35, y: 35, schools: 1300 },
    { id: 6, name: "Tirunelveli", x: 35, y: 85, schools: 1200 },
    { id: 7, name: "Erode", x: 30, y: 35, schools: 1100 },
    { id: 8, name: "Vellore", x: 50, y: 25, schools: 1000 },
    { id: 9, name: "Thoothukudi", x: 40, y: 80, schools: 950 },
    { id: 10, name: "Dindigul", x: 38, y: 55, schools: 900 },
    { id: 11, name: "Thanjavur", x: 50, y: 55, schools: 850 },
    { id: 12, name: "Cuddalore", x: 60, y: 40, schools: 800 },
    { id: 13, name: "Kanchipuram", x: 58, y: 45, schools: 750 },
    { id: 14, name: "Villupuram", x: 58, y: 38, schools: 700 },
    { id: 15, name: "Sivaganga", x: 45, y: 68, schools: 650 },
    { id: 16, name: "Virudhunagar", x: 42, y: 75, schools: 600 },
    { id: 17, name: "Tiruvannamalai", x: 55, y: 32, schools: 550 },
    { id: 18, name: "Dharmapuri", x: 45, y: 28, schools: 500 },
    { id: 19, name: "Nagapattinam", x: 52, y: 58, schools: 480 },
    { id: 20, name: "Namakkal", x: 38, y: 38, schools: 450 },
    { id: 21, name: "Krishnagiri", x: 42, y: 25, schools: 420 },
    { id: 22, name: "Ramanathapuram", x: 48, y: 75, schools: 400 },
    { id: 23, name: "Tiruppur", x: 28, y: 38, schools: 380 },
    { id: 24, name: "Karur", x: 40, y: 45, schools: 350 },
    { id: 25, name: "Pudukkottai", x: 48, y: 62, schools: 320 },
    { id: 26, name: "Theni", x: 35, y: 62, schools: 300 },
    { id: 27, name: "Kanyakumari", x: 32, y: 95, schools: 280 },
    { id: 28, name: "Tiruvallur", x: 62, y: 40, schools: 260 },
    { id: 29, name: "Tiruvarur", x: 52, y: 60, schools: 240 },
    { id: 30, name: "Ariyalur", x: 48, y: 48, schools: 220 },
    { id: 31, name: "Perambalur", x: 46, y: 45, schools: 200 },
    { id: 32, name: "The Nilgiris", x: 25, y: 30, schools: 180 },
    { id: 33, name: "Kallakurichi", x: 56, y: 35, schools: 160 },
    { id: 34, name: "Ranipet", x: 52, y: 28, schools: 140 },
    { id: 35, name: "Tirupathur", x: 48, y: 30, schools: 120 },
    { id: 36, name: "Tenkasi", x: 38, y: 82, schools: 100 },
    { id: 37, name: "Chengalpattu", x: 60, y: 47, schools: 80 },
    { id: 38, name: "Mayiladuthurai", x: 52, y: 56, schools: 60 }
  ];

  const getDistrictData = (positionName: string) => {
    return filteredDistricts.find(d => d.name === positionName);
  };

  const getMarkerColor = (schools: number) => {
    if (schools >= 1500) return "bg-red-500";
    if (schools >= 1000) return "bg-orange-500";
    if (schools >= 500) return "bg-yellow-500";
    if (schools >= 200) return "bg-blue-500";
    return "bg-green-500";
  };

  const getMarkerSize = (schools: number) => {
    if (schools >= 1500) return "w-4 h-4";
    if (schools >= 1000) return "w-3.5 h-3.5";
    if (schools >= 500) return "w-3 h-3";
    if (schools >= 200) return "w-2.5 h-2.5";
    return "w-2 h-2";
  };

  return (
    <TooltipProvider>
      <div className="relative">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Tamil Nadu Districts Map</h2>
        
        {/* Map Container */}
        <div className="relative bg-gradient-to-br from-blue-100 to-green-100 rounded-lg p-8 overflow-hidden">
          {/* Stylized Tamil Nadu outline */}
          <div className="relative w-full h-96 bg-gradient-to-br from-emerald-50 to-blue-50 rounded-lg border-2 border-blue-200 shadow-inner">
            
            {/* District markers */}
            {districtPositions.map((position) => {
              const districtData = getDistrictData(position.name);
              const isSelected = selectedDistrict?.name === position.name;
              const isFiltered = filteredDistricts.some(d => d.name === position.name);
              
              if (!isFiltered && filteredDistricts.length < 38) return null;

              return (
                <Tooltip key={position.id}>
                  <TooltipTrigger asChild>
                    <div
                      className="absolute transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
                      style={{
                        left: `${position.x}%`,
                        top: `${position.y}%`,
                      }}
                      onClick={() => districtData && onDistrictSelect(districtData)}
                    >
                      {/* Marker */}
                      <div className={`
                        ${getMarkerColor(position.schools)} 
                        ${getMarkerSize(position.schools)}
                        rounded-full shadow-lg border-2 border-white
                        ${isSelected ? 'ring-4 ring-blue-400 ring-opacity-60' : ''}
                        hover:scale-125 transition-all duration-300
                        relative z-10
                      `} />
                      
                      {/* Pulse animation for selected district */}
                      {isSelected && (
                        <div className="absolute inset-0 rounded-full bg-blue-400 animate-ping opacity-30" />
                      )}
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <div className="text-center">
                      <div className="font-semibold text-gray-800">{position.name}</div>
                      <div className="text-sm text-blue-600">{position.schools} schools</div>
                      {districtData && (
                        <div className="text-xs text-gray-600 mt-1">
                          {districtData.totalStudents?.toLocaleString()} students
                        </div>
                      )}
                    </div>
                  </TooltipContent>
                </Tooltip>
              );
            })}

            {/* Decorative elements */}
            <div className="absolute top-4 left-4 text-blue-600/20">
              <MapPin size={24} />
            </div>
            <div className="absolute bottom-4 right-4 text-green-600/20">
              <MapPin size={20} />
            </div>
            
            {/* Compass */}
            <div className="absolute top-4 right-4 bg-white/80 rounded-full p-2 shadow-md">
              <div className="w-8 h-8 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-1 h-6 bg-gradient-to-t from-red-500 to-red-600 rounded-full"></div>
                </div>
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 text-xs font-bold text-red-600">N</div>
              </div>
            </div>
          </div>

          {/* Map title overlay */}
          <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
            <div className="text-sm font-semibold text-gray-800">Interactive District Map</div>
            <div className="text-xs text-gray-600">Click markers to explore schools</div>
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
};

export default TamilNaduMap;
