import React, {useState} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { GET_RESET_USER } from '../../cache/queries';
import { useQuery, useMutation } 	from '@apollo/client';
import PageNotFound from '../page_not_found/PageNotFound';
import { Transition } from '@headlessui/react';
import { RESET_PASSWORD }	from '../../cache/mutations';

const ResetPasswordScreen = () => {
  let navigate = useNavigate();
  let { reset_string } = useParams();
  const { loading, error, data } = useQuery(GET_RESET_USER, {
      variables: { reset_string: reset_string},
    });

  const [passwordError,setPasswordError] = useState({status:false,message:""});
  const [ResetPassword] = useMutation(RESET_PASSWORD);
  const [submitted,setSubmitted] = useState(false);
  const [inputValues, setInputValues] = useState({
    password: "",
    confirm_password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputValues({
      ...inputValues,
      [name]: value,
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(inputValues.password.length < 6){
      setPasswordError({status:true,message:"Password must be at least 6 characters"});
      setTimeout(() => setPasswordError({status:false,message:""}), 3000);
      return;
    }
    if(inputValues.password !== inputValues.confirm_password){
      setPasswordError({status:true,message:"Passwords do not match"})
      setTimeout(() => setPasswordError({status:false,message:""}), 3000);
      return;
    }
    await ResetPassword({ variables: {reset_string: reset_string, password:inputValues.password } });
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      navigate("/");
    }, 3000);
  }
  return (
    <div className="container mx-auto">
      {data && data.getResetUser ?
        <div className="grid justify-center">
          <Transition
              show={passwordError.status}
              enter="transition-opacity duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity duration-500"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
            <div class="alert alert-error py-1.5 shadow-lg mt-5">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>{passwordError.message}</span>
              </div>
            </div>
          </Transition>
          <div className="text-3xl">
            Reset Password
          </div>
          <form
            class="h-full m-1.5 space-y-3"
            onSubmit={handleSubmit}
          >
            <input
              type="password"
              name="password"
              value={inputValues.password}
              placeholder="Password"
              onChange={handleChange}
              class="input input-bordered w-full focus:outline-none"
            />
            <input
              type="password"
              name="confirm_password"
              value={inputValues.confirm_password}
              placeholder="Confirm Password"
              onChange={handleChange}
              class="input input-bordered w-full focus:outline-none"
            />
            <button
              class="btn border-none bg-forum normal-case mr-2"
              type="submit"
              disabled={submitted}
            >
              Reset Password
            </button>
          </form>
        </div>
      :
      <PageNotFound />}

    </div>
  );
}

export default ResetPasswordScreen;
