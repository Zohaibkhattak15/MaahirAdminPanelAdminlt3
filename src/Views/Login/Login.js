import React,{useEffect, useState } from 'react';
import './login.css';
import { Link , useHistory } from 'react-router-dom';
import Checkbox from '@material-ui/core/Checkbox';
// import { userLoginRequest } from '../../Store/actionTypes/login';
// import { connect } from "react-redux";
import axios from 'axios';

// import { Base64 } from 'js-base64';

 const Login = ()  => {

    
    const [email, setemail] = useState('');
    const [pass, setpass] = useState('');

    
    const history = useHistory();
    // const dispatch = useDispatch();


    // Login Handler 
    const  hanedleLogin = async (event) => {

        event.preventDefault();

        if (!email) {
            alert('Please fill email');
            return;
          }

        if (!pass) {
            alert('Please fill Password');
            return;
          }
    
                 axios.post('https://maahirpro.com/maahir/index.php/admin/auth', {
                email: email ,
                password : pass
            })

                .then(resp => { 
                      if(resp.status === 200){
                        history.replace('/Dashboard');
                        localStorage.setItem('isAuthenticated' , JSON.stringify(email));
                        }
                    }
                )
            
                .catch( err => console.log(err)) 
                
             
        }

    useEffect(() => {
        history.goBack(null);
    }, [history])


    return (
        <>  
                <div className="hold-transition login-page">
                <div className="login-box">
                <div className="login-logo">
                    <Link to='/'>  <b>Maahir </b>Application</Link>
                </div>
                <div className="card">
                    <div className="card-body login-card-body">
                    <p className="login-box-msg">Sign in to start your session</p>
                    <form>
                        <div className="input-group mb-3">
                        <input 
                        type="email" 
                        className="form-control" 
                        placeholder="Email" 
                        onChange={(e) =>setemail(e.target.value) } 
                        value={email}    
                        />
                        <div className="input-group-append">
                            <div className="input-group-text">
                            <span className="fas fa-envelope" />
                            </div>
                        </div>
                        </div>
                        <div className="input-group mb-3">
                        <input 
                        type="password" 
                        className="form-control" 
                        placeholder="Password" 
                        onChange={(e) =>setpass(e.target.value) } 
                        value={pass}    
                        />
                        <div className="input-group-append">
                            <div className="input-group-text">
                            <span className="fas fa-lock" />
                            </div>
                        </div>
                        </div>
                        <div className="row">
                        <div className="col-8">
                            <div className="icheck-primary">
                            {/* <input type="checkbox" id="remember" /> */}
                            <Checkbox
                                    color="primary"
                                />
                            <label htmlFor="remember">
                                Remember Me
                            </label>
                            </div>
                        </div>
                        <div className="col-4">
                            <button type="submit" value='Login' className="btn btn-primary btn-block" onClick={hanedleLogin} >Login</button>
                        </div>
                        </div>
                    </form>
                    <div className="social-auth-links text-center mb-3">
                        <p>- OR -</p>
                        <Link to='/' className="btn btn-block btn-primary">
                        <i className="fab fa-facebook mr-2" /> Sign in using Facebook
                        </Link>
                        <Link to='/' className="btn btn-block btn-danger">
                        <i className="fab fa-google-plus mr-2" /> Sign in using Google+
                        </Link>
                    </div>
                    <p className="mb-1">
                        <Link to='/'>I forgot my password</Link>
                    </p>
                    <p className="mb-0">
                        <Link to='/' className="text-center">Register a new membership</Link>
                    </p>
                    </div>
                </div>
            </div>
        </div>

        </>
    )
}

export default Login;
// const mapDispatchToProps = dispatch => {
//     return {    
//         dispatch(email),
//         dispatch(pass)
//         };
//   };
  
//   export default connect(null,
//     mapDispatchToProps,
//     { userLoginRequest }
//   )(Login);

