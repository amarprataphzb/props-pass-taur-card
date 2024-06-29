

import { useState } from "react";
import Taur from "./jharkhandTaur/Taur";


function App() {
 

  const  data=[
    {
        id:1,
        name:'agra',
        info:'Agra is a city on the banks of the river Yamuna in the northern state of Uttar Pradesh, India. It is 378 kilometres west of the state capital, Lucknow, 206 kilo metres south of the national capital New Delhi, 58 kilo metres south from Mathura and 125 kilometres  north of Gwalior. Agra is one of the most populous cities in Uttar Pradesh, and the 24th most populous in India.Agra is a city on the banks of the river Yamuna in the northern state of Uttar Pradesh, India. It is 378 kilometres west of the state capital, Lucknow, 206 kilo metres south of the national capital New Delhi, 58 kilo metres south from Mathura and 125 kilometres  north of Gwalior. Agra is one of the most populous cities in Uttar Pradesh, and the 24th most populous in India.Agra is a city on the banks of the river Yamuna in the northern state of Uttar Pradesh, India. It is 378 kilometres west of the state capital, Lucknow, 206 kilo metres south of the national capital New Delhi, 58 kilo metres south from Mathura and 125 kilometres  north of Gwalior. Agra is one of the most populous cities in Uttar Pradesh, and the 24th most populous in India.',
        img:'https://media.tacdn.com/media/attractions-splice-spp-674x446/0a/f6/ee/7d.jpg', 
        price:5999
    },
    {
        id:2,
        name:'jaipur',
        info:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions mply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        img:'https://storage.karmagroup.com/assets/karmagroup.com/blog/2018/05/Hawa-Mahal.jpg',
        price:7999
    },
    {
        id:3,
        name:"jharkhand",
        info:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancyIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancyIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.",
        img:"https://www.fabhotels.com/blog/wp-content/uploads/2019/10/Jharkhand-Tourism_600.jpg",
        price:8999,
    },
    {
        id:4,
        name:"Delhi",
        info:"Delhi Tourism, a government undertaking facilitating tourism since 1975 will take you to a guided tour of the Delhi through this website. It explores the wonders of Delhi, its heritage, the art and craft, the diverse cuisine and culture. A symbol of the country's rich past and thriving present, Delhi is a city where ancient and modern blend seamlessly together. It is a place that not only touches your pulse but even fastens it to a frenetic speed. Home to millions of dreams, the city takes on unprecedented responsibilities o realizing dreams bringing people closer and inspiring their throughts.",
        img:"https://static.toiimg.com/thumb/61654555/Delhi-Tourist-attraction.jpg?width=1200&height=900",
        price:9999,
    },
    {
        id:5,
        name:"Nagpur",
        info:"It was erected in the memory of Dr. Ambedkar and his event of embracing Buddhism; wherein with him, 60000 others had also converted to Buddhism. The bronze statue of Buddha here, along with the sacred tree has made Deeksha Bhoomi one of the famous tourist places in Nagpur,It was erected in the memory of Dr. Ambedkar and his event of embracing Buddhism; wherein with him, 60000 others had also converted to Buddhism. The bronze statue of Buddha here, along with the sacred tree has made Deeksha Bhoomi one of the famous tourist places in Nagpur,It was erected in the memory of Dr. Ambedkar and his event of embracing Buddhism; wherein with him, 60000 others had also converted to Buddhism. The bronze statue of Buddha here, along with the sacred tree has made Deeksha Bhoomi one of the famous tourist places in Nagpur",
        img:"https://static.javatpoint.com/tourist-places/images/tourist-places-in-nagpur1.jpg",
        price:4999
    },

]

  const[taurs,setTaurs]=useState(data)

  function removeCard(id){
    const newTour =taurs.filter(taur=>taur.id!==id)
    setTaurs(newTour)
  }
  if(taurs.length===0){
    return(
        <div> 
          <h2> No Taur left</h2>
          <button onClick={()=>setTaurs(data)}>Refresh</button>
        </div>
    )
  }
  return (
    <div>
      <Taur taurs={taurs} removeCard={removeCard }/>
    </div>
  );
}

export default App;

