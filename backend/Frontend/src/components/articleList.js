import APIService from "./APIService"

const ArticleList=(props)=>{

    const editArticle=(article)=>{
        props.editArticle(article)
    }

    const deleteArticle=(article)=>{
        APIService.DeleteArticle(article.id)
        .then((response)=>{
            props.deleteArticle(article)
        })
    }
    return (
        <div>
             {props.articles && props.articles.map(eachArticle=>{
      return(
        <div key={eachArticle.id}>
        <h2>{eachArticle.title}</h2>
        <p>{eachArticle.body}</p>
        <p>{eachArticle.date}</p>
        <div className="row">
            <div className="col-md-1">
                <button className="btn btn-primary" onClick={()=>editArticle(eachArticle)}>Update</button>
            </div>
            <div className="col-md-1">
                <button className="btn btn-danger" onClick={()=>deleteArticle(eachArticle)}>Delete</button>
            </div>
        </div>
        <hr/>
        </div>
      )
     })}
        </div>
    )
}

export default ArticleList