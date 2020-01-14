import React, { Suspense } from 'react';
import { connect } from 'react-redux';

import { getCompetitorsList, getCompetitorsFeatures } from '../../services/compareService';

// child components
import CompetitorGrid from './CompetitorGrid';
// import CompetitorFetureGrid from './CompetitorFetureGrid';
const CompetitorFetureGrid = React.lazy(() => import('./CompetitorFetureGrid'));

class CompareVehicle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      competitorsData: {},
      competitorsFeatures: {}
    }
  }

  componentDidMount() {
    // axios call for getting vehicles list
    const { acode } = this.props.selectedModel;

    getCompetitorsList(acode).then(competitorsList => {
      this.setState({ competitorsData: competitorsList });

      const acodes = competitorsList.map((el) => {
        return el.acode;
      })
      getCompetitorsFeatures(acodes).then(competitorsFeatures => {
        this.setState({ competitorsFeatures });
      })
    })
  }

  render() {
    // console.log(this.props.selectedTrimCode);

    return (
      <div className="compare">
        <CompetitorGrid
          selectedModelData={this.props.selectedModel}
          competitorsData={this.state.competitorsData}
        />
        <div className="filter-toolbar">
          <div className="search-section">
            <div className="search"><input type="text" name="search" className="form-control" placeholder="Feature Search e.g. Wheels" /> <i className="fa fa-search"></i> </div>
            <span className="saerch-advantage d-none d-md-inline-block"> <i className="fa fa-check-circle" aria-hidden="true"></i> Advantage </span>
          </div>
          <div className="filter-action">
            <button type="button" className="btn btn-default"> Show Advantage Only </button>
            <button type="button" className="btn btn-default pull-right"> <i className="fa fa-chevron-down"></i> Expend All </button>
          </div>
          <div className="saerch-advantage d-md-none"> <i className="fa fa-check-circle" aria-hidden="true"></i> Advantage </div>
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          <section>
        <CompetitorFetureGrid
          competitorsFeaturesData={this.state.competitorsFeatures}
        />
        </section>
        </Suspense>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { vehiclesList: state.VehiclesReducer.vehiclesList, selectedModel: state.VehiclesReducer.selectedModel };
}

CompareVehicle = connect(mapStateToProps, null)(CompareVehicle);

export default CompareVehicle;