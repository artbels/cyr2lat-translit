const Translit = require("./translit");

test('throws on number input', () => {
  expect(() => Translit(5)).toThrow('Translit expects a string');
});

test('throws on undefined input', () => {
  expect(() => Translit(undefined)).toThrow('Translit expects a string');
});

test('throws on null input', () => {
  expect(() => Translit(null)).toThrow('Translit expects a string');
});

const cases = {
  Translit: {
    module: Translit,
    cases: {
      simple: [
        [' Київ, Вузовская ул., 5 ', 'kyiv-vuzovskaia-ul-5'],
        [' ыэё ', 'yee'],
      ],
      mix: [
        ['kashka-малашка', 'kashka-malashka'],
        ['малашка-45', 'malashka-45'],
      ],
      'multi delims': [
        ['-.kashka__малашка-+)', 'kashka_malashka'],
        ['100% малашка+)', '100-malashka'],
      ],
    }
  }
};

describe("Translit", () => {
  for (const groupName in cases.Translit.cases) {
    const tests = cases.Translit.cases[groupName];
    describe(groupName, () => {
      tests.forEach(([input, expected, prop]) => {
        const name = `${JSON.stringify(input)} => ${expected}`;
        test(name, () => {
          const result = prop
            ? cases.Translit.module(input)[prop]
            : cases.Translit.module(input);
          expect(result).toEqual(expected);
        });
      });
    });
  }
});
