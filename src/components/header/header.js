import { createTheme, TextField, ThemeProvider } from "@material-ui/core";
import React from 'react'
import "./header.css";
import MenuItem from "@material-ui/core/MenuItem";
import categories from "../../data/category";

const header = ({ setCategory, category, word, setWord, lightMode }) => {

  const darkTheme = createTheme({
    palette: {
      primary: {
        main: lightMode ? "#000" : "#fff",
      },
      type: lightMode? "light" : 'dark',
    },
  });

  const handleChange = (language) => {
      setCategory(language);
      setWord("");
  }


  return (
    <div className="header">
        <span className="title">{word ? word : "r.Dictionary"}</span>
        <div className="inputs">
          <ThemeProvider theme={darkTheme}>
            <TextField 
              className="search" 
              label="Search a Word" 
              value={word}
              onChange={(e) => setWord(e.target.value)}  
            /> 
            <TextField
              className="select"
              select
              label="Language"
              value={category}
              onChange={(e) => handleChange(e.target.value)}  
            > 
              {categories.map((option)=>(
                <MenuItem key={option.label} value={option.label}>
                  {option.value}
                </MenuItem>
              ))}
              </TextField>
          </ThemeProvider>    
        </div>   
    </div>
  )
}

export default header
