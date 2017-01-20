import express from 'express';
import path from 'path';
import open from 'open';

const PORT = 3000;
const app = express();

app.get('/', (req, res)=>{
  res.sendFile(path.join(__dirname, '../src/'));
});

app.listen(PORT, (err) => {
  if(err){
    console.log('error', err);
  } else {
    console.log('app listening on port' + PORT);
    open('http://localhost:' + PORT);
  }
});
