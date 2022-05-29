import axios from "axios";
import 'toastr/build/toastr.css';
import React, { useState } from 'react';
import './App.css';



function Appis (){
    const[dat,setData]=useState([]);
    const[vis,setVist]=useState(1);
    const getData = async () =>{
        try{
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
            setVist(parseInt(vis)+1)
            if(vis%2 == 0){
                document.getElementById("vision").style.display='none';
            }else{
                document.getElementById("vision").style.display='block';
            }
        }catch (error) {
            console.log(error);  
        }
    }
    const[image,setImage]=useState([]);
    const[vis1,setVist1]=useState(1)
    const getImage = async () =>{
        try{
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
            console.log(image.data)
            setVist1(parseInt(vis1)+1)
            if(vis1%2 == 0){
                document.getElementById("vision2").style.display='none';
            }else{
                document.getElementById("vision2").style.display='block';
            }
        }catch (error) {
            console.log(error);  
        }
    }
    return(
        <div className="content">
            <form>
                <div className="row">
                    <div className="col-6">
                        <button type="button" class="btn btn-outline-primary" id="1" onClick={(getData)}>primary</button>
                    </div>
                    <div className="col-6" >
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
            <div class="row" id="vision2 im">{
                image.map( (data) =>
                    <div class="col-md-3">
                    <img src="{image.data.url}" alt="..." class="img-thumbnail"></img>
                </div>
                )
            }
            
            </div> 
        </div>
    );
}
export default Appis;