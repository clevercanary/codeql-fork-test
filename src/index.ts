export function greet(name: string): string {
  return `Hello, ${name}`;
}

export function shout(name: string): string {
  return greet(name).toUpperCase();
}

export function whisper(name: string): string {
  return greet(name).toLowerCase();
}
// v7 test
// persist-credentials test
