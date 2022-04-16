import React, { useState } from "react";
import DeleteAccountModal from "../update_account/DeleteAccountModal";
import UploadPicture from "../modals/UploadPicture";
import { UPDATE_USERNAME, UPDATE_PASSWORD, UPDATE_EMAIL } from '../../cache/mutations';
import { useMutation } 	from '@apollo/client';
import { Transition } from '@headlessui/react'

const UpdateAccountScreen = ({fetchUser, user}) => {
  // https://www.figma.com/file/oP2NOFuaNPMCreFx2L7iSU/Boop-Mockups?node-id=270%3A511
  const user_data = {
    username: "the_current_username",
    email: "currentemail@email.com",
    profile_picture: "https://wallpapercave.com/wp/wp5338281.jpg",
  }
  
  const [input, setInput] = useState({
    username: "",
    email: "",
    emailPW: "",
    password: "",
    confirmPassword: "",
    passwordPW: "",
  });
  const [userPFP, setPFP] = useState(user_data.profile_picture)

  const [usernameError, setUsernameError] = useState({status:false,message:""});
  const [emailError, setEmailError] = useState({status:false,message:""});
  const [passwordError, setPasswordError] = useState({status:false,message:""});
  
  const [UpdateUsername] = useMutation(UPDATE_USERNAME);
  const [UpdateEmail] = useMutation(UPDATE_EMAIL);
  const [UpdatePassword] = useMutation(UPDATE_PASSWORD);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInput({
      ...input,
      [name]: value,
    });
  }

  const handleChangeUsername = async () => {
    // handle if username is blank
    if(input.username == '') {
      setUsernameError({status:true,message:"Username cannot be empty"});
      setTimeout(() => setUsernameError({status:false,message:""}), 3000);
      return;
    }
    try{
      await UpdateUsername({variables: {username: input.username}});
      fetchUser();
      setInput({username:""});
    }
    catch (e) {
      // handle username is taken
      setUsernameError({status:true,message:e.message});
      setTimeout(() => setUsernameError({status:false,message:""}), 3000);
      return;
    }
  }

  const handleChangeEmail = async () => {
    // handle if email is actually invalid
    if (!(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.email))) {
      setEmailError({status:true,message:"Invalid email format"});
      setTimeout(() => setEmailError({status:false,message:""}), 3000);
      return;
    }
    try{
      await UpdateEmail({variables: {newEmail: input.email, password: input.emailPW}});
      setInput({email:"",emailPW:""});
      fetchUser();
    }
    catch (e) {
      // handle taken email/invalid pw
      setEmailError({status:true,message:e.message});
      setTimeout(() => setEmailError({status:false,message:""}), 3000);
      setInput({emailPW:""});
      return;
    }
  }

  const handleChangePassword = async () => {
    // check if password is blank
    if(input.password == ''){
      setPasswordError({status:true,message:"Password cannot be empty"});
      setTimeout(() => setPasswordError({status:false,message:""}), 3000);
      setInput({password:"",confirmPassword:"",passwordPW:""});
      return;
    }
    // check if password and confirmPassword match
    if(input.password != input.confirmPassword){
      setPasswordError({status:true,message:"Passwords do not match"});
      setTimeout(() => setPasswordError({status:false,message:""}), 3000);
      setInput({password:"",confirmPassword:"",passwordPW:""});
      return;
    }
    try {
      await UpdatePassword({variables: {oldPassword: input.passwordPW, newPassword: input.password}});
      fetchUser();
      setInput({password:"",confirmPassword:"",passwordPW:""});
    }
    catch (e) {
      // check if password is valid
      setPasswordError({status:true,message:e.message});
      setTimeout(() => setPasswordError({status:false,message:""}), 3000);
      setInput({password:"",confirmPassword:"",passwordPW:""});
      return;
    }
  }
  const updateProfilePicture = (url) => {
    console.log(url)
    setPFP(url)
  }
  return user ? (
    <div className="flex flex-col place-content-center">
      <div className="flex place-content-center">
        <div className="avatar">
          <div className="mt-20 w-64 rounded-full border-2 border-forum">
            <label for="upload-picture-modal" class="modal-button hover:cursor-pointer hover:opacity-80" title="Change Profile Picture">
              <img src={userPFP} />
            </label>
            <UploadPicture updateProfilePicture={updateProfilePicture}/>
          </div>
        </div>
      </div>
      <div className="flex place-content-center">
        <div className="card w-1/3 mt-10 p-8 shadow">
          <Transition
            show={usernameError.status}
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
                <span>{usernameError.message}</span>
              </div>
            </div>
          </Transition>
          <div className="flex flex-row ">
            <p className="pr-1">Username: </p>
            <p className="font-medium">{user.username}</p>
          </div>
          <input 
            type="text" 
            placeholder="Enter new username" 
            class="mt-4 input input-bordered w-full"
            name="username"
            value={input.username}
            onChange={handleChange}
          />
          <div className="flex justify-end">
            <a class="link no-underline text-forum mt-2" onClick={handleChangeUsername}>Update</a>
          </div>
        </div>
      </div>
      
      <div className="flex place-content-center">
        <div className="card w-1/3 mt-10 p-8 shadow">
          <Transition
            show={emailError.status}
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
                <span>{emailError.message}</span>
              </div>
            </div>
          </Transition>
          <div className="flex flex-row ">
            <p className="pr-1">Email: </p>
            <p className="font-medium">{user.email}</p>
          </div>
          <input 
            type="text" 
            placeholder="Enter new email" 
            class="mt-4 input input-bordered w-full" 
            name="email"
            value={input.email}
            onChange={handleChange}
          />
          <input 
            type="password" 
            placeholder="Enter password" 
            class="mt-4 input input-bordered w-full" 
            name="emailPW"
            value={input.emailPW}
            onChange={handleChange}
          />
          <div className="flex justify-end">
            <a class="link no-underline text-forum mt-2" onClick={handleChangeEmail}>Update</a>
          </div>
        </div>
      </div>
      <div className="flex place-content-center">
        <div className="card w-1/3 mt-10 p-8 shadow">
          <Transition
            show={passwordError.status}
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
                <span>{passwordError.message}</span>
              </div>
            </div>
          </Transition>
          <div className="flex flex-row ">
            <p className="pr-1">Password</p>
          </div>
          <input 
            type="password" 
            placeholder="Enter new password" 
            class="mt-4 input input-bordered w-full" 
            name="password"
            value={input.password}
            onChange={handleChange}
          />
          <input 
            type="password" 
            placeholder="Confirm new Password" 
            class="mt-4 input input-bordered w-full" 
            name="confirmPassword"
            value={input.confirmPassword}
            onChange={handleChange}
          />
          <input 
            type="password" 
            placeholder="Enter old Password" 
            class="mt-4 input input-bordered w-full" 
            name="passwordPW"
            value={input.passwordPW}
            onChange={handleChange}
          />
          <div className="flex justify-end">
            <a class="link no-underline text-forum mt-2" onClick={handleChangePassword}>Update</a>
          </div>
        </div>
      </div>
      <div className="flex place-content-center py-16">
        <DeleteAccountModal />
      </div>
    </div>
  ): <div>loading...</div>;
};

export default UpdateAccountScreen;
