import React from 'react'
import {Formik,Form,Field} from 'formik'
import './Add.css'

interface MyForm
{
    name:string,
    img:string,
    comment:string
}


function Add({ film , setFilms}:any) {

    const InitialValue:MyForm = 
    {
        name:"",
        img:"",
        comment:""
    }

    return (
        <div className='add'>
           <Formik
           initialValues={InitialValue}
           onSubmit={(x:MyForm)=> {
            let ls = JSON.parse(localStorage.getItem('film')||"")
               localStorage.setItem("film",JSON.stringify([...ls,x]))
               let newLs = JSON.parse(localStorage.getItem('film')||"")
               setFilms(newLs)
                
           }}
           >
               <Form className='form'>
                   <Field className='field' placeholder='Add film name' name='name'/>
                   <Field className='field' placeholder='Add film image' name='img'/>
                   <Field className='field' placeholder='Add film comment' name='comment'/>
                   <input className='submit-btn' type="submit"/>
               </Form>
           </Formik>
        </div>
    )
}

export default Add
