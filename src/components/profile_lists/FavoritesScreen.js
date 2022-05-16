import React, {useEffect} from 'react';
import ListTemplate from './ListTemplate';
import { useParams } from 'react-router-dom'
import { GET_FAVORITES } from '../../cache/queries';
import { useQuery } from '@apollo/client';
import Loading from '../loading/Loading';
import PageNotFound from '../page_not_found/PageNotFound';

const FavoritesScreen = () => {
  let { username } = useParams();

  let contents = {};
  const { loading, error, data, refetch } = useQuery(GET_FAVORITES, {
      variables: { username: username }
    });

  useEffect(() => {
    refetch();
  },[]);

  if(loading) { console.log(loading, 'loading'); }
	if(error) { return <PageNotFound />}
  if(data) {
    contents = data.getFavorites;
    console.log(contents);
    if(contents == null){
      return <PageNotFound />
    }
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
