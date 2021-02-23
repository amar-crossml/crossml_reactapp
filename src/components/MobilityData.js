import React from 'react'
import { Link  } from "react-router-dom";
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

function MobilityData() {
  return (
    <div>
    <section className="iq-breadcrumb-five main-bg" style={{padding: '60px 0 50px', backgroundColor: '#090f27'}}>
      <div className="container">
        <img src="images/idea.jpg" style={{maxWidth: '40%', height: 'auto', float: 'left'}} />
        <div className="row text-center mt-3">
          <div className="col-lg-12 pl-5">
            <div className="mt-5 mb-0 text-right">
              <h2 style={{fontSize: '40px', color: '#ffe1df'}}> MLOps and DataOps Solutions for <span className="title_highlight">Transportation Domain </span></h2>
            </div>
          </div>
        </div>
      </div>
    </section>	{/* Main Content */}
    {/* Main Content */}
    <div className="main-content">
      <section className="pt-5 pb-0 blog-detail">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1 className="mb-3">Mobility Data Pipelines for IoT using <br />Serverless Architecture</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="deatils-social">
                <ul className="share-tags list-inline">
                  <li className="list-inline-item share-tag"><a>Mobility</a></li>
                  <li className="list-inline-item share-tag"><a>Data Pipelines</a></li>
                  <li className="list-inline-item share-tag"><a>Serverless</a></li>
                  <li className="list-inline-item share-tag"><a>CI/CD Automation</a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 text-right">
              <ul className="list-inline mb-0 d-inline">
                <li className="list-inline-item">
                  <a href="#"><i className="fa fa-facebook-square" /></a>
                </li>
                <li className="list-inline-item">
                  <a href="#"><i className="fa fa-twitter" /></a>
                </li>
                <li className="list-inline-item">
                  <a href="#"><i className="fa fa-google-plus" /></a>
                </li>
                <li className="list-inline-item">
                  <a href="#"><i className="fa fa-linkedin" /></a>
                </li>
                <li className="list-inline-item">
                  <a href="#"><i className="fa fa-pinterest" /></a>
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 mt-3">
              <p><b>Mobility Data</b> meant as any kind of transportation data generated by activities or transactions using digitally-enabled mobility devices such as smartphones, e-bikes, on-board vehicle IoT devices, or any other navigation systems. Mobility data has enormous importance in many fields such as improving road safety, controlling pollutions, reducing traffic congestion, and most importantly help the administrations to design better policies for smart cities.</p>
              <div className="blog-content">
                <blockquote className="blockquote mt-4 mb-4 pt-0 text-center">
                  <p className="mb-0 font-weight-bold">According to a <span className="highlight_small">BusinessWire</span> report, global mobility as a service market is projected to hit the revenue of <br /><span className="highlight">99.8</span> billion dollars by <span className="highlight_small">2025</span> at a CAGR of around <span className="highlight_small">32%</span> over the period from <span className="highlight_small">2019</span>.</p>
                </blockquote>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-lg-8">
              <h3 className="mb-3">A few key real-life use-cases of Mobility Data</h3>
              <ul className="iq-list wow">
                <li><i className="fa fa-check" /><span>Mobility data helps retail store managers to optimize business strategies, launch promotions, location-based advertising, and allocating resources by calculating the footfall in or around their stores.</span></li>
                <li><i className="fa fa-check" /><span>Administrations can analyze traffic patterns and road conditions to better design infrastructure and add more transit routes in heavy traffic areas.</span></li>
                <li><i className="fa fa-check" /><span>Enables people to get real-time information about traffic, buses, and other public transportations to reduce their traveling time.</span></li>
              </ul>
            </div>
            <div className="col-lg-4 pl-5 mt-5">
              <img src="images/mobility-data.png" className alt="Mobility Data" />
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-lg-12 mt-5">
              <h3 className="mb-3">Mobility Data comes with its own Challenges</h3>
            </div>
            <div className="col-lg-3">
              <img src="images/mobility-challening.jpeg" className="mt-3" alt="Mobility Data Challenges" />
            </div> 
            <div className="col-lg-9 pl-5">
              <ul className="iq-list wow">
                <li><i className="fa fa-check" /><span>The biggest challenge to securely receive and store unprecedented amounts of streaming data coming through different types of IoT devices and navigation systems.</span></li>
                <li><i className="fa fa-check" /><span>Next hard thing is to validate, clean, and transform unstructured data into a common format to extract valuable information out of it at run-time.</span></li>
                <li><i className="fa fa-check" /><span>And very important to store structured data in such a way to run geospatial ad hoc queries, real-time data analytics, and serve machine learning models to detect patterns and insights.</span></li>
              </ul>
            </div>                 
          </div>
          <div className="row">
            <div className="col-lg-12 mt-5">
              <h3 className="mb-3 mt-3">How crossML Helped the Customer</h3>
              <p className="mb-2">Being a technical partner, we have already delivered such solutions to our customers and helped them with all technical tools and services required to <b>store</b>, <b>process</b>, and <b>analyze</b> unprecedented amounts of mobility data so they can completely focus on other business goals.</p>
              <ul className="iq-list wow">
                <li><i className="fa fa-check" /><span>Designed fully managed automated data pipelines to collect unprecedented amounts of streaming data from IoT devices securely and without losing any data packet.</span></li>
                <li><i className="fa fa-check" /><span>In the transformation phase, we provided the serverless architecture to crawl unstructured data and convert it into a common format by using fully customizable and dynamic algorithms.</span></li>
                <li><i className="fa fa-check" /><span>Provided the right set of tools to store the transformed data into the data lakes or data warehouses in such a way to run ad hoc queries, data analytics, and data visualizations.</span></li>
                <li><i className="fa fa-check" /><span>Our Machine learning pipelines automatically connect with data lakes to train models and generate insights to help our customers to make the right future decisions.</span></li>
              </ul>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-lg-12">
              <p className="mt-3 text-center">
                <img className="img-fluid client-img mr-5" width={150} src="images/aws.png" alt="Blueprism" />
                <img className="img-fluid client-img mr-5" width={130} src="images/googlecloud.png" alt="OpenCV Python OCR" />
                <img className="img-fluid client-img mr-5" width={120} src="images/azure.png" alt="OpenCV Python OCR" />
                <img className="img-fluid client-img mr-5" width={80} src="images/python.png" alt="OpenCV Python OCR" />
                <img className="img-fluid client-img mr-5" width={125} src="images/Apache_Spark_logo.png" alt="OpenCV Python OCR" />
                <img className="img-fluid client-img mr-5" width={135} src="images/AirflowLogo.png" alt="OpenCV Python OCR" />
                <img className="img-fluid client-img" width={65} src="images/rasberry-pi.png" alt="OpenCV Python OCR" />
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="Vizion-gradient-bg-top">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="title-box">
                <h2>More From crossML</h2>
              </div>
            </div>
            <div className="col-lg-12">
              <Carousel responsive={responsive} infinite={true} autoPlay={false}  >
                <div className="item react-carousel-item ">
                  <div className="iq-blog-box">
                    <div className="iq-blog-image clearfix">
                      <img src="images/blog_athena.jpeg" className="img-fluid center-block" alt="blogimage1" />
                    </div>
                    <div className="iq-blog-detail">
                      <div className="iq-blog-meta">
                        <ul className="list-inline">
                          <li className="list-inline-item">
                            <a href="#" className="iq-user"><i className="fa fa-user" aria-hidden="true" /> crossml Engineering</a>
                          </li>
                          <li className="list-inline-item pull-right">
                            <i className="fa fa-clock-o" aria-hidden="true" />
                            <a href="#" rel="bookmark"> 3 min read</a>
                          </li>
                        </ul>
                      </div>
                      <div className="blog-title">
                        <a href="#">
                          <h6 className="my-3">Query Large Data from S3 with AWS Athena</h6>
                        </a>
                      </div>
                      <div className="blog-content">
                        <p>Athena is an interactive query service that makes it easy to analyze data
                          in Amazon S3 using standard SQL.</p>
                      </div>
                      <div className="blog-button"><a className="button" target="_blank" href="https://medium.com/crossml/query-large-data-with-athena-s3-ad58b8779806">Read
                          More <i className="fa fa-angle-right" aria-hidden="true" /></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item react-carousel-item ">
                  <div className="iq-blog-box">
                    <div className="iq-blog-image clearfix">
                      <img src="images/11.jpeg" className="img-fluid center-block" alt="blogimage1" />
                    </div>
                    <div className="iq-blog-detail">
                      <div className="iq-blog-meta">
                        <ul className="list-inline">
                          <li className="list-inline-item">
                            <a href="#" className="iq-user"><i className="fa fa-user" aria-hidden="true" /> crossML engineering</a>
                          </li>
                          <li className="list-inline-item pull-right">
                            <i className="fa fa-calendar-minus-o" aria-hidden="true" />
                            <a href="#" rel="bookmark">Nov 22, 2020</a>
                          </li>
                        </ul>
                      </div>
                      <div className="blog-title">
                        <a href="https://medium.com/crossml/geospatial-data-visualization-with-kepler-gl-bc9de40d6262" target="_blank">
                          <h6 className="my-3">Geospatial Data Visualization with Kepler.gl</h6>
                        </a>
                      </div>
                      <div className="blog-content">
                        <p>Kepler.gl is a high-performance visualization tool and it is purely a
                          client-side app. It can be easily used by technical and not ...</p>
                      </div>
                      <div className="blog-button"><a className="button" href="https://medium.com/crossml/geospatial-data-visualization-with-kepler-gl-bc9de40d6262">Read
                          More <i className="fa fa-angle-right" aria-hidden="true" /></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item react-carousel-item ">
                  <div className="iq-blog-box">
                    <div className="iq-blog-image clearfix">
                      <img src="images/12.jpeg" className="img-fluid center-block" alt="blogimage1" />
                    </div>
                    <div className="iq-blog-detail">
                      <div className="iq-blog-meta">
                        <ul className="list-inline">
                          <li className="list-inline-item">
                            <a href="#" className="iq-user"><i className="fa fa-user" aria-hidden="true" /> crossML engineering</a>
                          </li>
                          <li className="list-inline-item pull-right">
                            <i className="fa fa-calendar-minus-o" aria-hidden="true" />
                            <a href="#" rel="bookmark">Oct 22, 2020</a>
                          </li>
                          {/* <li class="list-inline-item">
                                        <a href="#"><i class="fa fa-comments" aria-hidden="true"></i> 0</a>
                                    </li> */}
                        </ul>
                      </div>
                      <div className="blog-title">
                        <a href="https://medium.com/crossml/extracting-data-from-pdf-documents-7792d5c1e403" target="_blank">
                          <h6 className="my-3">Extracting data from PDF documents</h6>
                        </a>
                      </div>
                      <div className="blog-content">
                        <p>PDF stands for Portable Document Format is a file format that comes with
                          read-only permission. This format is used when you have to save ... ...
                        </p>
                      </div>
                      <div className="blog-button"><a className="button" href="https://medium.com/crossml/extracting-data-from-pdf-documents-7792d5c1e403">Read
                          More <i className="fa fa-angle-right" aria-hidden="true" /></a>
                      </div>
                    </div>
                  </div>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </section>
      <section className="gray-bg pt-5 pb-4">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <img className="img-fluid client-img mr-4" src="images/aws.png" width={150} alt="Amazon Web Services" />
              <img className="img-fluid client-img mr-4" src="images/googlecloud.png" width={120} alt="Google Cloud Platform" />
              <img className="img-fluid client-img mr-4" src="images/azure.png" width={110} alt="Azure" />
              <img className="img-fluid client-img mr-4" src="images/python.png" width={80} alt="Python" />
              <img className="img-fluid client-img mr-4" src="images/Apache_Spark_logo.png" width={120} alt="Spark" />
              <img className="img-fluid client-img mr-4" src="images/hadoop.png" width={130} alt="Big Data" />
              <img className="img-fluid client-img" src="images/automation-anywhere.png" width={160} alt="Automation Anywhere" />
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
  );
}

export default MobilityData;