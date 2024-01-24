import  { useFormik } from 'formik'
import { useAuth } from '../contexts/authContext'
import { useState } from 'react'

function RegForm() {

  const { register } = useAuth()
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const form = useFormik ({
    initialValues: {
      email:'',
      password: '',
      repeatPassword: '',
    },
    onSubmit: async (values) => {
      console.log(values)
      const { error, success  } = await register (values)

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
        <h1> Register here </h1>
      </div>
        <div className="reg-box">
          <label htmlFor="email"> Email </label>
          <input id="email" value={form.values.email} onChange={form.handleChange} type="text" />
        </div>

        <div className="reg-box">
         <label htmlFor="password"> Password </label>
         <input id="password" value={form.values.password} onChange={form.handleChange} type="text" />
        </div>

        <div className="reg-box">
         <label htmlFor="repeatPassword"> Repeat Password </label>
         <input id="repeatPassword" value={form.values.repeatPassword} onChange={form.handleChange} type="text" />
        </div>
        { error && <p className='error'> {error} </p>}
        { success && <p className='success'> {success} </p>}


        <button className='reg-btn' type="submit"> Register </button>

    </form>
  )
}
export default RegForm