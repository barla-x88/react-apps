function colorGen(colorCode) {
  console.log(colorCode);
  //converts hex to rgb
  const toRGB = function (color = "#000000") {
    const codeWithoutHash = [
      color.substring(1, 3),
      color.substring(3, 5),
      color.substring(5),
    ];

    return codeWithoutHash.map((hexValue) => parseInt(hexValue, 16));
  };

  // gets shades
  const getShades = function (rgb = []) {
    const allShades = [];
    for (let i = 1; i <= 10; i++) {
      const multiplier = (i * 10) / 100;
      const rgbColor = rgb.map((el) => Math.floor(el - el * multiplier));
      const hexColor =
        "#" + rgbColor.map((el) => el.toString(16).padStart(2, "0")).join("");

      allShades.push(hexColor);
    }
    return allShades;
  };

  //3. get tints
  const getTints = function (rgb = []) {
    const allShades = [];
    for (let i = 1; i <= 10; i++) {
      const multiplier = (i * 10) / 100;
      const rgbColor = rgb.map(
        (el) => Math.floor((255 - el) * multiplier) + el
      );
      const hexColor =
        "#" + rgbColor.map((el) => el.toString(16).padStart(2, "0")).join("");

      allShades.push(hexColor);
    }
    return allShades;
  };

  //
  const rgbValue = toRGB(colorCode);
  const shades = getShades(rgbValue);
  const tints = getTints(rgbValue);
  return { shades, tints };
}

export default colorGen;
