import {useState,useEffect} from 'react'
import axios from "axios";
import ArticleList from './components/articleList';
import Form from './components/Form';
import './App.css';

const App=()=> {
  const [articles,setArticles]=useState([])
  const [editedArticle,setEditedArticle]=useState(null)
  useEffect(()=>{
    axios.get(`http://127.0.0.1:5000/get`,{
      'method':"GET",
      headers:{
        'Content-Type':'application/json'
      }

    })  
    .then((response) => {
      setArticles(response.data)
      //console.log(response.data)
    })
    .catch(error=>console.log(error))
    
  },[])

  const editArticle=(article)=>{
    setEditedArticle(article)
    //console.log(article)
  }
  const updatedData=(article)=>{
    const new_article=articles.map(my_article=>{
      if(my_article.id===article.id){
        return article
      }
      else{
        return my_article
      }
    })
    setArticles(new_article)
  }

  const openForm=()=>{
    setEditedArticle({title:"",body:""})
  }

  const insertedArticle=(article)=>{
    const new_articles=[...articles,article]
  
    setArticles(new_articles)    
  }

  const deleteArticle=(article)=>{
    const new_articles=articles.filter(myarticle=>{
      if(myarticle.id===article.id){
        return false
      }
      else{
        return true
      }
    })
    setArticles(new_articles)
  }

  return (
    <div className="App">
    <div className='row'>
      <div className='col'>
    <h1>Flask and React Js Course</h1>
      </div>
      <div className='col'>
      <button className='btn btn-success' onClick={openForm}>Insert Article</button>
      </div>
    </div>
     
      <ArticleList articles={articles} editArticle={editArticle} deleteArticle={deleteArticle}/>
      {editedArticle?<Form article={editedArticle} updatedData={updatedData}
        insertedArticle={insertedArticle}
      />:null}
    </div>
  );
}

export default App;
