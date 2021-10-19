export default function colorGenerator() {
  const rawcolors = [
    [241, 243, 242],
    [107, 107, 110],
    [184, 118, 95],
    [102, 110, 112],
    [92, 98, 126],
    [50, 50, 60],
  ];

  const colors = rawcolors.map((color) => (
    <span
    className="circle-color"
    style={{backgroundColor: `rgba(${color})`}}
    >
    </span>
  ));

  return colors;
}
