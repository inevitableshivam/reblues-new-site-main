export const softenDenseAscii = (ascii: string) =>
  ascii
    .trimEnd()
    .split("\n")
    .map((line, row) =>
      [...line]
        .map((character, column) => {
          if (!/\d/.test(character)) return character;

          // Thin out tightly packed numeric shading while preserving the silhouette.
          return (row * 7 + column * 11) % 5 < 2 ? " " : character;
        })
        .join(""),
    )
    .join("\n");

export const removeSmallAsciiFragments = (ascii: string, minimumSize = 8) => {
  const rows = ascii.trimEnd().split("\n").map((line) => [...line]);
  const visited = new Set<string>();
  const fragments: [number, number][][] = [];
  const pointKey = (column: number, row: number) => `${column}:${row}`;

  rows.forEach((line, row) => {
    line.forEach((character, column) => {
      const startKey = pointKey(column, row);
      if (character === " " || visited.has(startKey)) return;

      const fragment: [number, number][] = [[column, row]];
      visited.add(startKey);

      for (let index = 0; index < fragment.length; index += 1) {
        const [currentColumn, currentRow] = fragment[index];

        for (let rowOffset = -1; rowOffset <= 1; rowOffset += 1) {
          for (let columnOffset = -1; columnOffset <= 1; columnOffset += 1) {
            if (rowOffset === 0 && columnOffset === 0) continue;

            const nextRow = currentRow + rowOffset;
            const nextColumn = currentColumn + columnOffset;
            const nextKey = pointKey(nextColumn, nextRow);

            if (
              nextRow < 0 ||
              nextRow >= rows.length ||
              nextColumn < 0 ||
              nextColumn >= rows[nextRow].length ||
              rows[nextRow][nextColumn] === " " ||
              visited.has(nextKey)
            ) continue;

            visited.add(nextKey);
            fragment.push([nextColumn, nextRow]);
          }
        }
      }

      fragments.push(fragment);
    });
  });

  fragments.forEach((fragment) => {
    if (fragment.length >= minimumSize) return;
    fragment.forEach(([column, row]) => {
      rows[row][column] = " ";
    });
  });

  return rows.map((row) => row.join("").trimEnd()).join("\n");
};

export const randomizeAsciiLetters = (ascii: string) => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

  return ascii
    .split("\n")
    .map((line, row) =>
      [...line]
        .map((character, column) => {
          if (character === " ") return character;

          const index = (row * 37 + column * 61 + row * column * 7) % letters.length;
          return letters[index];
        })
        .join(""),
    )
    .join("\n");
};
