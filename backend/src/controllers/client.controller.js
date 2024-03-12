import User from '../models/user.model.js'

const client = async (req,res,next) =>{
    const {name,lastname,email,mobile,project} = req.body
    try {
        if (
            !req.body.name ||
            !req.body.lastname ||
            !req.body.email ||
            !req.body.mobile ||
            !req.body.project
          ) {
            return response.status(400).send({
                message: 'Send all required fields'
              });
          }
          const client = new User({name,lastname,email,mobile,project}) 
          await client.save()
          res.status(200).json(`${name} ${lastname} Regiestered Sucessfully`)  
    } catch (error) {
        next(error)
    }
}

const showall = async (request, response , next) => {
    try {
      const clients = await User.find({});
  
      return response.status(200).json(clients);
    } catch (error) {
        next(error)
    }
  }
const getone = async (request, response , next) => {
    try {
      const { id } = request.params
      const client = await User.findById(id);
      return response.status(200).json(client);
    } catch (error) {
        next(error)
    }
  }
const deleteClient = async (req, res , next) => {
    try {
      const { id } = req.params
      const deletedClient = await User.findByIdAndDelete(id)
      if (!deletedClient) {
        return res.status(404).json({ message: 'Client not found' })
      }
      res.status(200).json(`Deleted Sucessgully`)
    } catch (error) {
      next(error)
    }
  }

const updateClient = async (req,res,next) =>{
  try {
    const {id} = req.params
    const updateClient = await User.findByIdAndUpdate(id,req.body)
    console.log(updateClient);
    res.status(200).json(updateClient)
  } catch (error) {
    next(error)
  }
}  
export {client , showall, deleteClient , updateClient, getone}