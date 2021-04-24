import LinearProgress from '@material-ui/core/LinearProgress';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles, makeStyles } from '@material-ui/core/styles';

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 45,
    borderRadius: 5,
  },
  colorPrimary: {
    backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
  },
  bar: {
    borderRadius: 5,
    backgroundColor: '#1a90ff',
  },
}))(LinearProgress);

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(4),
    marginTop: theme.spacing(1),
  },
}))

function ProgressBar({ currentValue, maxValue }) {
  const classes = useStyles();
  let progress = Math.round(currentValue / maxValue * 100);
  if (isNaN(progress) || progress === Infinity) progress = 0;
  return (
    <Paper className={classes.paper} elevation={3}>
      <BorderLinearProgress
        variant="determinate"
        value={progress}
      />
      {
        typeof currentValue === 'number' && typeof maxValue === 'number' &&
        <Typography className={classes.title} align="center" variant="h3" gutterBottom>
          {`${currentValue.toLocaleString()} / ${maxValue.toLocaleString()}`}
        </Typography>
      }
    </Paper>
  );
}

export default ProgressBar;
