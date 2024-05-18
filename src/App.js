import './App.css';
import Boxes from './comps/boxes';
import Slider from './comps/slider';
import StratBoxes from './comps/stratBoxes';

function App() {
  
  const num = [1,2,3]
  const title=["Choose Suitable Platforms","Create Engaging Content:","Maintain a Consistent Posting Schedule:"]
  const dec = ["Select platforms based on where your target audience is most active (e.g., Instagram for younger audiences, LinkedIn for professionals).",
                "Use a mix of videos, images, and text ,Tailor content to the interests of your audience and Ensure content is high-quality and visually appealing.",
                "Post regularly to keep your audience engaged and Use scheduling tools to maintain consistency."]


  return (
   <div>
     <div className='upper-contain p-3 col'>
        <div className='m-2 col-7'>
            <p className='text-box'>Dive into the world of digital marketing </p>
        </div>
        <div className='col-5'>
          <img src="https://www.jezweb.com.au/wp-content/uploads/2020/09/How-to-create-a-social-media-marketing-strategy.png" height={300} width={600}></img>
        </div>
     </div>
      
    <div className='p-5 m-5'>
      <p className='para'>
      <h2>"Transform and Elevate Your Digital Presence"</h2>  <br></br>
      <div className='inner-para'>
      In the dynamic landscape of digital marketing, leveraging social media platforms has 
      become quintessential for brand outreach and engagement. Through strategic social media marketing, brands can cultivate a 
      robust online presence, fostering meaningful connections with their target audience. By curating compelling content tailored to each platform's unique features and demographics, brands can amplify their visibility and spark conversations that resonate with their followers. 
      Utilizing data analytics and insights, marketers can refine their approach, optimizing campaigns for maximum impact and ROI
      </div>
      </p>
    </div>

    <div className='d-flex flex-wrap justify-content-center align-items-center col boxes-div'>
      
      <div className='col-5 '>
        <p className='line m-5 '>The Perks of Social Media Marketing</p>
      </div>
      <div className='col-7 p-5 '>
        <div className='slider-box d-flex justify-content-center'>
          <Slider />
        </div>
      </div>
       
    </div>


     <div className='col strat-div'>
       <div className='m-4 col-6 '>
         <img src="https://cdn.dribbble.com/users/795597/screenshots/3574014/social_network__3_.gif" height="500px" width="600px" />
       </div>
       <div className='col-4' style={{width:"600px"}}>
         <div className='m-3' style={{width:"600px"}} >
             <p className='startergy mt-4'><p style={{fontSize:"70px" }}>Startergies</p>for Social Media Marketing</p>
         </div>
         <div className=''>
            <StratBoxes num = {num[0]} title={title[0]} desc ={dec[0]} />
            <StratBoxes num = {num[1]} title={title[1]} desc ={dec[1]}/>
            <StratBoxes num = {num[2]} title={title[2]} desc ={dec[2]}/>
         </div>
       </div>
     </div>

     <div className=' p-4 footer-div p-2 d-flex flex-wrap col justify-content-center'>
      <div className='m-2 p-3 col-3' style={{borderRight:"1px solid grey",textAlign:"center"}}>
         <p style={{color:"white"}}><h3>For Inquiries</h3> 9234567812</p>
      </div>
      <div className=' m-2 p-3  col-3' style={{borderRight:"1px solid grey",textAlign:"center"}}>
      <p style={{color:"white"}}><h3>For Careers</h3> +23327989221</p>
      </div>
      <div className=' m-2 p-3  col-3'style={{textAlign:"center"}} >
      <p style={{color:"white"}}><h3>Visit </h3>12, hhshsd, bjshdkc, Pune</p>
      </div>
     </div>

   </div>
  );
}

export default App;
