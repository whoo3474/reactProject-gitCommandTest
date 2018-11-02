import React from 'react';

const Search = ({location}) => {
  return (
    <div>
      {/* url에 keyword= 형식으로 넣으면 값을 받아옴 */}
      {new URLSearchParams(location.search).get('keyword')} 검색
    </div>
  );
};

export default Search;