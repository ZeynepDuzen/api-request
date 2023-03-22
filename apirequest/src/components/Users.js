import React from 'react'
import axios from 'axios';

function Users(){

  const [data,setData] = React.useState([]);

  async function getUsers(){
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      setData(response.data);                        
  }

  getUsers();

   return(
      <div>
        <ul>
           {
             data.map((item)=>(
                <>
                <li>{item.name}</li>
                <li>{item.email}</li>
                </>              
             ))                 
           }                   
        </ul>
      </div>                        
   )                           
}

export default Users;