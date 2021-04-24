export const copyToClipboard = (text, SetOpenSnackbar) => {
  const input = document.body.appendChild(document.createElement('input'));
  input.value = text;
  input.focus();
  input.select();
  document.execCommand('copy');
  input.parentNode.removeChild(input);
  SetOpenSnackbar(true);
  setTimeout(() => {
    SetOpenSnackbar(false)
  }, 3000);
}
