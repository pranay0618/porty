const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Welcome to the booking API!');
  });

app.post('/api/book', (req, res) => {
  // Process the booking form data
  const { name, email, phone, therapist, service, date, time } = req.body;

  // Validate the input data
  if (!name || !email || !phone || !therapist || !service || !date || !time) {
    return res.status(400).json({ error: 'Please fill out all the required fields.' });
  }

  // Save the booking data to the database or a third-party service
  // (This is a simplified example, in a real-world scenario, you would implement this functionality)
  const bookingData = {
    name,
    email,
    phone,
    therapist,
    service,
    date,
    time,
  };


  console.log('New booking:', bookingData);
  res.status(200).json({ message: 'Booking successful!' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});