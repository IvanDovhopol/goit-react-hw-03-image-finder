import { Item, Image } from './ImageGalleryItem.styled';

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
