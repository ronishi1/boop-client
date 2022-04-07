import React, { useState } from "react";

const ResetPassword = () => {
  // https://www.figma.com/file/oP2NOFuaNPMCreFx2L7iSU/Boop-Mockups?node-id=208%3A435

  const [inputs, setInputs] = useState({});
  function handleSubmit(event) {
    console.log(inputs);
    //inputs.map((input) => (input = ""));
  }
  const handleChange = (event) => {
    //console.log(inputs);
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  return (
    <div>
      {/* I think we can just move this button to the navbar we might have to rename id */}
      <label for="reset-password-modal" class="btn modal-button">
        open modal
      </label>

      <input type="checkbox" id="reset-password-modal" class="modal-toggle" />

      <label for="reset-password-modal" class="modal cursor-pointer">
        <label class="modal-box w-1/2 max-w-full h-2/5 max-h-full grid place-items-center items-center">
          <form
            class="w-full h-full grid place-items-center items-center"
            onSubmit={handleSubmit}
          >
            <label class="absolute top-6 right-8 " for="reset-password-modal">
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

            <div class="w-full grid place-items-center items-center space-y-4">
              <div class="place-items-start w-full">
                <h3 class="text-left indent-24 text-lg font-medium">
                  Reset Password
                </h3>
              </div>
              <input
                type="text"
                placeholder="Email"
                name="email"
                value={inputs.email || ""}
                onChange={handleChange}
                class="input input-bordered w-4/5 focus:outline-none"
              />
              <button class="btn border-none bg-forum" type="submit">
                Reset Password
              </button>
            </div>
          </form>
        </label>
      </label>
    </div>
  );
};

export default ResetPassword;
