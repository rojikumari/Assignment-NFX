import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Header from "../components/header/index"
import { headContainer, headSubContainer } from "./style";
export default function PublicLayout({ children }) {
  return (
    <Box sx={{ flexGrow: 1 }} >
      <Grid container spacing={2} sx={headContainer}>
        <Grid sx={headSubContainer}>
          <h2><Header/></h2>
        </Grid>
          <Grid mt={6}>
            {children}
          </Grid>     
      </Grid>
    </Box>
  );
}
