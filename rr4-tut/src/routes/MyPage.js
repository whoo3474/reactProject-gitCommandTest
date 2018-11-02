import React from 'react';
import {Redirect} from 'react-router-dom';

const logged = true;

const MyPage = () => {
  return (
    <div>
      {
        !logged && <Redirect to="/login"/>
      }
      
    </div>
  );
};

export default MyPage;