function ehDataValida(dia, mes, ano) {
  
  if (typeof dia !== 'number' || typeof mes !== 'number' || typeof ano !== 'number') return false;
  if (dia < 1 || mes < 1 || mes > 12 || ano < 1) return false;

  
  const diasPorMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  
  const ehBissexto = (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0);
  if (ehBissexto && mes === 2) {
    return dia <= 29;
  }

  return dia <= diasPorMes[mes - 1];
}


console.log(ehDataValida(29, 2, 2020)); 
console.log(ehDataValida(29, 2, 2021)); 
console.log(ehDataValida(31, 4, 2023)); 
console.log(ehDataValida(31, 12, 2023)); 
