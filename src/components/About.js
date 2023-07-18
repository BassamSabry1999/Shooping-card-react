import React from "react";
import imge from "../imges/FB_IMG_1650856349571.jpg"
import "./About.css"
const About = () => {
  return   <div className="full">
  <div className='row'>
      <div className='col-6'>
      <h1 className="heading">
Welcome to the page this our shopping card
</h1>
<p className="paragraph">Shopping is an activity in which a customer browses the available goods or serservices presented by one or more retailers with the potential intent to purchase ...</p>
<p className="paragraph">Offering a world-class customer experience, noon is the top choice for online shopping in Egypt. From electronics products to fashion, kids' toys, ...</p>
<button className="btn btn-primary btn">Here</button>
<button className="btn btn-danger   btn">Click</button>
      </div >
      <div className='col-6'>
<img style={{width: "100%"}} src={imge} alt='img'/>

</div>

  </div>
</div>
};

export default About;
