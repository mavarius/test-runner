export function generateTest(baseDelay = 5000) {
  return function runTest() {
    const delay = baseDelay + (Math.random() * baseDelay)
    const testPassed = Math.random() > 0.5

    return new Promise(function(resolve) {
      setTimeout(function() {
        resolve(testPassed)
      }, delay)
    })
  }
}