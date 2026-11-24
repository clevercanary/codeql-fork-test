// Deliberate CodeQL finding for the test: code injection from the URL.
export function runFromUrl(): unknown {
  return eval(window.location.hash.slice(1));
}
