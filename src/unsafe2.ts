// Deliberate CodeQL finding for the test: code injection from the URL.
export function runFromUrlAgain(): unknown {
  return eval(window.location.search.slice(1));
}
