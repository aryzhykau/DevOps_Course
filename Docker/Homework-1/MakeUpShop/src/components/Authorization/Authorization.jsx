import React, { useState} from 'react';
import { Dialog, DialogContent, DialogActions, Button} from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { showFormAuth as  showFormAuthAction, closeFormAuth as closeFormAuthAction} from '../../store/actions/authForm/authForm.actions';
import { login as loginAction, logout as logoutAction } from '../../store/actions/user/user.actions';
import { BASE_URL } from '../../api/constants/urls';
import './Authorization.css';
const Authorization = () => {

  const [errorText, setErrorText] = useState('');
  const showForm = useSelector(state => state.authFrom);
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();

  const login = (e) => {
    e.preventDefault();
    if(!e.target.username.value || !e.target.password.value){
      setErrorText('Login fields cannot be empty');
    } else {
      const formData = new URLSearchParams();
      formData.append('username', e.target.username.value);
      formData.append('password', e.target.password.value);
      const resp = fetch(`${BASE_URL}/auth`, {
        method: 'POST',
        body: formData,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(resp => resp.json().then(data => ({
        data: data,
        status: resp.status,
      })
      ).then(response => {
        if (response.status >= 400 && resp.status <= 599) {
          setErrorText(response.data.detail); 
          if(response.status === 422) {
            setErrorText(response.data.detail.msg);
          }
        }else {
          localStorage.setItem('token', JSON.stringify(response.data.access_token));
          dispatch(closeFormAuthAction());
          dispatch(loginAction());
        }
      }));
    }
  };

  return (
    <>
      {user === false ?  <button className="login" type="button" onClick={() => dispatch(showFormAuthAction())}> Log in</button>
        :  <Link to='/'><button className="login" type="button" onClick={() => 
        {dispatch(logoutAction());
          localStorage.removeItem('token');}}> Log out</button></Link>}
      <Dialog open={showForm}>
        <DialogContent>
          <form className="formAuth" onSubmit={login}>
            <h2>Log in</h2>
            <input type='text' name="username" placeholder="Username"/>
            <input type='password' name="password" placeholder="Password"/>
            <label>{errorText}</label>
            <button type="submit" className="login-btn">Log in</button>
          </form>
        </DialogContent>
        <DialogActions>
          <Button sx={{color: '#1E1E1E'}} onClick={() => {
            dispatch(closeFormAuthAction()); 
            setErrorText('');}}>
          Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Authorization;
