import React from 'react'
import "./Contacts.css"
import { Avatar } from '@material-ui/core'
function Contacts() {
    var contact = [
            {
                name: "Rahul Subramanyan",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR0H95b3f1TmrqMhHcI3-0dTcPMDzJlxVJfBA&usqp=CAU"
            },
            {
                name:"Advitiya Sujeet",
                image:"https://images.pexels.com/photos/940585/pexels-photo-940585.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            },
            {
                name:"Alagesan Poduri",
                image:"https://images.pexels.com/photos/1472761/pexels-photo-1472761.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            },
            {
                name:"Amrish Ilyas",
                image:"https://images.pexels.com/photos/899357/pexels-photo-899357.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
            },
            {
                name:"Aprativirya Seshan",
                image:"https://images.pexels.com/photos/997217/pexels-photo-997217.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            },
            {
                name:"Abdullah",
                image:"https://images.pexels.com/photos/1379031/pexels-photo-1379031.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            },
            {
                name:"Rohan Patel",
                image:"https://images.pexels.com/photos/1042140/pexels-photo-1042140.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            },
            {
                name:"Sandeep Maheshwari",
                image:"https://images.pexels.com/photos/737586/pexels-photo-737586.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            },
            {
                name:"Anand Agrawal",
                image:"https://images.pexels.com/photos/1205033/pexels-photo-1205033.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            },

        ]
    return (
        <div className="Widgets">
            <h3>Contacts</h3>
            <div>
                {contact.map((data,index)=>{
                    return  <div key={index} className="Widget">
                                <Avatar src={data.image}/>
                                <h3>{data.name}</h3>
                            </div>
                })}
            </div>
        </div>
    )
}

export default Contacts
