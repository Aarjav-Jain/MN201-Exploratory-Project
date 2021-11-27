const states = [
  "Andhra Pradesh",
  "Chhattisgarh",
  "Gujarat",
  "Jharkhand",
  "Karnataka",
  "Madhya Pradesh",
  "Maharashtra",
  "Odisha",
  "Rajasthan",
  "Tamil Nadu",
  "West Bengal",
];

const mines = [
  {
    id: 1,
    Name: "Bailadila Iron Ore Mine,Kirandul Complex",
    lat: 18.695336361826122,
    long: 81.22117259277897,
    state: "Chhattisgarh",
    geoDetail:
      "Bailadila Range, is a mountain range rising in the Deccan Plateau about 200 km west of the Eastern Ghats. It has been named 'Bailadila' because it resembles the hump of an ox. It is located near Kirandul town in the Dantewada district of southern Chhattisgarh, India.",
    Location:
      "Kirandul Complex, South Bastar district, Dantewada, Chhattisgarh",
    background:
      "Bailadila-14 mine is the first large scale open cast mechanised iron ore mine in India for which DPR was prepared by NMDC. The mine has the distinction of having unique down-the-hill conveyor system passing through a tunnel to transport iron ore from crushing plant to processing plant.",
    "Current Status": "Operating",
    photos: "",
    MineralMined: "Iron",
    Grade: "hematite Ore(66% Fe)",
    "Production Capacity": "3.4 Million Tonne ROM (in 2019)",
    "Total Reserve": "138.29 million tonnes (April, 08)",
    "Mine Type": "Open Cast",
    "Amount Of Ore Mined": "",
    Usage: "exported from Visakhapatnam port to Japan and South Korea",
    Company: "National Mineral Development Corporation (NMDC Ltd)",
    "Commisioned Date": "April,1968",
    url: {
      "National Mineral Development Corporation (NMDC Ltd)":
        "https://www.nmdc.co.in/KirandulComplex.aspx#:~:text=Bailadila%2D14%20mine%20is%20the,Bailadila%20Deposit%20%2D%2011%2FC",
      Wikipedia: "https://en.wikipedia.org/wiki/Bailadila_Range",
    },
  },
  {
    id: 2,
    Name: "Diamond Mining Project, Panna",
    lat: 24.27,
    long: 80.17,
    state: "Madhya Pradesh",
    geoDetail:
      "Panna is a city and a municipality in Panna district in the Indian state of Madhya Pradesh. It is famous for its diamond mines. It is the administrative center of Panna District.   A large group of diamond deposits extends North-East on a branch of the Vindhya Range for 240 kilometres (150 mi) or so, and is known as the Panna group. India was the only source of diamonds in the world for over 3000 years till diamond deposits were located in Brazil and South Africa. Today, NMDC is the only organised producer of diamond in India from its Majhgawan mine at Panna, Madhya Pradesh and continues to carry on the legend and past glory through its untiring efforts.",
    Location: "Panna District,Madhya Pradesh",
    background:
      "According to Valentine Ball, who edited the 1676 'Travels in India' of Jean-Baptiste Tavernier, Tieffenthaler was the first European to visit the mines in 1765 and claimed that the Panna diamonds could not compare in hardness and fire with other locations in India. No really large diamonds have come from this area.The most productive mines were in the 1860s and were found in Sakaria, around 32 kilometres (20 mi) from Panna. Four classifications were given to the Panna diamonds: first, Motichul, clear and brilliant; 2nd, Manik, with a faint orange tint; 3rd, Panna, verging in tint towards green; 4th, Bunsput, sepia coloured. Mines is situated in the interior of Panna district. Diamond mines in Panna are managed under the Diamond Mining Project of National Mineral Development Corporation (NMDC Ltd) of Government of India.",
    "Current Status": "Operating",
    photos: "",
    MineralMined: "Diamond",
    Grade: "kimberlite",
    "Production Capacity": "84,000 carats per year",
    "Mine Type": "Open Cast",
    "Amount Of Ore Mined": "1005064 carats approx.",
    Usage:
      "The diamonds unearthed are all collected by the district magistrate of Panna and are auctioned in the month of January.",
    Company: "National Mineral Development Corporation (NMDC Ltd)",
    "No Of Employees": "167 ( as on 30/06/2021 )",
    "Commisioned Date": "1967",
    url: {
      "National Mineral Development Corporation (NMDC Ltd)":
        "https://www.nmdc.co.in/Panna.aspx",
      "Panna Mine on Wikipedia": "https://en.wikipedia.org/wiki/Panna,_India",
      "Diamond Mines": "https://en.wikipedia.org/wiki/Diamond_mining_in_India",
    },
  },
  {
    id: 3,
    Name: "Jharia Coalfield",
    lat: 23.75,
    long: 86.42,
    state: "Jharkhand",
    geoDetail:
      "The coal field lies in the Damodar River Valley, and covers about 110 square miles (280 square km), and produces bituminous coal suitable for coke. Most of India's coal comes from Jharia. Jharia coal mines are India's most important storehouse of prime coke coal used in blast furnaces, it consists of 23 large underground and nine large open cast mines.",
    Location: "Jharia, Jharkhand",
    background:
      "Jharia coalfield is a large coal field located in the east of India in Jharia, Jharkhand. Jharia represents the largest coal reserves in India having estimated reserves of 19.4 billion tonnes of coking coal. The coalfield is an important contributor to the local economy, employing much of the local population either directly or indirectly. The fields have suffered a coal bed fire since at least 1916, resulting in 37 millions tons of coal consumed by the fire, and significant ground subsidence and water and air pollution in local communities including the city of Jharia. The resulting pollution has led to a government agency designated for moving local populations, however, little progress has been made in the relocation.",
    "Current Status": "Operating",
    photos: "",
    MineralMined: "Coal",
    Grade: "Bituminous Coal",
    "Mine Type": "20 underground mines and several large open-cast coal mines",
    "Total Reserve": "19.4 billion tonnes",
    Usage: "Coal obtained is used as coke coal",
    Company: "Bharat Cooking Coal Limited",
    "Mining Since": "1894",
    url: {
      Wikipedia: "https://en.wikipedia.org/wiki/Jharia_coalfield",
      "India's Jharia coal field has been burning for 100 years - CNBC":
        "https://www.cnbc.com/2015/12/02/indias-jharia-coal-field-has-been-burning-for-100-years.html",
      Britannica: "https://www.britannica.com/place/Jharia",
    },
  },
  {
    id: 4,
    Name: "West Bokaro Coalfield",
    lat: 23.8,
    long: 85.75,
    state: "Jharkhand",
    geoDetail:
      "West Bokaro Coalfield is located mostly in Ramgarh district and partly in Hazaribagh district in the Indian state of Jharkhand. The Bokaro coalfield lies between 23° 45’ and 23° 50’ North latitude and 85° 30’ and 86° 03’ East longitude. It spreads 65 km from east to west and 10 to 16 km from north to south. Bokaro West and Bokaro East are two subdivisions of the field separated almost in the middle by Lugu Hill (height 960.9 m (3,153 ft))Bokaro River passes through the West Bokaro and East Bokaro coalfields. West Bokaro Coalfield covers an area of 259 square kilometres (100 sq mi) and has total coal reserves of 4,246.30 million tonnes.",
    Location: "Ramgarh district, Hazaribagh district, Jharkhand.",
    background:
      "In 1917, L.S.S.O’Malley described the coalfields in the upper reaches of the Damodar as follows: 'Near the western boundary of Jharia field is that of Bokaro, covering 220 square miles (570 km2), with an estimated content of 1,500 million tons; close by… is the Ramgarh field (40 square miles), in which, however, coal is believed to be of inferior quality. A still larger field in the same district is that called Karanpura, which extends over 544 square miles (1,410 km2) and has an estimated capacity of 9,000 million tons.'",
    "Current Status": "Operating",
    photos: "",
    MineralMined: "Coal",
    Grade: "Bitumious",
    "Total Reserve": "5012.49 Million Tonnes (as on 1/4/2010)",
    "Mine Type": "Open Cast",
    Usage: "used as coke coal",
    Company: "Tata Steel",
    url: {
      Wikipedia: "https://en.wikipedia.org/wiki/West_Bokaro_Coalfield",
    },
  },
  {
    id: 5,
    Name: "East Bokaro Coalfield",
    lat: 23.8,
    long: 85.75,
    state: "Jharkhand",
    geoDetail:
      "West Bokaro Coalfield is located mostly in Ramgarh district and partly in Hazaribagh district in the Indian state of Jharkhand.The Bokaro coalfield lies between 23° 45’ and 23° 50’ North latitude and 85° 30’ and 86° 03’ East longitude. It spreads 65 km from east to west and 10 to 16 km from north to south. Bokaro West and Bokaro East are two subdivisions of the field separated almost in the middle by Lugu Hill (height 960.9 m (3,153 ft))Bokaro River passes through the West Bokaro and East Bokaro coalfields. West Bokaro Coalfield covers an area of 259 square kilometres (100 sq mi) and has total coal reserves of 4,246.30 million tonnes.",
    Location: "Ramgarh district, Hazaribagh district, Jharkhand.",
    background:
      "In 1917, L.S.S.O’Malley described the coalfields in the upper reaches of the Damodar as follows: 'Near the western boundary of Jharia field is that of Bokaro, covering 220 square miles (570 km2), with an estimated content of 1,500 million tons; close by… is the Ramgarh field (40 square miles), in which, however, coal is believed to be of inferior quality. A still larger field in the same district is that called Karanpura, which extends over 544 square miles (1,410 km2) and has an estimated capacity of 9,000 million tons.'",
    "Current Status": "Operating",
    photos: "",
    MineralMined: "Coal",
    Grade: "Bitumious",
    "Total Reserve": "8083.29 Million Tonnes (as on 1/4/2010)",
    "Mine Type": "Open Cast",
    Usage: "used as coke coal",
    Company: "Tata Steel",
    url: {
      Wikipedia: "https://en.wikipedia.org/wiki/East_Bokaro_Coalfield",
    },
  },
  {
    id: 6,
    Name: "Rajmahal coalfield",
    lat: 25.2,
    long: 87.2,
    state: "Jharkhand",
    geoDetail:
      "The Rajmahal Coalfield is a large coal field located in the east of India in Jharkhand.",
    Location: "Mahagama village, Godda district, Jharkhand, India",
    background:
      "Five relatively small coal basins – Hura, Chuperbhita, Pachwara, Mahuagarhi and Brahmani - compose the Rajmahal Coalfields. They form a sort of a broken chain along the western flank of the Rajmahal Hills in the north to West Bengal's Birbhum district in the south. The main advantage of this coalfield is that much of its reserves are untouched. Another description shows the Rajmahal Area as being composed of the following: Hura, Gilhuria and Jilbari, Chuparbhita, Pachwara and Brahmani.",
    "Current Status": "Operating",
    photos: "",
    MineralMined: "Coal",
    Grade: "Superior quality non-coking coal",
    "Production Capacity": "17 million tonnes",
    "Total Reserve": "13.13 billion tonnes",
    "Mine Type": "Open Cast",
    "Amount Of Ore Mined":
      "Expected to produce 200 million tonnes of coal over 12.5 years.",
    Usage:
      "supplies coal to the 2,100 MW Farakka Super Thermal Power Station and the 2,340 MW Kahalgaon Super Thermal Power Station.",
    Sponser:
      " Essel Mining and Industries Limited (EMIL) of the Aditya Birla Group",
    "Commissioned Date": "1980s",
    Company: "Eastern Coalfields Limited (ESL)",
    url: {
      Wikipedia: "https://en.wikipedia.org/wiki/Rajmahal_coalfield",
    },
  },
  {
    id: 7,
    Name: "North Karanpura Coalfield",
    lat: 23.685074,
    long: 84.989074,
    state: "Jharkhand",
    geoDetail:
      "North Karanpura Coalfield is located in Ranchi, Hazaribagh, Chatra and Latehar districts in the Indian state of Jharkhand. The location of the North Karanpura coalfield, which is spread across the districts of Hazaribagh, Ranchi, Chatra, and Latehar, in the Karanpura Valley of Jharkhand state. The field stretches 64 km east-to-west and 32 km north-to-south, and covers 1,230 square kilometers.",
    Location:
      "Districts of Ranchi, Hazaribagh, Chatra and Latehar districts in the Indian state of Jharkhand.",
    background:
      "The North Karanpura coal mines are a network of underground and opencast coal mines, operated by Central Coalfields Limited, a subsidiary of Coal India, producing more than 20 million-tonnes-per-annum, on the North Karanpura coalfield in Jharkhand state, India. The operating mines include: Churi, Dakra Bukbuka, K. D. H., Rohini Karkatta, Rohini, and Purnadih",
    "Current Status": "Operating",
    photos: "",
    MineralMined: "Coal",
    "Production Capacity": "20 million-tonnes-per-annum",
    "Total Reserve": "17,073.24 billion tonnes",
    "Mine Type": "Underground and Open Cast coal mines",
    "Mine Depth": "65m",
    Owner: "Central Coalfields Limited",
    url: {
      Wikipedia: "https://en.wikipedia.org/wiki/North_Karanpura_Coalfield",
    },
  },
  {
    id: 8,
    Name: "Raniganj Coalfield",
    lat: 23.61672,
    long: 87.13333,
    state: "West Bengal",
    geoDetail:
      "Raniganj Coalfield is primarily located in the Asansol and Durgapur subdivisions of Paschim Bardhaman district of West Bengal. It spreads over to the neighboring districts of Birbhum, Bankura, Purulia and to Dhanbad district of Jharkhand. Raniganj Coalfield covers an area of 443.50 km2 (171.24 sq mi) and has total coal reserves of 49.17 billion tonnes, spread across Indian states of West Bengal and Jharkhand. That makes it the second largest coalfield in the country (in terms of reserves).",
    Location: "Various districts in West Bengal and Jharkhand States, India",
    background:
      "Coalmining in India first started in the Raniganj Coalfield. In 1774, John Sumner and Suetonius Grant Heatly of the British East India Company found coal near Ethora, presently in Salanpur community development block. The early exploration and mining operations were carried out in a haphazard manner.For the entire 19th century and a major part of the 20th century, Ranigunj coalfields was the major producer of coal in the country.All non-coking coal mines were nationalized in 1973 and placed under Coal Mines Authority of India. In 1975, Eastern Coalfields Limited, a subsidiary of Coal India Limited, was formed. It took over all the earlier private collieries in Raniganj Coalfield.",
    "Current Status": "Operating",
    photos: "",
    MineralMined: "Coal",
    "Production Capacity": "33.90 million tonnes (as in 2012-2013)",
    "Total Reserve":
      "30.61 billion tonnes is in the West Bengal and 18.56 billion tonnes is in Jharkhand.",
    "Mine Type":
      "77 Underground Mines and 21 Open Cast Mines (as in 2012-2013)",
    Manpower: "72,973 (as in 2012-2013)",
    "In Service": "1774, 1973",
    Company:
      "Eastern Coalfields Limited (ECL) which is a subsidary of Coal India",
    url: {
      Wikipedia: "https://en.wikipedia.org/wiki/Raniganj_Coalfield",
    },
  },
  {
    id: 9,
    Name: "Birbhum Coalfield",
    lat: 24.05916,
    long: 87.59965,
    state: "West Bengal",
    geoDetail:
      "The Birbhum is a large coal field located in the east of India in West Bengal. Birbhum is having estimated reserves of 5 billion tonnes of coal. Deucha Pachami coal block spread over an area of 9.7 km2 is to be developed by Bengal Birbhum Coal Company Limited. Another potential coal reserve is Dewanganj Harinsingha block with an estimated area of 2.6 km2. These blocks are located in Mohammad Bazar CD Block.",
    Location: "Deucha village, Birbhum District, West Bengal State, India",
    background:
      "The Deocha-Pachami and Dewanganj-Harinsingha coal blocks lie adjacent to one another on the Birbhum coalfield, over an area of 12.3 square kilometers. With indicated reserves of 40.7 billion tons, this coalfield is one of India's largest. India's Ministry of Coal is currently in the process of allocating these coal blocks (as a single block) to an as-yet-undetermined state-owned company. While the Ministry stated in June 2013 that it hoped to allocate this block to a state company 'within a week,' that process is apparently still ongoing as of May 2015. The initial investment is expected to be around 100 billion rupees, or about $1.5 billion.",
    "Current Status": "Proposed",
    photos: "",
    MineralMined: "Coal",
    "Total Reserve": "5 Billions Tonnes (estimated)",
    url: {
      Wikipedia: "https://en.wikipedia.org/wiki/Birbhum_Coalfield",
    },
  },
  {
    id: 10,
    Name: "Singrauli Coal Mines",
    lat: 24.165,
    long: 82.655,
    state: "Madhya Pradesh",
    geoDetail:
      "Singrauli Coalfield is spread across the districts of Singrauli and Sonebhadra in the Indian states of Madhya Pradesh and Uttar Pradesh, mostly in the basin of the Son River.",
    Location:
      "Singrauli district of Madhya Pradesh state and Sonbhadra district of Uttar Pradesh state, India",
    background:
      "It is spread over nearly 2,200 km2 (850 sq mi) but only a small part of the coalfield, around 220 km2 (85 sq mi), has been identified as promising by the Geological Survey of India. The coal reserves in the north-eastern part of Singrauli coalfield, covering an area of around 220 km2 (85 sq mi), is 9,121 million tonnes, out of which 2,724 million tonnes are proved reserves and the rest is inferred or indicated. Important coal seams in this part of Singrauli colfield are: Jhingurda (130–162 m thick), Purewa (8–25 m thick) and Turra (12–22 m thick).",
    "Current Status": "Operating",
    photos: "",
    MineralMined: "Coal",
    Grade: "Sub-Bituminous Coal i.e. Non-Coking Coal",
    "Production Capacity": "119 Million Tonnes (in 2021-22)",
    "Total Reserve": "10.06 Billion Tonnes",
    "Mine Type": "Open Cast",
    Usage: "Coal produced is largely used in production of electricity",
    Company:
      "Northern Coalfields Limited (NCL) - a subsidiary of Coal India Limited",
    "Operating Since": "1985",
    url: {
      "Northern Coalfields Limited (NCL)":
        "http://nclcil.in/detail/647634/ncl-overview",
      Wikipedia: "https://en.wikipedia.org/wiki/Singrauli_Coalfield",
    },
  },
  {
    id: 11,
    Name: "Dalli Rajhara",
    lat: 20.58,
    long: 81.08,
    state: "Chhattisgarh",
    geoDetail:
      "Dalli Rajhara is home of iron ore captive mines for Bhilai Steel Plant, the largest integrated steel plant in India. Dalli mines deposit was discovered by Pramatha Nath Bose, the first Indian graded officer of the Geological Survey of India around 1900.",
    Location: "Balod, Chhattisgarh",
    background:
      "Dalli-Rajhara is the twin mine and part of the Rajhara group of mines. These are captive iron ore mines for Bhilai Steel Plant (BSP) – a SAIL enterprise. Iron ores mined from the area are of the hematite and magnetite variety. The other mines in the neighbourhood produce dolomite, lime and other raw materials which go into steel production.",
    "Current Status": "Operating",
    photos: "",
    MineralMined: "Iron",
    Grade: "Hematite and Magnetite (66% Fe)",
    "Total Reserve": "164.74 Million Tonnes",
    "Mine Type": "Open Cast",
    Usage: "Used as raw material for Bhilai Steel Plant (BSP)",
    Company: "Steel Authority of India Limited (SAIL)",
    url: {
      "Chhattisgarh Mines": "http://chhattisgarhmines.gov.in/en/iron-ore",
      Wikipedia: "https://en.wikipedia.org/wiki/Dalli_Rajhara",
    },
  },
  {
    id: 12,
    Name: "Jaduguda Uranium Mine",
    lat: 22.39,
    long: 86.21,
    state: "Jharkhand",
    geoDetail:
      "The Jaduguda Mine (also spelt as Jadugoda or Jadugora) is a uranium mine in Jaduguda village in the Purbi Singhbhum district of the Indian state of Jharkhand. It commenced operation in 1967 and was the first uranium mine in India. The deposits at this mine were discovered in 1951.",
    Location: "Jaduguda Village, Purbi Singhbhum, Jharkhand",
    background:
      "As of March 2012, India only possesses two functional uranium mines, including this Jaduguda Mine.Mining activities were suspended in 2014 following an inquiry into the lease renewal of the mine. Uranium Corporation of India Limited (UCIL) expects mining activity to resume at Jaduguda in 2017. The Jaduguda mine produces up to 25% of the raw materials needed to fuel India's nuclear reactors.",
    "Current Status": "Operating",
    photos: "",
    MineralMined: "Uranium",
    Grade:
      "According to Department of Atomic Energy, the ore extracted from this mine is of 0.065 grade, which means that the plant needs to process 1000 kg of ore to extract 65 grams of usable uranium.",
    Yield: "300 tons of uranium per year",
    "Mine Type": "Underground",
    "Mine Depth":
      "Located at least 640 meters below the earth's surface and is accessible by a 5-meter diameter vertical shaft.",
    Usage: "Used for production of electricity in Nuclear Power Plants",
    Company: "Uranium Corporation of India",
    "Operating Since": "1967",
    url: {
      "Suffering in the town powering India’s nuclear dreams":
        "https://india.mongabay.com/2020/09/photos-suffering-in-the-town-powering-indias-nuclear-dreams/",
      Wikipedia: "https://en.wikipedia.org/wiki/Jaduguda_uranium_mine",
      "Uranium Corporation of India": "http://www.ucil.gov.in/jagudamine.html",
      "Pollution Caused":
        "https://en.wikipedia.org/wiki/Jaduguda_uranium_mine#Pollution",
    },
  },
  {
    id: 13,
    Name: "Khetri Copper Mine",
    lat: 28.015,
    long: 75.77556,
    state: "Rajasthan",
    geoDetail:
      "Khetri is situated at the foothills of the Aravalli Range, which hosts copper mineralization, giving rise to a 80 km long metallogenetic province from Singhana in the north to Raghunathgarh in the south, popularly known as Khetri Copper Belt. This mine was started over 2,000 years ago! The deposit consists of two lodes: Madhan lode (footwall) & the Kudhan lode (hanging wall).",
    Location: "Khetri, Sikar District, Jaipur district, Rajasthan, India",
    background:
      "Regular mining ceased in this area by 1872. With the advent of 20th century, the geologists of Geological Survey of India. Indian Bureau of Mines undertook explorations. Development of Khetri Mine was started by National Mineral Development Corporation (NMDC) and the project was handed over to HCL in 1967 when HCL was formed. Subsequently, smelting and refining facilities were added. Khetri comprises of Khetri town and Khetrinagar. Khetri town was founded by Raja Khet Singhji Nirwan, and Khetrinagar, which is about 10 km away from Khetri town, is developed and maintained by Hindustan Copper Limited. ",
    "Current Status": "Operating",
    photos: "",
    MineralMined: "Copper",
    Grade: "1.13 % Cu",
    "Total Reserve": "26 million tonnes",
    "Production Capacity": "1 Million Tonnes",
    "Mine Type": "Underground Mines",
    "Operating Since": "1967",
    Usage: "Used in making wires and other industrial machines",
    "Owned By": "Hindusthan Copper Ltd.",
    url: {
      "Hindustan Copper Limited":
        "https://www.hindustancopper.com/Page/KCCPlant",
    },
  },
  {
    id: 14,
    Name: "Zawar Group of Mines",
    lat: 24.3540034,
    long: 73.7330643,
    state: "Rajasthan",
    geoDetail:
      "Zawar is a settlement located in Udaipur district, Rajasthan, India, approximately 40 km from the lake city Udaipur. It stretches some 10 kilometers along the banks of the Gomati River. It is one of the oldest zinc mines of the world. It is declared as the National Geological Monument.",
    Location: "Zawar, Rajasthan, India",
    background:
      "Zawar Mines consists of four mines namely Mochia, Balaria, Zawar Mala and Baroi with average zinc-lead reserve grade of 4.6%. Zawar group of mines are a symbol of the Company’s legacy with constant addition to its reserve and resource base. Access to the mines as well as ore hoisting hauling is through shaft decline. The mine produced 3.3 million MT of ore in FY 2020. It has a reserve of 14.2 million MT and mineral resource base of 82.2 million MT as on March 31, 2020.",
    "Current Status": "Operating",
    photos: "",
    MineralMined: "Zinc and Lead",
    Grade: "zinc-lead reserve of grade of 4.6%",
    "Production Capacity": "3.3 million tonnes (in 2020)",
    "Total Reserve": " 14.2 million MT)",
    "Mine Type": "Underground",
    "Mining Method": "Long hole open stoping",
    Usage: "used in making alloys",
    Company: "Hindustan Zinc Limited",
    url: {
      "Hindustan Zinc Limited":
        "https://www.hzlindia.com/bussiness/operations/mines/zawar/",
    },
  },
  {
    id: 15,
    Name: "Mevasa Bauxite Mine",
    lat: 220.21,
    long: 690.3,
    state: "Gujarat",
    geoDetail:
      "Mevasa is a town and former princely state on Saurashtra peninsula in Gujarat, western India.",
    Location: "Mevasa, Kalyanpur, Devbhoomi Dwarka, Gujarat",
    background:
      "Reserves of Plant Grade Bauxite (≥ 52% Al2O3) and Non - Plant Grade Bauxite (40% - 51.99%  Al2O3) are found in Kutch as well as Devbhoomi Dwarka District. GMDC is engaged in Bauxite Mining at Gadhsisa group of Mines, Dist. Kutch and Mevasa Bauxite Mines, Dist. Devbhoomi Dwarka from last four decades.",
    "Current Status": "Operating",
    photos: "",
    MineralMined: "Bauxite",
    Grade:
      "Plant Grade Bauxite - 52%,  Non - Plant Grade Bauxite - 40 - 51.99%",
    "Total Reserve": "6.77 Lakh MT",
    "Mine Type": "Open Cast",
    Usage:
      "Plant Grade Bauxite is consumed for manufacturing of Refractories, Abrasives, Monolithic, Binder, Specialized Alumina Cement, etc. Non - Plant Grade Bauxite is consumed in Aluminium Metal Extraction, Cement Industries, Manufacturing of Zeolites, etc.",
    Company: "Gujarat Mineral Development Corporation Ltd.",
    url: {
      "Gujarat Mineral Development Corporation Ltd.":
        "https://www.gmdcltd.com/en/minerals-n-mines/bauxite/mevasa",
    },
  },
  {
    id: 16,
    Name: "Donimalai Iron Ore Mine",
    lat: 15.0589,
    long: 76.5937,
    state: "Karnataka",
    geoDetail:
      "Donimalai Mines are located in Bellary district in the state of Karnataka, India.",
    Location: "Donimalai, Bellar, Karnataka",
    background:
      "Donimalai mechanised iron ore mines of National Mineral Development Corporation (Now M/s.NMDC Limited) are located here. Donimalai township is at a distance of 53 km from the Bellary Railway station by road. Exploration of iron ore activity was started by the National Mineral Development Corporation of India in Donimalai and was commissioned in 1977. The ore available here contains 65% of Iron.",
    "Current Status":
      "Operating (reopened in feb,2021 after 2 years ban by State Government )",
    photos: "",
    MineralMined: "Iron",
    Grade: "hematite Ore(65% Fe)",
    "Production Capacity": "4.0 million tonnes of ROM ore/year",
    "Balance Reserve": "27.92 million tonnes (April, 08)",
    "Mine Type": "Open Cast",
    Usage:
      "exported from Chennai and Mormugao (Goa) ports to Japan and South Korea",
    Company: "National Mineral Development Corporation (NMDC Ltd)",
    "Commisioned Date": "October,1977",
    "No of Employers": "880 (as of 2021)",
    url: {
      "National Mineral Development Corporation (NMDC Ltd)":
        "https://www.nmdc.co.in/Donimalai.aspx#:~:text=Ore%20Mines%2C%20Donimalai-,Donimalai%20Iron%20Ore%20Mines,to%20Japan%20and%20South%20Korea.",
    },
  },
  {
    id: 17,
    Name: "Hatti(Hutti) Gold Mines",
    lat: 16.197,
    long: 76.66,
    state: "Karnataka",
    geoDetail:
      "Hatti Gold Mines, also spelled Hutti, is a notified area council in Raichur district in the Indian state of Karnataka. The mines are owned and operated by Hutti Gold Mines Limited. Hatti is situated in Raichur District, Karnataka State and is 80 km (50 miles) due west of Raichur, which is also the nearest railway station.",
    Location: "Hatti, Raichur, Karnataka",
    background:
      "The mine produced about 38,56,300 tonnes of ore to yield about 26,550 kg at an average recovery of 6.88 g per tonne. In addition about 48,800 tonnes of gold tailings lifted about 112 kg of gold production for the year 1982 – 83 was about 62.83 kg gold per month at an average recovery grade of 5.24 per g per tonne. After extensive working, the main mine became water-logged, and was closed.",
    "Current Status": "Operating",
    photos: "",
    MineralMined: "Gold",
    Grade:
      "Archaean lode gold deposit. Shear zones controlled Gold-Quartz-Sulphide mineralisation",
    "Production Capacity": "8 lakhs tonnes per annum",
    "Total Reserve": "16.30 Million Tonnes (as on 01.04.2019)",
    "Mine Type": "Underground Mine",
    "Amount Of Ore Mined": "16.93 MIllion Tonnes (as on 31.03.2019)",
    "Total Gold Produced": "89.59 Million Tonnes (as on 31.03.2019)",
    Usage: "primarly used in making jewellery",
    Company: "Hutti Gold Mines Company Limited - Government of Karnataka",
    "Commisioned Date":
      "(a) Ancient Mining 2000 years old (Pre Ashokan Times).(b) Modern Mining - Main Mine during Nizams period. (1902-1918).(c) Modern Mining - Rediscovery of Parallel Lodes and mining from 1947 onwards.",
    "Total Employes": "4104 (as of 2019)",
    url: {
      "Hutti Gold Mines Company Limited":
        "https://huttigold.karnataka.gov.in/english",
      Wikipedia: "https://en.wikipedia.org/wiki/Hatti_Gold_Mines",
    },
  },
  {
    id: 18,
    Name: "Neyveli Coal Mine",
    lat: 11.571182,
    long: 79.503738,
    state: "Tamil Nadu",
    geoDetail:
      "The Neyveli Coal Mine is an opencast mine, operated by Neyveli Lignite Corporation (NCL) India Limited, with a total capacity of 28 million tonne per year, located near the town of Neyveli in Cuddalore district in Tamil Nadu, India.",
    Location: "Neyveli,Cuddalore, Tamil Nadu, India",
    background:
      "The mine, which has been operating since 1962, is owned and operated by the Neyveli Lignite Corporation.",
    "Current Status": "Operating",
    photos: "",
    MineralMined: "Coal",
    Grade: "Lignite",
    "Total Reserve": "668 million tonnes",
    "Production Capacity": "28 Million Tonnes",
    "Mine Type": "Open Cast",
    "Mine Depth": "72-110 m",
    "Operating Since": "1962",
    Usage:
      "The mine supplies the 600 megawatt (MW) Neyveli Thermal Power Station and the 420MW Thermal Power Station I Expansion.",
    "Owned By": "Neyveli Lignite Corporation",
    url: {
      "Neyveli Lignite Corporation": "https://www.nlcindia.in/",
    },
  },
  {
    id: 19,
    Name: "Tummalapalle Uranium Mine",
    lat: 14.19,
    long: 78.53,
    state: "Andhra Pradesh",
    geoDetail:
      "The Tummalapalle Mine is a uranium mine in Tumalapalli village located in Kadapa of the Indian state of Andhra Pradesh. Results from research conducted by the Atomic Energy Commission of India in 2011 made the analysts conclude that this mine might have one of the largest reserves of uranium in the world.",
    Location: "Tumalapalli, Kadapa,Andhra Pradesh",
    background:
      "On 19 July 2011, Secretary of Department of Atomic Energy, Dr. S. Banerjee who is also the Chairman of the Atomic Energy Commission of India confirmed on reserves of 49,000 tonnes and suggested that there could be even three times larger which would make Tummalapalle the mine with the world's largest uranium deposits. The estimates were subsequently increased to 85,000 tonnes in 2014. Earlier, uranium reserves were found only up to a depth of about 250 metres. The latest findings reportedly indicate that the reserves run as deep as 1,000 metres.",
    "Current Status": "Operating",
    photos: "",
    MineralMined: "Uranium",
    Grade:
      "13.6 kWh/tonne ( 1,305 grams of uranium can be extracted out of 2,350 tonnes)",
    "Total Reserve": "85,000 tonnes(estimated)",
    "Production Capacity": "2,350 tonnes of ore per day",
    "Mine Type": "Underground",
    "Commissioned On": "April 2012",
    Usage: "Ore is used for production of electricity in Nuclear Power Plants",
    "Owned By": "Uranium Corporation of India",
    url: {
      "The real cost of uranium mining: The case of Tummalapalle":
        "firstpost.com/long-reads/the-real-cost-of-uranium-mining-the-case-of-tummalapalle-4749521.html",
      Wikipedia: "https://en.wikipedia.org/wiki/Tummalapalle_uranium_mine",
    },
  },
  {
    id: 20,
    Name: "Kollur Mine",
    lat: 16.7,
    long: 80.08,
    state: "Andhra Pradesh",
    geoDetail:
      "Kollur Mine was a series of gravel-clay pits on the south bank of the Krishna River in the Golconda Sultanate of India. It currently falls under the Guntur district of Andhra Pradesh. It is thought to have produced many large diamonds, known as Golconda Diamonds, several of which are or have been a part of crown jewels.",
    Location: "Guntur, Andhra Pradesh",
    background:
      "Kollur Mine operated between the 16th and mid-19th centuries, and was one of the largest and most productive diamond mines on the Indian subcontinent. At the height of production, around 30,000 – 60,000 people worked there, including men, women, and children of all ages. Kollur itself had a population of around 100,000. Golconda mines were owned by the king, but operation was leased to diamond merchants, either foreigners or Indians of the goldsmith caste. As well as rent, the king also received 2% from sales and he was entitled to keep all diamonds weighing over 10 carats.The area was evacuated in the 2000s to make way for the Pulichinthala irrigation project and is submerged by 50 feet (15 m) of water for most of the year.",
    "Current Status":
      "Abandoned (established in the 16th century and operated until the 19th century)",
    photos: "",
    MineralMined: "Diamond",
    url: {
      "Kollur Mine on Wikipedia": "https://en.wikipedia.org/wiki/Kollur_Mine",
      "Diamond Mines": "https://en.wikipedia.org/wiki/Diamond_mining_in_India",
    },
  },
  {
    id: 21,
    Name: "Talcher Coalfield",
    lat: 20.96,
    long: 85.13,
    state: "Odisha",
    geoDetail:
      "Talcher Coalfield is located in Angul district in the Indian state of Odisha, in the valley of the Brahmani.",
    Location: "Angul, Odisha",
    background:
      "According to Geological Survey of India, the Talcher Coalfield has reserves of 38.65 billion tonnes, the highest in India. Talcher Coalfield covers an area of 500 km2 (190 sq mi). The coal is of lower grade containing only about 35 per cent of fixed carbon, 70 per cent volatile matter and 25 per cent ash content.As of 2011, nearly one hundred thousand tonnes of coal is dispatched daily to power stations in Odisha, Tamil Nadu, Andhra Pradesh, West Bengal and other parts of India.Talcher Coalfield is subdivided into five production/ administrative areas: Talcher, Jagannath, Kalinga, Lingaraj and Hingula.",
    "Current Status": "Operating",
    photos: "",
    MineralMined: "Coal",
    Grade:
      "lower grade containing only about 35 per cent of fixed carbon, 70 per cent volatile matter and 25 per cent ash content",
    "Total Reserve": "38.65 billion tonnes",
    "Production Capacity": "61.83 MTPA",
    "Mine Type": "surface, underground",
    "Operating Since":
      "From 1960 in South Balanda, 1962 in Nandira and 1972 in Jagannath",
    Usage: "supplied to various power plants in India",
    "Owned By": "Mahanadi Coalfields Limited, a subsidiary of Coal India",
    url: {
      Wikipedia: "https://en.wikipedia.org/wiki/Talcher_Coalfield",
    },
  },
  {
    id: 22,
    Name: "Ib Valley Coal Mines",
    lat: 22.059284,
    long: 83.7304,
    state: "Odisha",
    geoDetail:
      "Ib Valley Coalfield is located in Jharsuguda district in the Indian state of Odisha, in the valley of the Ib River, a tributary of the Mahanadi.Ib Valley Coalfield operates three major open cast mines – Lajkura Opencast Mine, Samleswari Opencast Mine and Lilari Opencast Mine.",
    Location: "Bandhabal, Jharsuguda district, Odisha, India",
    background:
      "In 1900, when Bengal Nagpur Railway was building a bridge across the Ib River, coal was accidentally discovered. The first coalmine in the Ib Valley Coalfield was established by Himgir Rampur Coal Company in 1909. Other underground collieries were opened by private operators till nationalization of the coal industry in 1973, when it was placed under Western Coalfields Limited. In 1986, it came under South Eastern Coalfields Limited and in 1992 under Mahanadi Coalfields Limited. According to Geological Survey of India, the Talcher Coalfield has reserves of 38.65 billion tonnes, the highest in India. Ib Valley Coalfield has reserves of 22.3 billion tonnes, the third highest in India.",
    "Current Status": "Operating",
    photos: "",
    MineralMined: "Coal",
    "Total Reserve": "23,755 MT",
    "Production Capacity": "95 MTPA Total",
    "Mine Type": "Open Cast",
    "Operating Since":
      "established by Himgir Rampur Coal Company in 1909, came under Western Coalfields Limited in 1973,  In 1986, it came under South Eastern Coalfields Limited and in 1992 under Mahanadi Coalfields Limited.",
    Usage: "supplied to various power plants in India",
    "Owned By": "Mahanadi Coalfields Limited, a subsidiary of Coal India",
    url: {
      Wikipedia: "https://en.wikipedia.org/wiki/Ib_Valley_Coalfield",
    },
  },
  {
    id: 23,
    Name: "Wardha Valley Coal Mines",
    lat: 20,
    long: 79.19,
    state: "Maharashtra",
    geoDetail:
      "The Wardha Valley coal mines are a 30 million ton-per-annum (MTPA) network of mines on the Wardha Valley coalfield in Maharashtra state, India.",
    Location: "Chandrapur and Yavatmal districts, Maharashtra, India",
    background:
      "Wardha Valley Coalfied covers an area of about 4,130 km2 in the valley of the Wardha, a river in the Godavari basin. It extends in a North West – South East direction for about 115 km.[1] Wardha Valley Coalfield is spread across Bhandar, new majri, Rajur-wani, Chandrapur, Balalarpur and Wamanpalli.",
    "Current Status": "Operating",
    photos: "",
    MineralMined: "Coal",
    Grade: "Non - Coking Coal",
    "Total Reserve": "5,343.60 million tonnes ",
    "Production Capacity": "59.5 MTPA",
    "Mine Type":
      "Wardha Valley Coalfield mines coal in a large measure by open cast mining. However, the availability of coal comparatively near to the surface is fast depleting. As a result, either the open cast mines have to be deepened or the costlier underground mining process resorted to.",
    Usage: "supplied to various power plants in India",
    "Owned By": "Western Coalfields Limited",
    url: {
      Wikipedia: "https://en.wikipedia.org/wiki/Wardha_Valley_Coalfield",
    },
  },
];

module.exports = { states, mines };
// module.exports = mines;
