import { Field, ErrorMessage } from 'formik'

const FormInput = ({ type, name, placeholder }) => {
  return (
    <fieldset className='flex flex-col items-center gap-2 text-primary'>
      <Field 
        className="w-full p-4 rounded text-center" 
        type={type} 
        name={name} 
        placeholder={placeholder}
      />
      <ErrorMessage name={name} component="span" className='text-accent2 font-[.55rem]' />
    </fieldset>
  )
}

export default FormInput