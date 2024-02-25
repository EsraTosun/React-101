import React from 'react'
import { Formik, useFormik, Field, Form } from 'formik';


function Contact() {
  const formik =useFormik
  return (
    <div>
      <h2>İletişim</h2>

      <Formik
        //Başlangıç Değeri 
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          message: '',
        }
        //Butona basıldığında yapılacak işlem
        //Forma girilen bilgilerin hepsine erişebiliyoruz
        onSubmit:(values) => {
          console.log(values)
        }
      }
        
      >
        {/* <Form>
          <label htmlFor="firstName">First Name</label>
          <Field id="firstName" name="firstName" placeholder="Jane" />

          <label htmlFor="lastName">Last Name</label>
          <Field id="lastName" name="lastName" placeholder="Doe" />

          <label htmlFor="email">Email</label>
          <Field
            id="email"
            name="email"
            placeholder="jane@acme.com"
            type="email"
          />
          <button type="submit">Submit</button>
        </Form> */}

        {({ handleSubmit, handleChange}) => (
          <Form onSubmit={handleSubmit} className='form'>
            <div>
              <label htmlFor="firstName">First Name</label>
              <input 
                id="firstName" 
                name="firstName" 
                placeholder="Jane" 
                onChange={formik.handleChange("firsName")}
              />
            </div>

            <div>
              <label htmlFor="lastName">Last Name</label>
              <input 
                id="lastName" 
                name="lastName" 
                placeholder="Doe" 
                onChange={formik.handleChange("lastName")}
              />
            </div>
            
            <div>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                placeholder="jane@acme.com"
                type="email"
                onChange={formik.handleChange("email")}
              />
            </div>
            
            <div>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Your message..."
                type="message"
                onChange={formik.handleChange("message")}
              />
            </div>

            <button type="submit">Submit</button>
        </Form>
        )}
      </Formik>
    </div>
  )
}

export default Contact