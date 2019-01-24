import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ReactTable from 'react-table';
import { editMapping as edit } from '../../../redux/actions/dictionaries/dictionaryActionCreators';

export class ExistingMappings extends Component {
  render() {
    const {
      mappings,
    } = this.props;

    return (
      <div className="col-12">
        <div className="row col-12 custom-concept-list">
          <ReactTable
            data={mappings}
            noDataText="No mappings!"
            minRows={2}
            columns={[
              {
                Header: 'From Concept Name',
                accessor: 'to_concept_name',
              },
              {
                Header: 'Map Type',
                accessor: 'map_type',
              },
              {
                Header: 'Dictionary',
                accessor: 'source',
              },
              {
                Header: 'Action',
                id: 'row',
                filterable: false,
                sortable: false,
                Cell: () => <div>
                  Edit
                  {' '}
                  Remove
                </div>,
              },
            ]}
            className="-striped -highlight custom-table-width"
          />
        </div>
      </div>
    );
  }
}

ExistingMappings.propTypes = {
  modal: PropTypes.bool.isRequired,
  handleToggle: PropTypes.func.isRequired,
  showDeleteMappingModal: PropTypes.func.isRequired,
  handleDeleteMapping: PropTypes.func.isRequired,
  editMapping: PropTypes.func,
  concepts: PropTypes.array,
  source: PropTypes.string,
  mappings: PropTypes.array.isRequired,
  displayName: PropTypes.string,
  mappingLimit: PropTypes.number,
};

ExistingMappings.defaultProps = {
  displayName: '',
  source: '',
  mappingLimit: 5,
  concepts: [],
  editMapping: () => {},
};

export const mapStateToProps = state => ({
  concepts: state.concepts.dictionaryConcepts,
});

export default connect(
  mapStateToProps,
  { editMapping: edit },
)(ExistingMappings);
