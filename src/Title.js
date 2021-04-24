import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  title: {
    height: '15vh',
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}))

function Title({ title }) {
  const classes = useStyles();
  return (
    <Typography className={classes.title} align="center" variant="h3" gutterBottom>
      {title}
    </Typography>
  );
}

export default Title;
