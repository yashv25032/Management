import axios from 'axios';
import React, { useState , useEffect } from 'react';

import { Link, useParams } from 'react-router-dom';

const List = () => {

    const [Employees ,setEmployees] = useState();
    const {id} = useParams();


    useEffect(() => {

        try {

            async function getallEmployeee(){

                const Employees =  await axios.get("http://localhost:3333/Employee")
                setEmployees(Employees.data);
    
            }

            getallEmployeee();

        } catch (error) {

            console.log("something went wrong",error)

        }
        
    });

    async function onHandle(id){

        try {

            await axios.delete(`http://localhost:3333/Employee/${id}`)

            var newEmp = Employees.filter((item) =>{
                return item.id != id ;
            })
            
            
        } catch (error) {

                console.log("something wrong",error);

        }
    }
    

   
    return (
        <>

            <div className='container-fluid d-flex justify-content-center mt-4'>

                <div className='col-lg-7'>

                    <h2 className='text-center p-3 bg-warning'>List Of Employee</h2>

                </div>
            </div>

            <div className='container-fluid' >
                <div className='col-xs-12 mt-2  '>

                    <table className="table table-striped responsive ">
                        <thead className='bg-secondary'>
                            <tr>
                                <th scope="col" className='bg-secondary' >#</th>
                                <th scope="col" className='bg-secondary' >Name</th>
                                <th scope="col" className='bg-secondary' >Email</th>
                                <th scope="col" className='bg-secondary' >Phone</th>
                                <th scope="col" className='bg-secondary' >Address</th>
                                <th scope="col" className='bg-secondary' >Salary</th>
                                <th scope="col" className='bg-secondary' >Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                Array.isArray(Employees) && Employees.map((elem , i)=>{
                                    return(

                                        <tr key={i}>
                                        <th scope="row">{i+1}</th>
                                        <td>{elem.name}</td>
                                        <td>{elem.email}</td>
                                        <td>{elem.phone}</td>
                                        <td>{elem.address}</td>
                                        <td>{elem.salary}</td>
                                        <td>

                                            <div>
                                                <button type="button" className="btn btn-warning m-2"> <Link to={`/view/${elem.id}`}> <i className="fa-solid fa-eye"></i> </Link></button>
                                                <button type="button" className="btn btn-danger m-2"> <Link onClick={()=> onHandle(elem.id)} >  <i className="fa-solid fa-trash"></i> </Link></button>
                                                <button type="button" className="btn btn-success m-2"> <Link to={`/edit/${elem.id}`} > <i className="fa-solid fa-pen-to-square"></i> </Link></button>
                                            </div>

                                        </td>
                                    </tr>
        
                                    )
                                })
                            }
                   
                        </tbody>
                    </table>


                </div>
            </div>



        </>
    );
}

export default List;
