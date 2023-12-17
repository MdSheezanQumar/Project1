

function Tours(){

    return(
        <div className="container-fluid">
    <div className="row">
        <div className="col-sm px-2 py-5" style={{display:'flex',justifyItems:'center',justifyContent:'center'}}>
           <img className="img3" src="https://tse3.mm.bing.net/th?id=OIP.I5D_5DLuS5SIDjAM5HPiCgHaEK&pid=Api&P=0&h=700" alt="tour"/>

        </div>
   </div>
   <div className="row">
    <p>One of the oldest civilisations in the world, India is a mosaic of multicultural experiences. With 
        a rich heritage and myriad attractions, the country is among the most popular tourist destinations
         in the world. It covers an area of 32, 87,263 sq. km, extending from the snow-covered Himalayan 
         heights to the tropical rain forests of the south. As the 7th largest country in the world, India
          stands apart from the rest of Asia, marked off as it is by mountains and the sea, which give the 
          country a distinct geographical entity.</p>

      <p>Fringed by the Great Himalayas in the north, it stretches southwards and at the Tropic of Cancer,
         tapers off into the Indian Ocean between the Bay of Bengal on the east and the Arabian Sea on the 
         west. As you travel the expanse of the country, you are greeted by diverse nuances of cuisines, 
         faiths, arts, crafts, music, nature, lands, tribes, history and adventure sports. India has a mesmeric 
         conflation of the old and the new. As the bustling old bazaars rub shoulders with swanky shopping malls, 
         and majestic monuments accompany luxurious heritage hotels, the quintessential traveller can get the best
          of both worlds. Head to the mountains, enjoy a beach retreat or cruise through the golden Thar, India has 
          options galore for all.</p>    
   </div>
   <div className="row">
    <div className="col-sm py-1 "  style={{display:'flex',justifyItems:'center',justifyContent:'center'}}>
    <h3>Popular In India</h3>
    </div>
    </div>
    <div className="row">
    <div className="col-sm py-1" style={{display:'flex',justifyItems:'center',justifyContent:'center'}} >
    <p>India is a home to the finest architectural heritage, serene ghats, spectacular
         landscapes and largest tiger reserve</p>
    </div>
   </div>

   <div className="row py-5">

  
   <div id="demo" className="carousel slide" data-bs-ride="carousel">

  
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
  </div>
  
  
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://www.incredibleindia.org/content/dam/incredible-india-v2/images/home/SOU_new.jpg/_jcr_content/renditions/cq5dam.web.1800.737.jpeg" alt="Los Angeles" className="d-block" />
    </div>
    <div className="carousel-item">
      <img src="https://www.incredibleindia.org/content/dam/incredible-india-v2/images/updated-images/Mehrangarh-Fort_Jodhpur.jpg/_jcr_content/renditions/cq5dam.web.1800.737.jpeg" alt="Chicago" className="d-block" />
    </div>
    <div className="carousel-item">
      <img src="https://www.incredibleindia.org/content/dam/incredibleindia/images/places/agra/agra-tajmahal-10.jpg/_jcr_content/renditions/cq5dam.web.1800.600.jpeg" alt="New York" className="d-block" />
    </div>
  </div>
  

  <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
    <span className="carousel-control-prev-icon"></span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
    <span className="carousel-control-next-icon"></span>
  </button>
</div>




   </div>

</div>
    );

}

export default Tours;