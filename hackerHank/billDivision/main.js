const bonAppetit = (bill, k, b) => {
  const total = bill.reduce((a, b) => a + b, 0);
  const anasBill = (total - bill[k]) / 2;

  console.log(anasBill === b 
    ? "Bon Appetit" 
    : b - anasBill);
};
