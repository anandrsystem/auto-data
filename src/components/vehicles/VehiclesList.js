import React from 'react';

import { imagePath, imageType } from '../../constants/common';
import VehicleTile from './VehicleTile';

const VehiclesList = (props) => {
  const {
    vehiclesData,
    selectedModel,
    showModal,
    handleModalShowClick,
    handleModalCloseClick,
    handleComboChange,
    selectTrim,
    // isHovering,
    // handleMouseHover,
  } = props;

  let HTML = vehiclesData ? Object.keys(vehiclesData).map(function (vStyle, index) {
    return (
      <div className="panel panel-default" key={vStyle}>
        <div className="panel-heading"> {vStyle} </div>
        <div className="panel-body">
          <div className="flex sm-flex-wrap">
            {
              vehiclesData[vStyle] ? Object.keys(vehiclesData[vStyle]).map(function (vModel, index) {
                const model = vModel.split('~');
                const [yearDesc, modelLetter, modelCode, styleName] = [...model];
                const modelDesc = modelLetter.replace('<sup>&reg;</sup>', '®').replace('<sup>&#174;</sup>', '®').replace('<sup>&trade;</sup>', '™').replace('<sup>&#8482;</sup>', '™');
                const imageUrl = `${imagePath}/${yearDesc}/${modelCode.toLowerCase()}/vehicle_assets/all_vehicles/small/${styleName}${imageType}`;

                return (
                  <div key={vModel}>
                    <div className="vehicle-tile" onClick={() => handleModalShowClick(event, vModel, vehiclesData[vStyle][vModel])}
                    // onMouseEnter={handleMouseHover}
                    // onMouseLeave={handleMouseHover}
                    >
                      <div className="vehicle"> <img src={imageUrl} /></div>
                      <div className="modal-text">
                        <strong> {yearDesc} {modelDesc}</strong>
                        {/* <div> MSRP $00,000* - $00,000*</div> */}
                      </div>
                    </div>
                  </div>
                )
              }) : ""
            }
          </div>
        </div>
      </div>)
  }) : "";

  return (
    <div>
      <div className="model-selector-wrap">
        {HTML}

        {showModal &&
          <VehicleTile
            selectedModel={selectedModel}
            handleModalCloseClick={handleModalCloseClick}
            handleComboChange={handleComboChange}
            selectTrim={selectTrim}
          />
        }
      </div>
    </div>
  )
}

export default VehiclesList;
