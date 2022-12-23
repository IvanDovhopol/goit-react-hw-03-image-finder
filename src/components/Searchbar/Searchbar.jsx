import React, { Component } from 'react';
import { Loader } from 'components/Loader';
import toast from 'react-hot-toast';
import {
  SearchField,
  Form,
  SearchButton,
  Label,
  Input,
} from './Searchbar.styled';

export class Searchbar extends Component {
  state = {
    searchQuery: '',
  };

  handleSearchQuery = e => {
    this.setState({ searchQuery: e.currentTarget.value.toLowerCase() });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { searchQuery } = this.state;

    if (searchQuery.trim() === '')
      return toast.error('This field must not be empty!');

    this.props.onSubmit(searchQuery);
    this.setState({ searchQuery: '' });
  };

  render() {
    const { searchQuery } = this.state;
    const { load } = this.props;

    return (
      <SearchField>
        <Form onSubmit={this.handleSubmit}>
          <SearchButton type="submit">
            <Label>Search</Label>
          </SearchButton>

          <Input
            name="search"
            type="text"
            autoComplete="off"
            autoFocus
            onChange={this.handleSearchQuery}
            value={searchQuery}
            placeholder="Search images and photos"
          />
          {load && <Loader />}
        </Form>
      </SearchField>
    );
  }
}
