const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3001;


// mongoose.connect('mongodb+srv://carfatihnail:<password>@cluster0.lsnjl9j.mongodb.net/?retryWrites=true&w=majority')
//   .then(() => console.log('Connected!'));
  mongoose
  .connect('mongodb+srv://carfatihnail:Cwo4DWHIHHKNNfVk@cluster0.lsnjl9j.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,

  })
  .then(() => {
    console.log('DB Connected Successfully');
  });
 
app.get('/', (req, res) => {
  res.send('Merhaba, API çalışıyor!');
});

app.get('/enes', (req, res) => {
res.json({name: 'Enes'});
    
  });

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});