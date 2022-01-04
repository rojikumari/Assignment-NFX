import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

export default function PublicLayout({ children }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} mt={10}>
        <Grid item xs={4}>
          <h2></h2>
        </Grid>
        <Grid item xs={5}>
          {children}
        </Grid>
      </Grid>
    </Box>
  );
}
