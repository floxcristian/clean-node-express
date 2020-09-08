const handleFatalError = (err) => {
  console.error(err.message);
  console.error(err.stack);
  process.exit(1);
};
