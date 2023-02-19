import { useState,useEffect } from "react"
import APIService from "./APIService"

const Form=(props)=>{
const [title,setTitle]=useState(props.article.title)
const [body,setBody]=useState(props.article.body)

useEffect(()=>{
    setTitle(props.article.title)
    setBody(props.article.body)
},[props.article])
    const updateArticle=()=>{
        APIService.UpdateArticle(props.article.id,{title,body})
        .then((response)=>{
            props.updatedData(response)
        })
        .catch(error=>console.log(error))
    }
    //console.log(title)
    //console.log(body)

    const insertArticle=()=>{
        APIService.InsertArticle({title,body})
        .then((response)=>{
            props.insertedArticle(response)
        })
        .catch(error=>console.log(error))
    }
    return(
        <div>

        
        {props.article?(

                <div className="mb-3">
                <label htmlFor="title" className="form-label">Title</label>
                <input type="text" value={title} className="form-control" placeholder="Please Enter Title" 
                onChange={(event)=>setTitle(event.target.value)}
                />

                <label htmlFor="body" className="form-label">Description</label>
                <textarea row='5' className="form-control" placeholder="Please Enter Description"
                 value={body} onChange={(event)=>setBody(event.target.value)}
                />
                {props.article.id?
                <button className="btn btn-success mt-3" onClick={updateArticle}>Update</button>
                :
                <button className="btn btn-success mt-3" onClick={insertArticle}>Insert</button>}

            </div>
            
            ):null}
            
        </div>
    )
}

export default Form