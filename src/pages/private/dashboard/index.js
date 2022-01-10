import React, { useState , useEffect } from "react";
import Button from "@mui/material/Button";
import AppDispatcher from "@redux/dispatchers/appDispatcher";
import Grid from "@mui/material/Grid";
import { API, NetworkManager } from "@network/core";

function Dashboard() {
  const [api, setApi] = useState({
    loading: true,
    gallery: []
  });
  const networkObj = new NetworkManager(API.PRIVATE.IMAGE_GALLERY);
  useEffect(()=>{
    networkObj.httpRequest(true).then((res)=>{
      setApi({loading : false, gallery : res.data});
    })
  },[])
  return (
    <div>
      <h1 style={{ color: "white" }}>Image Gallery</h1>
      <Button
        sx={{ ml: 3, mb: 5, fontSize: 17, fontWeight: "Bol", padding: 2 }}
        onClick={() => {
          AppDispatcher.setUserLoggedOut();
        }}
        variant="contained">
        Log out
      </Button>
      {api.loading && <h1>loading...</h1>}
      <Grid
        container
        rowSpacing={3}
        columnSpacing={{ xs: 2, sm: 2, md: 2, lg: 3, xl: 3 }}>
        {!api.loading &&
          api.gallery.map((image, index) => (
            <Grid key={index} item xs={10} sm={8} md={6} lg={4} xl={2}>
              <img
                style={{
                  borderRadius: "3px",
                  border: "2px solid #f24eae",
                  boxShadow: "0px 0px 12px rgba(0,0,2.4)"
                }}
                src={image.download_url}
                height="240"
                width="319"
              />
            </Grid>
          ))}
      </Grid>
    </div>
  );
}

export default Dashboard;
