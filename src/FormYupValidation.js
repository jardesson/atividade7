import React  from 'react';
import { Formik, ErrorMessage, Field } from 'formik';
import * as Yup from 'yup';

const regexCPF = /\d{3}[.]\d{3}[.]\d{3}[-]\d{2}/g;



const LoginSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
  password: Yup.string().required('Required').min(8, 'Too short!'),
  cpf: Yup.string().matches(regexCPF, "Formato de CPF inválido").length(14, 'CPF inválido'),
  estado: Yup.string().required('Required')

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
      initialValues={{ name: '', password: '', cpf: '', estado: ''}}
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
                  //  validate={validateName}
                   onChange={handleChange}/>
          </label><br></br>
          <ErrorMessage name="name" className="error" component="span"/>
          <label>
            Password*:
            <Field type="password" name="password"
                   onBlur={handleBlur}
                  //  validate={validatePassword}
                   onChange={handleChange}/>
          </label><br></br>
          <ErrorMessage name="password" className="error" component="span" />

          <label>
            CPF*:
            <Field type="text" name="cpf"
                   onBlur={handleBlur}
                  //  validate={validatePassword}
                   onChange={handleChange}/>
          </label><br></br>
          <ErrorMessage name="cpf" className="error" component="span" />

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

          <br></br><br></br>
          <input type="submit" value="Login" disabled={isSubmitting}/>
        </form>
      )}
    </Formik>
  )
};

export default FormYupValidation;