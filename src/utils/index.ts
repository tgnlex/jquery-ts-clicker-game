
function kill(id: number) {
  return clearInterval(id)
}
function capitalize(str) {
  const capital = str.charAt(0).toUpperCase();
  const output = capital + str.slice(1);
  return output;
};

export {
  capitalize, kill
}