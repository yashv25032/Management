import axios from 'axios';
import React, { useState } from 'react';

const Form = () => {


    const [Emloyee, setEmployee] = useState({

        name: "",
        email: "",
        phone: "",
        salary: "",
        address: ""

    });


    const onTextChange = (e) => {


        setEmployee({

            ...Emloyee, [e.target.name]: e.target.value

        })

    }

    async function onFormSubmit(e) {
        e.preventDefault()
        try {

            await axios.post("http://localhost:3333/Employee", Emloyee)


        } catch (error) {

            console.log("some thing went wrong", error)

        }

    }



    return (


        <>

            <div className='container-fluid d-flex justify-content-center'>
                <div className='col-lg-7'>
                    <h2 className='text-center p-3 bg-info'>New Employee Add</h2>
                    <div className='col-sm-12 '>

                        <form>

                            <div className="form row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" className="form-control" name='name' onChange={(e) => onTextChange(e)} required id="inputEmail4" placeholder="Name" />
                                </div>

                                <div className="form-group col-md-6">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" className="form-control" name='email' onChange={(e) => onTextChange(e)} required id="inputPassword4" placeholder="Email" />
                                </div>

                            </div>

                            <br />

                            <div className="form-group">
                                <label htmlFor="inputAddress">Address</label>
                                <input type="text" className="form-control" name='address' onChange={(e) => onTextChange(e)} required id="inputAddress" placeholder="1234 Main St" />
                            </div>

                            <br />
                            
                            <div className="form row">
                                <div class="form-group col-md-6">
                                    <label htmlFor="inputCity">Salary</label>
                                    <input type="text" className="form-control" name='salary' onChange={(e) => onTextChange(e)} required id="salary" placeholder='salary' />
                                </div>

                                <div className="form-group col-md-4">
                                    <label htmlFor="inputZip">Phone No</label>
                                    <input type="text" className="form-control" name='phone' onChange={(e) => onTextChange(e)} required id="phone" />
                                </div>

                            </div>

                            <button type="submit" onClick={(e) => onFormSubmit(e)} className="btn btn-primary p-2 mt-3 w-100 d-flex justify-content-center">Submit</button>

                        </form>

                    </div>
                </div>
            </div>
        </>
    );
}

export default Form;
