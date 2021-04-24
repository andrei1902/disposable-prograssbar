export const parseUrl = () => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const title = urlParams.get('title');
  const maxValue = urlParams.get('maxValue');
  const currentValue = urlParams.get('currentValue');
  return {
    title: title,
    maxValue: maxValue,
    currentValue: currentValue,
    sharedURL: window.location.href
  }
}
