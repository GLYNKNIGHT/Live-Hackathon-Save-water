import './App.css';
import {useState, useEffect} from 'react'
import MyCarousel from './components/carousel';
import FinishButton from './components/finishButton';
import ArticleDisplay from './components/articleDisplay';

function App() {
 const [openInfo, setOpenInfo] = useState(false)
 const [articles, setArticles] = useState(false) 
 const [urlState, setUrlState] = useState("")

 useEffect(() => {
  const fetchData = async () => {
    const url = `https://localhost/5000`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      
    } catch (error) {
      console.log('error', error);
    }
  };

  fetchData();
}, []);


function closeAll(){
  setOpenInfo(false)
  setArticles(false)
}
  return (
    <div className="App">

      <div className="body">
      { openInfo === false ?(<><section className="image-container">
       {/* <img className="main-image" src='/background.png' alt='background:'/> */}
       <h1 className="title">Save Water</h1>    
       <p className="tag-line">2 billion people lack access to safely managed drinking water at home.</p> 
      </section>
      <section>
        <button className='finish-button' onClick={()=>{setOpenInfo(true)}}>Teach Me</button>
      </section></>): null}

     
      {openInfo === true ? (

 <div className='info'>
 <div className='info-top-image'><img src='/earth.png' alt='Earth'></img></div>
 <p className='info-tag-line'>We’re All In This Together</p>
<section className='carousel'><MyCarousel onClick={()=>setArticles(true)} /></section> 
<FinishButton onClick={()=>{closeAll()}}/>
</div> 

      ) : null}
        
   
{articles === true ? (<ArticleDisplay/>): null}

      </div>

    </div>
  );
}

export default App;
