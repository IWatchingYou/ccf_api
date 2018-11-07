module.exports = {
  upload(req, res){
    return res.status(200).send({message: req.file})
  }
}