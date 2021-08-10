import React from "react"

function About({
    image = "https://via.placeholder.com/215",
    text

}){
    return(
        <aside>
            <img src={image} alt="blog logo"></img>
            <p>About this blog</p>
        </aside>
    )
}

export default About