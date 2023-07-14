const arr = [4, 4, 8, 8, 12, 12, 5, 7, 7, 10, 10, 88, 88];

function getSingleElement() {
  let result = 0;
  for (i = 0; i < arr.length; i = i + 2) {
    if (arr[i] !== arr[i + 1]) 
    break;
    result = arr[i + 2];
  }

  return result;
}
console.log(getSingleElement(arr));
