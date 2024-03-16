import './style.css';

const Register = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <div className="content">
      <h1>REGISTRATION FORM</h1>
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input type="text" id="firstName" required/>
        <label htmlFor="lastName">Last name</label>
        <input type="text" id="lastName" required/>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" required/>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" required/>
        <button className="btn btn-primary" type="submit">Submit</button>
      </form>
    </div>
  )
}
export default Register