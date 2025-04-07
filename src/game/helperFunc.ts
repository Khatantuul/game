export function helperCounter(arr){
    let prev = null;
    let winChar = null;
    let count = 0;
    for (let val of arr) {
        if (val && val === prev) {
            count++;
          if (count === 4) {
            winChar = val;
            return winChar;
          }
        } else {
            count = 1;
          prev = val;
        }
      }
    return null;
}
