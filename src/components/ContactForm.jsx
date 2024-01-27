import { useFormik } from 'formik'
import { RegisterFormSchema } from '../lib/Schemas'
import { useState } from 'react'


const ContactForm = () => {

  const [formSubmit, setFormSubmit] = useState(null)

  const form = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validationSchema: RegisterFormSchema,
    onSubmit: async (values) => {
      console.log(values)

      const res = await fetch ('https://js2-ecommerce-api.vercel.app/api/messages', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(values)
      });

      if(!res.ok) {
        throw new Error(`${res.status}`)
      }
      else {
        const data = await res.json()
        setFormSubmit(data);
      }
    }
  })








  return (
    <form onSubmit={form.handleSubmit} noValidate className="contact-container">
      <div className="contact-card">
      <h1> Contact Us </h1>
        <label id="name" htmlFor="text"> Name</label>
        <input id="name" value={form.values.name} onChange={form.handleChange} onBlur={form.onBlur} type="text"  placeholder="Write your name" />
        {form.errors.name && form.touched.name && (
          <div className='error'>
            {form.errors.name}
            </div>
        )}

        <label id="email" htmlFor="email"> Email</label>
        <input id="email" value={form.values.email} onChange={form.handleChange} onBlur={form.onBlur} type="email" placeholder="Write your email" />
        {form.errors.email && form.touched.email && (
          <div className='error'>
            {form.errors.email}
            </div>
        )}

        <label id="message" htmlFor="text"> Message </label>
        <textarea id="message" value={form.values.message} onChange={form.handleChange} onBlur={form.onBlur} type="text" placeholder=""></textarea>
        {form.errors.message && form.touched.message && (
          <div className='error'>
            {form.errors.message}
            </div>
        )}
        {
          formSubmit && (
            <div> {formSubmit.message + "!"} </div>
          )
        }
      <button type="submit" className="contact-btn"> Send </button>
      </div>

    </form>
  )
}
export default ContactForm