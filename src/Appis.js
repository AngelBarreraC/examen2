import axios from "axios";
import 'toastr/build/toastr.css';
import React, { useState } from 'react';
import './App.css';



function Appis (){
    const[dat,setData]=useState([]);
    const[vis,setVist]=useState(1);
    const[vis1,setVist1]=useState(1)
    const getData = async () =>{
        try{
            setVist(vis+1)
            let formData = new FormData();
            const url = "https://jsonplaceholder.typicode.com/posts";

            let result = await axios({
                url,
                method: 'GET',
                dataType: 'json',
                ContentType: 'application/json',
                data: formData
            });
            setData(result.data)
            if(vis%2 != 0){
                document.getElementById("vision").style.display='block';
                
            }else{
                document.getElementById("vision").style.display='none';

            }
        }catch (error) {
            console.log(error);  
        }
    }
    const[image,setImage]=useState([]);
    
    const getImage = async () =>{
        try{
            setVist1(vis1+1)
            let formData = new FormData();
            const url = "https://jsonplaceholder.typicode.com/photos";

            let result = await axios({
                url,
                method: 'GET',
                dataType: 'json',
                ContentType: 'application/json',
                data: formData
            });
            setImage(result.data)
            
            if(vis1%2 != 0){
                document.getElementById("vision2").style.display='block';

            }else{
                document.getElementById("vision2").style.display='none';
                
            }
        }catch (error) {
            console.log(error);  
        }
    }
    return(
        <div className="content">
            <form>
                <div className="row App">
                    <div className="col-md-6">
                        <button type="button" class="btn btn-outline-primary" id="1" onClick={(getData)}>primary</button>
                    </div>
                    <div className="col-md-6" >
                        <button type="button" className="btn btn-outline-primary" id="2" onClick={(getImage)}>Primary</button>
                    </div>
                </div>
            </form>
            <table className="table" id="vision" >
                
                <thead>
                    <tr>
                        <th scope="col"> UserID </th>
                        <th scope="col"> id</th>
                        <th scope="col"> Titulo</th>
                        <th scope="col"> Cuerpo</th>

                    </tr>
                </thead>
                <tbody>
                { 
                    dat.map( (data)=> 
                    <tr key={"celda"+data.userId}>
                        <td key={"userId"+data.userId}>{data.userId}</td> 
                        <td key={"id"+data.id}>{data.id}</td>
                        <td key={"titulo"+data.title}>{data.title} </td>
                        <td key={"Body"+data.body}>{data.body}</td>
                    </tr>
                    )
                }
                </tbody>
            </table>
            <div class="container" id="vision2 im">
                <div class="row" id="vision2 im">
                {
                image.map( (data) =>
                    <div class="col-md-3 ima">
                    <img src={data.url} alt="{data.url}" class="img-thumbnail"></img>
                </div>
                )
            }
                </div>
                
            
            </div> 
        </div>
    );
}
export default Appis;