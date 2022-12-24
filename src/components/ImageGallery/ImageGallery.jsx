import { ImageGalleryItem } from 'components/ImageGalleryItem';
import { Gallery } from './ImageGallery.styled';
import PropTypes from 'prop-types';

export const ImageGallery = ({ items, modalUrl }) => (
  <Gallery>
    {items.map(({ id, largeImageURL, ...otherProps }) => (
      <ImageGalleryItem
        key={id}
        onClick={() => modalUrl(largeImageURL)}
        {...otherProps}
      />
    ))}
  </Gallery>
);

ImageGallery.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ),
  modalUrl: PropTypes.func.isRequired,
};
