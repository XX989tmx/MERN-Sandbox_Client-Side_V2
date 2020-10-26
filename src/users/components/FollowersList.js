import React from 'react';
import FollowersItem from './FollowersItem';

const FollowersList = (props) => {
    return (
      <div>
        {props.Followers.map((v, i) => (
          <FollowersItem
            key={i}
            id={v.id}
            articles={v.articles}
            email={v.email}
            followedBy={v.followedBy}
            following={v.following}
            image={v.image}
            name={v.name}
            staredArticles={v.staredArticles}
          />
        ))}
      </div>
    );
}

export default FollowersList;
