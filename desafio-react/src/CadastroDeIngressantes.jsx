import { useState } from 'react';
import Input from './componentes/Input';
import Select from './componentes/Select';

const CadastroDeIngressantes = () => {
  
  const [estado, setEstado] = useState('');
  const [cidades, setCidades] = useState([]);


  const verificarEstadoEcolhido = (event) => {
    const selectedState = event.target.value;
    setEstado(selectedState);

    //Definindo as cidades de acordo com o estado
    switch(selectedState){
      case 'São Paulo':
        setCidades(['Mogi das Cruzes', 'Suzano', 'Poá', 'Guararema']);
        break;

      case 'Rio de Janeiro':
        setCidades(['Angra dos Reis', 'Niterói', 'Itaboraí']);
        break;

      case 'Minas Gerais':
        setCidades(['Belo Horizonte', 'Monte Azul', 'Muzambinho']);
        break;

      default:
        setCidades([]);
      }

    };
  

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-center mb-6">Cadastro de Ingressantes</h2>
      <form className="space-y-4">

        <Input
          label="Nome"
          placeholder="Digite seu nome"
          required={true}
        />

        <Select
          label="Curso"
          required={true}
          options={['Matemática', 'Letras', 'Geografia']}
        />

        <Select
          label="Estado"
          required={true}
          value={estado}
          onChange={verificarEstadoEcolhido}
          options={['São Paulo', 'Rio de Janeiro', 'Minas Gerais']}
        />

        <Select
          label="Cidades"
          required={true}
          options={cidades.length > 0 ? cidades.map(cidade => cidade) : []}
        />

        <div className="flex justify-between mt-6">
          <button 
            type="button" 
            className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600"
          >
            Voltar
          </button>
          <button 
            type="submit" 
            className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
          >
            Gravar
          </button>
        </div>
      </form>
    </div>
  );
};

export default CadastroDeIngressantes;
