import { gql } from "@apollo/client";

export const REGISTER = gql`
	mutation Register($email: String!, $username: String!, $password: String!) {
		register(email: $email, username: $username, password: $password) {
			email
		}
	}
`;

export const LOGIN = gql`
	mutation Login($username: String!, $password: String!) {
		login(username: $username, password: $password) {
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
