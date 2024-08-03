import React from 'react'
import { useEffect, useState } from "react";
import HomeItem from "./HomeItem";

const HomeTech = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        let url = `https://newsapi.org/v2/top-headlines?country=in&pageSize=4&category=technology&apiKey=${import.meta.env.VITE_API_KEY}`
        fetch(url).then(response => response.json()).then(data => setArticles(data.articles));
    }, [])
  return (
    <div>
        <h2 className="text-start ms-4 me-5 mb-3 border-black border-bottom subhead-design">Technology</h2>
        {articles.map((news, index)=>{
            return <HomeItem key={index} title={news.title} src={news.urlToImage} url={news.url}/>
        })}
    </div>
  )
}

export default HomeTech
