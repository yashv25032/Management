import axios from 'axios';
import React, { useState ,useEffect  } from 'react';
import { useParams , useNavigate } from 'react-router-dom';

const Edit = () => {

    const [Employees , setEmployees] = useState({

        name: "",
        email: "",
        phone: "",
        salary: "",
        address: ""

    });
    const {id} = useParams();

    const navigate = useNavigate();

    useEffect(() => {

        async function getDataEmp(){

            const Employees = await axios.get(`http://localhost:3333/Employee/${id}`)
            setEmployees(Employees.data)

        } 
        
        getDataEmp();

    }, [id]);

    const onFormText = (e)=>{
        setEmployees({
            ...Employees , [e.target.name]: e.target.value
    })
    


    }

    async function onFormHandle(e){
        e.preventDefault();

        try {

            await axios.put(`http://localhost:3333/Employee/${id}`,Employees)

            navigate('/');
            
        } catch (error) {
             
            console.log("something wrong",error)

        }

    }

    if(!Employees){
        return <div>Loading...</div>;

        }

    return (
       <>
       
       <div className='container-fluid d-flex justify-content-center'>
                <div className='col-lg-7'>
                    <h2 className='text-center p-3 bg-info'>Update Employee</h2>
                    <div className='col-sm-12'>

                        <form>


                            <div className="form row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" className="form-control" name='name' onChange={(e)=> onFormText(e)} id="inputEmail4" value={Employees.name} placeholder="Name" />
                                </div>

                                <div className="form-group col-md-6">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" className="form-control" name='email' onChange={(e)=> onFormText(e)} id="inputPassword4" value={Employees.email} placeholder="Email" />
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="inputAddress">Address</label>
                                <input type="text" className="form-control" name='address' onChange={(e)=> onFormText(e)} id="inputAddress" value={Employees.address} placeholder="1234 Main St" />
                            </div>

                            <div className="form row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputCity">Salary</label>
                                    <input type="text" className="form-control" name='salary' onChange={(e)=> onFormText(e)} id="salary" value={Employees.address} placeholder='salary' />
                                </div>

                                <div className="form-group col-md-4">
                                    <label htmlFor="inputZip">Phone No</label>
                                    <input type="number" className="form-control" name='phone' onChange={(e)=> onFormText(e)} value={Employees.phone} id="phone" />
                                </div>

                            </div>

                            <button type="submit" onClick={(e)=> onFormHandle(e)} className="btn btn-primary p-2 mt-3 w-100 d-flex justify-content-center">Submit</button>

                        </form>

                    </div>
                </div>
            </div>
       
       </>
    );
}

export default Edit;
