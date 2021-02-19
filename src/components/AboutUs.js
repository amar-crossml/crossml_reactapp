const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

function AboutUs() {
  return (
    <div >
      <section className="iq-breadcrumb-five main-bg" style={{backgroundColor: '#090f27', padding: '60px 0 00px'}}>
        <div className="container">
          <div className="row text-center">
            <div className="col-lg-12">
              <div className=" mb-0 text-center">
                <h2 style={{fontSize: '40px', color: '#ffe1df'}}> <br />Delivering beyond <span className="title_highlight">expectations</span><br /> <span className="title_highlight">Enhancing </span>customer experiences <br /> <br /></h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <img src="images/16.png" className="img-fluid" alt="img" />
            </div>
            <div className="col-lg-6">
              <div className="title-box text-left mb-3 mt-0">
                <h2 class="mt-0">What makes us who we are today?</h2>
                <p>We at CrossML helps organizations solve complex technical and architectural problems 
                  and help in better business strategies, digital transformation, and increase business productivity.
                  Our customer-first approach always empowered us to innovate exceptional customer experiences and 
                  design the best solutions for our clients and their end customers who rely on them and assures 
                  continuous delivery for ongoing improvements.</p>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <ul className="iq-list wow fadeInUp" data-wow-duration="0.9s" style={{visibility: 'visible', animationDuration: '0.9s', animationName: 'fadeInUp'}}>
                    <li><i className="fa fa-check" /><span>Customer-first approach</span></li>
                    <li><i className="fa fa-check" /><span>Attention to Details</span></li>
                    <li><i className="fa fa-check" /><span>Certified Domain Experts </span></li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul className="iq-list wow fadeInUp" data-wow-duration="0.9s" style={{visibility: 'visible', animationDuration: '0.9s', animationName: 'fadeInUp'}}>
                  <li><i className="fa fa-check" /><span>Committed to Quality</span></li>
                    <li><i className="fa fa-check" /><span>Creative and innovative solutions</span></li>
                    <li><i className="fa fa-check" /><span>Comprehensive project planning</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-0">
      <div className="container">

      <div className="row">
            <div className="col-lg-12 ">
              <h3 className="mb-3 ">Why customers trust crossML?</h3>
              <ul className="iq-list wow">
                <li><i className="fa fa-check" /><span>We know "Time Is Money", to stick to this, we always deliver solutions on time and continuously improve from there.</span></li>
                <li><i className="fa fa-check" /><span>We are lace with High-Tech hardware and software including GPUs which is must to get insights from enormous data.</span></li>
                <li><i className="fa fa-check" /><span>We rigorously examine requirements and exceed client expectations to achieve maximal business growth.</span></li>
                <li><i className="fa fa-check" /><span>We believe in working together and winning as a team.</span></li>
                <li><i className="fa fa-check" /><span>Company data is very sensitive, so we keep it 100% confidential.</span></li>
                <li><i className="fa fa-check" /><span>We always stick on right way instead of easy way even in adverse circumstances.</span></li>
              </ul>
            </div>
            </div>
          </div>
      </section>
      <section className="pt-0">
        <div className="container">
        <div className="row">
            <div className="col-lg-12">
              <p className="text-center">
                <img className="img-fluid client-img mr-5" width={160} src="images/customers/carvi-logo.png" alt="Blueprism" />
                <img className="img-fluid client-img mt-3 mr-5" width={130} src="images/customers/dds.jpg" alt="OpenCV Python OCR" />
                <img className="img-fluid client-img mr-5" width={220} src="images/customers/numantra.png" alt="OpenCV Python OCR" />
                <img className="img-fluid client-img mr-5" width={160} src="images/customers/cortes54_logo.jpg" alt="OpenCV Python OCR" />
                <img className="img-fluid client-img mr-5" width={150} src="images/customers/adapt.png" alt="OpenCV Python OCR" />
              </p>
            </div>
            <div className="col-lg-12">
              <p className="text-center">
                <img className="img-fluid client-img mr-5" width={180} src="images/customers/breathalyzers.png" alt="Blueprism" />
                <img className="img-fluid client-img mr-5" width={190} src="images/customers/mother_baby.jpg" alt="OpenCV Python OCR" />
                <img className="img-fluid client-img mr-5" width={140} src="images/customers/nutrition_store.png" alt="OpenCV Python OCR" />
                <img className="img-fluid client-img mr-5" width={160} src="images/customers/babasafe.png" alt="OpenCV Python OCR" />
                <img className="img-fluid client-img mr-5" width={130} src="images/customers/axe-logo.png" alt="OpenCV Python OCR" />
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default AboutUs;
