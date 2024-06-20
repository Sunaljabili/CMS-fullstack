import { Button, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react'
import { Link, useParams } from 'react-router-dom';

const CountryDetail = () => {
  const {id} = useParams()
  return (
    <div>
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
    </div>
  )
}

export default CountryDetail
