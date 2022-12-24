import { Item, Image } from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({
  largeImageURL,
  webformatURL,
  tags,
  onClick,
}) => (
  <Item href={largeImageURL} onClick={onClick}>
    <Image src={webformatURL} alt={tags} />
  </Item>
);

ImageGalleryItem.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      largeImageURL: PropTypes.string.isRequired,
      webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
      onClick: PropTypes.func.isRequired,
    })
  ),
};
