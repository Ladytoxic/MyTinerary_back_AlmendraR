import Itinerary from "../model/Itinerary.js";

const controller = {

  // CREATE
  // Crea un itinerario pasandole los datos en el body de la petición.
  postItinerary: async (req, res) => {
    try {
      const newItinerary = await Itinerary.create(req.body)
      return res.status(201).json({
        success: true,
        message: 'Itinerary created'
      })
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: 'Error creating Itinerary'
      })
    }
  },

  // READ
  // Filtra de todas los itinerario las queries // Devuelve todas las cuidades.
  getItineraries: async (req, res) => {

    let queries = {}

    if (req.query.name) {
      queries.name = new RegExp(`^${req.query.name}`, 'i');
    }


    try {
      const itineraries = await Itinerary.find(queries).populate('user').populate('city');
      if (itineraries.length > 0) {
        return res.status(200).json({
          success: true,
          itineraries
        })
      }
      return res.status(404).json({
        success: false,
        message: 'No itinerary found'
      })

    } catch (error) {
      console.log(error);
      return res.status(500).json({
        success: false,
        message: 'Error getting the itineraries'
      })
    }
  },

  // Devuelve un itinerario por el ID
  getItineraryById: async (req, res) => {
    try {
      const oneItinerary = await Itinerary.findById(req.params.id);
      if (oneItinerary) {
        return res.status(200).json({
          success: true,
          Itinerary: oneItinerary
        })
      }
      return res.status(404).json({
        success: false,
        message: 'Id not found'
      })

    } catch (error) {
      return res.status(500).json({
        success: false,
        message: 'Failed to get itinerary'
      })
    }
  },

  // UPDATE
  // Modifica un solo itinerario pasandole el ID y los parametros a modificar.
  updateItinerary: async (req, res) => {
    try {
      await Itinerary.updateOne({ _id: req.params.id }, req.body)

      return res.status(200).json({
        success: true,
        message: 'Update itinerary'
      })
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: 'Error update itinerary'
      })
    }
  },

  // DELETE
  // Elimina un solo itinerario pasandole el ID.
  deleteItinerary: async (req, res) => {
    try {
      await Itinerary.deleteOne({ _id: req.params.id })

      return res.status(200).json({
        success: true,
        message: 'Delete itinerary'
      })
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: 'Error delete itinerary'
      })
    }
  },


}

export default controller;