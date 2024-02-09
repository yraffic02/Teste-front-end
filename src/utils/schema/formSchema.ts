import * as yup from 'yup';

export type FormValues = {
  nome: string,
  sobrenome: string,
  regiao: string,
  cidade: string,
  pokemon01: string,
  data: string,
  hora: string
}

export const formSchema = yup.object().shape({
    nome: yup.string().required('O nome é obrigatório'),
    sobrenome: yup.string().required('O sobrenome é obrigatório'),
    regiao: yup.string().required('A região é obrigatória'),
    cidade: yup.string().required('A cidade é obrigatória'),
    pokemon01: yup.string().required('O primeiro Pokémon é obrigatório'),
    data: yup.string().required('A data é obrigatória'),
    hora: yup.string().required('A hora é obrigatória'),
  });
  