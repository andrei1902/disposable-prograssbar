import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import ShareIcon from '@material-ui/icons/Share';

import { copyToClipboard } from './utils/'

const useStyles = makeStyles(theme => ({
  paper: {
    minHeight: '35vh',
    marginTop: theme.spacing(1),
  },
  fieldContainer: {
    paddingTop: theme.spacing(4),
    paddingLeft: theme.spacing(4)
  },
  buttonContainer: {
    paddingTop: theme.spacing(4),
    paddingLeft: theme.spacing(4),
  },
  field: {
    width: '80%',
  },
  button: {
    marginLeft: theme.spacing(1),
  },
}))

const validate = (fieldName, state) => {
  if (fieldName === 'maxValue') {
    if (Number(state.maxValue) < Number(state.currentValue)) {
      return {
        error: 'Maximum value is smaller than current value',
        warnings: []
      };
    }
  }
  return {
    error: '',
    warnings: []
  };
}

function Settings({ title, currentValue, maxValue, sharedURL, onValueChange, reset, resetToRandom }) {
  const classes = useStyles();
  const [openSnackbar, SetOpenSnackbar] = useState(false);

  const onButtonClick = () => {
    copyToClipboard(sharedURL, SetOpenSnackbar)
  }

  const onResetButtonClick = () => {
    reset()
  }

  const onResetToRandomButtonClick = () => {
    resetToRandom()
  }

  return (
    <Paper className={classes.paper} elevation={3}>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item xs={6}>
          <div className={classes.fieldContainer}>
            <TextField
              autoFocus
              className={classes.field}
              name="title"
              type="text"
              label="Title"
              variant="outlined"
              value={title}
              onChange={onValueChange}
            />
          </div>
          <div className={classes.fieldContainer}>
            <TextField
              className={classes.field}
              error={!!validate('maxValue', { maxValue, currentValue, title }).error}
              name="maxValue"
              type="number"
              label="Maximum value"
              variant="outlined"
              value={maxValue}
              onChange={onValueChange}
              helperText={validate('maxValue', { maxValue, currentValue, title }).error}
            />
          </div>
          <div className={classes.fieldContainer}>
            <TextField
              className={classes.field}
              name="currentValue"
              type="number"
              label="Current value"
              variant="outlined"
              value={currentValue}
              onChange={onValueChange}
            />
          </div>
        </Grid>
        <Grid item xs={6}>
          <div className={classes.fieldContainer}>
              <TextField
                className={classes.field}
                id="sharedURL"
                name="sharedURL"
                type="text"
                label="Sharing URL"
                variant="outlined"
                value={sharedURL}
                onChange={() => {}}
                disabled
              />
            </div>
            <div className={classes.buttonContainer}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                onClick={onButtonClick}
                startIcon={<ShareIcon />}
              >
                Send this to a friend
              </Button>
            </div>
            <div className={classes.buttonContainer}>
              <Button
                variant="contained"
                color="secondary"
                size="large"
                onClick={onResetButtonClick}
              >
                Reset
              </Button>
              <Button
                variant="contained"
                color="primary"
                size="large"
                className={classes.button}
                onClick={onResetToRandomButtonClick}
              >
                Get random values
              </Button>
            </div>
        </Grid>
      </Grid>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        open={openSnackbar}
        onClose={() => SetOpenSnackbar(false)}
        message="The URL was copied to your clipboard. Enjoy!"
      />
    </Paper>
  );
}

export default Settings;
