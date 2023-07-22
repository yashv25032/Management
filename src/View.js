import React, { useEffect, useState } from 'react';
import {  useParams } from 'react-router-dom';
import axios from 'axios';

const View = () => {

    const [Employe , setEmploye] = useState();

    const {id} = useParams();
    
    async function getData(){

        const Employe  = await axios.get(`http://localhost:3333/Employee/${id}`)
        
        setEmploye(Employe.data)

    }

    useEffect(() => {
       
        getData();

    });

    if(!Employe){
        return <div>Loading...</div>;
    }

    return (

        <>
        
        <div className='container-fluid' >
                <div className='col-sm-12 mt-2  '>

                    <table className="table table-striped ">
                        <thead className='bg-secondary'>
                            <tr>
                                <th scope="col" className='bg-secondary' >#</th>
                                <th scope="col" className='bg-secondary' >Name</th>
                                <th scope="col" className='bg-secondary' >Email</th>
                                <th scope="col" className='bg-secondary' >Phone</th>
                                <th scope="col" className='bg-secondary' >Address</th>
                                <th scope="col" className='bg-secondary' >Salary</th>
                            </tr>
                        </thead>
                        <tbody>

                            <tr>
                                
                                <td>{Employe.id}</td>
                                <td>{Employe.name}</td>
                                <td>{Employe.email}</td>
                                <td>{Employe.phone}</td>
                                <td>{Employe.address}</td>
                                <td>{Employe.salary}</td>
                             
                            </tr>

                        </tbody>
                    </table>
                    
                </div>
            </div>


        </>

    );
}

export default View;
