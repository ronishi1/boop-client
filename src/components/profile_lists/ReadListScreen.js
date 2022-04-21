import React 	from 'react';
import ListTemplate from './ListTemplate';
import { useParams } from 'react-router-dom'
import { GET_READ_LIST} from '../../cache/queries';
import { useQuery } from '@apollo/client';
import Loading from '../loading/Loading';

const ReadListScreen = () => {
  let { username } = useParams();

  let contents = {};
  const { loading, error, data, refetch } = useQuery(GET_READ_LIST, {
      variables: { username: username }
    });

  if(loading) { console.log(loading, 'loading'); }
	if(error) { console.log(error, 'error'); }
  if(data) {
    contents = data.getReadList;
  }

  if(loading){
    return <Loading />
  }
  return (
    <div>
      <ListTemplate listType="Read List" contents={contents} username={username}/>
    </div>
  );
}

export default ReadListScreen;
