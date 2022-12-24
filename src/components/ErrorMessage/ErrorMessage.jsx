import { NoResults, Query } from './ErrorMessage.styled';
import PropTypes from 'prop-types';

export const ErrorMessage = ({ searchQuery }) => (
  <NoResults>
    Sorry, 🤷‍♂️ there are no images matching your search query:
    <Query> {searchQuery}</Query>
  </NoResults>
);

ErrorMessage.propTypes = {
  searchQuery: PropTypes.string.isRequired,
};
