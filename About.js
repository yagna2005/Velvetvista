import { Link } from "react-router-dom";

function About(){
    return<>
        <section style={{marginTop:"50px"}} className="about_section layout_padding long_section">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="img-box">
            <img src="user_assets/images/about-img.png" alt=""/>
          </div>
        </div>
        <div className="col-md-6">
          <div className="detail-box">
            <div className="heading_container">
              <h2>
                About Us
              </h2>
            </div>
            <p>
            Welcome to Velvet Vista, where we redefine home aesthetics with our curated collection of exquisite furniture. Committed to blending style and functionality, our pieces are crafted with precision and care to elevate your living spaces. With a focus on quality and customer satisfaction, we invite you to explore our showroom and discover furniture that transforms houses into homes. At Velvet Vista, your journey to a more stylish and comfortable living begins.






            </p>
            <Link href="">
              Read More
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
    </>
}

export default About;