import React from 'react';
import { connect } from 'react-redux';
import { loadMatches } from './redux/actions';
import SearchBar from './components/SearchBar';
import Loader from './components/Loader';
import ErrorMessage from './components/ErrorMessage';

const mapStateToProps = ({ isLoading, matches, error }) => ({
  isLoading,
  matches,
  error,
});

const mapDispatchToProps = (dispatch) => ({
  search: (fifaCode) => dispatch(loadMatches(fifaCode)),
});

@connect(mapStateToProps, mapDispatchToProps)
export default class Matches extends React.Component {
  render() {
    const {
      isLoading,
      matches,
      error,
      search,
    } = this.props;
    return (
      <div>
        <SearchBar isLoading={isLoading} onSearch={search} />
        { isLoading
          ? <Loader />
          : error
            ? <ErrorMessage error={error} />
            : <Matches matches={matches} />
        }
      </div>
    );
  }
}