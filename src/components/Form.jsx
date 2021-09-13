import React, { useState } from "react";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import { makeStyles } from "@material-ui/core/styles";
import Select from "@material-ui/core/Select";
import { Paper } from "@material-ui/core";

import { setNotification } from "../redux/Store";
import { useDispatch } from "react-redux";
import { Input } from "@material-ui/core";
import { Button } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },

}));

const Form = () => {
  const dispatch = useDispatch();

  const [type, setType] = useState("success");
  const [text, setText] = useState("Success");
  const [timeout, setTimeout] = useState("1000");
  const [variant, setVariant] = useState("filled");

  const handleSubmit = (e) => {
    e.preventDefault();

    const alert = {
      id: Math.random(),
      type: type,
      text: text,
      variant: variant,
      timeout: timeout,
    };

    dispatch(setNotification(alert));
  };
  const classes = useStyles();

  return (
    
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: "4rem",
        marginBottom: "1rem",
       
      }}
    >
  <Paper elevation={0}>
      <form  style={{padding:'1rem'}}onSubmit={handleSubmit}>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel id="demo-simple-select-outlined-label">Type</InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={type}
            onChange={(e) => {
              setType(e.target.value);
            }}
            label="Type"
          >
            <MenuItem value="success">Success</MenuItem>
            <MenuItem value="info">Info</MenuItem>
            <MenuItem value="warning">Warning</MenuItem>
            <MenuItem value="error">Danger</MenuItem>
          </Select>
        </FormControl>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel id="demo-simple-select-outlined-label">
            Variant
          </InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={variant}
            onChange={(e) => {
              setVariant(e.target.value);
            }}
            label="variant"
          >
            <MenuItem value="filled">Filled</MenuItem>
            <MenuItem value="outlined">Outlined</MenuItem>
          </Select>
        </FormControl>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel id="demo-simple-select-outlined-label">
            Timeout
          </InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={timeout}
            onChange={(e) => {
              setTimeout(e.target.value);
            }}
            label="Type"
          >
            <MenuItem value="1000">1</MenuItem>
            <MenuItem value="2000">2</MenuItem>
            <MenuItem value="3000">3</MenuItem>
            <MenuItem value="4000">4</MenuItem>
          </Select>
        </FormControl>

        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel id="demo-simple-select-outlined-label">Text</InputLabel>
          <Input
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
            label="Text"
          ></Input>
        </FormControl>

        <Button
          variant="contained"
          color="primary"
          style={{ marginTop: "1.2rem" }}
          type="submit"
        >
          {" "}
          Notify{" "}
        </Button>
      </form>
      </Paper>

    </div>

    
  );
};

export default Form;
