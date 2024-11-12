import React from 'react';
import './NidhiLand.css';
import FirstPageVideo from '../Images/FirstPageVideo.mp4';
import day from '../Images/day.jpg';
import night from '../Images/night.jpg';
import lastSection from '../Images/lastSection.jpg';
import { FaMapMarkerAlt } from 'react-icons/fa';  // Location icon
import { FaPhone } from 'react-icons/fa';  
import { FaInstagram, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import img1 from '../Images/img1.jpg';
import img2 from '../Images/img2.jpg';
import img3 from '../Images/img3.jpg';
import img4 from '../Images/img4.jpg';
import img5 from '../Images/img5.jpg';
import img6 from '../Images/img6.jpg';
import img7 from '../Images/img7.jpg';
import ongoing1 from '../Images/ongoing1.jpg';
import ongoing2 from '../Images/ongoing2.jpg';
import logo from '../Images/logo.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

class EstateWebsite extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            sliderValue: 50,
            selectedCategory: 'ongoing',
            currentTestimonial: 0,
            lastScrollY: 0,
            isHeaderVisible: true
         };
    }

    componentDidMount() {
        this.interval = setInterval(() => {
          this.setState(prevState => ({
            currentTestimonial: (prevState.currentTestimonial + 1) % this.testimonials.length
          }));
        }, 2000); 

        window.addEventListener('scroll', this.handleScroll);

        AOS.init({
            duration: 900, 
            once: true
        });
      }
    
    componentWillUnmount() {
        clearInterval(this.interval); 
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleSliderChange = (e) => {
        this.setState({ sliderValue: e.target.value });
    };

    handleCategoryClick = (category) => {
        this.setState({ selectedCategory: category });
    };

    testimonials = [
        { text: "“My quest for an apartment in the Mannagudda area led me to Nidhiland Vrindavan Apartments. The apartment itself was close to completion and it was easy for my wife and myself to see how this was going to be a great home for our little son and ourselves. Sure, the amenities were all there along with excellent security, but... ”", author: "Mr. Parineeth Rau, Chartered Accountant" },
        { text: "“Choosing Nidhiland was one of the best decisions...”", author: "Ms. Rina Patel, Architect" },
        { text: "“Nidhiland’s attention to detail made our apartment search stress-free...”", author: "Mr. Ravi Kumar, Business Owner" },
        // { text: "“An investment with Nidhiland is worth every penny...”", author: "Mrs. Shalini Rao, Teacher" }
    ];
    
    
    handleDotClick = (index) => {
        this.setState({ currentTestimonial: index });
    };

    handleScroll = () => {
        const { lastScrollY } = this.state;
    
        if (window.scrollY > lastScrollY && window.scrollY > 50) {
          // Hide header on scroll down
          this.setState({ isHeaderVisible: false });
        } else if (window.scrollY < lastScrollY) {
          // Show header on scroll up
          this.setState({ isHeaderVisible: true });
        }
        this.setState({ lastScrollY: window.scrollY });
    };

    render() {
        const { sliderValue, currentTestimonial, isHeaderVisible, selectedCategory } = this.state;

        const projects = {
            ongoing: [
              { src: ongoing1, alt: 'Ongoing Project 1' },
              { src: ongoing2, alt: 'Ongoing Project 2' }
            ],
            completed: [
              { src: './Images/completed1.jpg', alt: 'Completed Project 1' },
              { src: './Images/completed2.jpg', alt: 'Completed Project 2' }
            ],
            upcoming: [
              { src: './Images/upcoming1.jpg', alt: 'Upcoming Project 1' },
              { src: './Images/upcoming2.jpg', alt: 'Upcoming Project 2' }
            ]
        };

        return (
          <div className="App">
            {/* Header */}
            <header className={`header ${isHeaderVisible ? 'visible' : 'hidden'}`}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%", paddingTop: "10px", paddingBottom: "10px" }}>
                <div className="logo">
                    <img style={{width: "55px", height:"40px", paddingLeft: "20px"}} src={logo} alt="Company Logo" />
                </div>
                <nav className="nav" style={{ flexGrow: 1, display: "flex", justifyContent: "center" }}>
                    <a style={{ fontSize: "11px" }} href="#home">Home</a>
                    <a style={{ fontSize: "11px" }} href="#about">About Us</a>
                    <a style={{ fontSize: "11px" }} href="#projects">Projects</a>
                    <a style={{ fontSize: "11px" }} href="#rental">Rental Center</a>
                </nav>
                <div style={{paddingRight: "20px"}}className="contact-link">
                    <a style={{ fontSize: "11px", }} href="#contact">Contact Us</a>
                </div>
            </div>

            </header>
    
            {/* Video Section */}
            <section className="video-container">
              <video className="background-video" autoPlay loop muted>
                <source src={FirstPageVideo} type="video/mp4" />
              </video>
              <div className="overlay-text">
                <h1 style={{fontSize: "42px"}}>THE</h1>
                <h1 style={{fontSize: "42px", fontFamily: "Tex Gyre Pagelle, serif", marginTop: "-5px"}}>PERFECT</h1>
                <h1 style={{fontSize: "42px", marginTop: "-10px"}}>HOME</h1>
                <p style={{fontSize: "9px", marginTop: "-5px"}}>Built with precision and care</p>
              </div>
            </section>

            <section className="about-nidhiland-page">
                <div style={{marginTop: "100px", paddingLeft: "65px"}} className="page2-text-section">
                    <h1  data-aos="fade-up" data-aos-duration="1200" style={{ margin: "10px", fontSize: "73px", textAlign: "left"}}>WE LOVE TO<br /> BUILD.</h1>
                    <div  data-aos="fade-up" data-aos-duration="1200" style={{ margin: "10px", fontSize: "67px", textAlign: "left", width: "600px" }}>IT'S WHO WE ARE<br /> AND WHAT WE<br /> DO.</div>
                    <p data-aos="fade-up" style={{ margin: "10px", fontSize: "18px", textAlign: "left", width: "624.6px", marginTop: "30px", marginBottom: "30px"}}>Guided by founder Prashanth Sanil's values, Nidhiland focuses on quality, detail, and client satisfaction. Our team is committed to excellence, trust, and raising standards.</p>
                    <button style={{marginLeft: "10px", display: "block", padding: "7px", marginTop: "30px", backgroundColor: "#0c9397", color: "white", border: "none"}}>ABOUT NIDHILAND</button>
                </div>
                
                <div style={{ marginTop: "60px", marginBottom: "60px" }} className="page2-image-section">
                    <div className="main-image">
                        <img style={{ width: "145px", height: "260px", marginLeft: "150px", marginRight: "50px" }} src={img1} alt="Main Project" />
                    </div>
                    <div className="small-images">
                        <img style={{ width: "145px", height: "122px", marginLeft: "150px", marginRight: "50px" }} src={img2} alt="Project 2" />
                        <img style={{ width: "145px", height: "122px", marginLeft: "150px", marginTop: "15px", marginRight: "50px" }} src={img3} alt="Project 3" />
                    </div>
                    <div className="main-image">
                        <img style={{ width: "310px", height: "180px", marginLeft: "150px", marginTop: "0px", marginRight: "50px" }} src={img4} alt="Project 4" />
                    </div>
                    <div className="main-image">
                        <img style={{ width: "145px", height: "260px", marginLeft: "315px", marginRight: "50px" }} src={img5} alt="Main Project 5" />
                    </div>
                    <div className="small-images">
                        <img style={{ width: "145px", height: "122px", marginRight: "170px" }} src={img6} alt="Project 6" />
                        <img style={{ width: "145px", height: "122px", marginRight: "170px", marginTop: "15px" }} src={img7} alt="Project 7" />
                    </div>
                </div>

            </section>

            <div class="section">
                <div class="container-full max-width-1440px w-container">
                    <div class="call-tio-action-flex">
                        <div class="call-to-action-image"></div>
                        <div data-aos="fade-up" class="call-to-action-wrapper">
                            <h1 style={{ fontSize: "40px", textAlign: "left", marginTop: "-10px", marginLeft: "40px", marginBottom: "0px", color: "white" }}>A Trusted,<br/> Collaborative<br/> Partner Focused<br/> on Your Goals</h1>
                            <p style={{ fontSize: "14px", textAlign: "left", width:"430px", marginLeft: "40px", color: "white"}}>With a focus on excellence in craftsmanship, attention to detail, and client satisfaction, we deliver lasting value by aligning with what truly matters to you.</p>
                            <button style={{ display: "block", marginLeft: "40px", padding: "7px", marginTop: "30px", backgroundColor: "#0c9397", color: "white", border: "none"}}>OUR APPROACH</button>
                        </div>
                    </div>
                </div>
            </div>

            <div data-aos="fade-up" style={{marginTop: "60px", fontSize: "30px"}}>Elegance Around the Clock: Discover Our Vision in Daylight and After Dark</div>
            <div style={{marginTop: "40px"}} className="slider-container">
                <img src={day} alt="Day View" className="day-image" />
                <div 
                    className="night-overlay" 
                    style={{ left: `${sliderValue - 100}%` }} /* Adjusts horizontal movement */
                >
                    <img src={night} alt="Night View" className="night-image" />
                </div>
                <input
                    type="range"
                    min="0"
                    max="100"
                    value={sliderValue}
                    onChange={this.handleSliderChange}
                    className="slider"
                />
            </div>


            <div className="projects-section">
                <h2 data-aos="fade-up">OUR VISION IN ACTION</h2>
                <div className="project-tabs">
                    {['ongoing', 'completed', 'upcoming'].map((category) => (
                        <span
                            key={category}
                            onClick={() => this.handleCategoryClick(category)}
                            className={this.state.selectedCategory === category ? 'active-tab' : ''}
                        >
                            {category.charAt(0).toUpperCase() + category.slice(1)}
                        </span>
                    ))}
                </div>
                <div style={{marginTop: "40px"}} className="project-images">
                    {projects[this.state.selectedCategory].map((project, index) => (
                        <img key={index} src={project.src} alt={project.alt} className="project-image" />
                    ))}
                </div>
            </div>

            <div style={{paddingTop: "30px", height: "400px"}}className="testimonials-section">
                <h2 data-aos="fade-up">VOICES OF SATISFACTION</h2>
                <p className="testimonial-text">{this.testimonials[currentTestimonial].text}</p>
                <div style={{ marginTop: "20px", fontFamily: "Raleway, sans-serif" }} className="testimonial-author">
                    <p>{this.testimonials[currentTestimonial].author}</p>
                </div>
                {/* <div style={{marginTop: "20px"}} className="dots">
                {this.testimonials.map((_, index) => (
                    <span
                    key={index}
                    className={`dot ${currentTestimonial === index ? 'active-dot' : ''}`}
                    onClick={() => this.handleDotClick(index)}
                    ></span>
                ))}
                </div> */}
                <div className="dots">
                    {[...Array(3)].map((_, index) => (
                        <span
                        key={index}
                        className={`dot ${currentTestimonial === index ? 'active-dot' : ''}`}
                        onClick={() => this.handleDotClick(index)}
                        ></span>
                    ))}
                </div>
            </div>
            
            <div className="contact-section" style={{ backgroundImage: `url(${lastSection})`, filter: 'opacity(0.8)', backgroundPosition: '50% 55%', }}>
                <div className="contact-left">
                    <h2 style={{textAlign: "left", fontSize: "16px", marginLeft: "20px", fontFamily: "Raleway, sans-serif"}}>We’d Love to Hear From You</h2>
                    <p style={{ display: "flex", alignItems: "flex-start", fontSize: "12px", marginTop: "20px", marginLeft: "20px" }}>
                        <FaMapMarkerAlt style={{ marginRight: "8px", width: "10px", height: "10px", marginTop: "4px" }} />
                        <span style={{textAlign: "left", fontSize: "12px", fontFamily: "Raleway, sans-serif"}}>
                            Nidhi Land Infrastructure Developers India<br />
                            Pvt. Ltd<br />
                            Regd. Office: 5th Floor<br />
                            New Berry Enclave, Bejai-Kapikad, Mangalore<br />
                            - 575 004
                        </span>
                    </p>
                    <p style={{textAlign: "left", fontSize: "12px", marginTop: "15px", marginLeft: "20px"}}> <FaEnvelope style={{ marginRight: "8px" }} /> Email: info@nidhiland.com</p>
                    <p style={{textAlign: "left", fontSize: "12px", marginTop: "15px", marginLeft: "20px"}}> <FaPhone style={{ marginRight: "8px" }} /> Phone: +91 824 - 4266999 / 2210299</p>
                </div>
                <div style={{marginRight: "180px"}} className="contact-middle">
                    <h3 style={{textAlign: "left", fontSize: "16px"}}>Pages</h3>
                    <p style={{textAlign: "left", fontSize: "12px", marginTop: "20px"}}>ABOUT US</p>
                    <p style={{textAlign: "left", fontSize: "12px", marginTop: "8px"}}>RENTAL</p>
                    <p style={{textAlign: "left", fontSize: "12px", marginTop: "8px"}}>NEWS</p>
                    <p style={{textAlign: "left", fontSize: "12px", marginTop: "8px"}}>TESTIMONIALS</p>
                    <p style={{textAlign: "left", fontSize: "12px", marginTop: "8px"}}>CAREER</p>
                    <p style={{textAlign: "left", fontSize: "12px", marginTop: "8px"}}>CONTACT</p>
                </div>

                <div style={{ position: 'absolute', bottom: '10px', right: '20px', display: 'flex', gap: '12px' }}>
                    <FaInstagram style={{ fontSize: "30px", color: "white" }} />
                    <FaWhatsapp style={{ fontSize: "30px", color: "white" }} />
                    <FaEnvelope style={{ fontSize: "30px", color: "white" }} />
                </div>
            </div>

          </div>
        );
      }    
}

export default EstateWebsite;