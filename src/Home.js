import React from 'react';
import Form from './Form';
import List from './List';
const Home = () => {
    return (
        <>

            <div className='container-fluid'>
                <div className='col-sm-12 bg-primary'>
                    <h1 className='text-center p-3'> Employee Management Application </h1>
                </div>
            </div>

            <Form />

            <List />

        </>
    );
}



export default Home;