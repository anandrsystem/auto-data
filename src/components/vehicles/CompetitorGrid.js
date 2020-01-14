import React from 'react';
import CurrencyFormat from 'react-currency-format';

import { trimImagePath, competitorImagePath } from '../../constants/common';

const CompetitorGrid = props => {
  const { selectedModelData, competitorsData } = props;
  const { yearDesc, modelDesc, trimDesc, trimImage, msrp } = { ...selectedModelData }
  const vehicleImage = trimImage ? trimImagePath(trimImage).replace('jpg', 'png') : '';
  const CompetitorsHTML = competitorsData.length > 0 ? competitorsData.map((item, index) => {
    const { acode, image, yearDesc, modelDesc, trimDesc, msrp } = item;
    const competitorImage = competitorImagePath(image).replace('jpg', 'png');
    return (
      index <= 2 ?
        <div className="competitor-vehicle d-none d-md-block" key={acode}>
          <div className="close-section"> <button type="button" className="close" data-dismiss="modal">×</button> </div>
          <div className="vehicle-image">
            <img src={competitorImage} />
          </div>
          <div className="vehicle-info">
            <div>
              <div className="model-make"> {yearDesc} {modelDesc} </div>
              <div className="model-trim"> {trimDesc} </div>
            </div>
            <div>
              <div className="text-normal"> Starting From <CurrencyFormat value={msrp} displayType={'text'} thousandSeparator={true} prefix={'$'} /> </div>
            </div>
          </div>
          <div>
            <button type="button" className="btn btn-default"> Change </button>
          </div>
        </div> : null)
  }) : null;

  return (
    <div className="compare-section">
      <div className="vehicle-compare flex">
        <div className="base-vehicle">
          <div className="vehicle-image">
            <img src={vehicleImage} className="" />
          </div>
          <div className="vehicle-info">
            <div>
              <div className="model-make"> {yearDesc} {modelDesc} </div>
              <div className="model-trim"> {trimDesc} </div>
            </div>
            <div>
              <div className="text-normal"> Starting From <CurrencyFormat value={msrp} displayType={'text'} thousandSeparator={true} prefix={'$'} /> </div>
            </div>
          </div>
          <div className="md-text-left">
            <button type="button" className="btn btn-default"> Change </button>
            <button type="button" className="btn btn-default pull-right d-none d-md-block"> Color <span className="color-swatch"></span> </button>
          </div>
        </div>
        {CompetitorsHTML}
      </div>
    </div>
  );
}

export default CompetitorGrid;
