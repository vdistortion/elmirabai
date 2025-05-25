export const replaceAll = (text: string) =>
  text.replaceAll('-', '\\-').replaceAll('+', '\\+').replaceAll('!', '\\!').replaceAll('.', '\\.');
