import React from 'react'
import Delete from './Delete'
import Edit from './Edit'
import { Divider, Image } from 'semantic-ui-react'

export default function ShowGifs(props) {
  

// Looks like I gotta create the JWT on the app side as well at login or on app.js?




	return(

		<table>
         <tbody>
           {props.newGif.map(gif => {
             return (
               <tr key={gif._id}>
                 <td>{gif.name}</td>
                 <td><Image src={gif.url} size='medium'></Image></td>
                 <Delete gif={gif._id} baseUrl={props.baseUrl} getGifs={props.getGifs} />
                 <Edit gif={gif._id} baseUrl={props.baseUrl} getGifs={props.getGifs}/> 

               </tr>
             )
           })}
         </tbody>
       </table>





		)
}