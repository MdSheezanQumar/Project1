
import { useState } from "react";
import { Link } from "react-router-dom";

function Home(){

    const city=[
        {
            id:1,
            imgsrc:'https://tse3.mm.bing.net/th?id=OIP.nolG_jwRXPmDOY5FxtYKqgHaE8&pid=Api&P=0&h=180',
            name:"Delhi",
            spec:"Capital city of India,it is known for its striking monuments and some of the world’s best street food",
            des: " About City"

        },
         {
        id:2,
        imgsrc:'https://tse2.mm.bing.net/th?id=OIP.3H6Tc08X_vDP1koalgF1UQHaE0&pid=Api&P=0&h=180',
        name:"Mumbai",
        spec:"The City That Never Sleeps and also called as City of Dreams",
        des: " About City"
         },
         {
            id:3,
            imgsrc:'https://tse4.mm.bing.net/th?id=OIP.jcVqouTP1ZCaX6V3hX12owHaFi&pid=Api&P=0&h=180',
            name:"Hyderabad",
            spec:"City of Pearls , City of Nizams and also known as Shrimp Capital of India",
            des: " About City"
         },
         {
            id:4,
            imgsrc:'https://tse4.mm.bing.net/th?id=OIP.xcLmrPULYOl_0KZr5NYQhwHaEX&pid=Api&P=0&h=180',
            name:"Patna",
            spec:"It was one of the nerve centers of First War of Independence",
            des: " About City"
         },
         {
            id:5,
            imgsrc:'https://tse4.mm.bing.net/th?id=OIP.C1bH6nhDixeoOvELYZW4XQHaFP&pid=Api&P=0&h=180',
            name:"Agra",
            spec:"The heritage of Agra city is linked with the Mughal dynasty",
            des: " About City"
         },
         {
            id:6,
            imgsrc:'https://tse4.mm.bing.net/th?id=OIP.jqoGV_squLkcO2Gg5tomBQHaEs&pid=Api&P=0&h=180',
            name:"Jodhpur",
            spec:"It is popularly known as the Blue-City among people of Rajasthan and all over India",
            des: " About City"
         },
         {
            id:7,
            imgsrc:'https://tse4.mm.bing.net/th?id=OIP.G16MajQqJ_OxVckpoXuELAHaEK&pid=Api&P=0&h=180',
            name:"Kolkata",
            spec:"City of Joy,City of Museums and also known as Cultural Capital of India ",
            des: " About City"
         },
         {
            id:8,
            imgsrc:'https://tse3.mm.bing.net/th?id=OIP.8-wpRYyHfXk3-WTpFDIiZAHaEK&pid=Api&P=0&h=180',
            name:"Bhubaneswar",
            spec:"Bhubaneswar means lord of the world. Many temples are present in this city. So, it is also called Temple city of India",
            des: " About City"
         },
         {
            id:9,
            imgsrc:'https://tse4.mm.bing.net/th?id=OIP.7WqKAAwDiDBB6rEL3mdciAHaEE&pid=Api&P=0&h=180',
            name:"Leh",
            spec:"Leh is known for its stunning scenic locales, Buddhist temples and pristine environment",
            des: " About City"
         },
         {
            id:10,
            imgsrc:'https://tse2.mm.bing.net/th?id=OIP.Rq_a2fKdjYxQ8q4THkUxhwHaEW&pid=Api&P=0&h=180',
            name:"Lucknow",
            spec:"Also known as the City of Tehzeeb and the City of Nawabs, Lucknow is the land of close-knit culture and long-held traditions",
            des:"About City"
         },
         {
            id:11,
            imgsrc:'https://tse1.mm.bing.net/th?id=OIP.yTUvsiLy9N_wuNeqJ2lPAwHaEI&pid=Api&P=0&h=180',
            name:"Bangalore",
            spec:" Bangalore is known as the City of Gardens due to its wide streets, public parks, and large green spaces",
            des:"About City"
         },
         {
            id:12,
            imgsrc:'https://tse3.mm.bing.net/th?id=OIP.ai5dcH1JarBpOZncFh26TAHaFb&pid=Api&P=0&h=180',
            name:"Gangtok",
            spec:"Gangtok is commonly known as the 'Gateway to Sikkim', is one of the most popular hill stations in India ",
            des:"About City"
         },
       

    ];

    const[searchQuery,setSearchQuery]=useState('');
    const[filteredcity,setfilteredcity]=useState(city);
    const searchcity = (value) =>{
        setSearchQuery(value)
   console.log(searchQuery);
   setfilteredcity(city.filter(cty => cty.name.toLowerCase().includes(searchQuery.toLowerCase())));
    };

    return(
      <div className="container-fluid ">
        <div className="row my-4">
           <div className="col-sm-6 mx-auto">
           <div className="mb-3">
        <input type="text" value={searchQuery} onChange={(event)=>searchcity(event.target.value)} className="form-control"  id="search" placeholder="search products"/>
         </div>

           </div>

            </div>
        <div className="row">
            <h1 className="px-3 py-5 " >Best Cities to Visit in India</h1>
          {
            filteredcity.map(cit =>(

                <div className="col-sm-4 px-5 py-5 square border" key={cit.id}>
                    
                <img className="img-fluid" src={cit.imgsrc} alt="cityImage"></img>
         
               <div className="col-sm-12">
                <h2>{cit.name}</h2>
                <h5>{cit.spec}</h5>
                <button type="button" class="btn btn-outline-info"><Link style={{textDecoration:'none',color:'black'}} to={`/details/${cit.id}?name=${cit.name}`}>{cit.des}</Link></button>
                </div>

            </div>

            ))
          }

        </div>

      </div>
    );
}

export default Home;