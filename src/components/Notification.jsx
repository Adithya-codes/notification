import React from "react";
import Alert from "@material-ui/lab/Alert";

import { useSelector, useDispatch } from "react-redux";
import { removeNotification } from "../redux/Store";

const Notification = () => {
  const data = useSelector((state) => state.alert.alert);

  const dispatch = useDispatch();

 
  const handleClick = (id) => {
    dispatch(removeNotification(id));
  };

  data.map((val, idx) => {
    setTimeout(() => {
      dispatch(removeNotification(val.id));
    }, val.timeout);
  });

  return (
    
    <div style={{display:'flex' ,justifyContent:'center',alignItems:'center'}}>
      {data
        ? data.map((alert, idx) => (
            <Alert
              variant={alert.variant}
              severity={alert.type}
              onClick={() => handleClick(alert.id)}
              style={{width:'20rem'}}
            >
              {alert.text}
            </Alert>
          ))
        : null}
    </div>

    
  );
};

export default Notification;
