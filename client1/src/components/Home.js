import React,{useEffect,useState} from 'react';
import './Home.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

// ProductPopup Component
const ProductPopup = ({ isOpen, onClose, title, content ,imageUrl}) => {
  return (
    <div className={`product-popup ${isOpen ? 'open' : ''}`} >
      {isOpen && (
        <div className="popup-content">
          <button className="close-button" onClick={onClose}>
            Close
          </button>
          <h2>{title}</h2>
          <div className="image-container">
            <img src={imageUrl} alt="Product" />
          </div>
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Set the duration of the animation
      offset: 100,
      once: false, // Only animate once
    });
  }, []);
  

  const images = [
    '/images/patti.jpeg', 
  ];


  /* 
    for contact: 
  */
  
    const [showDialog] = useState(true);
    const [formData, setFormData] = useState({
      name: '',
      bname: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      organizationType: '',
    });
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      fetch('https://localhost:3001/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('Success:', data);
        })
        .catch((error) => {
          console.error('Error:', error);
        });

        //for domain

        fetch('https://mittalfood.com/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log('Success (Mittalfood):', data);           
          })
          .catch((error) => {
            console.error('Error (Mittalfood):', error);
          });
          
          fetch('http://mittalfood.com/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log('Success (Mittalfood):', data);           
          })
          .catch((error) => {
            console.error('Error (Mittalfood):', error);
          });
      // www domain

      fetch('https://www.mittalfood.com/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log('Success (Mittalfood):', data);           
          })
          .catch((error) => {
            console.error('Error (Mittalfood):', error);
          });
          
          fetch('http://www.mittalfood.com/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log('Success (Mittalfood):', data);           
          })
          .catch((error) => {
            console.error('Error (Mittalfood):', error);
          });
  
      setFormData({
        name: '',
        bname: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        organizationType: '',
      });
    };
    const organizationTypes = [
      'Farsan Shops',
      'Frozen Food Distribution - Wholesale',
      'Frozen Food Distribution - Retail',
      'Food Distribution - HORECA',
      'Modern Wholesale (Cash and Carry)',
      'Large Chain of Hotels & Restaurants',
      'Exporter/Importer',
    ];

    // for product
    const products = [
      {
        id: 1,
        name: 'Samosa Patti',
        description: 'To make delicious different types of samosas.',
        sizes: ['2\"X8\"','3\"X10\"','2\"X6\"','2.7\"X8\"','2.5\"X8\"','1.5\"X10\"','3.75\"X10\"','6\"X19\"','3.5\"X10\"'],
        availability: true,
        image: '/images/samosa.jpeg',
      },
      {
        id: 2,
        name: 'Spring Roll Patti',
        description: 'To make delicious different types of spring rolls.',
        sizes: ['5\"X5\"','6\"X6\"','8\"X8\"','10\"X10\"'],
        availability: true,
        image: '/images/springroll.jpeg',
      },
    ];
    const [showSamosaPopup, setShowSamosaPopup] = useState(false);
    const [showSpringRollPopup, setShowSpringRollPopup] = useState(false);

    const toggleSamosaPopup = () => {
      setShowSamosaPopup(!showSamosaPopup);
    };
  
    // Toggle popup for Spring Roll
    const toggleSpringRollPopup = () => {
      setShowSpringRollPopup(!showSpringRollPopup);
    };
  

    // values
    const valuesData = [
      {
        title: 'Transparency & Trust',
        description: 'Building trust is paramount to us. We believe in transparency — from the sourcing of our ingredients to the production process. You can trust that when you choose Khushboo dough sheets, you are choosing a brand that values honesty and integrity.',
      },
      {
        title: '',
        description: 'Khushboo dough sheets are premium quality dough sheets which are consistent in texture, taste and performance. They are a versatile and convenient solution for cooking enthusiasts, chefs, and food businesses. Crafted with precision and quality, these dough sheets are designed to elevate your gourmet experience, offering a variety of sizes and a perfect balance of flakiness and flexibility. These dough sheets are READY YO USE, EASY TO PEEL AND EASY TO MAKE.',
      },
      {
        title: '',
        description: 'Our Quality Policy - To use the best Ingredients with Stringent Specifications.',
      },
      {
        title: '',
        description: 'Fried Samosas, Spring Rolls and other products made from our sheets gives a crackling crispiness experience while eating.',
      },
    ];
  return (
    <div>
      {/* home page */}
      <section id="home" className="home-section" > 
        {/* <p>Hii</p> */}
        <div className="hii">
        <div className="left-part">
          <div className="image-container" data-aos="fade-down">
            <img
              src={images}
              alt={`Image`}
            />
          </div>
        </div>
        <div className="right-part" data-aos="fade-up">
          <h2>UNLEASH YOUR INNER CHEF</h2>
          <h3>
            With our ready to make dough sheets,<br/> add flavour with a roll and savour your soul.
          </h3>
        </div>
        </div>
        
      </section>

      <div className="section-divider"></div>
    {/* about page */}
      <section id="about" >
        <div className="about-content" data-aos="fade-right">
        {/* data-aos="fade-up" */}
          {/* <h2>Mittal Food</h2> */}
          <h4>
          Mittal Food stands as a preeminent manufacturing powerhouse specializing 
          in the production of premium-quality dough sheets in India. 
          Our corporate headquarters is located in the vibrant city of Vapi,
           nestled within the picturesque District of Valsad in Gujarat. Leveraging a wealth 
           of industry expertise, we take immense pride in our 15-year legacy, during which 
           we have consistently demonstrated a commitment to excellence in both dough sheet 
           manufacturing and overall product quality.
           <br />
           <br />
           At Mittal Food, we understand that 
           quality is paramount. Our commitment to delivering unparalleled excellence is 
           reflected in every facet of our manufacturing process. From sourcing premium 
           raw materials to employing rigorous quality control measures, 
           we leave no stone unturned in ensuring that our dough sheets 
           meet and exceed the highest industry standards.

          </h4>
          
        </div>

      </section>

      <div className="section-divider"></div>

      {/* products page */}
      <section id="products" className="products-section">
        <br/>
        <br/>
        <h2 data-aos="fade-down">OUR PRODUCTS</h2>
        <h3>We offer a diverse range of varieties and sizes of samosa and spring roll dough sheets.</h3>
        <div className="product-container" data-aos="fade-up">
          {products.map((product) => (
            <div key={product.id} className="product-box">
              <img src={product.image} alt={product.name} />
              <div className="product-details" data-aos="fade-up">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <p>Sizes: {product.sizes.join(', ')}</p>
                <p>Availability: {product.availability ? 'In Stock' : 'Out of Stock'}</p>
                <div className="button-container">
                  {product.id === 1 && (
                    <button onClick={toggleSamosaPopup}>View Details</button>
                  )}
                  {product.id === 2 && (
                    <button onClick={toggleSpringRollPopup}>View Details</button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

       {/* Render ProductPopup components */}
       <ProductPopup
        isOpen={showSamosaPopup}
        onClose={toggleSamosaPopup}
        title={<><br/></>}
        
        content={
          <>
            <h3>Usability: </h3>
            <ul>
              <li>Samosa Pockets</li>
              <li>Samosa Pinwheels</li>
              <li>Samosa Cones</li>
              <li>Cigar Rolls</li>
              <li>Money Pockets</li>
            </ul>
          </>
        }
        imageUrl="/images/samosaD.jpeg"
      />
      <ProductPopup
        isOpen={showSpringRollPopup}
        onClose={toggleSpringRollPopup}
        title={<><br/></>}
        content={
          <>
            
          </>
        }
        imageUrl="/images/springD.jpeg"
      />
      <div className="section-divider"></div>
    {/* values page */}
      <section id="values" >

        <div className="values-container" data-aos="fade-right">
          <h2 data-aos="fade-down">WHY CHOOSE US</h2>
          {valuesData.map((value, index) => (
            <div key={index} className="value-box" data-aos="fade-up">
              <h3>{value.title}</h3>
              <p>
                {value.description.split("READY YO USE, EASY TO PEEL AND EASY TO MAKE").map((part, index) => (
                  <React.Fragment key={index}>
                    {index > 0 && <span >READY YO USE, EASY TO PEEL AND EASY TO MAKE</span>}
                    {part}
                  </React.Fragment>
                ))}
              </p>
            </div>
          ))}
        </div>
      </section>
      <div className="section-divider"></div>
    
     {/* contact page */}
     <section id="contact">
      <div className="contact-container">
        <div className="contact-text" data-aos="fade-up">
          <h2>We are at your service. Contact us now!</h2>
          <h3>We love our customers, so feel free to contact us during normal business hours.</h3>
          <h3 >Message us on Whatsapp:  <a 
              href="https://api.whatsapp.com/send?phone=9824125433" 
              className='whatsapp-button'
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-whatsapp"></i>
            </a> </h3>
        </div>

        <div className="contact-form" data-aos="fade-up">
          <h2>Send us a Message!</h2>
          <div className={`dialog ${showDialog ? 'show' : ''}`}></div>
            <form autoComplete="off">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} autoComplete="off" required />

              <label htmlFor="name">Business Name:</label>
              <input type="text" id="bname" name="bname" value={formData.bname} onChange={handleInputChange} autoComplete="off" required />

              <label htmlFor="email">Email ID:</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} autoComplete="off" required />


              <label htmlFor="phone">Phone No:</label>
              <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleInputChange} autoComplete="off" required />
              <br />
              <br />
              <div className="organization-type radio-container">
                <label>Type of Organization:</label><br/>
                <div className="organization-types">
                  {organizationTypes.map((type, index) => (
                    <div key={index} className="organization-type-item">
                      <input
                        type="radio"
                        id={`organizationType${index}`}
                        name="organizationType"
                        value={type}
                        checked={formData.organizationType === type}
                        onChange={handleInputChange}
                      />
                      <label htmlFor={`organizationType${index}`}>{type}</label>
                    </div>
                  ))}
                </div>
              </div>

              <br />
              <br />
              <label htmlFor="subject">Subject:</label>
              <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleInputChange} autoComplete="off" required />

              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" value={formData.message} onChange={handleInputChange} autoComplete="off" required />
              <br/>
              <br/>
              <button type="submit" onClick={handleSubmit}>Send Message</button>
            </form>
          </div>
        </div>
      </section>
      
      
    </div>
  );
};

export default Home;
