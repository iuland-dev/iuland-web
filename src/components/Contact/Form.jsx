import { Formik, Form, Field, ErrorMessage } from 'formik'
import FormInput from './FormInput'
import { sendMessage } from '../../api/api'
import Button from '../Button.jsx'

const ContactForm = () => {
  return (
    <Formik
      initialValues={{ name: '', company: '', phone: '' }}
      enableReinitialize={true}
      validate={values => {
        const errors = {}
        
        if(!values.company){
          errors.company = 'Campo Empresa Requerido'
        }

        if(!values.name){
          errors.name = 'Campo Nombre Requerido'
        }

        if(!values.phone){
          errors.phone = 'Campo Télefono Requerido'
        }
        return errors
      }}
      onSubmit={async (values, { setSubmitting, resetForm }) => {

        const message = {
          data: values
        }
        const result = await sendMessage(message)
        const json = await result.json()
        const { data } = await json
        if (data) {
          window.alert('Mensaje enviado')
          setSubmitting(false)
          resetForm({values: { name: '', company: '', phone: '' }})
        }
      }}
    >
      {({ isSubmitting }) => (
        <Form className='flex flex-col w-full gap-5 my-10'>
          <FormInput name="name" type="text" placeholder='Nombre'/>
          <FormInput name="company" type="company" placeholder='Empresa' />
          <FormInput name="phone" type="tel" placeholder='Teléfono' />
          <input type="submit" value='Enviar' className='bg-gradient-primary p-4 rounded text-bold md:text-subtitle text-center text-white hover:scale-105 transition-all duration-500' />
        </Form>
      )}
    </Formik>   
  )
}

export default ContactForm