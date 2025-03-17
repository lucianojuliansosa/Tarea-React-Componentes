import React from 'react'

const ArticleApp = (props) => {
  return (
    <div> 
        <article>
        <h3>{props.titulo}</h3>
        <img src={props.img} alt={props.texto} width={500}/>
        <p>{props.parrafo}</p>
    </article>

    </div>
  )
}

export default ArticleApp