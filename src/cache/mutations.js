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
