import PropTypes from 'prop-types';
import {
  StatusSpan,
  StyledFriendListItem,
  StyledFriendListImage,
} from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <StyledFriendListItem>
      <StatusSpan isOnline={isOnline}></StatusSpan>
      <StyledFriendListImage
        class="avatar"
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <p class="name">{name}</p>
    </StyledFriendListItem>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
