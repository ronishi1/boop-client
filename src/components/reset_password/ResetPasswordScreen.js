import React, {useState} from 'react';
import { useParams } from 'react-router-dom'
import { GET_RESET_USER } from '../../cache/queries';
import { useQuery, useMutation } 	from '@apollo/client';
import PageNotFound from '../page_not_found/PageNotFound'
import { RESET_PASSWORD }	from '../../cache/mutations';
const ResetPasswordScreen = () => {
  let { reset_string } = useParams();
  const { loading, error, data } = useQuery(GET_RESET_USER, {
      variables: { reset_string: reset_string},
    });

  const [ResetPassword] = useMutation(RESET_PASSWORD);
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
    await ResetPassword({ variables: {reset_string: reset_string, password:inputValues.password } });

  }
  return (
    <div className="container mx-auto">
      {data && data.getResetUser ?
        <div>
          <form
            class="w-full h-full m-1.5"
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
