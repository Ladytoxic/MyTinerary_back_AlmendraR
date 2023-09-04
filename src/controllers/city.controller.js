import City from "../model/Cities.js";

const controller = {

  // CREATE
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

  // READ
  // Filtra de todas las cuidades las queries // Devuelve todas las cuidades.
  getCities: async (req, res) => {

    let queries = {}

    if (req.query.name) {
      queries.name = new RegExp(`^${req.query.name}`, 'i');
    }
    if (req.query.country) {
      queries.country = req.query.country
    }

    try {
      const cities = await City.find(queries)
        .populate('itineraries')
        .populate('user');
      if (cities.length > 0) {
        return res.status(200).json({
          success: true,
          cities
        })
      }
      return res.status(404).json({
        success: false,
        message: 'No city found'
      })

    } catch (error) {
      console.log(error);
      return res.status(500).json({
        success: false,
        message: 'Error getting the cities'
      })
    }
  },

  // Devuelve una cuidad por el ID
  getCityById: async (req, res) => {
    try {
      const oneCity = await City.findById(req.params.id)
      .populate('itineraries');
      if (oneCity) {
        return res.status(200).json({
          success: true,
          city: oneCity
        })
      }
      return res.status(404).json({
        success: false,
        message: 'Id not found'
      })

    } catch (error) {
      return res.status(500).json({
        success: false,
        message: 'Failed to get city'
      })
    }
  },

  // UPDATE
  // Modifica una sola cuidad pasandole el ID y los parametros a modificar.
  updateCity: async (req, res) => {
    try {
      await City.updateOne({ _id: req.params.id }, req.body)

      return res.status(200).json({
        success: true,
        message: 'Update City'
      })
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: 'Error update city'
      })
    }
  },

  // DELETE
  // Elimina una sola cuidad pasandole el ID.
  deleteCity: async (req, res) => {
    try {
      await City.deleteOne({ _id: req.params.id })

      return res.status(200).json({
        success: true,
        message: 'Delete City'
      })
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: 'Error delete city'
      })
    }
  },


}

export default controller;