import "./ServiceComStyles.css";

const ServiceCom = () => {
  return (
    <div className="services-container">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css"></link>

                <div className="services-box">
                    <i className="bx bx-code-alt"></i>
                    <h3>Web <br/>Development</h3>
                    <h4>Building sleek, smart, and scalable websites.</h4>
                    <p>From landing pages to full platforms -- designed to perform across every device.</p>
                </div>
            
                <div className="services-box">
                    <i className="bx bx-server"></i>
                    <h3>Backend <br/>Development</h3>
                    <h4>The engine under your hood.</h4>
                    <p>Robust APIs, clean architecture, and seamless integration -- built to last.</p>
                </div>
                
                <div className="services-box">
                    <i className="bx bx-brush"></i>
                    <h3>UI/UX <br/>Design</h3>
                    <h4>Pixel-perfect meets purpose-driven.</h4>
                    <p>I design seamless user journeys that blend form, function, and flow.</p>
                </div>
                
                <div className="services-box">
                    <i className="bx bx-cog"></i>
                    <h3>Automation and <br/>Business tailored solution</h3>
                    <h4>Automate the boring, optimize the rest.</h4>
                    <p>From tailored tools to intelligent systems -- i help you work faster and smarter.</p>
                </div>
                
                <div className="services-box">
                    <i className="bx bx-bar-chart"></i>
                    <h3>Marketing <br/>Strategy</h3>
                    <h4>From vision to traction.</h4>
                    <p>I craft data-driven marketing strategies that connect, convert, and scale your impact.</p>
                </div>
                
                <div className="services-box">
                    <i className="bx bx-support"></i>
                    <h3>Consultation <br/>Services</h3>
                    <h4>Let's solve it together.</h4>
                    <p>I provide personalized advice to move your ideas, projects, or business forward.</p>
                </div>
    </div>
  )
}

export default ServiceCom
