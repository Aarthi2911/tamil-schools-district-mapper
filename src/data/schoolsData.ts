
export interface District {
  id: number;
  name: string;
  totalSchools: number;
  governmentSchools: number;
  privateSchools: number;
  aidedSchools: number;
  primarySchools: number;
  totalStudents: number;
  literacyRate: number;
}

export const schoolsData: District[] = [
  {
    id: 1,
    name: "Chennai",
    totalSchools: 2500,
    governmentSchools: 800,
    privateSchools: 1200,
    aidedSchools: 500,
    primarySchools: 1000,
    totalStudents: 450000,
    literacyRate: 90.2
  },
  {
    id: 2,
    name: "Coimbatore",
    totalSchools: 1800,
    governmentSchools: 600,
    privateSchools: 900,
    aidedSchools: 300,
    primarySchools: 720,
    totalStudents: 320000,
    literacyRate: 85.4
  },
  {
    id: 3,
    name: "Madurai",
    totalSchools: 1600,
    governmentSchools: 700,
    privateSchools: 650,
    aidedSchools: 250,
    primarySchools: 640,
    totalStudents: 280000,
    literacyRate: 82.3
  },
  {
    id: 4,
    name: "Tiruchirappalli",
    totalSchools: 1400,
    governmentSchools: 620,
    privateSchools: 550,
    aidedSchools: 230,
    primarySchools: 560,
    totalStudents: 245000,
    literacyRate: 84.1
  },
  {
    id: 5,
    name: "Salem",
    totalSchools: 1300,
    governmentSchools: 580,
    privateSchools: 520,
    aidedSchools: 200,
    primarySchools: 520,
    totalStudents: 230000,
    literacyRate: 79.8
  },
  {
    id: 6,
    name: "Tirunelveli",
    totalSchools: 1200,
    governmentSchools: 550,
    privateSchools: 450,
    aidedSchools: 200,
    primarySchools: 480,
    totalStudents: 210000,
    literacyRate: 81.5
  },
  {
    id: 7,
    name: "Erode",
    totalSchools: 1100,
    governmentSchools: 480,
    privateSchools: 420,
    aidedSchools: 200,
    primarySchools: 440,
    totalStudents: 195000,
    literacyRate: 80.7
  },
  {
    id: 8,
    name: "Vellore",
    totalSchools: 1000,
    governmentSchools: 450,
    privateSchools: 400,
    aidedSchools: 150,
    primarySchools: 400,
    totalStudents: 180000,
    literacyRate: 78.9
  },
  {
    id: 9,
    name: "Thoothukudi",
    totalSchools: 950,
    governmentSchools: 420,
    privateSchools: 380,
    aidedSchools: 150,
    primarySchools: 380,
    totalStudents: 170000,
    literacyRate: 83.2
  },
  {
    id: 10,
    name: "Dindigul",
    totalSchools: 900,
    governmentSchools: 400,
    privateSchools: 350,
    aidedSchools: 150,
    primarySchools: 360,
    totalStudents: 160000,
    literacyRate: 77.5
  },
  {
    id: 11,
    name: "Thanjavur",
    totalSchools: 850,
    governmentSchools: 380,
    privateSchools: 320,
    aidedSchools: 150,
    primarySchools: 340,
    totalStudents: 150000,
    literacyRate: 82.6
  },
  {
    id: 12,
    name: "Cuddalore",
    totalSchools: 800,
    governmentSchools: 360,
    privateSchools: 300,
    aidedSchools: 140,
    primarySchools: 320,
    totalStudents: 140000,
    literacyRate: 79.3
  },
  {
    id: 13,
    name: "Kanchipuram",
    totalSchools: 750,
    governmentSchools: 340,
    privateSchools: 280,
    aidedSchools: 130,
    primarySchools: 300,
    totalStudents: 135000,
    literacyRate: 85.8
  },
  {
    id: 14,
    name: "Villupuram",
    totalSchools: 700,
    governmentSchools: 320,
    privateSchools: 260,
    aidedSchools: 120,
    primarySchools: 280,
    totalStudents: 125000,
    literacyRate: 75.4
  },
  {
    id: 15,
    name: "Sivaganga",
    totalSchools: 650,
    governmentSchools: 300,
    privateSchools: 240,
    aidedSchools: 110,
    primarySchools: 260,
    totalStudents: 115000,
    literacyRate: 76.8
  },
  {
    id: 16,
    name: "Virudhunagar",
    totalSchools: 600,
    governmentSchools: 280,
    privateSchools: 220,
    aidedSchools: 100,
    primarySchools: 240,
    totalStudents: 105000,
    literacyRate: 78.2
  },
  {
    id: 17,
    name: "Tiruvannamalai",
    totalSchools: 550,
    governmentSchools: 260,
    privateSchools: 200,
    aidedSchools: 90,
    primarySchools: 220,
    totalStudents: 98000,
    literacyRate: 74.9
  },
  {
    id: 18,
    name: "Dharmapuri",
    totalSchools: 500,
    governmentSchools: 240,
    privateSchools: 180,
    aidedSchools: 80,
    primarySchools: 200,
    totalStudents: 90000,
    literacyRate: 73.1
  },
  {
    id: 19,
    name: "Nagapattinam",
    totalSchools: 480,
    governmentSchools: 230,
    privateSchools: 170,
    aidedSchools: 80,
    primarySchools: 192,
    totalStudents: 85000,
    literacyRate: 80.4
  },
  {
    id: 20,
    name: "Namakkal",
    totalSchools: 450,
    governmentSchools: 220,
    privateSchools: 160,
    aidedSchools: 70,
    primarySchools: 180,
    totalStudents: 80000,
    literacyRate: 78.6
  },
  {
    id: 21,
    name: "Krishnagiri",
    totalSchools: 420,
    governmentSchools: 200,
    privateSchools: 150,
    aidedSchools: 70,
    primarySchools: 168,
    totalStudents: 75000,
    literacyRate: 76.3
  },
  {
    id: 22,
    name: "Ramanathapuram",
    totalSchools: 400,
    governmentSchools: 190,
    privateSchools: 140,
    aidedSchools: 70,
    primarySchools: 160,
    totalStudents: 70000,
    literacyRate: 74.7
  },
  {
    id: 23,
    name: "Tiruppur",
    totalSchools: 380,
    governmentSchools: 180,
    privateSchools: 130,
    aidedSchools: 70,
    primarySchools: 152,
    totalStudents: 68000,
    literacyRate: 79.1
  },
  {
    id: 24,
    name: "Karur",
    totalSchools: 350,
    governmentSchools: 170,
    privateSchools: 120,
    aidedSchools: 60,
    primarySchools: 140,
    totalStudents: 62000,
    literacyRate: 75.8
  },
  {
    id: 25,
    name: "Pudukkottai",
    totalSchools: 320,
    governmentSchools: 160,
    privateSchools: 110,
    aidedSchools: 50,
    primarySchools: 128,
    totalStudents: 58000,
    literacyRate: 77.2
  },
  {
    id: 26,
    name: "Theni",
    totalSchools: 300,
    governmentSchools: 150,
    privateSchools: 100,
    aidedSchools: 50,
    primarySchools: 120,
    totalStudents: 55000,
    literacyRate: 76.9
  },
  {
    id: 27,
    name: "Kanyakumari",
    totalSchools: 280,
    governmentSchools: 140,
    privateSchools: 95,
    aidedSchools: 45,
    primarySchools: 112,
    totalStudents: 52000,
    literacyRate: 91.8
  },
  {
    id: 28,
    name: "Tiruvallur",
    totalSchools: 260,
    governmentSchools: 130,
    privateSchools: 90,
    aidedSchools: 40,
    primarySchools: 104,
    totalStudents: 48000,
    literacyRate: 84.5
  },
  {
    id: 29,
    name: "Tiruvarur",
    totalSchools: 240,
    governmentSchools: 120,
    privateSchools: 85,
    aidedSchools: 35,
    primarySchools: 96,
    totalStudents: 45000,
    literacyRate: 81.3
  },
  {
    id: 30,
    name: "Ariyalur",
    totalSchools: 220,
    governmentSchools: 110,
    privateSchools: 80,
    aidedSchools: 30,
    primarySchools: 88,
    totalStudents: 42000,
    literacyRate: 79.4
  },
  {
    id: 31,
    name: "Perambalur",
    totalSchools: 200,
    governmentSchools: 100,
    privateSchools: 70,
    aidedSchools: 30,
    primarySchools: 80,
    totalStudents: 38000,
    literacyRate: 78.1
  },
  {
    id: 32,
    name: "The Nilgiris",
    totalSchools: 180,
    governmentSchools: 90,
    privateSchools: 65,
    aidedSchools: 25,
    primarySchools: 72,
    totalStudents: 35000,
    literacyRate: 85.2
  },
  {
    id: 33,
    name: "Kallakurichi",
    totalSchools: 160,
    governmentSchools: 80,
    privateSchools: 55,
    aidedSchools: 25,
    primarySchools: 64,
    totalStudents: 32000,
    literacyRate: 72.6
  },
  {
    id: 34,
    name: "Ranipet",
    totalSchools: 140,
    governmentSchools: 70,
    privateSchools: 50,
    aidedSchools: 20,
    primarySchools: 56,
    totalStudents: 28000,
    literacyRate: 77.8
  },
  {
    id: 35,
    name: "Tirupathur",
    totalSchools: 120,
    governmentSchools: 60,
    privateSchools: 45,
    aidedSchools: 15,
    primarySchools: 48,
    totalStudents: 25000,
    literacyRate: 75.4
  },
  {
    id: 36,
    name: "Tenkasi",
    totalSchools: 100,
    governmentSchools: 50,
    privateSchools: 35,
    aidedSchools: 15,
    primarySchools: 40,
    totalStudents: 22000,
    literacyRate: 78.9
  },
  {
    id: 37,
    name: "Chengalpattu",
    totalSchools: 80,
    governmentSchools: 40,
    privateSchools: 30,
    aidedSchools: 10,
    primarySchools: 32,
    totalStudents: 18000,
    literacyRate: 86.3
  },
  {
    id: 38,
    name: "Mayiladuthurai",
    totalSchools: 60,
    governmentSchools: 30,
    privateSchools: 22,
    aidedSchools: 8,
    primarySchools: 24,
    totalStudents: 15000,
    literacyRate: 83.7
  }
];
