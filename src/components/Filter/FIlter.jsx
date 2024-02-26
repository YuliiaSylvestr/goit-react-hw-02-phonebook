import PropTypes from 'prop-types';

const Filter = ({ filter, onFilter }) => {
  return (
    <div>
      <p>Filter contacts by name</p>
      <input
        type="text"
        name="filter"
        required
        value={filter}
        onChange={e => onFilter(e.target.value)}
      />
    </div>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onFilter: PropTypes.func.isRequired,
};

export default Filter;
