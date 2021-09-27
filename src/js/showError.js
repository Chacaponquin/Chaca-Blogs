export const showError = (message, setError) => {
  setError(message);
  setTimeout(() => {
    setError(false);
  }, 3000);
};
