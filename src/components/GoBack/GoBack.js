import React from 'react';
import { BsArrowLeftSquareFill } from "react-icons/bs";
import { useLocation, useNavigate } from 'react-router-dom';

import './GoBack.css';

const GoBack = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      {
        location.pathname === '/'
        ? <></>
        : <div className={'go-back'} onClick={() => navigate(-1)}>
            <BsArrowLeftSquareFill />
          </div>
      }
    </>
  )
}

export default GoBack;
