import React from "react";
import { Grid, Box } from "@mui/material";
import Dropdown from "./Dropdown";
import ImageSection from "./ImageSection";
import data from "./data.json"


function App() {
  const [filterData, setFilterData]= React.useState();
  return (
    <div style={{width: "100%", display: "flex"}}>
       <Box style={{width: "100%", padding: "50px", margin: "50px"}}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Dropdown setFilterData={setFilterData} data={data}/>
        </Grid>
        <Grid item xs={4}>
          <ImageSection filterData={filterData} data={data}/>
        </Grid>
      </Grid>
    </Box>

    </div>
  );
}

export default App;
