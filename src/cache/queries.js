import { gql } from "@apollo/client";

export const GET_CURRENT_USER = gql`
	query GetCurrentUser {
		getCurrentUser {
			_id
			username
			email
			profile_pic
			favorites
			read_list
			following
			followers
			forum_posts
			user_content
			bio
		}
	}
`;

export const GET_RESET_USER = gql`
	query GetResetUser($reset_string: String!) {
		getResetUser(reset_string:$reset_string)
	}
`;

export const GET_USER_PROFILE = gql`
	query GetUserProfile($username:String!) {
		getUserProfile(username:$username) {
			_id
	    username
	    bio
	    profile_pic
	    favorites
	    following
	    followers
	    user_content
		}
	}
`;
