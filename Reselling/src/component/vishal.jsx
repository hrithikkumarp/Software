import React, { useState } from 'react';
import axios from 'axios';
function AirlineReservation() {
    const [formData, setFormData] = useState({
        from: '',
        to: '',
        class: 'Economy Class',
        adults: 1,
        children: 0,
        infants: 0,
        tripType: 'One Way',
        departureDate: '',
        returnDate: '',
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };
    const calculateBaseFare = (from, to) => {
        // Define your fare lookup based on the from and to airports
        const fareLookup = {
            'Chennai': {
                'Qatar': 1000,
                'Singapore': 1200,
                'Malaysia': 800,
            },
            'Qatar': {
                'Chennai': 1100,
                'Singapore': 900,
                'Malaysia': 750,
            },
            'Singapore': {
                'Chennai': 1300,
                'Qatar': 850,
                'Malaysia': 950,
            },
            'Malaysia': {
                'Chennai': 950,
                'Qatar': 800,
                'Singapore': 1000,
            },
        };

        return fareLookup[from][to] || 0;
    };

    
    const calculateFare = () => {
        const BASE_FARE = calculateBaseFare(formData.from,formData.to);
        let multiplier = 1;

        switch (formData.class) {
            case 'Economy Class':
                multiplier = 1;
                break;
            case 'Business Class':
                multiplier = 2;
                break;
            case 'First Class':
                multiplier = 3;
                break;
            default:
                break;
        }

        let fareForAdults = formData.adults * BASE_FARE * multiplier;
        let fareForChildren = formData.children * (BASE_FARE * multiplier * 0.5);
        let fareForInfants = formData.infants * (BASE_FARE * multiplier * 0.2);

        let totalFare = fareForAdults + fareForChildren + fareForInfants;

        if (formData.tripType === 'Round Trip') {
            totalFare *= 2;
        }

        return totalFare;
    };

    const handleSubmit = async(event) => {
        event.preventDefault();

        // Validation Checks
        if (formData.from === formData.to) {
            alert('Departure and Destination cannot be the same.');
            return;
        }

        if (!formData.from || formData.from === '-- Select --') {
            alert('Please select a valid Departure airport.');
            return;
        }

        if (!formData.to || formData.to === '-- Select --') {
            alert('Please select a valid Destination airport.');
            return;
        }

        // If all validations pass, calculate the fare
        const fare = calculateFare();
        alert(`The ticket fare is $${fare}`);
        const url = `http://localhost:3000/a/${fare}`;

// Send a POST request with the formData
axios.post(url, formData)
  .then(response => {
    // Handle the response if needed
    console.log('POST request successful:', response.data);
  })
  .catch(error => {
    // Handle errors if the request fails
    console.error('POST request error:', error);
  });
    };

    return (
        <div className="booking-page">
            <div className="booking-container">
                <h2>Airline Reservation System: Book Tickets</h2>
                <form onSubmit={handleSubmit}>
                    {/* Departure */}
                    <div className="form-group">
                        <label>Departure Airport:</label>
                        <select name="from" value={formData.from} onChange={handleInputChange}>
                            <option value="-- Select --">-- Select --</option>
                            <option value="Chennai">Chennai</option>
                            <option value="Qatar">Qatar</option>
                            <option value="Singapore">Singapore</option>
                            <option value="Malaysia">Malaysia</option>
                        </select>
                    </div>

                    {/* Destination */}
                    <div className="form-group">
                        <label>Destination Airport:</label>
                        <select name="to" value={formData.to} onChange={handleInputChange}>
                            <option value="-- Select --">-- Select --</option>
                            <option value="Qatar">Qatar</option>
                            <option value="Chennai">Chennai</option>
                            <option value="Singapore">Singapore</option>
                            <option value="Malaysia">Malaysia</option>
                        </select>
                    </div>

                    {/* Class */}
                    <div className="form-group">
                        <label>Class:</label>
                        <select name="class" value={formData.class} onChange={handleInputChange}>
                            <option value="Economy Class">Economy Class</option>
                            <option value="Business Class">Business Class</option>
                            <option value="First Class">First Class</option>
                        </select>
                    </div>

                    {/* Adults */}
                    <div className="form-group">
                        <label>No. of Adults:</label>
                        <input type="number" name="adults" value={formData.adults} onChange={handleInputChange} />
                    </div>

                    {/* Children */}
                    <div className="form-group">
                        <label>No. of Children:</label>
                        <input type="number" name="children" value={formData.children} onChange={handleInputChange} />
                    </div>

                    {/* Infants */}
                    <div className="form-group">
                        <label>No. of Infants (below 2 years):</label>
                        <input type="number" name="infants" value={formData.infants} onChange={handleInputChange} />
                    </div>

                    {/* Trip Type */}
                    <div className="form-group">
                        <label>Trip Type:</label>
                        <select name="tripType" value={formData.tripType} onChange={handleInputChange}>
                            <option value="One Way">One Way</option>
                            <option value="Round Trip">Round Trip</option>
                        </select>
                    </div>

                    {/* Departure Date */}
                    <div className="form-group">
                        <label>Departure Date:</label>
                        <input type="date" name="departureDate" value={formData.departureDate} onChange={handleInputChange} />
                    </div>

                    
                    {/* {formData.tripType === 'Round Trip' && (
                        <div className="form-group">
                            <label>Return Date:</label>
                            <input type="date" name="returnDate" value={formData.returnDate} onChange={handleInputChange} />
                        </div>
                    } */}

                    {/* Submit Button */}
                    <div className="form-group">
                        <button type="submit">Calculate Amount</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AirlineReservation;