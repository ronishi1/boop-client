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
			series_id
			series_title
			chapter_title
			num_pages
			page_images
			page_JSONS
			publication_date
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

export const GET_CHAPTER_VIEW = gql`
	query GetChapterView($chapterID: ID) {
		getChapterView(chapterID: $chapterID) {
			chapter {
				_id
				series_id
				series_title
				chapter_title
				num_pages
				page_JSONS
				page_images
				publication_date
				content_type
			}
			chapter_titles
			chapter_ids
		}
	}
`

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

export const GET_READ_LIST = gql`
	query GetReadList($username: String) {
		getReadList(username: $username) {
			_id
			series_title
			num_chapters
			current_rating
			publication_date
			cover_image
			content_type
		}
	}
`;

export const GET_FAVORITES = gql`
	query GetFavorites($username: String) {
		getFavorites(username: $username) {
			_id
			series_title
			num_chapters
			current_rating
			publication_date
			cover_image
			content_type
		}
	}
`;

export const GET_FILTERED_CONTENT = gql`
	query GetFilteredContent($genres: [String], $releaseYears:[Int], $rating: Int, $contentTypes:[String]){
		getFilteredContent(genres:$genres, releaseYears: $releaseYears, rating: $rating, contentTypes: $contentTypes){
			_id
			series_title
			num_chapters
			current_rating
			publication_date
			cover_image
			content_type
		}
	}
`;

export const GET_USER_PUBLISHED = gql`
	query GetUserPublished($username: String){
		getUserPublished(username:$username){
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

export const GET_CATEGORY_POSTS = gql`
	query GetCategoryPosts($category: Category){
		getCategoryPosts(category: $category){
			_id
			name
			posts {
				_id
				title
				author
				author_name
				timestamp
				linked_image
				linked_title
			}
			description
			category
		}
	}
`;

export const GET_TOPIC = gql`
	query GetTopic($topicId: ID){
		 getTopic(topicId: $topicId){
			 _id
			 name
			 posts {
				 _id
				 title
				 author
				 author_name
				 timestamp
				 linked_image
				 linked_title
				 tags
				 num_replies
				 replies {
					 author
					 author_name
					 content
					 timestamp
				 }
			 }
			 description
			 category
		 }
	}
`;

export const GET_POST = gql`
	query getPost($postId: ID){
		getPost(postId:$postId){
			_id
			title
			content
			linked_content
			linked_title
			linked_image
			linked_synopsis
			tags
			author
			author_name
			replies {
				_id
				author
				author_name
				content
				timestamp
			}
			num_replies
			views
			timestamp
			topic
		}
	}
`;

export const GET_MY_POSTS = gql`
	query GetMyPosts {
		getMyPosts {
			_id
			title
			timestamp
			tags
			content
			linked_content
			linked_image
		}
	}
`

export const GET_USER_ACTIVITY_FEED = gql`
	query GetUserActivityFeed($username: String){
		getUserActivityFeed(username:$username){
			activity_type
			content_ID
			content_name
			chapter_ID
			chapter_name
			timestamp
			_id
		}
	}
`

export const GET_FOLLOWED_ACTIVITY = gql`
	query GetFollowedActivity{
		getFollowedActivity{
			activity {
				activity_type
				content_ID
				content_name
				chapter_ID
				chapter_name
				timestamp
				_id
			}
			username
			_id
		}
	}
`

export const GET_CONTENT_BASIC = gql`
	query GetContentBasic($contentID: ID!){
		getContentInfo(contentID: $contentID){
			content_type
		}
	}
`

export const GET_SEARCH = gql`
	query GetSearch($searchTerm: String){
		getSearch(searchTerm: $searchTerm){
			content_ID
			content_title
			content_image
			content_info
			content_author_name
			content_author
			content_type
			content_timestamp
			_id
		}
	}
`
