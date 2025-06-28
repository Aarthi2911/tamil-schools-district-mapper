
import { MapPin } from "lucide-react";
import { District } from "../data/schoolsData";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";

interface TamilNaduMapProps {
  selectedDistrict: District | null;
  onDistrictSelect: (district: District) => void;
  filteredDistricts: District[];
}

const TamilNaduMap = ({ selectedDistrict, onDistrictSelect, filteredDistricts }: TamilNaduMapProps) => {
  // District boundaries as SVG paths (simplified representation) with label positions
  const districtBoundaries = [
    { id: 1, name: "Chennai", path: "M320,180 L340,175 L350,190 L345,210 L325,215 L315,200 Z", schools: 2500, labelX: 330, labelY: 195 },
    { id: 2, name: "Coimbatore", path: "M120,200 L160,190 L170,220 L150,240 L110,235 L100,210 Z", schools: 1800, labelX: 135, labelY: 215 },
    { id: 3, name: "Madurai", path: "M200,320 L240,310 L250,340 L230,360 L190,355 L180,330 Z", schools: 1600, labelX: 215, labelY: 335 },
    { id: 4, name: "Tiruchirappalli", path: "M220,250 L260,240 L270,270 L250,290 L210,285 L200,260 Z", schools: 1400, labelX: 235, labelY: 265 },
    { id: 5, name: "Salem", path: "M170,170 L210,160 L220,190 L200,210 L160,205 L150,180 Z", schools: 1300, labelX: 185, labelY: 185 },
    { id: 6, name: "Tirunelveli", path: "M170,420 L210,410 L220,440 L200,460 L160,455 L150,430 Z", schools: 1200, labelX: 185, labelY: 435 },
    { id: 7, name: "Erode", path: "M140,170 L180,160 L190,190 L170,210 L130,205 L120,180 Z", schools: 1100, labelX: 155, labelY: 185 },
    { id: 8, name: "Vellore", path: "M240,120 L280,110 L290,140 L270,160 L230,155 L220,130 Z", schools: 1000, labelX: 255, labelY: 135 },
    { id: 9, name: "Thoothukudi", path: "M190,390 L230,380 L240,410 L220,430 L180,425 L170,400 Z", schools: 950, labelX: 205, labelY: 405 },
    { id: 10, name: "Dindigul", path: "M180,270 L220,260 L230,290 L210,310 L170,305 L160,280 Z", schools: 900, labelX: 195, labelY: 285 },
    { id: 11, name: "Thanjavur", path: "M240,270 L280,260 L290,290 L270,310 L230,305 L220,280 Z", schools: 850, labelX: 255, labelY: 285 },
    { id: 12, name: "Cuddalore", path: "M290,190 L330,180 L340,210 L320,230 L280,225 L270,200 Z", schools: 800, labelX: 305, labelY: 205 },
    { id: 13, name: "Kanchipuram", path: "M280,220 L320,210 L330,240 L310,260 L270,255 L260,230 Z", schools: 750, labelX: 295, labelY: 235 },
    { id: 14, name: "Villupuram", path: "M280,180 L320,170 L330,200 L310,220 L270,215 L260,190 Z", schools: 700, labelX: 295, labelY: 195 },
    { id: 15, name: "Sivaganga", path: "M210,330 L250,320 L260,350 L240,370 L200,365 L190,340 Z", schools: 650, labelX: 225, labelY: 345 },
    { id: 16, name: "Virudhunagar", path: "M200,370 L240,360 L250,390 L230,410 L190,405 L180,380 Z", schools: 600, labelX: 215, labelY: 385 },
    { id: 17, name: "Tiruvannamalai", path: "M260,150 L300,140 L310,170 L290,190 L250,185 L240,160 Z", schools: 550, labelX: 275, labelY: 165 },
    { id: 18, name: "Dharmapuri", path: "M210,130 L250,120 L260,150 L240,170 L200,165 L190,140 Z", schools: 500, labelX: 225, labelY: 145 },
    { id: 19, name: "Nagapattinam", path: "M250,280 L290,270 L300,300 L280,320 L240,315 L230,290 Z", schools: 480, labelX: 265, labelY: 295 },
    { id: 20, name: "Namakkal", path: "M180,180 L220,170 L230,200 L210,220 L170,215 L160,190 Z", schools: 450, labelX: 195, labelY: 195 },
    { id: 21, name: "Krishnagiri", path: "M200,120 L240,110 L250,140 L230,160 L190,155 L180,130 Z", schools: 420, labelX: 215, labelY: 135 },
    { id: 22, name: "Ramanathapuram", path: "M230,370 L270,360 L280,390 L260,410 L220,405 L210,380 Z", schools: 400, labelX: 245, labelY: 385 },
    { id: 23, name: "Tiruppur", path: "M130,180 L170,170 L180,200 L160,220 L120,215 L110,190 Z", schools: 380, labelX: 145, labelY: 195 },
    { id: 24, name: "Karur", path: "M190,220 L230,210 L240,240 L220,260 L180,255 L170,230 Z", schools: 350, labelX: 205, labelY: 235 },
    { id: 25, name: "Pudukkottai", path: "M230,300 L270,290 L280,320 L260,340 L220,335 L210,310 Z", schools: 320, labelX: 245, labelY: 315 },
    { id: 26, name: "Theni", path: "M170,300 L210,290 L220,320 L200,340 L160,335 L150,310 Z", schools: 300, labelX: 185, labelY: 315 },
    { id: 27, name: "Kanyakumari", path: "M150,470 L190,460 L200,490 L180,510 L140,505 L130,480 Z", schools: 280, labelX: 165, labelY: 485 },
    { id: 28, name: "Tiruvallur", path: "M300,190 L340,180 L350,210 L330,230 L290,225 L280,200 Z", schools: 260, labelX: 315, labelY: 205 },
    { id: 29, name: "Tiruvarur", path: "M250,290 L290,280 L300,310 L280,330 L240,325 L230,300 Z", schools: 240, labelX: 265, labelY: 305 },
    { id: 30, name: "Ariyalur", path: "M230,230 L270,220 L280,250 L260,270 L220,265 L210,240 Z", schools: 220, labelX: 245, labelY: 245 },
    { id: 31, name: "Perambalur", path: "M220,220 L260,210 L270,240 L250,260 L210,255 L200,230 Z", schools: 200, labelX: 235, labelY: 235 },
    { id: 32, name: "The Nilgiris", path: "M110,140 L150,130 L160,160 L140,180 L100,175 L90,150 Z", schools: 180, labelX: 125, labelY: 155 },
    { id: 33, name: "Kallakurichi", path: "M270,170 L310,160 L320,190 L300,210 L260,205 L250,180 Z", schools: 160, labelX: 285, labelY: 185 },
    { id: 34, name: "Ranipet", path: "M250,130 L290,120 L300,150 L280,170 L240,165 L230,140 Z", schools: 140, labelX: 265, labelY: 145 },
    { id: 35, name: "Tirupathur", path: "M230,140 L270,130 L280,160 L260,180 L220,175 L210,150 Z", schools: 120, labelX: 245, labelY: 155 },
    { id: 36, name: "Tenkasi", path: "M180,400 L220,390 L230,420 L210,440 L170,435 L160,410 Z", schools: 100, labelX: 195, labelY: 415 },
    { id: 37, name: "Chengalpattu", path: "M290,230 L330,220 L340,250 L320,270 L280,265 L270,240 Z", schools: 80, labelX: 305, labelY: 245 },
    { id: 38, name: "Mayiladuthurai", path: "M250,270 L290,260 L300,290 L280,310 L240,305 L230,280 Z", schools: 60, labelX: 265, labelY: 285 }
  ];

  const getDistrictData = (boundaryName: string) => {
    return filteredDistricts.find(d => d.name === boundaryName);
  };

  const getFillColor = (schools: number, isSelected: boolean, isFiltered: boolean) => {
    if (!isFiltered && filteredDistricts.length < 38) return "#f3f4f6";
    if (isSelected) return "#3b82f6";
    if (schools >= 1500) return "#dc2626";
    if (schools >= 1000) return "#ea580c";
    if (schools >= 500) return "#eab308";
    if (schools >= 200) return "#2563eb";
    return "#16a34a";
  };

  const getStrokeColor = (isSelected: boolean) => {
    return isSelected ? "#1e40af" : "#6b7280";
  };

  const getTextColor = (schools: number, isSelected: boolean) => {
    if (isSelected) return "#ffffff";
    if (schools >= 1000) return "#ffffff";
    return "#000000";
  };

  return (
    <TooltipProvider>
      <div className="relative">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Tamil Nadu Districts Map</h2>
        
        {/* Map Container */}
        <div className="relative bg-gradient-to-br from-blue-100 to-green-100 rounded-lg p-8 overflow-hidden">
          {/* SVG Map with District Boundaries */}
          <div className="relative w-full h-96 bg-gradient-to-br from-emerald-50 to-blue-50 rounded-lg border-2 border-blue-200 shadow-inner">
            <svg
              viewBox="0 0 500 600"
              className="w-full h-full"
              preserveAspectRatio="xMidYMid meet"
            >
              {/* District boundaries */}
              {districtBoundaries.map((boundary) => {
                const districtData = getDistrictData(boundary.name);
                const isSelected = selectedDistrict?.name === boundary.name;
                const isFiltered = filteredDistricts.some(d => d.name === boundary.name);
                
                return (
                  <g key={boundary.id}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <path
                          d={boundary.path}
                          fill={getFillColor(boundary.schools, isSelected, isFiltered)}
                          stroke={getStrokeColor(isSelected)}
                          strokeWidth={isSelected ? "2" : "1"}
                          className="cursor-pointer transition-all duration-300 hover:opacity-80"
                          onClick={() => districtData && onDistrictSelect(districtData)}
                        />
                      </TooltipTrigger>
                      <TooltipContent>
                        <div className="text-center">
                          <div className="font-semibold text-gray-800">{boundary.name}</div>
                          <div className="text-sm text-blue-600">{boundary.schools} schools</div>
                          {districtData && (
                            <div className="text-xs text-gray-600 mt-1">
                              {districtData.totalStudents?.toLocaleString()} students
                            </div>
                          )}
                        </div>
                      </TooltipContent>
                    </Tooltip>
                    
                    {/* District Name Label */}
                    <text
                      x={boundary.labelX}
                      y={boundary.labelY}
                      textAnchor="middle"
                      className="pointer-events-none select-none"
                      style={{
                        fontSize: boundary.name.length > 12 ? '6px' : boundary.name.length > 8 ? '7px' : '8px',
                        fontWeight: 'bold',
                        fill: getTextColor(boundary.schools, isSelected)
                      }}
                    >
                      {boundary.name}
                    </text>
                  </g>
                );
              })}
            </svg>

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
            <div className="text-xs text-gray-600">Click districts to explore schools</div>
          </div>
        </div>

        {/* Legend */}
        <div className="mt-4 bg-white rounded-lg p-4 shadow-sm">
          <h3 className="text-sm font-semibold text-gray-800 mb-2">School Count Legend</h3>
          <div className="flex flex-wrap gap-4 text-xs">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-red-600 rounded"></div>
              <span>1500+ schools</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-orange-600 rounded"></div>
              <span>1000-1499 schools</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-yellow-500 rounded"></div>
              <span>500-999 schools</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-blue-600 rounded"></div>
              <span>200-499 schools</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-green-600 rounded"></div>
              <span>Under 200 schools</span>
            </div>
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
};

export default TamilNaduMap;
