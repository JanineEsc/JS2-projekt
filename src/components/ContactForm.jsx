import { useFormik } from 'formik'
import { RegisterFormSchema } from '../lib/Schemas'


const ContactForm = ({ className, errormsg, }) => {

  const form = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validationSchema: RegisterFormSchema,
    onSubmit: (values) => {
      console.log(values)
    }
  })

  console.log(form)




  return (
    <form onSubmit={form.handleSubmit} noValidate className="contact-container">
      <div className="contact-card">
      <h1> Contact Us </h1>
        <label id="fname" htmlFor="text"> Name</label>
        <input id="text" value={form.values.name} onChange={form.handleChange} onBlur={form.onBlur} type="text"  placeholder="Write your name" />
        {form.errors.name && form.touched.name && (
          <div className='error'>
            {form.errors.name}
            </div>
        )}

        <label id="email" htmlFor="text"> Email</label>
        <input id="text" value={form.values.email} onChange={form.handleChange} onBlur={form.onBlur} type="text" placeholder="Write your email" />
        {form.errors.email && form.touched.email && (
          <div className='error'>
            {form.errors.email}
            </div>
        )}

        <label id="message" htmlFor="text"> Message </label>
        <textarea id="subject" value={form.values.message} onChange={form.handleChange} onBlur={form.onBlur} type="text" name="subject" placeholder=""></textarea>
        {form.errors.message && form.touched.message && (
          <div className='error'>
            {form.errors.message}
            </div>
        )}
      <button type="submit" className="contact-btn"> Send </button>
      </div>

    </form>
  )
}
export default ContactForm