export const changeURL = (URL) => {
  global.history.pushState({}, null, URL);
}
