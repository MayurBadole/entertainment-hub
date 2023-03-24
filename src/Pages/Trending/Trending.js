import axios from "axios";
import { useState , useEffect } from "react";
import '../../components/SingleContent/SingleContent'

const Trending = () => {
  const [content, setContent] = useState([]);
  const fetchTrending = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}`
    );
     
    setContent(data.results);
  };
  useEffect(()=>{
    fetchTrending();

  },[])

  return (
    <div>
      <span ClassName="pageTitle"> Trending </span>
      <div ClassName="trending">
        {
          content && content.map((c)=> {
            <SingleContnet/>
          })
        }

      </div>
    </div>
  );
};

export default Trending;
