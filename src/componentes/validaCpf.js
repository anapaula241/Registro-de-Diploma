
// const [erroCpf, setErroCpf] = React.useState('');
export function valida_cpf(value) {
    var numeros, digitos, soma, i, resultado, digitos_iguais;
    digitos_iguais = 1;
    if (value.length < 11)
      return false;
    console.log(`teste 1 ${value}`)
    for (i = 0; i < value.length - 1; i++)
      if (value.charAt(i) != value.charAt(i + 1)) {
        digitos_iguais = 0;
        break;
      }
    console.log(`teste 2 ${value}`)
    if (!digitos_iguais) {
      numeros = value.substring(0, 9);
      digitos = value.substring(9);
      soma = 0;
      for (i = 10; i > 1; i--)
        soma += numeros.charAt(10 - i) * i;
      resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
      console.log(`teste 3 ${value}`)
      if (resultado != digitos.charAt(0))
        return false;
      numeros = value.substring(0, 10);
      soma = 0;
      for (i = 11; i > 1; i--)
        soma += numeros.charAt(11 - i) * i;
      resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;

      if (resultado != digitos.charAt(1))
        console.log(`teste 4 ${value}`)
      return false;

      return true;
    }
    else
      return false;
    console.log(`teste 5 ${value}`)
  }

 export const valida = (value) => {
    let valorCampo = (value).replace(/\D/g, '');
    if (valida_cpf(valorCampo))
    //   setErroCpf(false); apaguei por causa do erro do setErroCpf
    return 'teste'
    else
    //   setErroCpf(true)
   return 'teste'

  }
