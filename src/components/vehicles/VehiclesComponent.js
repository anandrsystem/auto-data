import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router-dom';

import { setVehicleList, setSelectedModel } from '../../actions/vehicles';
import { getVehiclesList, getSelectedModel } from '../../services/vehicleService';
import { formatVehicleList, filterDataByKey, getVehicleDetails } from '../../utils/functions';

// child components
import VehiclesList from './VehiclesList';

class VehiclesComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vehiclesData: {},
      selectedModel: {},
      filters: {},
      showModal: false,
      trimSelected: false,
      isError: false,
      errorMessage: ''
    };
    this.handleModalShowClick = this.handleModalShowClick.bind(this);
    this.handleModalCloseClick = this.handleModalCloseClick.bind(this);
    this.handleComboChange = this.handleComboChange.bind(this);
    this.selectTrim = this.selectTrim.bind(this);
  }

  componentDidMount() {
    getVehiclesList().then(vehiclesList => {
      // save vehicle-list in redux store
      this.props.saveVehicleList({ vehiclesList })

      const vehiclesData = formatVehicleList(vehiclesList);
      this.setState({ vehiclesData })
    }).catch(error => {
      this.setState({ isError: true, errorMessage: error.message });
    })
  }

  handleModalShowClick(e, selectedModelKey, selectedModelData) {
    e.preventDefault();

    const transmissions = filterDataByKey(selectedModelData, 'transmission');
    const driveTypes = filterDataByKey(selectedModelData, 'driveType');
    const cabTypes = filterDataByKey(selectedModelData, 'cabType');
    const filters = {
      'transmission': transmissions.length > 1 ? transmissions[0] : '',
      'driveType': driveTypes.length > 1 ? driveTypes[0] : '',
      'cabType': cabTypes.length > 1 ? cabTypes[0] : ''
    }
    const details = getVehicleDetails(selectedModelData, filters);

    const selectedModel = {
      key: selectedModelKey,
      data: selectedModelData,
      transmissions,
      driveTypes,
      cabTypes,
      details
    }
    this.setState({ showModal: true, selectedModel, filters })
  }

  handleModalCloseClick() {
    this.setState({ showModal: false })
  }

  handleComboChange(e) {
    e.preventDefault();

    const { id, value } = e.target;
    const { selectedModel, filters } = this.state;
    filters[id] = value;

    selectedModel["details"] = getVehicleDetails(selectedModel["data"], filters);
    this.setState({ selectedModel, filters });
  }

  selectTrim(e) {
    const { id, value } = e.target;

    getSelectedModel(id).then(selectedModel => {
      // save selected model in redux store
      this.props.saveSelectedModel({ selectedModel });

      this.setState({ trimSelected: true })
    })
  }

  render() {
    if (this.state.isError) {
      // Simulate a JS error
      throw new Error(this.state.errorMessage);
    }
    if (this.state.trimSelected) {
      return <Redirect to='/compare' />
    }

    return (
      <VehiclesList
        vehiclesData={this.state.vehiclesData}
        selectedModel={this.state.selectedModel}
        showModal={this.state.showModal}
        handleModalShowClick={this.handleModalShowClick}
        handleModalCloseClick={this.handleModalCloseClick}
        handleComboChange={this.handleComboChange}
        selectTrim={this.selectTrim}
      />
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ saveVehicleList: setVehicleList, saveSelectedModel: setSelectedModel }, dispatch);
}

VehiclesComponent = connect(null, mapDispatchToProps)(VehiclesComponent);
export default VehiclesComponent;
