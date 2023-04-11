import PropTypes from 'prop-types';
import {
  ProfileAvatar,
  ProfileContainer,
  ProfileDescription,
  ProfileStats,
  ProfileUserName,
  ProfileTag,
  ProfileLocation,
  StatsLabel,
  StatsQuantity,
  StatsItem,
} from './Profile.styled';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  followers,
  views,
  likes,
}) => {
  return (
    <div>
      <ProfileContainer>
        <ProfileDescription>
          <ProfileAvatar src={avatar} alt="User avatar" />
          <ProfileUserName>{username}</ProfileUserName>
          <ProfileTag>@{tag}</ProfileTag>
          <ProfileLocation>{location}</ProfileLocation>
        </ProfileDescription>

        <ProfileStats>
          <StatsItem>
            <StatsLabel>Followers</StatsLabel>
            <StatsQuantity>{followers}</StatsQuantity>
          </StatsItem>
          <StatsItem>
            <StatsLabel>Views</StatsLabel>
            <StatsQuantity>{views}</StatsQuantity>
          </StatsItem>
          <StatsItem>
            <StatsLabel>Likes</StatsLabel>
            <StatsQuantity>{likes}</StatsQuantity>
          </StatsItem>
        </ProfileStats>
      </ProfileContainer>
    </div>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};
