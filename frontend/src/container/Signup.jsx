import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate();
  const handleChange = e=>{
    setFormData({...formData,[e.target.id]:e.target.value.trim()})
  }
  const handleSubmit = async (e)=>{
    e.preventDefault();
    if(!formData.username || !formData.email || !formData.password){
      return setError("Please fill out all fields")
    }
    try {
      setLoading(true)
      setError(null)
      const res = await fetch('/api/auth/signup',
      {
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(formData)
      })
      const data = await res.json();
      if(data.success === false){
        setError(data.message)
      }
      setLoading(false)
      if(res.ok){
        navigate('/signin')
      }
    } catch (error) {
      setError(error.message)
      setLoading(false)
      
    }
  }
  return (
    <div className="min-h-screen mt-20">
      <div className="flex flex-col md:flex-row md:items-center gap-5 p-3 max-w-3xl mx-auto">
        <div className="flex-1">
          <Link to={"/"} className="text-4xl font-bold dark:text-white ">
            <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-md text-white">
              Aanglo
            </span>
            Blog
          </Link>
          <p className="text-sm mt-5">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Praesentium debitis sit voluptates facilis iusto modi illo impedit
            unde officiis maiores consequuntur dicta eius dolore laboriosam ut
            enim cupiditate amet, a alias, deserunt voluptatum illum fugiat.
          </p>
        </div>
        <div className="flex-1">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <Label value="Your username" />
              <TextInput
                type="text"
                placeholder="username"
                className=""
                id="username"
                onChange={handleChange}
              />
            </div>
            <div>
              <Label value="Your email" />
              <TextInput
                type="email"
                placeholder="email"
                className=""
                id="email"
                onChange={handleChange}
              />
            </div>
            <div>
              <Label value="Your password" />
              <TextInput
                type="password"
                placeholder="password"
                className=""
                id="password"
                onChange={handleChange}
              />
            </div>
            <Button disabled={loading} gradientDuoTone={"purpleToPink"} type="submit">
              {loading &&(
                <>
                <Spinner size={'sm'}/>
                <span>Loading...</span>
                </>
              )}
              Sign Up
            </Button>
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>Have an account?</span>
            <Link to={'/signin'} className="text-blue-500">Sign In</Link>
          </div>
          {error && (
            <Alert className="mt-5" color={'failure'}>
              {error}
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
};

export default Signup;
