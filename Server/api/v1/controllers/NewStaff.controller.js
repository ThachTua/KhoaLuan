const newStaffModel = require('../models/NewStaff.model')

module.exports.Get = async (req,res) =>{
  try{
    const filter = req.query;
    const result = await newStaffModel.find(filter)
    return res.json(result)    
  }
  catch(err)
  {
    res.sendStatus(403)
  }
}

module.exports.CreatByFilesCSV = async (req,res) =>{
    try{
        const  data  = req.body;
        for (i=0; i<data.length;i++)
        {
          newStaffModel.create(data[i])
        }
        const result = await newStaffModel.find();
        return res.status(200).json(result);
      }
      catch(err)
      {
        return res.sendStatus(403)
      }
}