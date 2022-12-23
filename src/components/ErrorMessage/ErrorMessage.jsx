import { NoResults, Query } from './ErrorMessage.styled';

export const ErrorMessage = ({ searchQuery }) => (
  <NoResults>
    Sorry, 🤷‍♂️ there are no images matching your search query:
    <Query> {searchQuery}</Query>
  </NoResults>
);
