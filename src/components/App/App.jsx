import React, { Component } from 'react';
import { Button } from 'components/Button';
import { ImageGallery } from 'components/ImageGallery';
import { Modal } from 'components/Modal';
import { Searchbar } from 'components/Searchbar';
import { Toaster } from 'react-hot-toast';
import { Body } from './App.styled';
import { ErrorMessage } from 'components/ErrorMessage';
import * as API from 'path/to/services/api';

export class App extends Component {
  state = {
    images: [],
    error: false,
    searchQuery: '',
    load: false,
    modalUrl: '',
    showModal: false,
    page: 1,
    per_page: 12,
    showLoadMore: false,
  };

  async componentDidUpdate(_, prevState) {
    const { images, searchQuery, page, per_page } = this.state;

    if (prevState.searchQuery !== searchQuery || prevState.page !== page) {
      try {
        this.setState({ load: true, showLoadMore: false });
        const { hits, totalHits } = await API.getImages(searchQuery, page);

        if (totalHits === 0) return this.setState({ error: true });

        if (totalHits > per_page) this.setState({ showLoadMore: true });

        if (totalHits - images.length <= per_page)
          this.setState({ showLoadMore: false });

        this.setState({
          images: [...images, ...hits],
          error: false,
        });
      } catch (error) {
        this.setState({ error: true });
      } finally {
        this.setState({ load: false });
      }
    }
  }

  handleSubmit = searchQuery => {
    this.setState({ searchQuery, page: 1, images: [], error: false });
  };

  toggleModal = _ => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  urlForModal = url => {
    this.setState({ modalUrl: url, showModal: true });
  };

  incrementPage = _ => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const {
      images,
      load,
      showModal,
      modalUrl,
      searchQuery,
      error,
      showLoadMore,
    } = this.state;

    return (
      <Body>
        <Searchbar onSubmit={this.handleSubmit} load={load} />
        {images.length > 0 && (
          <ImageGallery items={images} modalUrl={this.urlForModal} />
        )}

        {error && <ErrorMessage searchQuery={searchQuery} />}
        {showModal && <Modal onClose={this.toggleModal} modalUrl={modalUrl} />}
        {showLoadMore && <Button onClick={this.incrementPage} />}

        <Toaster
          position="top-left"
          toastOptions={{
            style: {
              background: '#363636',
              color: '#fff',
            },
          }}
        />
      </Body>
    );
  }
}
