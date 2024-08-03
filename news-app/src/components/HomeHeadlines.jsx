import { useEffect, useState } from "react";
import HomeItem from "./HomeItem";

const HomeHeadlines = () => {

    const [articles, setArticles] = useState([]);

    useEffect(() => {
        let url = `https://newsapi.org/v2/top-headlines?country=in&pageSize=4&category=general&apiKey=${import.meta.env.VITE_API_KEY}`
        fetch(url).then(response => response.json()).then(data => setArticles(data.articles));
    }, [])
  return (
    <div>
        <h2 className="text-start ms-4 me-5 border-black border-bottom subhead-design">Top Headlines</h2>
        {articles.map((news, index)=>{
            return <HomeItem key={index} title={news.title} src={news.urlToImage} url={news.url}/>
        })}
    </div>
  )
}

export default HomeHeadlines
