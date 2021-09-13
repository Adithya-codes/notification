import React from "react";
import Alert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";

import { useSelector, useDispatch } from "react-redux";
import { removeNotification } from "../redux/Store";

const Notification = () => {
  const data = useSelector((state) => state.alert.alert);

  const dispatch = useDispatch();

  const useStyles = makeStyles((theme) => ({
    container: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
  }));

  const classes = useStyles();
  const handleClick = (id) => {
    dispatch(removeNotification(id));
  };

  data.map((val, idx) => {
    return setTimeout(() => {
      dispatch(removeNotification(val.id));
    }, val.timeout);
  });

  return (
    <div className={classes.container}>
      {data
        ? data.map((alert, idx) => (
            <Alert
              variant={alert.variant}
              severity={alert.type}
              onClick={() => handleClick(alert.id)}
              style={{ width: "20rem" }}
            >
              {alert.text}
            </Alert>
          ))
        : null}
    </div>
  );
};

export default Notification;
