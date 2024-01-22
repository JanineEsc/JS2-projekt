import  { useFormik } from 'formik'

function LoginForm() {

  const form = useFormik ({
    initialValues: {
      email:'',
      password: '',
      
    },
    onSubmit: async (values) => {
      console.log(values)
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

        <button className='reg-btn' type="submit"> Log in </button>

    </form>
  )
}
export default LoginForm