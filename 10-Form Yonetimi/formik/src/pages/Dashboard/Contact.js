import React from 'react'
import { Formik, useFormik, Field, Form } from 'formik';


function Contact() {
  const { handleSubmit, handleChange, values, isSubmitting} = useFormik({
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
      bag.resetForm(); //Formdaki işlem bittiğinde reset eder
    }
  });
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
              />
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
              />
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
              />
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
              />
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