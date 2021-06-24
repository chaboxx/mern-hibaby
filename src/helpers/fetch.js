import axios from "axios";

const baseUrl = "http://localhost:4000/admin/api"




export const fetchsinToken = (endpoint,data,method="GET") =>{
  const apiProduct= axios.create();

    const url = `${baseUrl}/${endpoint}`

    if (method==="GET"){

        return fetch(url);

    }else{

        return fetch(url, {
            method,
            body: JSON.stringify(data), // data can be `string` or {object}!
            headers:{
              'Content-Type': 'application/json'
            }
          })
    }



}

export const fetchConToken= (endpoint,data,method="GET") =>{


  const url= `${baseUrl}/${endpoint}`

  const token = localStorage.getItem("token")




  if (method==="GET"){

    return fetch(url);

  }else{

      return fetch(url, {
        node:"no-cors",
        method,
        headers:{
         
          
          "x-token" : token
  
        },
        body: data,
        
      })
    }
    }
      
        
        
      
      
          
      