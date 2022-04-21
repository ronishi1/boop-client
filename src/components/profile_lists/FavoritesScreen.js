import React 	from 'react';
import ListTemplate from './ListTemplate';
import { useParams } from 'react-router-dom'
import { GET_FAVORITES } from '../../cache/queries';
import { useQuery } from '@apollo/client';
import Loading from '../loading/Loading';
const FavoritesScreen = () => {
  let { username } = useParams();

  let contents = {};
  const { loading, error, data, refetch } = useQuery(GET_FAVORITES, {
      variables: { username: username }
    });

  if(loading) { console.log(loading, 'loading'); }
	if(error) { console.log(error, 'error'); }
  if(data) {
    contents = data.getFavorites;
  }

  if(loading){
    return <Loading />
  }
  return (
    <div>
      <ListTemplate listType="Favorites" contents={contents} username={username}/>
    </div>
  );
}

export default FavoritesScreen;
