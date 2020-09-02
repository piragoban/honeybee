// import React from 'react';
// import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
// import { Loading } from './LoadingComponent';
// import { baseUrl } from '../shared/baseUrl';
// import { FadeTransform } from 'react-animation-components';

// function RenderCard({item, isLoading, errMess}) {
//     if (isLoading) {
//         return(
//             <Loading />
//         );
//     }
//     else if (errMess) {
//         return(
//             <h4>{errMess}</h4>
//         );
//     }
//     else
//         return(
//             <FadeTransform in 
//                 transformProps={{
//                     exitTransform: 'scale(0.5) translateY(-50%)'
//                 }}>
//                 <Card>
//                     <CardImg src={baseUrl + item.image} alt={item.name} />
//                     <CardBody>
//                         <CardTitle>{item.name}</CardTitle>
//                         {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null}
//                         <CardText>{item.description}</CardText>
//                     </CardBody>
//                 </Card>
//             </FadeTransform>
//         );
// }

// function Home(props) {
//     return(
//         <div className="container">
//             <div className="row align-items-start">
//                 <div className="col-12 col-md m-1">
//                     <RenderCard item={props.dish} 
//                         isLoading={props.dishesLoading}
//                         errMess={props.dishesErrMess} />
//                 </div>
//                 <div className="col-12 col-md m-1">
//                     <RenderCard item={props.promotion} 
//                         isLoading={props.promosLoading}
//                         errMess={props.promosErrMess} />
//                 </div>
//                 <div className="col-12 col-md m-1">
//                     <RenderCard item={props.leader} 
//                         isLoading={props.leaderLoading} 
//     errMess={props.leaderErrMess} />
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Home;


import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';
import { FadeTransform } from 'react-animation-components';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import  MediaCard from '../components/Card'
import Grid from '@material-ui/core/Grid';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    
    imgPath:
      'https://www.news-medical.net/image.axd?picture=2020%2F6%2Fshutterstock_1154390287.jpg',
  },
  {
    
    imgPath:
      'https://www.jakpost.travel/wimages/large/326-3260259_j95bwvw-honey-bee-wallpaper-px-honey-bee-hd.jpg',
  },
  {
    
    imgPath:
      'https://lh3.googleusercontent.com/proxy/ExXgxTphtkqfodiGQiD9pbdOnGvPT9z0_dd4S2j2FfwzdK-wxZy1tqUvCxHZoWdxS2CN-PVqAAO0H1W3sD7a1_WfJ0zGFRkOzvQg91KXmFl9iIA3MK_uzy1fD8yr__gWXwyzSC1FIzJ29-KT-SFFkCa1mRYjRNmBFpUKrUv4xGwdSU-x-K4',
  },
  {
    
    imgPath:
      'https://www.newsclick.in/sites/default/files/2018-11/honey.jpg',
  },
  {
    
    imgPath:
      'https://www.superiorwallpapers.com/images/lthumbs/2018-10/12807_Jam-full-with-bees-honey-Sweet-HD-wallpaper.jpg',
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
  
    flexGrow: 1,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
  },
  img: {
    height: 650,
    display: 'block',
    maxWidth: '120%',
    overflow: 'hidden',
    width: '100%',
    
    
  },
  label:{
    fontSize:"110px",
    color:"#bfbfbf"
  },
  
}));

function Home() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tutorialSteps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
   
   
    <div className={classes.root}>
    <Grid container spacing={3}>
    <Grid item xs={6}>
      <Paper square elevation={0} className={classes.header}>
        <Typography>{tutorialSteps[activeStep].label}</Typography>
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {tutorialSteps.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <img className={classes.img} src={step.imgPath} alt={step.label} />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        variant="text"
        activeStep={activeStep}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
            Next
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            Back
          </Button>
        
          
        }
        
      /> 
      </Grid>
      <Grid item xs={6}> <br></br><label className={classes.label} htmlFor="outlined-pass"><br></br>

      &nbsp;&nbsp;Welcome to<br></br>&nbsp;&nbsp;Bee Natural</label>
      </Grid>
       
      </Grid>
         < MediaCard/> 
    </div>
  );
}

export default Home;
