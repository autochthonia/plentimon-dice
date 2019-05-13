
const patterns: {[key: string]: string} = {
  command: 'roll',
  base: `base`
}

const baseCommand: RegExp = new RegExp('roll (?:base|b) \\d{1,}');

export default { baseCommand };
