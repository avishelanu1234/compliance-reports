function exponentialBackoff(attempt) {
  const delay = Math.pow(2, attempt) * 1000;
  return delay;
}

// Example usage:
// setTimeout(() => { console.log('Retrying...'); }, exponentialBackoff(3));