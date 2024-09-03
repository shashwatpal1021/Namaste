import express from 'express';
import { Name } from "@repo/common/config"


const app = express();

console.log(Name)

app.get('/', (req, res) => {
  res.send("Hello shashwat pal this is u ",)
})

app.listen(8000, () => {
  console.log('Server started on port 8000');
});
