import { Formik, Form, Field } from 'formik'
import FormInput from './FormInput'
import { sendMessage } from '../../api/api'

const EmailForm = () => {
  return (
    <Formik
      initialValues={{ email: ''}}
      enableReinitialize={true}
      validate={ values => {
        const errors = {}
        if (!values.email) {
          errors.email = 'Email requerido'
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Correo invalido'
        }
        return errors
      }}

      onSubmit={async (values, { setSubmitting, resetForm }) => {
        const message = {
          data: values
        }
        console.log(message)
        const result = await sendMessage(message)
        const json = await result.json()
        const { data } = await json
        if (data) {
          window.alert('Mensaje enviado')
          setSubmitting(false)
          resetForm({values: { email: '' }})
          location.replace('/temario.pdf')
        }
      }}
    >
      {({ isSubmitting }) => (
        <Form className='flex flex-col w-full gap-5 my-10'>
          <FormInput name="email" type="email" placeholder='Correo Electrónico'/>
          <input 
            type="submit"
            disabled={isSubmitting} 
            value='Enviar' className='bg-accent p-4 rounded text-bold md:text-subtitle text-center text-white hover:scale-105 transition-all duration-500' 
          />
          
        </Form>
      )}
    </Formik>
  )
}

export default EmailForm