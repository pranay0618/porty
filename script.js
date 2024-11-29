document.addEventListener('DOMContentLoaded', () => {
    const bookingForm = document.querySelector('.booking-form');
  
    bookingForm.addEventListener('submit', (event) => {
      event.preventDefault();
  
      // Gather form data
      const formData = new FormData(event.target);
  
      // Send data to the server
      fetch('/api/book', {
        method: 'POST',
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          // Handle successful booking
          console.log('Booking successful:', data);
        })
        .catch((error) => {
          // Handle booking error
          console.error('Booking error:', error);
        });
    });
  });