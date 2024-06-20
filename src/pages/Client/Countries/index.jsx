import Grid from "@mui/material/Grid";
import React, { useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useOutletContext, Link } from "react-router-dom";
import Container from "../../../components/Client/container";
import { FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";

const ClientCountries = () => {
  const [countries, setCountries] = useOutletContext();

  return (
    <div>
      <Container>
        <div style={{display:"flex",gap:"20px", marginBottom: "40px" }}>
          <TextField
            id="outlined-basic"
            label="Search Country"
            variant="outlined"
          />
          <FormControl sx={{width:"300px"}}>
            <InputLabel id="demo-simple-select-label">Sort by Name</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={""}
              label="Age"
              onChange={()=>{}}
            >
              <MenuItem disabled selected value={''}>Sort By Name</MenuItem>
              <MenuItem value={'a-z'}>A-Z</MenuItem>
              <MenuItem value={'z-a'}>Z-A</MenuItem>
            </Select>
          </FormControl>
        </div>

        <Grid container spacing={2}>
          {countries &&
            countries.map((country) => {
              return (
                <Grid
                  key={country.id}
                  item
                  xs={12}
                  sm={12}
                  md={6}
                  lg={3}
                  xl={3}
                >
                  <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                      sx={{ height: 140 }}
                      image={country.flagImg}
                      title={country.name}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {country.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        <b>Population:</b>
                        {country.population}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        <b>Capital</b>:{country.capital}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Link to={`/countries/${country.id}`}>
                        <Button size="small">Learn More</Button>
                      </Link>
                    </CardActions>
                  </Card>
                </Grid>
              );
            })}
        </Grid>
      </Container>
    </div>
  );
};

export default ClientCountries;
