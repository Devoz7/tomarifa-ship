// Base de données complète des aéroports mondiaux
export const airports = [
  // France
  {
    code: "CDG",
    name: "Charles de Gaulle",
    city: "Paris",
    country: "France",
    cityCode: "PAR",
  },
  {
    code: "ORY",
    name: "Orly",
    city: "Paris",
    country: "France",
    cityCode: "PAR",
  },
  { code: "LYS", name: "Lyon-Saint Exupéry", city: "Lyon", country: "France" },
  {
    code: "MRS",
    name: "Marseille Provence",
    city: "Marseille",
    country: "France",
  },
  { code: "NCE", name: "Nice Côte d'Azur", city: "Nice", country: "France" },
  {
    code: "TLS",
    name: "Toulouse-Blagnac",
    city: "Toulouse",
    country: "France",
  },
  {
    code: "BOD",
    name: "Bordeaux-Mérignac",
    city: "Bordeaux",
    country: "France",
  },
  { code: "NTE", name: "Nantes Atlantique", city: "Nantes", country: "France" },
  { code: "SXB", name: "Strasbourg", city: "Strasbourg", country: "France" },
  { code: "LIL", name: "Lille-Lesquin", city: "Lille", country: "France" },
  { code: "BIQ", name: "Biarritz", city: "Biarritz", country: "France" },
  { code: "CLY", name: "Calvi", city: "Calvi", country: "France" },
  { code: "AJA", name: "Ajaccio", city: "Ajaccio", country: "France" },
  { code: "FSC", name: "Figari", city: "Figari", country: "France" },
  {
    code: "BVA",
    name: "Beauvais",
    city: "Paris",
    country: "France",
    cityCode: "PAR",
  },

  // États-Unis
  {
    code: "JFK",
    name: "John F. Kennedy",
    city: "New York",
    country: "États-Unis",
    cityCode: "NYC",
  },
  {
    code: "LGA",
    name: "LaGuardia",
    city: "New York",
    country: "États-Unis",
    cityCode: "NYC",
  },
  {
    code: "EWR",
    name: "Newark Liberty",
    city: "New York",
    country: "États-Unis",
    cityCode: "NYC",
  },
  {
    code: "LAX",
    name: "Los Angeles International",
    city: "Los Angeles",
    country: "États-Unis",
  },
  {
    code: "ORD",
    name: "O'Hare International",
    city: "Chicago",
    country: "États-Unis",
  },
  {
    code: "MIA",
    name: "Miami International",
    city: "Miami",
    country: "États-Unis",
  },
  {
    code: "SFO",
    name: "San Francisco International",
    city: "San Francisco",
    country: "États-Unis",
  },
  {
    code: "LAS",
    name: "McCarran International",
    city: "Las Vegas",
    country: "États-Unis",
  },
  {
    code: "SEA",
    name: "Seattle-Tacoma",
    city: "Seattle",
    country: "États-Unis",
  },
  {
    code: "DEN",
    name: "Denver International",
    city: "Denver",
    country: "États-Unis",
  },
  {
    code: "ATL",
    name: "Hartsfield-Jackson",
    city: "Atlanta",
    country: "États-Unis",
  },
  {
    code: "DFW",
    name: "Dallas/Fort Worth",
    city: "Dallas",
    country: "États-Unis",
  },
  {
    code: "PHX",
    name: "Phoenix Sky Harbor",
    city: "Phoenix",
    country: "États-Unis",
  },
  { code: "IAH", name: "George Bush", city: "Houston", country: "États-Unis" },
  {
    code: "MSP",
    name: "Minneapolis-St. Paul",
    city: "Minneapolis",
    country: "États-Unis",
  },
  {
    code: "DTW",
    name: "Detroit Metropolitan",
    city: "Detroit",
    country: "États-Unis",
  },
  {
    code: "BOS",
    name: "Logan International",
    city: "Boston",
    country: "États-Unis",
  },
  {
    code: "FLL",
    name: "Fort Lauderdale",
    city: "Fort Lauderdale",
    country: "États-Unis",
  },
  {
    code: "MCO",
    name: "Orlando International",
    city: "Orlando",
    country: "États-Unis",
  },
  {
    code: "SAN",
    name: "San Diego International",
    city: "San Diego",
    country: "États-Unis",
  },

  // Royaume-Uni
  {
    code: "LHR",
    name: "Heathrow",
    city: "Londres",
    country: "Royaume-Uni",
    cityCode: "LON",
  },
  {
    code: "LGW",
    name: "Gatwick",
    city: "Londres",
    country: "Royaume-Uni",
    cityCode: "LON",
  },
  {
    code: "STN",
    name: "Stansted",
    city: "Londres",
    country: "Royaume-Uni",
    cityCode: "LON",
  },
  {
    code: "LTN",
    name: "Luton",
    city: "Londres",
    country: "Royaume-Uni",
    cityCode: "LON",
  },
  {
    code: "LCY",
    name: "London City",
    city: "Londres",
    country: "Royaume-Uni",
    cityCode: "LON",
  },
  {
    code: "MAN",
    name: "Manchester",
    city: "Manchester",
    country: "Royaume-Uni",
  },
  { code: "EDI", name: "Edinburgh", city: "Édimbourg", country: "Royaume-Uni" },
  { code: "GLA", name: "Glasgow", city: "Glasgow", country: "Royaume-Uni" },
  {
    code: "BHX",
    name: "Birmingham",
    city: "Birmingham",
    country: "Royaume-Uni",
  },
  { code: "LPL", name: "Liverpool", city: "Liverpool", country: "Royaume-Uni" },
  { code: "BRS", name: "Bristol", city: "Bristol", country: "Royaume-Uni" },

  // Allemagne
  {
    code: "FRA",
    name: "Frankfurt am Main",
    city: "Francfort",
    country: "Allemagne",
  },
  { code: "MUC", name: "Munich", city: "Munich", country: "Allemagne" },
  {
    code: "BER",
    name: "Berlin Brandenburg",
    city: "Berlin",
    country: "Allemagne",
  },
  { code: "DUS", name: "Düsseldorf", city: "Düsseldorf", country: "Allemagne" },
  { code: "HAM", name: "Hamburg", city: "Hambourg", country: "Allemagne" },
  { code: "CGN", name: "Cologne Bonn", city: "Cologne", country: "Allemagne" },
  { code: "STR", name: "Stuttgart", city: "Stuttgart", country: "Allemagne" },
  { code: "HAJ", name: "Hannover", city: "Hanovre", country: "Allemagne" },

  // Espagne
  { code: "MAD", name: "Madrid-Barajas", city: "Madrid", country: "Espagne" },
  {
    code: "BCN",
    name: "Barcelona-El Prat",
    city: "Barcelone",
    country: "Espagne",
  },
  { code: "PMI", name: "Palma de Mallorca", city: "Palma", country: "Espagne" },
  {
    code: "AGP",
    name: "Málaga-Costa del Sol",
    city: "Málaga",
    country: "Espagne",
  },
  { code: "SVQ", name: "Sevilla", city: "Séville", country: "Espagne" },
  { code: "VLC", name: "Valencia", city: "Valence", country: "Espagne" },
  { code: "BIO", name: "Bilbao", city: "Bilbao", country: "Espagne" },
  { code: "SDR", name: "Santander", city: "Santander", country: "Espagne" },
  { code: "LPA", name: "Las Palmas", city: "Las Palmas", country: "Espagne" },
  { code: "TFS", name: "Tenerife Sur", city: "Tenerife", country: "Espagne" },
  { code: "ACE", name: "Lanzarote", city: "Lanzarote", country: "Espagne" },
  { code: "IBZ", name: "Ibiza", city: "Ibiza", country: "Espagne" },

  // Italie
  {
    code: "FCO",
    name: "Leonardo da Vinci",
    city: "Rome",
    country: "Italie",
    cityCode: "ROM",
  },
  {
    code: "CIA",
    name: "Ciampino",
    city: "Rome",
    country: "Italie",
    cityCode: "ROM",
  },
  {
    code: "MXP",
    name: "Malpensa",
    city: "Milan",
    country: "Italie",
    cityCode: "MIL",
  },
  {
    code: "LIN",
    name: "Linate",
    city: "Milan",
    country: "Italie",
    cityCode: "MIL",
  },
  {
    code: "BGY",
    name: "Bergamo",
    city: "Milan",
    country: "Italie",
    cityCode: "MIL",
  },
  { code: "VCE", name: "Marco Polo", city: "Venise", country: "Italie" },
  { code: "NAP", name: "Naples", city: "Naples", country: "Italie" },
  { code: "FLR", name: "Florence", city: "Florence", country: "Italie" },
  { code: "BLQ", name: "Bologna", city: "Bologne", country: "Italie" },
  { code: "CTA", name: "Catania", city: "Catane", country: "Italie" },
  { code: "PMO", name: "Palermo", city: "Palerme", country: "Italie" },
  { code: "BRI", name: "Bari", city: "Bari", country: "Italie" },
  { code: "TRN", name: "Turin", city: "Turin", country: "Italie" },

  // Pays-Bas
  { code: "AMS", name: "Schiphol", city: "Amsterdam", country: "Pays-Bas" },
  { code: "RTM", name: "Rotterdam", city: "Rotterdam", country: "Pays-Bas" },
  { code: "EIN", name: "Eindhoven", city: "Eindhoven", country: "Pays-Bas" },

  // Belgique
  { code: "BRU", name: "Brussels", city: "Bruxelles", country: "Belgique" },
  { code: "CRL", name: "Charleroi", city: "Charleroi", country: "Belgique" },
  { code: "ANR", name: "Antwerp", city: "Anvers", country: "Belgique" },

  // Suisse
  { code: "ZUR", name: "Zurich", city: "Zurich", country: "Suisse" },
  { code: "GVA", name: "Geneva", city: "Genève", country: "Suisse" },
  { code: "BSL", name: "Basel", city: "Bâle", country: "Suisse" },
  { code: "BRN", name: "Bern", city: "Berne", country: "Suisse" },

  // Autriche
  {
    code: "VIE",
    name: "Vienna International",
    city: "Vienne",
    country: "Autriche",
  },
  { code: "SZG", name: "Salzburg", city: "Salzbourg", country: "Autriche" },
  { code: "INN", name: "Innsbruck", city: "Innsbruck", country: "Autriche" },

  // Canada
  {
    code: "YYZ",
    name: "Pearson International",
    city: "Toronto",
    country: "Canada",
  },
  {
    code: "YUL",
    name: "Pierre Elliott Trudeau",
    city: "Montréal",
    country: "Canada",
  },
  {
    code: "YVR",
    name: "Vancouver International",
    city: "Vancouver",
    country: "Canada",
  },
  {
    code: "YYC",
    name: "Calgary International",
    city: "Calgary",
    country: "Canada",
  },
  {
    code: "YOW",
    name: "Ottawa Macdonald-Cartier",
    city: "Ottawa",
    country: "Canada",
  },
  {
    code: "YHZ",
    name: "Halifax Stanfield",
    city: "Halifax",
    country: "Canada",
  },

  // Japon
  {
    code: "NRT",
    name: "Narita International",
    city: "Tokyo",
    country: "Japon",
    cityCode: "TYO",
  },
  {
    code: "HND",
    name: "Haneda",
    city: "Tokyo",
    country: "Japon",
    cityCode: "TYO",
  },
  {
    code: "KIX",
    name: "Kansai International",
    city: "Osaka",
    country: "Japon",
  },
  { code: "ITM", name: "Itami", city: "Osaka", country: "Japon" },
  { code: "NGO", name: "Chubu Centrair", city: "Nagoya", country: "Japon" },
  { code: "FUK", name: "Fukuoka", city: "Fukuoka", country: "Japon" },
  { code: "CTS", name: "New Chitose", city: "Sapporo", country: "Japon" },

  // Australie
  {
    code: "SYD",
    name: "Kingsford Smith",
    city: "Sydney",
    country: "Australie",
  },
  { code: "MEL", name: "Melbourne", city: "Melbourne", country: "Australie" },
  { code: "BNE", name: "Brisbane", city: "Brisbane", country: "Australie" },
  { code: "PER", name: "Perth", city: "Perth", country: "Australie" },
  { code: "ADL", name: "Adelaide", city: "Adélaïde", country: "Australie" },
  { code: "DRW", name: "Darwin", city: "Darwin", country: "Australie" },
  { code: "CNS", name: "Cairns", city: "Cairns", country: "Australie" },

  // Émirats Arabes Unis
  {
    code: "DXB",
    name: "Dubai International",
    city: "Dubaï",
    country: "Émirats Arabes Unis",
  },
  {
    code: "AUH",
    name: "Abu Dhabi International",
    city: "Abu Dhabi",
    country: "Émirats Arabes Unis",
  },
  {
    code: "SHJ",
    name: "Sharjah",
    city: "Sharjah",
    country: "Émirats Arabes Unis",
  },

  // Qatar
  { code: "DOH", name: "Hamad International", city: "Doha", country: "Qatar" },

  // Singapour
  { code: "SIN", name: "Changi", city: "Singapour", country: "Singapour" },

  // Corée du Sud
  {
    code: "ICN",
    name: "Incheon International",
    city: "Séoul",
    country: "Corée du Sud",
  },
  { code: "GMP", name: "Gimpo", city: "Séoul", country: "Corée du Sud" },
  { code: "PUS", name: "Busan", city: "Busan", country: "Corée du Sud" },

  // Chine
  { code: "PEK", name: "Beijing Capital", city: "Pékin", country: "Chine" },
  { code: "PKX", name: "Beijing Daxing", city: "Pékin", country: "Chine" },
  { code: "PVG", name: "Shanghai Pudong", city: "Shanghai", country: "Chine" },
  {
    code: "SHA",
    name: "Shanghai Hongqiao",
    city: "Shanghai",
    country: "Chine",
  },
  { code: "CAN", name: "Guangzhou Baiyun", city: "Canton", country: "Chine" },
  { code: "SZX", name: "Shenzhen Bao'an", city: "Shenzhen", country: "Chine" },
  { code: "CTU", name: "Chengdu Shuangliu", city: "Chengdu", country: "Chine" },
  { code: "XIY", name: "Xi'an Xianyang", city: "Xi'an", country: "Chine" },

  // Inde
  {
    code: "DEL",
    name: "Indira Gandhi International",
    city: "New Delhi",
    country: "Inde",
  },
  { code: "BOM", name: "Chhatrapati Shivaji", city: "Mumbai", country: "Inde" },
  {
    code: "BLR",
    name: "Kempegowda International",
    city: "Bangalore",
    country: "Inde",
  },
  {
    code: "MAA",
    name: "Chennai International",
    city: "Chennai",
    country: "Inde",
  },
  {
    code: "CCU",
    name: "Netaji Subhas Chandra Bose",
    city: "Kolkata",
    country: "Inde",
  },
  {
    code: "HYD",
    name: "Rajiv Gandhi International",
    city: "Hyderabad",
    country: "Inde",
  },
  {
    code: "AMD",
    name: "Sardar Vallabhbhai Patel",
    city: "Ahmedabad",
    country: "Inde",
  },
  { code: "GOI", name: "Goa International", city: "Goa", country: "Inde" },

  // Thaïlande
  { code: "BKK", name: "Suvarnabhumi", city: "Bangkok", country: "Thaïlande" },
  { code: "DMK", name: "Don Mueang", city: "Bangkok", country: "Thaïlande" },
  {
    code: "HKT",
    name: "Phuket International",
    city: "Phuket",
    country: "Thaïlande",
  },
  { code: "CNX", name: "Chiang Mai", city: "Chiang Mai", country: "Thaïlande" },
  { code: "USM", name: "Koh Samui", city: "Koh Samui", country: "Thaïlande" },

  // Indonésie - BALI ET AUTRES
  {
    code: "DPS",
    name: "Ngurah Rai International",
    city: "Denpasar",
    country: "Indonésie",
  }, // BALI
  {
    code: "CGK",
    name: "Soekarno-Hatta",
    city: "Jakarta",
    country: "Indonésie",
  },
  {
    code: "SUB",
    name: "Juanda International",
    city: "Surabaya",
    country: "Indonésie",
  },
  {
    code: "MLG",
    name: "Abdul Rachman Saleh",
    city: "Malang",
    country: "Indonésie",
  },
  {
    code: "YIA",
    name: "Yogyakarta International",
    city: "Yogyakarta",
    country: "Indonésie",
  },

  // Malaisie
  {
    code: "KUL",
    name: "Kuala Lumpur International",
    city: "Kuala Lumpur",
    country: "Malaisie",
  },
  {
    code: "SZB",
    name: "Sultan Abdul Aziz Shah",
    city: "Kuala Lumpur",
    country: "Malaisie",
  },
  {
    code: "PEN",
    name: "Penang International",
    city: "Penang",
    country: "Malaisie",
  },
  {
    code: "JHB",
    name: "Senai International",
    city: "Johor Bahru",
    country: "Malaisie",
  },

  // Philippines
  {
    code: "MNL",
    name: "Ninoy Aquino International",
    city: "Manille",
    country: "Philippines",
  },
  {
    code: "CEB",
    name: "Mactan-Cebu International",
    city: "Cebu",
    country: "Philippines",
  },
  {
    code: "DVO",
    name: "Francisco Bangoy International",
    city: "Davao",
    country: "Philippines",
  },
  {
    code: "ILO",
    name: "Iloilo International",
    city: "Iloilo",
    country: "Philippines",
  },

  // Vietnam
  {
    code: "SGN",
    name: "Tan Son Nhat",
    city: "Ho Chi Minh City",
    country: "Vietnam",
  },
  {
    code: "HAN",
    name: "Noi Bai International",
    city: "Hanoi",
    country: "Vietnam",
  },
  {
    code: "DAD",
    name: "Da Nang International",
    city: "Da Nang",
    country: "Vietnam",
  },

  // Brésil
  {
    code: "GRU",
    name: "São Paulo-Guarulhos",
    city: "São Paulo",
    country: "Brésil",
  },
  {
    code: "GIG",
    name: "Rio de Janeiro-Galeão",
    city: "Rio de Janeiro",
    country: "Brésil",
  },
  {
    code: "BSB",
    name: "Brasília International",
    city: "Brasília",
    country: "Brésil",
  },
  { code: "FOR", name: "Fortaleza", city: "Fortaleza", country: "Brésil" },
  { code: "SSA", name: "Salvador", city: "Salvador", country: "Brésil" },
  { code: "REC", name: "Recife", city: "Recife", country: "Brésil" },

  // Maroc
  { code: "CMN", name: "Mohammed V", city: "Casablanca", country: "Maroc" },
  {
    code: "RAK",
    name: "Marrakech Menara",
    city: "Marrakech",
    country: "Maroc",
  },
  { code: "FEZ", name: "Fès-Saïs", city: "Fès", country: "Maroc" },
  { code: "AGA", name: "Agadir Al Massira", city: "Agadir", country: "Maroc" },
  {
    code: "TNG",
    name: "Tanger Ibn Battouta",
    city: "Tanger",
    country: "Maroc",
  },

  // Tunisie
  { code: "TUN", name: "Tunis-Carthage", city: "Tunis", country: "Tunisie" },
  {
    code: "MIR",
    name: "Monastir Habib Bourguiba",
    city: "Monastir",
    country: "Tunisie",
  },
  { code: "DJE", name: "Djerba-Zarzis", city: "Djerba", country: "Tunisie" },
  { code: "SFA", name: "Sfax", city: "Sfax", country: "Tunisie" },

  // Algérie
  { code: "ALG", name: "Houari Boumediene", city: "Alger", country: "Algérie" },
  { code: "ORN", name: "Ahmed Ben Bella", city: "Oran", country: "Algérie" },
  { code: "CZL", name: "Constantine", city: "Constantine", country: "Algérie" },

  // Égypte
  {
    code: "CAI",
    name: "Cairo International",
    city: "Le Caire",
    country: "Égypte",
  },
  {
    code: "HRG",
    name: "Hurghada International",
    city: "Hurghada",
    country: "Égypte",
  },
  {
    code: "SSH",
    name: "Sharm el-Sheikh",
    city: "Sharm el-Sheikh",
    country: "Égypte",
  },
  {
    code: "LXR",
    name: "Luxor International",
    city: "Louxor",
    country: "Égypte",
  },

  // Turquie
  { code: "IST", name: "Istanbul", city: "Istanbul", country: "Turquie" },
  { code: "SAW", name: "Sabiha Gökçen", city: "Istanbul", country: "Turquie" },
  { code: "AYT", name: "Antalya", city: "Antalya", country: "Turquie" },
  { code: "ESB", name: "Esenboğa", city: "Ankara", country: "Turquie" },
  { code: "ADB", name: "Adnan Menderes", city: "Izmir", country: "Turquie" },
  { code: "BJV", name: "Bodrum", city: "Bodrum", country: "Turquie" },

  // Grèce
  {
    code: "ATH",
    name: "Athens International",
    city: "Athènes",
    country: "Grèce",
  },
  {
    code: "SKG",
    name: "Thessaloniki",
    city: "Thessalonique",
    country: "Grèce",
  },
  { code: "HER", name: "Heraklion", city: "Héraklion", country: "Grèce" },
  { code: "RHO", name: "Rhodes", city: "Rhodes", country: "Grèce" },
  { code: "CFU", name: "Corfu", city: "Corfou", country: "Grèce" },
  { code: "CHQ", name: "Chania", city: "La Canée", country: "Grèce" },
  { code: "JTR", name: "Santorini", city: "Santorin", country: "Grèce" },
  { code: "MJT", name: "Mytilene", city: "Mytilène", country: "Grèce" },

  // Portugal
  { code: "LIS", name: "Lisbon", city: "Lisbonne", country: "Portugal" },
  { code: "OPO", name: "Porto", city: "Porto", country: "Portugal" },
  { code: "FAO", name: "Faro", city: "Faro", country: "Portugal" },
  { code: "FNC", name: "Madeira", city: "Funchal", country: "Portugal" },
  { code: "TER", name: "Lajes", city: "Terceira", country: "Portugal" },

  // Russie - TBILISSI EST EN GÉORGIE MAIS AJOUTONS LES GRANDES VILLES RUSSES
  {
    code: "SVO",
    name: "Sheremetyevo",
    city: "Moscou",
    country: "Russie",
    cityCode: "MOW",
  },
  {
    code: "DME",
    name: "Domodedovo",
    city: "Moscou",
    country: "Russie",
    cityCode: "MOW",
  },
  {
    code: "VKO",
    name: "Vnukovo",
    city: "Moscou",
    country: "Russie",
    cityCode: "MOW",
  },
  {
    code: "LED",
    name: "Pulkovo",
    city: "Saint-Pétersbourg",
    country: "Russie",
  },
  { code: "KJA", name: "Emelyanovo", city: "Krasnoyarsk", country: "Russie" },
  { code: "SVX", name: "Koltsovo", city: "Ekaterinburg", country: "Russie" },
  { code: "NOZ", name: "Spichenkovo", city: "Novokuznetsk", country: "Russie" },

  // Géorgie - TBILISSI ICI !
  {
    code: "TBS",
    name: "Shota Rustaveli Tbilisi International",
    city: "Tbilissi",
    country: "Géorgie",
  }, // TBILISSI
  {
    code: "BUS",
    name: "Batumi International",
    city: "Batoumi",
    country: "Géorgie",
  },
  { code: "KUT", name: "Kopitnari", city: "Kutaisi", country: "Géorgie" },

  // Arménie
  {
    code: "EVN",
    name: "Zvartnots International",
    city: "Erevan",
    country: "Arménie",
  },

  // Azerbaïdjan
  {
    code: "BAK",
    name: "Heydar Aliyev International",
    city: "Bakou",
    country: "Azerbaïdjan",
  },

  // Mexique
  {
    code: "MEX",
    name: "Mexico City International",
    city: "Mexico",
    country: "Mexique",
  },
  {
    code: "CUN",
    name: "Cancún International",
    city: "Cancún",
    country: "Mexique",
  },
  { code: "GDL", name: "Guadalajara", city: "Guadalajara", country: "Mexique" },
  { code: "MTY", name: "Monterrey", city: "Monterrey", country: "Mexique" },
  {
    code: "PVR",
    name: "Puerto Vallarta",
    city: "Puerto Vallarta",
    country: "Mexique",
  },
  { code: "SJD", name: "Los Cabos", city: "Los Cabos", country: "Mexique" },

  // Argentine
  {
    code: "EZE",
    name: "Ezeiza International",
    city: "Buenos Aires",
    country: "Argentine",
  },
  {
    code: "AEP",
    name: "Jorge Newbery Airfield",
    city: "Buenos Aires",
    country: "Argentine",
  },
  { code: "COR", name: "Córdoba", city: "Córdoba", country: "Argentine" },
  {
    code: "MDZ",
    name: "Governor Francisco Gabrielli",
    city: "Mendoza",
    country: "Argentine",
  },

  // Chili
  {
    code: "SCL",
    name: "Arturo Merino Benítez",
    city: "Santiago",
    country: "Chili",
  },
  { code: "IPC", name: "Mataveri", city: "Île de Pâques", country: "Chili" },

  // Colombie
  {
    code: "BOG",
    name: "El Dorado International",
    city: "Bogotá",
    country: "Colombie",
  },
  {
    code: "MDE",
    name: "José María Córdova",
    city: "Medellín",
    country: "Colombie",
  },
  {
    code: "CTG",
    name: "Rafael Núñez International",
    city: "Cartagena",
    country: "Colombie",
  },

  // Pérou
  {
    code: "LIM",
    name: "Jorge Chávez International",
    city: "Lima",
    country: "Pérou",
  },
  {
    code: "CUZ",
    name: "Alejandro Velasco Astete",
    city: "Cusco",
    country: "Pérou",
  },

  // Afrique du Sud
  {
    code: "JNB",
    name: "O.R. Tambo International",
    city: "Johannesburg",
    country: "Afrique du Sud",
  },
  {
    code: "CPT",
    name: "Cape Town International",
    city: "Le Cap",
    country: "Afrique du Sud",
  },
  {
    code: "DUR",
    name: "King Shaka International",
    city: "Durban",
    country: "Afrique du Sud",
  },

  // Kenya
  {
    code: "NBO",
    name: "Jomo Kenyatta International",
    city: "Nairobi",
    country: "Kenya",
  },
  { code: "MBA", name: "Moi International", city: "Mombasa", country: "Kenya" },

  // Éthiopie
  {
    code: "ADD",
    name: "Addis Ababa Bole",
    city: "Addis-Abeba",
    country: "Éthiopie",
  },

  // Sénégal
  {
    code: "DKR",
    name: "Blaise Diagne International",
    city: "Dakar",
    country: "Sénégal",
  },

  // Nigeria
  {
    code: "LOS",
    name: "Murtala Muhammed International",
    city: "Lagos",
    country: "Nigeria",
  },
  {
    code: "ABV",
    name: "Nnamdi Azikiwe International",
    city: "Abuja",
    country: "Nigeria",
  },

  // Israël
  { code: "TLV", name: "Ben Gurion", city: "Tel Aviv", country: "Israël" },
  { code: "VDA", name: "Ovda", city: "Eilat", country: "Israël" },

  // Jordanie
  {
    code: "AMM",
    name: "Queen Alia International",
    city: "Amman",
    country: "Jordanie",
  },

  // Liban
  {
    code: "BEY",
    name: "Rafic Hariri International",
    city: "Beyrouth",
    country: "Liban",
  },

  // Arabie Saoudite
  {
    code: "RUH",
    name: "King Khalid International",
    city: "Riyad",
    country: "Arabie Saoudite",
  },
  {
    code: "JED",
    name: "King Abdulaziz International",
    city: "Jeddah",
    country: "Arabie Saoudite",
  },
  {
    code: "DMM",
    name: "King Fahd International",
    city: "Dammam",
    country: "Arabie Saoudite",
  },

  // Koweït
  {
    code: "KWI",
    name: "Kuwait International",
    city: "Koweït City",
    country: "Koweït",
  },

  // Bahreïn
  {
    code: "BAH",
    name: "Bahrain International",
    city: "Manama",
    country: "Bahreïn",
  },

  // Oman
  {
    code: "MCT",
    name: "Muscat International",
    city: "Mascate",
    country: "Oman",
  },

  // Iran
  {
    code: "IKA",
    name: "Imam Khomeini International",
    city: "Téhéran",
    country: "Iran",
  },

  // Pakistan
  {
    code: "KHI",
    name: "Jinnah International",
    city: "Karachi",
    country: "Pakistan",
  },
  {
    code: "LHE",
    name: "Allama Iqbal International",
    city: "Lahore",
    country: "Pakistan",
  },
  {
    code: "ISB",
    name: "Islamabad International",
    city: "Islamabad",
    country: "Pakistan",
  },

  // Bangladesh
  {
    code: "DAC",
    name: "Hazrat Shahjalal International",
    city: "Dhaka",
    country: "Bangladesh",
  },

  // Sri Lanka
  {
    code: "CMB",
    name: "Bandaranaike International",
    city: "Colombo",
    country: "Sri Lanka",
  },

  // Myanmar
  {
    code: "RGN",
    name: "Yangon International",
    city: "Yangon",
    country: "Myanmar",
  },

  // Cambodge
  {
    code: "PNH",
    name: "Phnom Penh International",
    city: "Phnom Penh",
    country: "Cambodge",
  },
  {
    code: "REP",
    name: "Siem Reap International",
    city: "Siem Reap",
    country: "Cambodge",
  },

  // Laos
  {
    code: "VTE",
    name: "Wattay International",
    city: "Vientiane",
    country: "Laos",
  },

  // Ouzbékistan
  {
    code: "TAS",
    name: "Islam Karimov Tashkent",
    city: "Tachkent",
    country: "Ouzbékistan",
  },
  {
    code: "SKD",
    name: "Samarkand",
    city: "Samarcande",
    country: "Ouzbékistan",
  },

  // Kazakhstan
  {
    code: "ALA",
    name: "Almaty International",
    city: "Almaty",
    country: "Kazakhstan",
  },
  {
    code: "NQZ",
    name: "Nur-Sultan Nazarbayev",
    city: "Nur-Sultan",
    country: "Kazakhstan",
  },

  // Mongolie
  {
    code: "ULN",
    name: "Chinggis Khaan International",
    city: "Oulan-Bator",
    country: "Mongolie",
  },

  // Nouvelle-Zélande
  {
    code: "AKL",
    name: "Auckland",
    city: "Auckland",
    country: "Nouvelle-Zélande",
  },
  {
    code: "CHC",
    name: "Christchurch",
    city: "Christchurch",
    country: "Nouvelle-Zélande",
  },
  {
    code: "WLG",
    name: "Wellington",
    city: "Wellington",
    country: "Nouvelle-Zélande",
  },

  // Fidji
  { code: "NAN", name: "Nadi International", city: "Nadi", country: "Fidji" },

  // Polynésie française
  {
    code: "PPT",
    name: "Faa'a International",
    city: "Papeete",
    country: "Polynésie française",
  },

  // Nouvelle-Calédonie
  {
    code: "NOU",
    name: "La Tontouta International",
    city: "Nouméa",
    country: "Nouvelle-Calédonie",
  },

  // Réunion
  {
    code: "RUN",
    name: "Roland Garros",
    city: "Saint-Denis",
    country: "La Réunion",
  },

  // Maurice
  {
    code: "MRU",
    name: "Sir Seewoosagur Ramgoolam",
    city: "Port Louis",
    country: "Maurice",
  },

  // Seychelles
  {
    code: "SEZ",
    name: "Seychelles International",
    city: "Victoria",
    country: "Seychelles",
  },

  // Maldives
  {
    code: "MLE",
    name: "Velana International",
    city: "Malé",
    country: "Maldives",
  },

  // Cuba
  {
    code: "HAV",
    name: "José Martí International",
    city: "La Havane",
    country: "Cuba",
  },

  // République Dominicaine
  {
    code: "PUJ",
    name: "Punta Cana International",
    city: "Punta Cana",
    country: "République Dominicaine",
  },
  {
    code: "SDQ",
    name: "Las Américas International",
    city: "Saint-Domingue",
    country: "République Dominicaine",
  },

  // Jamaïque
  {
    code: "KIN",
    name: "Norman Manley International",
    city: "Kingston",
    country: "Jamaïque",
  },

  // Barbade
  {
    code: "BGI",
    name: "Grantley Adams International",
    city: "Bridgetown",
    country: "Barbade",
  },

  // Îles norvégiennes
  { code: "OSL", name: "Oslo Gardermoen", city: "Oslo", country: "Norvège" },
  { code: "BGO", name: "Bergen", city: "Bergen", country: "Norvège" },
  { code: "TRD", name: "Trondheim", city: "Trondheim", country: "Norvège" },
  {
    code: "SVJ",
    name: "Longyearbyen",
    city: "Longyearbyen",
    country: "Norvège",
  },

  // Suède
  {
    code: "ARN",
    name: "Stockholm Arlanda",
    city: "Stockholm",
    country: "Suède",
  },
  {
    code: "GOT",
    name: "Göteborg Landvetter",
    city: "Göteborg",
    country: "Suède",
  },
  { code: "MMX", name: "Malmö", city: "Malmö", country: "Suède" },

  // Finlande
  {
    code: "HEL",
    name: "Helsinki Vantaa",
    city: "Helsinki",
    country: "Finlande",
  },
  { code: "TMP", name: "Tampere", city: "Tampere", country: "Finlande" },

  // Danemark
  { code: "CPH", name: "Copenhagen", city: "Copenhague", country: "Danemark" },
  { code: "AAL", name: "Aalborg", city: "Aalborg", country: "Danemark" },

  // Islande
  {
    code: "KEF",
    name: "Keflavík International",
    city: "Reykjavik",
    country: "Islande",
  },

  // Pologne
  { code: "WAW", name: "Warsaw Chopin", city: "Varsovie", country: "Pologne" },
  { code: "KRK", name: "Kraków", city: "Cracovie", country: "Pologne" },
  { code: "GDN", name: "Gdańsk", city: "Gdansk", country: "Pologne" },
  { code: "WRO", name: "Wrocław", city: "Wrocław", country: "Pologne" },

  // République tchèque
  {
    code: "PRG",
    name: "Václav Havel Prague",
    city: "Prague",
    country: "République tchèque",
  },

  // Slovaquie
  { code: "BTS", name: "Bratislava", city: "Bratislava", country: "Slovaquie" },

  // Hongrie
  {
    code: "BUD",
    name: "Budapest Ferenc Liszt",
    city: "Budapest",
    country: "Hongrie",
  },

  // Roumanie
  { code: "OTP", name: "Henri Coandă", city: "Bucarest", country: "Roumanie" },
  {
    code: "CLJ",
    name: "Cluj-Napoca",
    city: "Cluj-Napoca",
    country: "Roumanie",
  },

  // Bulgarie
  { code: "SOF", name: "Sofia", city: "Sofia", country: "Bulgarie" },
  { code: "VAR", name: "Varna", city: "Varna", country: "Bulgarie" },
  { code: "BOJ", name: "Burgas", city: "Bourgas", country: "Bulgarie" },

  // Serbie
  {
    code: "BEG",
    name: "Belgrade Nikola Tesla",
    city: "Belgrade",
    country: "Serbie",
  },

  // Croatie
  { code: "ZAG", name: "Zagreb", city: "Zagreb", country: "Croatie" },
  { code: "SPU", name: "Split", city: "Split", country: "Croatie" },
  { code: "DBV", name: "Dubrovnik", city: "Dubrovnik", country: "Croatie" },

  // Slovénie
  { code: "LJU", name: "Ljubljana", city: "Ljubljana", country: "Slovénie" },

  // Bosnie-Herzégovine
  {
    code: "SJJ",
    name: "Sarajevo",
    city: "Sarajevo",
    country: "Bosnie-Herzégovine",
  },

  // Monténégro
  { code: "TGD", name: "Podgorica", city: "Podgorica", country: "Monténégro" },
  { code: "TIV", name: "Tivat", city: "Tivat", country: "Monténégro" },

  // Macédoine du Nord
  { code: "SKP", name: "Skopje", city: "Skopje", country: "Macédoine du Nord" },

  // Albanie
  { code: "TIA", name: "Tirana", city: "Tirana", country: "Albanie" },

  // Kosovo
  { code: "PRN", name: "Pristina", city: "Pristina", country: "Kosovo" },

  // Moldavie
  { code: "KIV", name: "Chișinău", city: "Chișinău", country: "Moldavie" },

  // Ukraine
  { code: "KBP", name: "Boryspil", city: "Kiev", country: "Ukraine" },
  { code: "IEV", name: "Zhuliany", city: "Kiev", country: "Ukraine" },
  { code: "ODS", name: "Odessa", city: "Odessa", country: "Ukraine" },

  // Biélorussie
  {
    code: "MSQ",
    name: "Minsk National",
    city: "Minsk",
    country: "Biélorussie",
  },

  // Lituanie
  { code: "VNO", name: "Vilnius", city: "Vilnius", country: "Lituanie" },

  // Lettonie
  { code: "RIX", name: "Riga", city: "Riga", country: "Lettonie" },

  // Estonie
  { code: "TLL", name: "Tallinn", city: "Tallinn", country: "Estonie" },
];

// Fonction de recherche d'aéroports
export const searchAirports = (query) => {
  if (!query || query.length < 2) return [];

  const searchTerm = query.toLowerCase().trim();

  return airports
    .filter((airport) => {
      return (
        airport.code.toLowerCase().includes(searchTerm) ||
        airport.name.toLowerCase().includes(searchTerm) ||
        airport.city.toLowerCase().includes(searchTerm) ||
        airport.country.toLowerCase().includes(searchTerm) ||
        (airport.cityCode &&
          airport.cityCode.toLowerCase().includes(searchTerm))
      );
    })
    .slice(0, 10); // Limiter à 10 résultats
};

// Fonction pour obtenir un aéroport par code
export const getAirportByCode = (code) => {
  return airports.find((airport) => airport.code === code);
};
