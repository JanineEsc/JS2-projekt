import  { useFormik } from 'formik'
import { useAuth } from '../contexts/authContext'
import { useState } from 'react'

function LoginForm() {

   const { login } =useAuth()
   const [error, setError] = useState('')
   const [success, setSuccess] = useState('')

  const form = useFormik ({
    initialValues: {
      email:'',
      password: '',
      
    },
    onSubmit: async (values) => {
      console.log(values)
      setError('')
      setSuccess('')

      const { error, success } = await login (values)
      
      
      if(error) {
        setError(error)
      }
      if (success) {
        setSuccess(success)
      }
    }
 })

  return (
    <form onSubmit={form.handleSubmit} className='register-container'>
      <div className='reg-card'>
        <h1> Log in  </h1>
      </div>
        <div className="reg-box">
          <label htmlFor="email"> Email </label>
          <input id="email" value={form.values.email} onChange={form.handleChange} type="text" />
        </div>

        <div className="reg-box">
         <label htmlFor="password"> Password </label>
         <input id="password" value={form.values.password} onChange={form.handleChange} type="text" />
      </div>

        { error && <p className='error'> {error} </p>}
        { success && <p className='success'> {success} </p>}
         <button className='reg-btn' type="submit"> Log in </button>

    </form>
  )
}
export default LoginForm