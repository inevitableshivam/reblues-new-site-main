import { randomizeAsciiLetters } from "./ascii";

const WIDTH = 201;
const HEIGHT = 117;

type Canvas = boolean[][];
type Point = [number, number];

const createCanvas = (): Canvas =>
  Array.from({ length: HEIGHT }, () => Array.from({ length: WIDTH }, () => false));

const mark = (canvas: Canvas, x: number, y: number, radius = 0) => {
  for (let row = y - radius; row <= y + radius; row += 1) {
    for (let column = x - radius; column <= x + radius; column += 1) {
      if (row >= 0 && row < HEIGHT && column >= 0 && column < WIDTH) canvas[row][column] = true;
    }
  }
};

const line = (canvas: Canvas, [startX, startY]: Point, [endX, endY]: Point, thickness = 0) => {
  let x = startX;
  let y = startY;
  const xDistance = Math.abs(endX - startX);
  const yDistance = Math.abs(endY - startY);
  const xStep = startX < endX ? 1 : -1;
  const yStep = startY < endY ? 1 : -1;
  let error = xDistance - yDistance;

  while (true) {
    mark(canvas, x, y, thickness);
    if (x === endX && y === endY) break;
    const doubledError = error * 2;
    if (doubledError > -yDistance) {
      error -= yDistance;
      x += xStep;
    }
    if (doubledError < xDistance) {
      error += xDistance;
      y += yStep;
    }
  }
};

const polyline = (canvas: Canvas, points: Point[], thickness = 0) => {
  points.slice(1).forEach((point, index) => line(canvas, points[index], point, thickness));
};

const rectangle = (canvas: Canvas, left: number, top: number, right: number, bottom: number, thickness = 0) => {
  polyline(canvas, [[left, top], [right, top], [right, bottom], [left, bottom], [left, top]], thickness);
};

const ellipse = (canvas: Canvas, centerX: number, centerY: number, radiusX: number, radiusY: number, thickness = 0) => {
  let previous: Point = [centerX + radiusX, centerY];
  for (let degree = 2; degree <= 360; degree += 2) {
    const radians = (degree * Math.PI) / 180;
    const point: Point = [
      Math.round(centerX + Math.cos(radians) * radiusX),
      Math.round(centerY + Math.sin(radians) * radiusY),
    ];
    line(canvas, previous, point, thickness);
    previous = point;
  }
};

const filledPolygon = (canvas: Canvas, points: Point[]) => {
  const minimumX = Math.min(...points.map(([x]) => x));
  const maximumX = Math.max(...points.map(([x]) => x));
  const minimumY = Math.min(...points.map(([, y]) => y));
  const maximumY = Math.max(...points.map(([, y]) => y));

  for (let y = minimumY; y <= maximumY; y += 1) {
    for (let x = minimumX; x <= maximumX; x += 1) {
      let inside = false;
      for (let current = 0, previous = points.length - 1; current < points.length; previous = current, current += 1) {
        const [currentX, currentY] = points[current];
        const [previousX, previousY] = points[previous];
        const crosses = currentY > y !== previousY > y;
        if (crosses && x < ((previousX - currentX) * (y - currentY)) / (previousY - currentY) + currentX) inside = !inside;
      }
      if (inside) mark(canvas, x, y);
    }
  }
};

const toAscii = (canvas: Canvas) =>
  randomizeAsciiLetters(
    canvas
      .map((row) => row.map((filled) => (filled ? "#" : " ")).join("").trimEnd())
      .join("\n"),
  );

const buildDashboardGraphic = () => {
  const canvas = createCanvas();

  // Browser shell and CRM sidebar.
  rectangle(canvas, 3, 10, 198, 108, 1);
  line(canvas, [3, 25], [198, 25], 1);
  line(canvas, [35, 25], [35, 108], 1);
  mark(canvas, 11, 17, 1);
  mark(canvas, 18, 17, 1);
  mark(canvas, 25, 17, 1);
  rectangle(canvas, 78, 15, 144, 20, 1);
  [37, 51, 65, 79].forEach((y, index) => {
    if (index === 0) filledPolygon(canvas, [[12, y + 4], [20, y - 3], [28, y + 4], [26, y + 4], [26, y + 10], [15, y + 10], [15, y + 4]]);
    else {
      ellipse(canvas, 20, y + 3, 5, 5, 1);
      line(canvas, [14, y + 10], [26, y + 10], 1);
    }
  });

  // Main analytics cards.
  rectangle(canvas, 43, 32, 122, 69, 1);
  polyline(canvas, [[50, 61], [59, 53], [69, 58], [80, 45], [91, 51], [103, 42], [116, 35]], 1);
  filledPolygon(canvas, [[116, 35], [109, 36], [115, 42]]);

  rectangle(canvas, 129, 32, 191, 69, 1);
  ellipse(canvas, 149, 50, 13, 13, 1);
  ellipse(canvas, 149, 50, 7, 7, 1);
  line(canvas, [149, 37], [149, 43], 1);
  line(canvas, [156, 51], [162, 51], 1);
  line(canvas, [165, 41], [184, 41], 1);
  line(canvas, [165, 49], [181, 49], 1);
  line(canvas, [165, 57], [187, 57], 1);

  [43, 78, 113].forEach((x, index) => {
    rectangle(canvas, x, 76, x + 29, 101, 1);
    line(canvas, [x + 7, 91 - index], [x + 14, 84 + index], 1);
    line(canvas, [x + 14, 84 + index], [x + 22, 88 - index], 1);
  });

  rectangle(canvas, 148, 76, 191, 101, 1);
  [155, 164, 173, 182].forEach((x, index) => {
    rectangle(canvas, x, 95 - index * 5, x + 5, 96, 1);
  });

  return toAscii(canvas);
};

const buildFlashlightGraphic = () => {
  const canvas = createCanvas();

  // Handheld flashlight body, lens rings, controls, and grip.
  filledPolygon(canvas, [[4, 48], [14, 41], [71, 41], [88, 32], [118, 29], [139, 39], [139, 77], [118, 87], [88, 84], [71, 75], [14, 75], [4, 68]]);
  polyline(canvas, [[4, 48], [14, 41], [71, 41], [88, 32], [118, 29], [139, 39], [139, 77], [118, 87], [88, 84], [71, 75], [14, 75], [4, 68], [4, 48]], 1);
  [17, 29, 43, 68, 86, 103].forEach((x) => line(canvas, [x, 40], [x, 76], 1));
  ellipse(canvas, 126, 58, 18, 29, 1);
  ellipse(canvas, 126, 58, 12, 23, 1);
  rectangle(canvas, 43, 74, 66, 108, 1);
  line(canvas, [47, 82], [62, 82], 1);
  line(canvas, [47, 90], [62, 90], 1);
  line(canvas, [47, 98], [62, 98], 1);
  ellipse(canvas, 58, 59, 5, 5, 1);
  rectangle(canvas, 20, 51, 38, 55, 1);

  // Beam rays extend outward from the lens.
  const beamEnds: Point[] = [[200, 7], [200, 17], [200, 27], [200, 37], [200, 47], [200, 58], [200, 69], [200, 80], [200, 91], [200, 102], [200, 112]];
  beamEnds.forEach((end, index) => line(canvas, [141, 42 + index * 3], end));
  line(canvas, [141, 38], [200, 7], 1);
  line(canvas, [141, 78], [200, 112], 1);

  return toAscii(canvas);
};

export const productDashboardAscii = buildDashboardGraphic();
export const productFlashlightAscii = buildFlashlightGraphic();
