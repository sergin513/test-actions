function sum(a, b) {
  return Number(a) + Number(b);
}

function handleSum() {
  const a = document.getElementById("a").value;
  const b = document.getElementById("b").value;

  const result = sum(a, b);

  document.getElementById("result").innerText = result;
}