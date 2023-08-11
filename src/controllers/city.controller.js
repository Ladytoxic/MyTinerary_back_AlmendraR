const controller = {
    // Devuelve todas las cuidades.
    getCities: (req, res) => {
        res.json({
            cities: [
                {
                    "id": 1,
                    "name": "Paris",
                    "country": "France",
                    "description": "Paris, the City of Light, is famous for its iconic landmarks like the Eiffel Tower and the Louvre Museum.",
                    "image": "https://i.postimg.cc/B61qXhCp/earth-DXux-Hw3-S5ak-unsplash.jpg"
                  },
                  {
                    "id": 2,
                    "name": "New York",
                    "country": "United States",
                    "description": "New York City is a bustling metropolis known for its diverse neighborhoods, world-class museums, and iconic skyline.",
                    "image": "https://i.postimg.cc/gjVmKnQ6/luca-bravo-Ta-Ck3-Nsp-Ye0-unsplash.jpg"
                  },
                  {
                    "id": 3,
                    "name": "Tokyo",
                    "country": "Japan",
                    "description": "Tokyo is a vibrant city blending modern technology with traditional culture, offering unique experiences around every corner.",
                    "image": "https://i.postimg.cc/905cTG8h/erik-eastman-4-HG5hlhm-Zg8-unsplash.jpg"
                  },
                  {
                    "id": 4,
                    "name": "Rome",
                    "country": "Italy",
                    "description": "Rome, the Eternal City, is steeped in history and is home to ancient ruins, stunning architecture, and delicious cuisine.",
                    "image": "https://i.postimg.cc/wBMxdxyS/caleb-miller-0-Bs3et8-FYyg-unsplash.jpg"
                  },
                  {
                    "id": 5,
                    "name": "Barcelona",
                    "country": "Spain",
                    "description": "Barcelona is known for its unique architecture, beautiful beaches, and vibrant arts and culinary scenes.",
                    "image": "https://i.postimg.cc/tT1gFR9h/mattia-bericchia-mnu-Iw2i-Tb7w-unsplash.jpg"
                  },
                  {
                    "id": 6,
                    "name": "Rio de Janeiro",
                    "country": "Brazil",
                    "description": "Rio de Janeiro boasts stunning beaches, lush landscapes, and the iconic Christ the Redeemer statue.",
                    "image": "https://i.postimg.cc/7LRHPvSb/agustin-diaz-gargiulo-7-F65-HDP0-E0-unsplash.jpg"
                  },
                  {
                    "id": 7,
                    "name": "Bangkok",
                    "country": "Thailand",
                    "description": "Bangkok is a city of contrasts, with bustling street markets, ornate temples, and a lively nightlife.",
                    "image": "https://i.postimg.cc/h4djjGyn/florian-wehde-y3sid-Wv-Dxg-unsplash.jpg"
                  },
                  {
                    "id": 8,
                    "name": "Cape Town",
                    "country": "South Africa",
                    "description": "Cape Town offers breathtaking natural beauty, including Table Mountain and stunning coastal landscapes.",
                    "image": "https://i.postimg.cc/JzP7gHnN/tobias-reich-1-Gg-Wb-P74ph-Y-unsplash.jpg"
                  },
                  {
                    "id": 9,
                    "name": "Sydney",
                    "country": "Australia",
                    "description": "Sydney is famous for its iconic Opera House, beautiful harbor, and vibrant cultural scene.",
                    "image": "https://i.postimg.cc/Prnq8k9w/leigh-Wp3x-WCVXMCI-unsplash.jpg"
                  },
                  {
                    "id": 10,
                    "name": "Istanbul",
                    "country": "Turkey",
                    "description": "Istanbul bridges two continents, offering a mix of rich history, stunning architecture, and vibrant markets.",
                    "image": "https://i.postimg.cc/W12bXw2p/linus-mimietz-a9b-LObi-MPJ4-unsplash.jpg"
                  },
                  {
                    "id": 11,
                    "name": "Copenhagen",
                    "country": "Denmark",
                    "description": "Copenhagen is known for its bike-friendly streets, innovative design, and cozy hygge lifestyle.",
                    "image": "https://i.postimg.cc/X7KYfz6D/jacob-buchhave-a-B2-EUX8-Lkg-unsplash.jpg"
                  },
                  {
                    "id": 12,
                    "name": "Petra",
                    "country": "Jordan",
                    "description": "The ancient city of Petra is a UNESCO World Heritage Site known for its impressive rock-cut architecture and history.",
                    "image": "https://i.postimg.cc/RFjZdr02/filippo-cesarini-c8-F1h-J-UTrk-unsplash.jpg"
                  },
                  {
                    "id": 13,
                    "name": "Venice",
                    "country": "Italy",
                    "description": "Venice is a romantic city of canals, known for its historic architecture and unique waterways.",
                    "image": "https://i.postimg.cc/xdMVmn4Y/kit-suman-5mcnze-SHFv-E-unsplash.jpg"
                  },
                  {
                    "id": 14,
                    "name": "Prague",
                    "country": "Czech Republic",
                    "description": "Prague is a fairy-tale city with stunning castles, charming streets, and a rich cultural heritage.",
                    "image": "https://i.postimg.cc/13LZ4fMJ/martin-krchnacek-Oyoa-Cp-MCR0-U-unsplash.jpg"
                  },
                  {
                    "id": 15,
                    "name": "Cancun",
                    "country": "Mexico",
                    "description": "Cancun is a tropical paradise with beautiful beaches, vibrant nightlife, and ancient Mayan ruins.",
                    "image": "https://i.postimg.cc/hjnWb6km/aman-mz-Ey-Ep3sy-MI-unsplash.jpg"
                  }
            ]
        });
    },

    // Devuelve los detalles una sola cuidad pasandole el ID.
    getCity: (req, res) => {
    },

    // Crea una cuidad pasandole los datos en el body de la petición.
    postCity: (req, res) => {
    },

    // Elimina una sola cuidad pasandole el ID.
    deleteCity: (req, res) => {
    },

    // Modifica una sola cuidad pasandole el ID y los parametros a modificar.
    putCity: (req, res) => {
    }
}

export default controller;