import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './carsol.css'; // Correct the import statement for your CSS file

const carouselStyle = {
  marginRight: '15px',
  borderRadius: '15px',
  marginLeft: '15px',
};

const im = {
  maxWidth: '100%',
  maxHeight: '80vh',
  alignItems: 'center',
  justifyContent: 'center',
  borderTopRightRadius: '20px',
  borderTopLeftRadius: '20px',
  borderBottomLeftRadius: '20px',
  borderBottomRightRadius: '20px',
};

const Carsl = () => {
  return (
    <div className="carousel-container" style={carouselStyle}>
      <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="3" // Add a new button for the 4th slide
            aria-label="Slide 4"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://imgs.search.brave.com/9Vh8B8EQoglBC1-A50mQ9D-DIwvyEURNAVrzKqqE8ek/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/bW9uZXlzYXZpbmdl/eHBlcnQuY29tL2Nv/bnRlbnQvZGFtL3Nl/bGxfX29sZF9waG9u/ZV9faGVyby5qcGcu/cmVuZGl0aW9uLjMy/MC4zMjAuanBn"
              className="d-block w-100"
              alt="..."
              style={im}
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>OutDated</h5>
              <p>If You're Mobile is outdated,Sell it and You can purchase an Mobile in it too.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://imgs.search.brave.com/-gX3KkpOhGFWyhLXsJFF-a5OfB0ZSZ7fPIoQn89mh5Y/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9oaXBz/LmhlYXJzdGFwcHMu/Y29tL2htZy1wcm9k/L2ltYWdlcy9tb2Jp/bGUtcGhvbmUtd2l0/aC1icm9rZW4tc2Ny/ZWVuLWRpc3BsYXkt/cm95YWx0eS1mcmVl/LWltYWdlLTE1OTgz/NjYxODkuanBnP3Jl/c2l6ZT05ODA6Kg"
              className="d-block w-100"
              alt="..."
              style={im}
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Conditions accepted</h5>
              <p>We accepted conditions such as broken display and get pay accordingly.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://imgs.search.brave.com/im1QTaZcFf6YATOgA3jXtkspEMvTX8h371kpNWf2DTU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zM24u/Y2FzaGlmeS5pbi9i/dWlsZGVyL2NkMTM3/NjRiMTUzZTQ2ZTE5/ZjljNjU1MWVlNTJi/NWU2LndlYnA"
              className="d-block w-100"
              alt="..."
              style={im}
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Get Money</h5>
              <p>Sell Mobile and Get Money.</p>
            </div>
          </div>
          <div className="carousel-item"> {/* Add a new carousel item */}
            <img
              src="https://imgs.search.brave.com/BPfd7zKoz-yWfiYsDt4E_nYFmgNn0nRskjlh45WHZ6I/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/cXVpY2ttb2JpbGUu/aW4vYXNzZXRzL2lt/YWdlcy9zb2xkX3Nl/bGxfc2lkZS53ZWJw" // Replace with the URL of your fourth image
              className="d-block w-100"
              alt="..."
              style={im}
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Service</h5> {/* Change the label for the fourth slide */}
              <p>We provide the decent services on buying and selling mobiles.</p> {/* Change the content */}
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" style={{ color: 'black' }}></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" style={{ color: 'black' }}></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carsl;
