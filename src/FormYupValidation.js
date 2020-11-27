import React  from 'react';
import { Formik, ErrorMessage, Field } from 'formik';
import * as Yup from 'yup';

const regexCPF = /\d{3}[.]\d{3}[.]\d{3}[-]\d{2}/g;
const regexMat = /\d{9}/g;
const regexCEP = /\d{5}[-]\d{3}/g;

const LoginSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
  matricula: Yup.string().matches(regexMat, "Matrícula inválida"),
  cpf: Yup.string().matches(regexCPF, "CPF inválido"),//tirei o lenght pq no regex só aceita se tiver a quantidade certa
  estado: Yup.string().required('Required'),
  idade: Yup.number().required('Required').moreThan(16,'Número inválido'),
  curso: Yup.string().required('Required'),
  endereço: Yup.string().required('Required'),
  bairro: Yup.string().required('Required'),
  cidade: Yup.string().required('Required'),
  cpf: Yup.string().matches(regexCPF, "CEP inválido")
});

const FormYupValidation = () => {
  const handleSubmitting = (values, { setSubmitting, setStatus }) => {
    setStatus({ isValidating: true });
    setTimeout(() => {
      console.info(JSON.stringify(values, null, 2));
      setSubmitting(false);
      setStatus({ isValidating: false });
    }, 400);
  };

  return (
    <Formik
      validationSchema={LoginSchema}
      initialStatus={{isValidating: false}}
      initialValues={{ name: '', idade: '', cpf: '',  matricula: '', curso: '', endereço: '', numero: '', complemento: '', bairro: '', cidade: '', estado: '', cep: '' }}
      onSubmit={handleSubmitting}
    >
      {({
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
        <form onSubmit={handleSubmit}>
          <label>
            Name*:
            <Field type="text" name="name"
                   onBlur={handleBlur}
                   onChange={handleChange}/>
          </label><br></br>
          <ErrorMessage name="name" className="error" component="span"/>
    
          <label>
            Idade*:
            <Field type="Number" name="idade"
                   onBlur={handleBlur}
                   onChange={handleChange}/>
          </label><br></br>
          <ErrorMessage name="idade" className="error" component="span"/>
    
          <label>
            CPF*:
            <Field type="text" name="cpf"
                   onBlur={handleBlur}
                   onChange={handleChange}/>
          </label><br></br>
          <ErrorMessage name="cpf" className="error" component="span" />
    
          <label>
            Matrícula*:
            <Field type="text" name="matricula"
                   onBlur={handleBlur}
                   onChange={handleChange}/>
          </label><br></br>
          <ErrorMessage name="matricula" className="error" component="span" />

          <label>
            Curso*:
            <Field type="text" name="curso"
                   onBlur={handleBlur}
                   onChange={handleChange}/>
          </label><br></br>
          <ErrorMessage name="curso" className="error" component="span"/>
    
          <label>
            Endereço*:
            <Field type="text" name="endereço"
                   onBlur={handleBlur}
                   onChange={handleChange}/>
          </label><br></br>
          <ErrorMessage name="endereço" className="error" component="span"/>
    
          <label>
            Número:
            <Field type="number" name="numero"//n sei se é pra colocar no schema
                   onBlur={handleBlur}
                   onChange={handleChange}/>
          </label><br></br>
          <ErrorMessage name="numero" className="error" component="span"/>
    
          <label>
            Complemento:
            <Field type="text" name="complemento"//n sei se é pra colocar no schema
                   onBlur={handleBlur}
                   onChange={handleChange}/>
          </label><br></br>
          <ErrorMessage name="complemento" className="error" component="span"/>
    
          <label>
            Bairro*:
            <Field type="text" name="bairro"
                   onBlur={handleBlur}
                   onChange={handleChange}/>
          </label><br></br>
          <ErrorMessage name="bairro" className="error" component="span"/>
    
          <label>
            Cidade*:
            <Field type="text" name="cidade"
                   onBlur={handleBlur}
                   onChange={handleChange}/>
          </label><br></br>
          <ErrorMessage name="cidade" className="error" component="span"/>

          <label>
            Selecione um Estado:
            <select
              name="estado"
              onChange={handleChange}
              onBlur={handleBlur}
            >
              <option value="" label="  " />
              <option value='Acre'>AC</option>
              <option value='Alagoas'>AL</option>
              <option value='Amapá'>AP</option>
              <option value='Amazonas'>AM</option>
              <option value='Bahia'>BA</option>
              <option value='Ceará'>CE</option>
              <option value='Distrito Federal'>DF</option>
              <option value='Espirito Santo'>ES</option>
              <option value='Goiás'>GO</option>
              <option value='Maranhão'>MA</option>
              <option value='Mato Grosso do Sul'>MS</option>
              <option value='Mato Grosso'>MT</option>
              <option value='Minas Gerais'>MG</option>
              <option value='Pará'>PA</option>
              <option value='Paraíba'>PB</option>
              <option value='Paraná'>PR</option>
              <option value='Pernambuco'>PE</option>
              <option value='Piauí'>PI</option>
              <option value='Rio de Janeiro'>RJ</option>
              <option value='Rio Grande do Norte'>RN</option>
              <option value='Rio Grande do Sul'>RS</option>
              <option value='Rondônia'>RO</option>
              <option value='Roraima'>RR</option>
              <option value='Santa Catarina'>SC</option>
              <option value='São Paulo'>SP</option>
              <option value='Sergipe'>SE</option>
              <option value='Tocantins'>TO</option>
            </select>
          </label>

          <ErrorMessage name="estado" className="error" component="span" />

          <br></br>
    
          <label>
            CEP*:
            <Field type="text" name="cep"
                   onBlur={handleBlur}
                   onChange={handleChange}/>
          </label>
          <br></br><br></br>
          <ErrorMessage name="cep" className="error" component="span" />
          
          <input type="submit" value="Login" disabled={isSubmitting}/>
        </form>
      )}
    </Formik>
  )
};

export default FormYupValidation;
