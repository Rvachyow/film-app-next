export function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function test<T, Key extends keyof T>(obj:T, key:Key):T[Key] {
  return obj[key];
}
