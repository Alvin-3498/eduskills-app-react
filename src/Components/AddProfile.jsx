import axios from 'axios'
import React, { useState } from 'react'

const AddProfile = () => {
    const [data,setdata] = useState([
        {
            "name":"",
            "username":"",
            "email":"",
            "dob":"",
            "mobile":"",
            "password":"",
        }
    ])

    const inputHANDLER = (event) => {
        setdata({...data,[event.target.name]:event.target.value})
    }

    const readData = () =>{
        console.log(data)
        axios.post("",data).then(
            (response) => {
                console.log(response.data)
            if (response.data.status == "Success") {
                alert("Insertion Successful")
            } else {
                alert("Insertion Failed")
            }
        }
        ).catch(
            (error) => {
                alert("Error")
            }
        ).finally()
    }
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">
                                Name
                            </label>
                            <input type="text" className="form-control" name="name" value={data.name} onChange={inputHANDLER} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">
                                Username
                            </label>
                        </div>
                            <input type="text" className="form-control" name="username" value={data.username} onChange={inputHANDLER} />
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">
                                Email
                            </label>
                            <input type="text" className="form-control" name="email" value={data.email} onChange={inputHANDLER} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-control">
                                DOB
                            </label>
                            <input type="date" id="" className="form-control" name="dob" value={data.dob} onChange={inputHANDLER} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-control">
                                Mobile No
                            </label>
                            <input type="text" className="form-control" name="mobile" value={data.mobile} onChange={inputHANDLER} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-control">
                                Password
                            </label>
                            <input type="password" id="" className="form-control" name="password" value={data.password} onChange={inputHANDLER} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button className="btn btn-success" onClick={readData}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
export default AddProfile