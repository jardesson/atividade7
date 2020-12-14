import React  from 'react';
import { Formik, ErrorMessage, Field } from 'formik';
import * as Yup from 'yup';

const regexMat = /\d{9}/g;

const LoginSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
  matricula: Yup.string().matches(regexMat, "Matrícula inválida"),
  formacao: Yup.string().required('Required'),
  area: Yup.string().required('Required')
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
      initialValues={{ name: '',  matricula: '', formacao: '', area: ''}}
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
            Nome*:
            <Field type="text" name="name"
                   onBlur={handleBlur}
                   onChange={handleChange}/>
          </label><br></br>
          <ErrorMessage name="name" className="error" component="span"/>
    
          <label>
            Matrícula*:
            <Field type="text" name="matricula"
                   onBlur={handleBlur}
                   onChange={handleChange}/>
          </label><br></br>
          <ErrorMessage name="matricula" className="error" component="span" />

          <label>
            Formação*:
            <Field type="text" name="formacao"
                   onBlur={handleBlur}
                   onChange={handleChange}/>
          </label><br></br>
          <ErrorMessage name="formacao" className="error" component="span"/>
    
          <label>
            Área de atuação*:
            <Field type="text" name="area"
                   onBlur={handleBlur}
                   onChange={handleChange}/>
          </label><br></br>
          <ErrorMessage name="area" className="error" component="span"/>
          
          <br></br> 
   
          <input type="submit" value="Login" disabled={isSubmitting}/>
        </form>
      )}
    </Formik>
  )
};

export default FormYupValidation;
