import Activity from '../model/activities.js'
const controller = {

  // CREATE
  // Crea una actividad pasandole los datos en el body de la petición.
  postActivity: async (req, res) => {
    try {
      const newActivity = await Activity.create(req.body)
      return res.status(201).json({
        success: true,
        message: 'Activity created'
      })
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: 'Error creating Activity'
      })
    }
  },

  // READ
  // Filtra de todas las actividades las queries // Devuelve todas las cuidades.
  getActivities: async (req, res) => {

    let queries = {}

    if (req.query.name) {
      queries.name = new RegExp(`^${req.query.name}`, 'i');
    }


    try {
      const Activities = await Activity.find(queries)
      if (itineraries.length > 0) {
        return res.status(200).json({
          success: true,
          itineraries
        })
      }
      return res.status(404).json({
        success: false,
        message: 'No Activity found'
      })

    } catch (error) {
      console.log(error);
      return res.status(500).json({
        success: false,
        message: 'Error getting the activities'
      })
    }
  },

  // Devuelve una actividad por el ID
  getActivityById: async (req, res) => {
    try {
      const oneActivity = await Activity.findById(req.params.id)
        .populate('user', 'name image')
        .populate('activities', 'name image description')
        .populate('city', 'name country');
      if (oneActivity) {
        return res.status(200).json({
          success: true,
          Activity: oneActivity
        })
      }
      return res.status(404).json({
        success: false,
        message: 'Id not found'
      })

    } catch (error) {
      return res.status(500).json({
        success: false,
        message: 'Failed to get Activity'
      })
    }
  },

  // UPDATE
  // Modifica una sola actividad pasandole el ID y los parametros a modificar.
  updateActivity: async (req, res) => {
    try {
      await Activity.updateOne({ _id: req.params.id }, req.body)

      return res.status(200).json({
        success: true,
        message: 'Update Activity'
      })
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: 'Error update Activity'
      })
    }
  },

  // DELETE
  // Elimina una sola actividad pasandole el ID.
  deleteActivity: async (req, res) => {
    try {
      await Activity.deleteOne({ _id: req.params.id })

      return res.status(200).json({
        success: true,
        message: 'Delete Activity'
      })
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: 'Error delete Activity'
      })
    }
  },


}

export default controller;