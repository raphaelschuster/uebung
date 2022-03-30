import React from "react"
import Card from "./atoms/Card"
import Fade from "react-reveal/Fade"

import data from "../yourdata"

const Article = () => {
  return (
    <div className="section" id="artikel">
      <div className="container">
        <div className="article-wrapper">
          <Fade bottom>
            <h2>Auf Artikel bieten</h2>
          </Fade>

          <div className="grid">
            <Fade bottom cascade>
              {data.articles.map((article, index) => (
                <Card
                  key={index}
                  heading={article.title}
                  paragraph={article.para}
                  imgUrl={article.imageSrc}
                  articleLink={article.url}
                ></Card>
              ))}
            </Fade>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Article
