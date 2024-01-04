import React from 'react';
import { Typography, AppBar,Button, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from '@mui/material';
import { PhotoCamera } from '@mui/icons-material';
import { makeStyles } from '@mui/material/styles';


const useStyles = makeStyles((theme)=> ({
  container: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  }
}))

const App = () => {
  const classes = useStyles()
  return (
    <>
        <CssBaseline />
        <AppBar position='relative'>
          <Toolbar>
            <PhotoCamera />
            <Typography variant='h6'>Photo Album</Typography>
          </Toolbar>
        </AppBar>
        <main>
          <div className={classes.container}>
            <Container maxWidth='sm'>
              <Typography variant='h2' align='center' color='textPrimary' hutterButtom>
                Photo Album
              </Typography>
              <Typography variant='h5' align='center' color='textPrimary' paragraph>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam iste rerum recusandae omnis? Maxime temporibus ex placeat laudantium voluptas eligendi?
              </Typography>
              <div>
                <Grid container spacing={2} justify='center'>
                  <Grid item>
                    <Button variant='contained' color='primary'>
                      Explore my photos
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button variant='outlined' color='primary'>
                      Secondary Action
                    </Button>
                  </Grid>
                </Grid>
              </div>
            </Container>
          </div>
        </main>
    </>
  )
}

export default App