export const buildURL = (title, maxValue, currentValue) => {
  const queryParams = new URLSearchParams(window.location.search);
  if (title) {
    queryParams.set('title', title);
  } else {
    queryParams.delete('title')
  }
  if (maxValue) {
    queryParams.set('maxValue', maxValue);
  } else {
    queryParams.delete('maxValue')
  }
  if (currentValue) {
    queryParams.set('currentValue', currentValue);
  } else {
    queryParams.delete('currentValue')
  }
  return window.location.origin +  (queryParams.toString() ? '/?' : '') + queryParams.toString();
}
