import React from 'react';
import { Typography, Box, AppBar,Button, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container,  } from '@mui/material';
import { PhotoCamera } from '@mui/icons-material';
import {createTheme, ThemeProvider} from '@mui/material/styles'
 

const theme = createTheme()

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const App = () => {
  return (
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position='relative'>
          <Toolbar>
            <PhotoCamera sx={{marginRight:'20px',}}/>
            <Typography variant='h6'>Photo Album</Typography>
          </Toolbar> 
        </AppBar>
        <main>
          <Box sx={{ bgcolor: 'background.paper', padding: theme.spacing(8, 0, 6)}}>
            <Container maxWidth='sm'>
              <Typography variant='h2' align='center' color='textPrimary' hutterbuttom='true'>
                Photo Album
              </Typography>
              <Typography variant='h5' align='center' color='textPrimary' paragraph>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam iste rerum recusandae omnis? Maxime temporibus ex placeat laudantium voluptas eligendi?
              </Typography>
              <div sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center">
                <Grid container spacing={2} justify='center' sx ={{marginTop:'40px'}}>
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
          </Box>
          <Container sx={{padding:'20px 0'}} maxWidth='md'>
            <Grid container spacing={4}>
              {cards.map(() => (
                  <Grid item key={cards} xs={12} sm={6} md={4}>
                    <Card sx={{height:'100%', display:'flex', flexDirection:'column'}}>
                      <CardMedia 
                      sx={{paddingTop: '56.25%'}}
                      image='https://source.unsplash.com/random'
                      title= 'Image Title'
                      />
                      <CardContent sx={{flexGrow: 1}}>
                        <Typography gutterbottom variant='5'>
                          Heading
                        </Typography>
                        <Typography>
                          This is a media card. You can use this part to decribe the content.
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Button size='small' color='primary'>View</Button>
                        <Button size='small' color='primary'>Edit</Button>
                      </CardActions>
                    </Card>
                  </Grid> 
              ))}
            </Grid>
          </Container>
        </main>
        <footer sx={{bgcolor: theme.palette.background.paper, padding:'50px 0'}}>
          <Typography variant='h6' align='center' gutterBottom>
            Footer
          </Typography>
          <Typography variant='subtitle1' align='center' color= 'textSecondary' gutterBottom>
            First time using Material Ui, cool dibs!
          </Typography>
        </footer>
    </ThemeProvider>
  )
}

export default App