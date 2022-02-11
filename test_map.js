
exports.map_cells = (req, res) => {
  let headers = req.body.headers || null;
  let fields = req.body.fields || null;
  let indexes = [];
  for(index in fields){
    let tmp =  headers.findIndex(fields[index]);
    if(tmp != -1){
      indexes.push(tmp);
    }else{
      indexes.push("");
    }
  }
  res.status(200).send(indexes);
};
