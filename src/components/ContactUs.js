import React  from 'react';
import Carousel from 'react-multi-carousel';
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

function ContactUs() {

    function send_mail(e){
        e.preventDefault(); 
        debugger
        var inputName = document.getElementById('inputName')
        var inputEmail = document.getElementById('inputEmail')
        var inputSubject = document.getElementById('inputSubject')
        if (inputName.value && inputEmail.value && inputSubject.value){
        window.Email.send({
            Host : "smtp.sendgrid.net",
            Username : "apikey",
            Password : "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",
            To : 'support@crossml.com',
            From : "hello@crossml.com",
            Subject : "Inquery from crossML Contact page from "+ inputName.value + "("+inputEmail.value+")",
            Body : "Name: "+inputName.value +"<br>" +
                   "Email: "+inputEmail.value +"<br>" +
                   "Subject: "+inputSubject.value +"<br>"
        }).then(
          message => {
            inputName.value = ''
            inputEmail.value = ''
            inputSubject.value = ''
              alert("Messeage sent successfully")
            }
        );
        }
        
        }
        
    return (
        <div>
        <section className="iq-breadcrumb-five main-bg" style={{backgroundColor: '#090f27', padding: '60px 0 40px'}}>
          <div className="container">
            {/* <img src="images/contact-us.png" alt="DataOps" style={{maxWidth: '35%', height: 'auto', float: 'left'}} /> */}
            <div className="row text-center">
              <div className="col-lg-12">
                <div className="mt-5 mb-0 text-center">
                  <h2 style={{fontSize: '40px', color: '#ffe1df'}}><span className="title_highlight">Contact us</span> <br />We’d love to learn more about your project. <br /></h2>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="main-content">
          <section>
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <iframe title="Contact" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13722.251000771781!2d76.8015997!3d30.7025763!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x20e9771fe7f1ffec!2sCrossML!5e0!3m2!1sen!2sin!4v1613466570278!5m2!1sen!2sin" width={600} height={450} frameBorder={0} style={{border: 0}} allowFullScreen aria-hidden="false" tabIndex={0} />
                </div>
                <div className="col-lg-6">
                  <h4 className="mb-4">Get in Touch</h4>
                  <form onSubmit={send_mail}>
                  <div className="row">
                    <div className="col-lg-6">  <input type="text" className="form-control" id="inputName" placeholder="Your Name" required /> </div>
                    <div className="col-lg-6">   <input type="Email" className="form-control" id="inputEmail" placeholder="Your Email" required /></div>
                    <div className="col-lg-12"> <textarea className="form-control" id="inputSubject" rows={7} placeholder="Your Message" required defaultValue={""} />
                    </div>
                    <div className="col-lg-12">
                      <button className="button" style={{cursor: 'pointer'}} id="sendMessage" >Send Message</button>
                    </div>
                  </div>
                  </form>

                </div>
              </div>
            </div>
          </section>
        </div>
        <section className="gray-bg pt-5 pb-4">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <img className="img-fluid client-img mr-4" src="images/aws.png" width={120} alt="Amazon Web Services" />
                <img className="img-fluid client-img mr-4" src="images/googlecloud.png" width={100} alt="Google Cloud Platform" />
                <img className="img-fluid client-img mr-4" src="images/azure.png" width={90} alt="Azure" />
                <img className="img-fluid client-img mr-4" src="images/python.png" width={60} alt="Python" />
                <img className="img-fluid client-img mr-4" src="images/Apache_Spark_logo.png" width={100} alt="Spark" />
                <img className="img-fluid client-img mr-4" src="images/hadoop.png" width={110} alt="Big Data" />
                <img className="img-fluid client-img" src="images/automation-anywhere.png" width={140} alt="Automation Anywhere" /> 
              </div>
            </div>
          </div>
        </section>
      </div>
    );
}

export default ContactUs;
