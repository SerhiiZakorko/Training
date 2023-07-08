const input = document.querySelector("input");
const calcButton = document.querySelector("button");
const side = document.querySelector(".side");
const title = document.querySelector(".title");
const squareDiagonal = document.querySelector(".square-diagonal");
const height = document.querySelector(".height");
const wireLength = document.querySelector(".wire-length");

calcButton.addEventListener("click", function () {
  const frequency = input.value;
  const sideValueFool = 30000 / frequency / 4;
  const sideValue = sideValueFool.toFixed(2);
  const squareDiagonalValue = (Math.sqrt(2) * sideValue).toFixed(2);
  const heightValue = (squareDiagonalValue * 2).toFixed(2);
  const wireLengthValue = (sideValue * 8).toFixed(2);
  title.innerText = `Параметры для частоты: ${frequency}  МГц`;
  if (frequency > 0) {
    if (sideValue < 100) {
      side.innerText = `Сторона ${sideValue} см (λ/4)`;
      squareDiagonal.innerText = `Диагональ ${squareDiagonalValue} см`;
      height.innerText = `Высота ${heightValue} см`;
      wireLength.innerText = `Полная длинна полотна: ${wireLengthValue} см`;
    } else {
      side.innerText = `Сторона ${(sideValue / 100).toFixed(2)} м (λ/4)`;
      squareDiagonal.innerText = `Диагональ ${(squareDiagonalValue / 100).toFixed(2)} м`;
      height.innerText = `Высота ${(heightValue / 100).toFixed(2)} м`;
      wireLength.innerText = `Полная длинна полотна: ${(wireLengthValue / 100).toFixed(2)} м`;
    }
  } else {
    title.innerText = `Введите правильные параметры. Для разделителя используйте точку`;
  }
});
