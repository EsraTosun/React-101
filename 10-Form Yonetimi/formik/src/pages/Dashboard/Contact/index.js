import React from 'react'
import { Formik, useFormik, Field, Form } from 'formik';

import validationSchema from "./validations"

import "./styles.css"


function Contact() {
  const { handleSubmit, handleChange,handleBlur, values, isSubmitting, errors, touched} = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      message: '',
    //Butona basıldığında yapılacak işlem
    //Forma girilen bilgilerin hepsine erişebiliyoruz
    },
    onSubmit: async (values, bag) => {
      await new Promise((r) => setTimeout(r,1000));
      console.log(values);
      console.log(bag);

      if(values.email === 'test@test.com') {
        return bag.setErrors({ 
          email: 'Bu mail adresi zaten kullanılıyor',
          message: 'Lütfen geçersiz karakterler kullanmayınız'
        });
      }
      bag.resetForm(); //Formdaki işlem bittiğinde reset eder
    },
    validationSchema,
  });

  console.log(touched);

  return (
    <div>
      <h2>İletişim</h2>

      {/* {({ handleSubmit, handleChange}) => ( */}
      <form onSubmit={handleSubmit} className='form'>
            <div>
              <label htmlFor="firstName">First Name</label>
              <input 
                id="firstName" 
                name="firstName" 
                placeholder="Jane" 
                value={values.firstName}
                disabled = {isSubmitting}
                // isSubmitting => Yukarıda verilen süre kadar işlem yapılmasını engeller
                onChange={handleChange("firsName")}
                onBlur={handleBlur("firsName")}
              />
              { 
                errors.firstName && touched.firstName && <div className='error' > {errors.firstName} </div>
              }
            </div>

            <div>
              <label htmlFor="lastName">Last Name</label>
              <input 
                id="lastName" 
                name="lastName" 
                placeholder="Doe" 
                value={values.lastName}
                disabled = {isSubmitting}
                onChange={handleChange("lastName")}
                onBlur={handleBlur("lastName")}
              />
              { 
                errors.lastName && touched.lastName && <div className='error' > {errors.lastName} </div>
              }
            </div>
            
            <div>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                placeholder="jane@acme.com"
                type="email"
                value={values.email}
                disabled = {isSubmitting}
                onChange={handleChange("email")}
                onBlur={handleBlur("email")}
              />
              { 
                errors.email && touched.email && <div className='error' > {errors.email} </div>
              }
            </div>
            
            <div>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Your message..."
                type="message"
                value={values.message}
                disabled = {isSubmitting}
                onChange={handleChange("message")}
                onBlur={handleBlur("message")}
              />
              { 
                errors.message && touched.message && <div className='error' > {errors.message} </div>
              }
            </div>

            {/* isSubmitting => Buton bir saniye tıklanamaz oldu */}
            <button type="submit" disabled ={isSubmitting}>Submit</button>
        </form>

      {/* <Formik
        //Başlangıç Değeri 
        initialValues={{
          firstName: 'Test',
          lastName: 'deneme',
          email: 'test@deneme.com',
          message: 'Merhaba!',
        //Butona basıldığında yapılacak işlem
        //Forma girilen bilgilerin hepsine erişebiliyoruz
        }}
        onSubmit={(values) => {
          console.log(values)
        }}
        
      > */}
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
        {/* )} */}
      {/* </Formik>  */}
    </div>
  )
}

export default Contact