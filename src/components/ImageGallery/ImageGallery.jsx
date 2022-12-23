import { ImageGalleryItem } from 'components/ImageGalleryItem';
import { Gallery } from './ImageGallery.styled';

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
