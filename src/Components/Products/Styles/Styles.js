import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
    root:{
        maxWidth:'100%',
    },
    media: {
        height: 0,
        paddingTop: '80%', // 16:9
      
      },
      cardActions: {
        display: 'flex',
        justifyContent: 'flex-end',
      },
      cardContent: {
        display: 'flex',
        justifyContent: 'space-between',
        flexGrow: 1
      },
}));