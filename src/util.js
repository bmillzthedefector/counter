export function setMinimum(fn, min=1) {
  return (arg) => {
    if (arg < min) {
      arg = min;
    }
    fn(arg);
  }
}
