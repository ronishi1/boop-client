import React 	from 'react';
import { Link } from "react-router-dom";

const Dev = () => {
  // for dev purposes
  return (
    <div>
      <div class="prose">
        <h2>Real Pages</h2>
      </div>
      <button class="btn btn-primary px-16">
        <Link to="/">Home</Link>
      </button>
      <button class="btn btn-primary px-16">
        <Link to="/browse">Browse</Link>
      </button>
      <button class="btn btn-primary px-16">
        <Link to="/info">Content Info</Link>
      </button>
      <button class="btn btn-primary px-16">
        <Link to="/view">Content View</Link>
      </button>
      <button class="btn btn-primary px-16">
        <Link to="/studio">Creator Studio</Link>
      </button>
      <button class="btn btn-primary px-16">
        <Link to="/forum-create">Create Forum</Link>
      </button>
      <button class="btn btn-primary px-16">
        <Link to="/forum-edit">Edit Forum</Link>
      </button>
      <button class="btn btn-primary px-16">
        <Link to="/forum-home">Forum Home</Link>
      </button>
      <button class="btn btn-primary px-16">
        <Link to="/forum-management">Forum Management</Link>
      </button>
      <button class="btn btn-primary px-16">
        <Link to="/post">Forum Post</Link>
      </button>
      <button class="btn btn-primary px-16">
        <Link to="/topic">Forum Topic</Link>
      </button>
      <button class="btn btn-primary px-16">
        <Link to="/landing">Landing</Link>
      </button>
      <button class="btn btn-primary px-16">
        <Link to="/profile">Profile</Link>
      </button>
      <button class="btn btn-primary px-16">
        <Link to="/update-account">Update Account</Link>
      </button>
      <div class="prose">
        <h2>Modals</h2>
      </div>
      <button class="btn btn-primary px-16">
        <Link to="/login">Login</Link>
      </button>
      <button class="btn btn-primary px-16">
        <Link to="/signup">Sign Up</Link>
      </button>
      <button class="btn btn-primary px-16">
        <Link to="/resetpassword">Reset Password</Link>
      </button>

    </div>
  );
}

export default Dev;
