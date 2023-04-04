import React from 'react';
import Authorization from '../Authorization/Authorization';
import Registration from '../Registration/Registration';
import { useSelector } from 'react-redux';
import './Account.css';

const Account = () => {
  const user = useSelector(state => state.user);

  return (
    <>
      {user === false ? <div className="account-wrapper-regist"> 
        <button type="button" className="account_btn">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23Z" stroke="#1E1E1E"/>
            <path d="M19.5263 18.9472C19.5263 19.9287 18.8248 20.9305 17.444 21.7195C16.0796 22.4991 14.1561 22.9998 11.9999 22.9998C9.84383 22.9998 7.92029 22.4991 6.5559 21.7195C5.17513 20.9305 4.47363 19.9287 4.47363 18.9472C4.47363 17.9656 5.17513 16.9638 6.5559 16.1748C7.92029 15.3952 9.84383 14.8945 11.9999 14.8945C14.1561 14.8945 16.0796 15.3952 17.444 16.1748C18.8248 16.9638 19.5263 17.9656 19.5263 18.9472Z" stroke="#1E1E1E"/>
            <path d="M12.0002 12.579C13.5989 12.579 14.8949 11.283 14.8949 9.68429C14.8949 8.08557 13.5989 6.78955 12.0002 6.78955C10.4015 6.78955 9.10547 8.08557 9.10547 9.68429C9.10547 11.283 10.4015 12.579 12.0002 12.579Z" stroke="#1E1E1E"/>
          </svg>
        </button>
        <ul>
          <li><Authorization/></li>
          <li><Registration/></li>
        </ul>
      </div>
        :  <div className="account-wrapper"> 
          <button type="button" className="account_btn">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23Z" stroke="#1E1E1E"/>
              <path d="M19.5263 18.9472C19.5263 19.9287 18.8248 20.9305 17.444 21.7195C16.0796 22.4991 14.1561 22.9998 11.9999 22.9998C9.84383 22.9998 7.92029 22.4991 6.5559 21.7195C5.17513 20.9305 4.47363 19.9287 4.47363 18.9472C4.47363 17.9656 5.17513 16.9638 6.5559 16.1748C7.92029 15.3952 9.84383 14.8945 11.9999 14.8945C14.1561 14.8945 16.0796 15.3952 17.444 16.1748C18.8248 16.9638 19.5263 17.9656 19.5263 18.9472Z" stroke="#1E1E1E"/>
              <path d="M12.0002 12.579C13.5989 12.579 14.8949 11.283 14.8949 9.68429C14.8949 8.08557 13.5989 6.78955 12.0002 6.78955C10.4015 6.78955 9.10547 8.08557 9.10547 9.68429C9.10547 11.283 10.4015 12.579 12.0002 12.579Z" stroke="#1E1E1E"/>
            </svg>
          </button>
          <ul>
            <li><Authorization/></li>
            <li><Registration/></li>
          </ul>
        </div>}
    </>
  );
};

export default Account;
