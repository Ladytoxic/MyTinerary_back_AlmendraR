import City from "../model/Cities.js";

const controller = {
  // Devuelve todas las cuidades.
  getCities: async (req, res) => {

    let queries = {}

    if (req.query.name) {
      queries.name = req.query.name
    }

    try {
      const cities = await City.find(queries)

      return res.status(200).json({
        success: true,
        cities
      })

    } catch (error) {
      console.log(error);
      return res.status(500).json({
        success: false,
        message: 'Error getting the cities'
      });
    }
  },

  // Crea una cuidad pasandole los datos en el body de la petición.
  postCity: async (req, res) => {
    try {
      const newCity = await City.create(req.body)
      return res.status(201).json({
        success: true,
        message: 'City created'
      })
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: 'Error creating city'
      })
    }
  },

  // Elimina una sola cuidad pasandole el ID.
  deleteCity: (req, res) => {
    res.send('Delete city');
  },

  // Modifica una sola cuidad pasandole el ID y los parametros a modificar.
  putCity: (req, res) => {
    res.send('Update city');
  }
}

export default controller;