import React, { useState } from 'react';
import Boxes from './boxes';


const titles = [
 {t:"Increased Brand Awareness",
 i:"fa fa-line-chart", 
 b:"Social media platforms provide an extensive reach to connect with potential customers, helping to increase brand visibility and recognition."},

 {t:"Cost-Effective Marketing",
 i:"fa fa-money",
 b:"Compared to traditional advertising channels, social media marketing often requires lower financial investment while delivering comparable or even superior results, making it accessible to businesses of all sizes"},

 {t:"Valuable Insights and Analytics",
 i:"fa fa-area-chart",
 b:"Social media platforms provide comprehensive analytics and insights into audience demographics, preferences, and behaviors, enabling brands to refine their strategies and improve campaign performance over time."},

 {t:"Global Reach and Expansion Opportunities:",
 i:"fa fa-globe",
 b:" With a global audience accessible 24/7, social media offers businesses the opportunity to expand their reach beyond geographical boundaries, tapping into new markets and audiences worldwide."},

 {t:"Community Building",
 i:"fa fa-users",
 b:"Social media facilitates the creation of online communities centered around a brand, product, or interest, allowing businesses to foster a sense of belonging and advocacy among their audience."},

 {t:"Real-Time Feedback and Customer Service",
 i:"fa fa-comments",
 b:" Social media provides a platform for customers to share feedback, ask questions, and voice concerns, allowing brands to respond promptly and demonstrate their commitment to customer satisfaction."}

]


const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % titles.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + titles.length) % titles.length);
  };

  return (
    <div style={{ width: '640px', overflow: 'hidden', position: 'relative' }} >
      <div style={{ display: 'flex', transition: 'transform 0.5s ease', transform: `translateX(-${currentIndex * 100}%)` }} >

    {titles.map((s, index) => (
      <div key={index} style={{ flex: '0 0 100%' }}>
        <div className="ps-5" style={{ width: '100%', height: '300px' }}>
          <Boxes title={s.t} para={s.b} icon={s.i} />
        </div>
      </div>
    ))}
      </div>
    
      <i class="fa fa fa-arrow-left" style={{color:"white", position: 'absolute',fontSize:"30px", top: '50%', left: '0', transform: 'translateY(-50%)', cursor: 'pointer' }} onClick={prevSlide}></i>
      <i class="fa fa fa-arrow-right"  style={{ color:"white", position: 'absolute', fontSize:"30px",top: '50%', right: '0', transform: 'translateY(-50%)', cursor: 'pointer' }} onClick={nextSlide}></i>
    </div>
  );
};

export default Slider;
