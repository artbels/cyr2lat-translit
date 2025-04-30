const Translit = require("./translit");

const cases = {
  Translit: {
    module: Translit,
    cases: {
      simple: [
        [' Київ, Вузовская ул., 5 ', 'kyiv-vuzovskaia-ul-5'],
      ],
      mix: [
        ['kashka-малашка', 'kashka-malashka'],
        ['малашка-45', 'malashka-45'],
      ],
      'multi delims': [
        ['-.kashka__малашка-+)', 'kashka_malashka'],
        ['100% малашка+)', '100-malashka'],
      ],
      empty: [
        [undefined, ''],
        ['', ''],
        [null, ''],
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
