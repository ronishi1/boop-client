import { gql } from "@apollo/client";

export const REGISTER = gql`
	mutation Register($email: String!, $username: String!, $password: String!) {
		register(email: $email, username: $username, password: $password) {
			email
		}
	}
`;

export const LOGIN = gql`
	mutation Login($usernameOrEmail: String!, $password: String!) {
		login(usernameOrEmail: $usernameOrEmail, password: $password) {
			email
		}
	}
`;

export const LOGOUT = gql`
	mutation Logout {
		logout
	}
`;

export const GENERATE_RESET_PASSWORD = gql`
	mutation GenerateResetPassword($email: String!) {
		generateResetPassword(email: $email)
	}
`;

export const RESET_PASSWORD = gql`
	mutation ResetPassword($reset_string: String!,$password: String!) {
		resetPassword(reset_string: $reset_string,password: $password)
	}
`;

export const UPDATE_BIO = gql`
	mutation UpdateBio($newBio: String!) {
		updateBio(newBio: $newBio)
	}
`;

export const FOLLOW_USER = gql`
	mutation FollowUser($followID: ID!) {
		followUser(followID: $followID)
	}
`;

export const UNFOLLOW_USER = gql`
	mutation UnfollowUser($followID: ID!) {
		unfollowUser(followID: $followID)
	}
`;

export const UPDATE_USERNAME = gql`
	mutation UpdateUsername($username: String!) {
		updateUsername(username: $username)
	}
`;

export const UPDATE_EMAIL = gql`
	mutation UpdateEmail($newEmail: String!, $password: String!){
		updateEmail(newEmail: $newEmail, password: $password)
	}
`;

export const UPDATE_PASSWORD = gql`
	mutation UpdatePassword($oldPassword: String!, $newPassword: String!) {
		updatePassword(oldPassword: $oldPassword, newPassword: $newPassword)
	}
`;

export const DELETE_ACCOUNT = gql`
	mutation DeleteAccount($password: String!) {
		deleteAccount(password: $password)
	}
`;

export const UPDATE_PROFILE_PICTURE = gql`
	mutation UpdateProfilePicture($url: String!) {
		updateProfilePicture(url: $url)
	}
`;

export const UPDATE_COVER_IMAGE = gql`
	mutation UpdateCoverImage($contentID: ID, $url: String){
		updateCoverImage(contentID: $contentID,url:$url)
	}
`

export const EDIT_CONTENT = gql`
	mutation EditContent($contentID: ID, $contentInput: ContentInput){
		editContent(contentID: $contentID, contentInput: $contentInput)
	}
`
export const CREATE_CONTENT = gql`
	mutation CreateContent($contentInput: ContentInput) {
		createContent(contentInput: $contentInput)
	}
`;
