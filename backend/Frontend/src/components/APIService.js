import axios from "axios";

export default class APIService {
    static UpdateArticle(id,body){
        // return fetch(`http://127.0.0.1:5000/update/${id}/`,{
        //     'method':"PUT",
        //     headers:{
        //       'Content-Type':'application/json'
        //     },
        //     body:JSON.stringify(body)
        //   })  
        //   .then((response) =>response.json())
        return axios.put(`http://127.0.0.1:5000/update/${id}/`,body)  
        .then((response) => {
            return response.data
          })
    }

    static InsertArticle(body){
        // return fetch(`http://127.0.0.1:5000/add`,{
        //     'method':"POST",
        //     headers:{
        //       'Content-Type':'application/json'
        //     },
        //     body:JSON.stringify(body)
        //   })  
        //   .then((response) =>response.json())
        return axios.post(`http://127.0.0.1:5000/add`,body)  
        .then((response) => {
            return response.data
          })
    }

    static DeleteArticle(id){
        // return fetch(`http://127.0.0.1:5000/delete/${id}`,{
        //     'method':"DELETE",
        //     headers:{
        //       'Content-Type':'application/json'
        //     },
        //   })  
        return axios.delete(`http://127.0.0.1:5000/delete/${id}/`)  
    }
}


