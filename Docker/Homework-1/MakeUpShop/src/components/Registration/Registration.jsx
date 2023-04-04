import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Dialog, DialogContent, DialogActions, Button} from '@mui/material';
import { showFormRegister as showFormRegisterAction, closeFormRegister as closeFormRegisterAction} from '../../store/actions/registerForm/registerForm.actions';
import { BASE_URL } from '../../api/constants/urls';
import './Registration.css';
const  Registration = () => {
  const [massegeText, setMassegeText] = useState('');
  const showForm = useSelector(state => state.registerForm);
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();

  const register = (e) => {
    e.preventDefault();
    const respBody = {
      username: e.target.username.value,
      name: e.target.name.value,
      password: e.target.password.value,
    };
    const resp = fetch(`${BASE_URL}/users/register/`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(respBody)
    }).then(response => 
      response.json().then(data => ({
        data: data,
        status: response.status
      })).then(resp => {
        if(resp.status  >= 400 && resp.status <= 599) {
          setMassegeText(resp.data.detail);
          if(response.status === 422) {
            setMassegeText(response.data.detail.msg);
          }
        } else setMassegeText('Registration completed successfully. Log in');
      })
    );
  };

  return (
    <>
      {user === false ? <button className="registration" type="button" onClick={() => dispatch(showFormRegisterAction())}>Registration</button> 
        : <div></div>}
      <Dialog open={showForm}>
        <DialogContent>
          <form className="formRegist" onSubmit={register}>
            <h2>Register</h2>
            <input type="text" name="name" placeholder="Name"/>
            <input type="text" name="username" placeholder="Username"/>
            <input type="password" name="password" placeholder="Password"/>
            <label>{massegeText}</label>
            <button type="submit" className="register">Register</button>
          </form>
        </DialogContent>
        <DialogActions>
          <Button sx={{color: '#1E1E1E'}} onClick={() => {
            dispatch(closeFormRegisterAction()); 
            setMassegeText('');}}>
          Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Registration;
