import { MapPin } from "lucide-react";
import { District } from "../data/schoolsData";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";

interface TamilNaduMapProps {
  selectedDistrict: District | null;
  onDistrictSelect: (district: District) => void;
  filteredDistricts: District[];
}

const TamilNaduMap = ({ selectedDistrict, onDistrictSelect, filteredDistricts }: TamilNaduMapProps) => {
  // More realistic district boundaries based on actual Tamil Nadu geography
  const districtBoundaries = [
    // Northern districts
    { id: 1, name: "Chennai", path: "M380,160 L420,155 L425,180 L415,200 L390,205 L375,185 Z", schools: 2500, labelX: 400, labelY: 175 },
    { id: 8, name: "Vellore", path: "M340,120 L380,115 L385,145 L370,165 L345,160 L330,140 Z", schools: 1000, labelX: 360, labelY: 135 },
    { id: 17, name: "Tiruvannamalai", path: "M370,145 L410,140 L415,170 L400,190 L375,185 L360,165 Z", schools: 550, labelX: 390, labelY: 160 },
    { id: 18, name: "Dharmapuri", path: "M280,100 L320,95 L325,125 L310,145 L285,140 L270,120 Z", schools: 500, labelX: 300, labelY: 115 },
    { id: 21, name: "Krishnagiri", path: "M300,95 L340,90 L345,120 L330,140 L305,135 L290,115 Z", schools: 420, labelX: 320, labelY: 110 },
    { id: 34, name: "Ranipet", path: "M320,120 L360,115 L365,145 L350,165 L325,160 L310,140 Z", schools: 140, labelX: 340, labelY: 135 },
    { id: 35, name: "Tirupathur", path: "M290,115 L330,110 L335,140 L320,160 L295,155 L280,135 Z", schools: 120, labelX: 310, labelY: 130 },
    { id: 28, name: "Tiruvallur", path: "M360,140 L400,135 L405,165 L390,185 L365,180 L350,160 Z", schools: 260, labelX: 380, labelY: 155 },
    { id: 13, name: "Kanchipuram", path: "M380,180 L420,175 L425,205 L410,225 L385,220 L370,200 Z", schools: 750, labelX: 400, labelY: 195 },
    { id: 37, name: "Chengalpattu", path: "M400,200 L440,195 L445,225 L430,245 L405,240 L390,220 Z", schools: 80, labelX: 420, labelY: 215 },
    
    // Central districts
    { id: 5, name: "Salem", path: "M250,140 L290,135 L295,165 L280,185 L255,180 L240,160 Z", schools: 1300, labelX: 270, labelY: 155 },
    { id: 20, name: "Namakkal", path: "M270,160 L310,155 L315,185 L300,205 L275,200 L260,180 Z", schools: 450, labelX: 290, labelY: 175 },
    { id: 7, name: "Erode", path: "M200,160 L240,155 L245,185 L230,205 L205,200 L190,180 Z", schools: 1100, labelX: 220, labelY: 175 },
    { id: 23, name: "Tiruppur", path: "M180,180 L220,175 L225,205 L210,225 L185,220 L170,200 Z", schools: 380, labelX: 200, labelY: 195 },
    { id: 2, name: "Coimbatore", path: "M150,180 L190,175 L195,205 L180,225 L155,220 L140,200 Z", schools: 1800, labelX: 170, labelY: 195 },
    { id: 32, name: "The Nilgiris", path: "M120,160 L160,155 L165,185 L150,205 L125,200 L110,180 Z", schools: 180, labelX: 140, labelY: 175 },
    
    // Eastern districts
    { id: 14, name: "Villupuram", path: "M380,190 L420,185 L425,215 L410,235 L385,230 L370,210 Z", schools: 700, labelX: 400, labelY: 205 },
    { id: 33, name: "Kallakurichi", path: "M350,200 L390,195 L395,225 L380,245 L355,240 L340,220 Z", schools: 160, labelX: 370, labelY: 215 },
    { id: 12, name: "Cuddalore", path: "M400,220 L440,215 L445,245 L430,265 L405,260 L390,240 Z", schools: 800, labelX: 420, labelY: 235 },
    { id: 4, name: "Tiruchirappalli", path: "M290,220 L330,215 L335,245 L320,265 L295,260 L280,240 Z", schools: 1400, labelX: 310, labelY: 235 },
    { id: 24, name: "Karur", path: "M260,200 L300,195 L305,225 L290,245 L265,240 L250,220 Z", schools: 350, labelX: 280, labelY: 215 },
    { id: 31, name: "Perambalur", path: "M310,240 L350,235 L355,265 L340,285 L315,280 L300,260 Z", schools: 200, labelX: 330, labelY: 255 },
    { id: 30, name: "Ariyalur", path: "M330,260 L370,255 L375,285 L360,305 L335,300 L320,280 Z", schools: 220, labelX: 350, labelY: 275 },
    
    // Central-South districts
    { id: 11, name: "Thanjavur", path: "M340,280 L380,275 L385,305 L370,325 L345,320 L330,300 Z", schools: 850, labelX: 360, labelY: 295 },
    { id: 29, name: "Tiruvarur", path: "M370,300 L410,295 L415,325 L400,345 L375,340 L360,320 Z", schools: 240, labelX: 390, labelY: 315 },
    { id: 19, name: "Nagapattinam", path: "M400,320 L440,315 L445,345 L430,365 L405,360 L390,340 Z", schools: 480, labelX: 420, labelY: 335 },
    { id: 38, name: "Mayiladuthurai", path: "M380,340 L420,335 L425,365 L410,385 L385,380 L370,360 Z", schools: 60, labelX: 400, labelY: 355 },
    { id: 25, name: "Pudukkottai", path: "M310,300 L350,295 L355,325 L340,345 L315,340 L300,320 Z", schools: 320, labelX: 330, labelY: 315 },
    
    // Southern districts
    { id: 10, name: "Dindigul", path: "M240,260 L280,255 L285,285 L270,305 L245,300 L230,280 Z", schools: 900, labelX: 260, labelY: 275 },
    { id: 26, name: "Theni", path: "M200,280 L240,275 L245,305 L230,325 L205,320 L190,300 Z", schools: 300, labelX: 220, labelY: 295 },
    { id: 3, name: "Madurai", path: "M260,300 L300,295 L305,325 L290,345 L265,340 L250,320 Z", schools: 1600, labelX: 280, labelY: 315 },
    { id: 15, name: "Sivaganga", path: "M300,340 L340,335 L345,365 L330,385 L305,380 L290,360 Z", schools: 650, labelX: 320, labelY: 355 },
    { id: 22, name: "Ramanathapuram", path: "M340,360 L380,355 L385,385 L370,405 L345,400 L330,380 Z", schools: 400, labelX: 360, labelY: 375 },
    { id: 16, name: "Virudhunagar", path: "M260,340 L300,335 L305,365 L290,385 L265,380 L250,360 Z", schools: 600, labelX: 280, labelY: 355 },
    { id: 6, name: "Tirunelveli", path: "M220,360 L260,355 L265,385 L250,405 L225,400 L210,380 Z", schools: 1200, labelX: 240, labelY: 375 },
    { id: 36, name: "Tenkasi", path: "M200,380 L240,375 L245,405 L230,425 L205,420 L190,400 Z", schools: 100, labelX: 220, labelY: 395 },
    { id: 9, name: "Thoothukudi", path: "M240,400 L280,395 L285,425 L270,445 L245,440 L230,420 Z", schools: 950, labelX: 260, labelY: 415 },
    { id: 27, name: "Kanyakumari", path: "M180,420 L220,415 L225,445 L210,465 L185,460 L170,440 Z", schools: 280, labelX: 200, labelY: 435 }
  ];

  // Tamil Nadu state border outline
  const tamilNaduBorder = "M110,180 L120,160 L160,155 L165,185 L150,205 L125,200 L110,180 M280,100 L320,95 L340,90 L380,115 L420,155 L445,225 L430,245 L445,345 L430,365 L425,365 L410,385 L385,380 L370,360 L345,400 L330,380 L305,365 L290,385 L265,380 L250,360 L225,400 L210,380 L205,420 L190,400 L170,440 L185,460 L210,465 L225,445 L280,395 L285,425 L270,445 L245,440 L230,420 L240,400 L280,395 L370,405 L385,385 L380,355 L340,360 L330,380 L345,400 L370,405 L400,345 L415,325 L440,315 L445,345 L440,195 L425,180 L420,155 L380,115 L340,90 L300,95 L280,100 L270,120 L240,160 L190,180 L140,200 L110,180 Z";

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
              viewBox="0 0 600 500"
              className="w-full h-full"
              preserveAspectRatio="xMidYMid meet"
            >
              {/* Tamil Nadu State Border */}
              <path
                d={tamilNaduBorder}
                fill="none"
                stroke="#1e40af"
                strokeWidth="3"
                strokeDasharray="none"
                className="pointer-events-none"
                style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))' }}
              />

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
