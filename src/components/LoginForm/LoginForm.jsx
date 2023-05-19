import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import imageLogin  from '../../images/imageLogin.jpg';

const schema = yup.object().shape({
  email: yup.string().required(),
  password: yup.string().required(),
});

const initialValues = {
  email: '',
  password: '',
};

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(logIn(values));
    resetForm();
  };

  return (
    <div className='relative flex flex-grow justify-between w-2/4 text-left  items-center'>
    <div className=' flex flex-col justify-between items-center h-96 p-4  bg-teal-700 rounded-2xl border-2 border-sky-700'>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <Form className='flex flex-col h-72 mb-5 p-4 bg-white rounded-2xl border-2 border-sky-700'>
          <label className='flex flex-col gap-1 mb-2 font-medium text-lg'>
            Email
            <Field className='p-1 text-lg border-2 border-solid w-72 rounded'
              type="email"
              name="email"
              pattern="/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/"
              title="Please enter a valid email"
              required
            />
            <ErrorMessage className='text-rose-700 text-xs font-normal' name="email" component="span" />
          </label>
          <label className='flex flex-col gap-1 mb-4 font-medium text-lg'>
            Password
            <Field className='p-1 text-lg border-2 border-solid w-72 rounded'
              type="password"
              name="password"
              title="Please enter a valid password"
              required
            />
            <ErrorMessage className='text-rose-700 text-xs font-normal' name="password" component="span" />
          </label>
          <button className ='text-gray-dark w-20 h-8 px-2 py-1 text-sm border-2 border-gray-dark rounded-lg hover:text-orange hover:border-orange curcor-pointer' type="submit" onClick={handleSubmit}>Log In</button>       
        </Form>
      </Formik>
      <button className='text-gray-dark w-20 h-8 px-2 py-1 text-sm border-2 border-gray-dark rounded-lg hover:text-orange hover:border-orange curcor-pointer' type='button'> </button> 
    </div>
    <div className='hidden md:flex w-2/4'>
<img src={imageLogin} alt='' className='object-cover'/>
      </div>
    </div>
  );
};
