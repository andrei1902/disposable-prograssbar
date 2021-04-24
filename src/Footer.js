import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles'
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles(theme => ({
  footer: {
    paddingTop: theme.spacing(4),
  },
  link: {
    color: 'black'
  }
}))

function Footer() {
  const classes = useStyles();
  return (
    <Typography className={classes.footer} align="center" variant="h6" gutterBottom>
      <Link className={classes.link} href="https://github.com/andrei1902/disposable-prograssbar" target="_blank"><GitHubIcon /></Link>Help improve this.
    </Typography>
  );
}

export default Footer;
