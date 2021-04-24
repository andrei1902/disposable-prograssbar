import React, { useState,useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import Title from './Title';
import ProgressBar from './ProgressBar';
import Settings from './Settings';
import Footer from './Footer';

import { parseUrl, getRandom, buildURL, changeURL } from './utils/';

function App() {
  useEffect(() => {
    let results = parseUrl();
    if (!results.title && !results.maxValue && !results.currentValue) {
      results = getRandom();
    }
    setTitle(results.title);
    setMaxValue(results.maxValue);
    setCurrentValue(results.currentValue);
    setSharedURL(results.sharedURL);
  }, []);

  const [title, setTitle] = useState('');
  const [maxValue, setMaxValue] = useState(0);
  const [currentValue, setCurrentValue] = useState(0);
  const [sharedURL, setSharedURL] = useState('');

  const onValueChange = (e) => {
    const fieldName = e.target.name;
    let value = e.target.value;

    if (fieldName === 'title') {
      setTitle(value || '');
      const newURL = buildURL(value, maxValue, currentValue);
      changeURL(newURL);
      return setSharedURL(buildURL(value, maxValue, currentValue));
    }
    value = Number(value || 0);
    if (fieldName === 'maxValue') {
      setMaxValue(value);
      const newURL = buildURL(title, value, currentValue);
      changeURL(newURL);
      return setSharedURL(newURL);
    }
    if (fieldName === 'currentValue') {
      if (value > maxValue) value = maxValue;
      setCurrentValue(value);
      const newURL = buildURL(title, maxValue, value);
      changeURL(newURL);
      return setSharedURL(newURL);
    }
  }

  const reset = () => {
    setTitle('');
    setMaxValue(0);
    setCurrentValue(0);
    setSharedURL(buildURL('', 0, 0));
    changeURL(buildURL('', 0, 0));
  }

  const resetToRandom = () => {
    const results = getRandom();
    setTitle(results.title);
    setMaxValue(results.maxValue);
    setCurrentValue(results.currentValue);
    changeURL(results.sharedURL);
    setSharedURL(results.sharedURL);
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md">
        <Grid container>
          <Grid item xs={12}>
            <Title title={title} />
          </Grid>
          <Grid item xs={12}>
            <ProgressBar
              currentValue={currentValue}
              maxValue={maxValue}
            />
          </Grid>
          <Grid item xs={12}>
            <Settings
              title={title}
              currentValue={currentValue}
              maxValue={maxValue}
              sharedURL={sharedURL}
              onValueChange={onValueChange}
              reset={reset}
              resetToRandom={resetToRandom}
            />
          </Grid>
          <Grid item xs={12}>
            <Footer />
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}

export default App;
