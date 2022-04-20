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

export const GET_CONTENT_INFO = gql`
	query GetContentInfo($contentID: ID!){
		getContentInfo(contentID: $contentID){
			_id
			series_title
			author
			author_username
			synopsis
			genres
			num_chapters
			chapters
			views
			discussion_post
			current_rating
			num_of_ratings
			total_ratings
			publication_date
			completed
			cover_image
			storyboard
			content_type
		}
	}
`;

export const GET_MY_CONTENT = gql`
	query GetMyContent {
		getMyContent {
			_id
			series_title
			author
			author_username
			synopsis
			genres
			num_chapters
			chapters
			views
			discussion_post
			current_rating
			num_of_ratings
			total_ratings
			publication_date
			completed
			cover_image
			storyboard
			content_type
		}
	}
`;

export const GET_POPULAR_CONTENT = gql`
	query GetPopularContent {
		getPopularContent {
			_id
			series_title
			author
			author_username
			synopsis
			genres
			num_chapters
			chapters
			views
			discussion_post
			current_rating
			num_of_ratings
			total_ratings
			publication_date
			completed
			cover_image
			storyboard
			content_type
		}
	}
`;

export const GET_TOP_RATED_CONTENT = gql`
	query GetTopRatedContent {
		getTopRatedContent {
			_id
			series_title
			author
			author_username
			synopsis
			genres
			num_chapters
			chapters
			views
			discussion_post
			current_rating
			num_of_ratings
			total_ratings
			publication_date
			completed
			cover_image
			storyboard
			content_type
		}
	}
`;

export const GET_RECENT_CONTENT = gql`
	query GetRecentContent {
		getRecentContent {
			_id
			series_title
			author
			author_username
			synopsis
			genres
			num_chapters
			chapters
			views
			discussion_post
			current_rating
			num_of_ratings
			total_ratings
			publication_date
			completed
			cover_image
			storyboard
			content_type
		}
	}
`;

export const GET_CONTENT_CHAPTER = gql`
	query GetContentChapter($chapterID: ID) {
		getContentChapter(chapterID:$chapterID) {
			_id
			series_title
			chapter_title
			num_pages
			page_images
		}
	}
`;

export const GET_CHAPTERS = gql`
	query GetChapters($chapterIDs: [ID] ) {
		getChapters(chapterIDs: $chapterIDs ) {
			_id
			chapter_title
			publication_date
		}
	}
`;

export const GET_POST_BASIC = gql`
	query GetPost($postId: ID) {
		getPost(postId: $postId){
			_id
			title
			author
			author_name
			timestamp
		}
	}
`

export const GET_USER_CONTENT_INFO = gql`
	query GetUserContentInfo {
		getCurrentUser {
			favorites
			read_list
			rated_content{
				content_ID
    			rating
			}
			following
		}
	}
`;