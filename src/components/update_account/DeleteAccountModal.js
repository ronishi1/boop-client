import React, { useState } from "react";
import { DELETE_ACCOUNT, LOGOUT } from '../../cache/mutations';
import { useMutation, useApolloClient } 	from '@apollo/client';
import { useNavigate } from "react-router-dom";
import { Transition } from '@headlessui/react'

const DeleteAccountModal = ({fetchUser}) => {
  let navigate = useNavigate();

  const [checked, setChecked] = useState(false);
  const [input, setInput] = useState({password: ""});
  const [error, setError] = useState({status:false,message:""});

  const client = useApolloClient();

  const [DeleteAccount] = useMutation(DELETE_ACCOUNT);
  const [Logout] = useMutation(LOGOUT);

  function handleChecked() {
    setChecked(!checked);
    setInput({password: ""});
  }

  async function handleDeleteAccount (e) {
    e.preventDefault();
    if(input.password == ''){
      console.log('no input')
      setError({status:true,message:"Password cannot be empty"});
      setTimeout(() => setError({status:false,message:""}), 3000);
      setInput({password:""});
      return;
    }
    try{
      await DeleteAccount({variables: {password: input.password}});
      await client.resetStore();
      navigate("/");
    }
    catch (e) {
      // handle incorrect password
      setError({status:true,message:e.message});
      setTimeout(() => setError({status:false,message:""}), 3000);
      setInput({password:""});
      return;
    }
  }

  return (
    <div>
      {/* I think we can just move this button to the navbar we might have to rename id */}
      <label for="account-delete-modal" 
      class="btn btn-outline border-red-500 text-red-500 modal-button
      hover:bg-red-500 hover:text-white hover:border-red-500">
        Delete Account
      </label>

      <input
        type="checkbox"
        id="account-delete-modal"
        class="modal-toggle"
        checked={checked}
        onClick={handleChecked}
      />

      <label for="account-delete-modal" class="modal cursor-pointer">
        <label class="modal-box w-1/4  h-1/4 ">
          <form class="w-full h-full" onSubmit={handleDeleteAccount}>
            <div class="grid items-center  space-y-4 p-2">
              <div class="w-full flex flex-row justify-between">
                <h3 class="text-xl font-bold">Delete Account?</h3>
                <label class="cursor-pointer " onClick={handleChecked}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="grey"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </label>
              </div>
              <div class="w-full space-y-4">
                <div class="place-items-start items-center">
                  <h3 class="text-sm">This action cannot be undone.</h3>
                </div>
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  class="input input-bordered w-full focus:outline-none"
                  value={input.password}
                  onChange={(e) => setInput({password: e.target.value})}
                />
              </div>
              <span class="w-full flex flex-row justify-between items-center ">
                <label
                  class="text-zinc-400 text-sm ml-1 cursor-pointer "
                  for="account-delete-modal"
                >
                  Cancel
                </label>
                <button
                  class={`text-sm font-bold mr-1 text-story`}
                  type="submit"
                >
                  Delete
                </button>
              </span>
              <Transition
                show={error.status}
                enter="transition-opacity duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-500"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div class="alert alert-error py-1.5 shadow-lg">
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span>{error.message}</span>
                  </div>
                </div>
              </Transition>
            </div>
          </form>
        </label>
      </label>
    </div>
  );
};
export default DeleteAccountModal;
