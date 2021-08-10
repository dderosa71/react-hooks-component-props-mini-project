import React from "react"
import Article from "./Article.js"

function ArticleList({posts}){
    
    const articleList = posts.map(post => (
    <Article title = {post.title}
    date = {post.date}
    preview ={post.preview} 
    key={post.id}/>)
    )

        return(
            <main>
                {articleList}
            </main>
        )
    }

export default ArticleList