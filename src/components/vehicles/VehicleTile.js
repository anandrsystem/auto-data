import React from 'react';
import CurrencyFormat from 'react-currency-format';

import { imagePath, imageType } from '../../constants/common';
import Dropdown from '../shared/Dropdown';

const VehicleTile = (props) => {
  const { selectedModel, handleModalCloseClick, handleComboChange, selectTrim } = props;

  const model = selectedModel["key"].split('~');
  const transmissions = selectedModel["transmissions"];
  const driveTypes = selectedModel["driveTypes"];
  const cabTypes = selectedModel["cabTypes"];
  const details = selectedModel["details"];

  const [yearDesc, modelLetter, modelCode, styleName] = [...model];
  const modelDesc = modelLetter.replace('<sup>&reg;</sup>', '®').replace('<sup>&#174;</sup>', '®').replace('<sup>&trade;</sup>', '™').replace('<sup>&#8482;</sup>', '™');
  const imageUrl = `${imagePath}/${yearDesc}/${modelCode.toLowerCase()}/vehicle_assets/all_vehicles/small/${styleName}${imageType}`;

  const radioHTML = details.length > 0 ? details.map((item) => {
    return (
      <li key={item.acode}>
        <input type="radio" id={item.acode} name="radio-group" value={item.marketingDescription} onChange={selectTrim} />
        <label htmlFor={item.acode}>{item.marketingDescription}</label>
        <span className="pull-right"> <CurrencyFormat value={item.msrp} displayType={'text'} thousandSeparator={true} prefix={'$'} /></span>
      </li>)
  }) : null;

  return (
    <div className="modal select-trim-modal" id="selectTrimModal" role="dialog">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="header"> <button type="button" className="close" data-dismiss="modal" onClick={handleModalCloseClick}>&times;</button> </div>
          <div className="modal-body">
            <div className="select-trim-product">
              <div className="vehicle-tile">
                <div className="vehicle">
                  <img src={imageUrl} />
                </div>
                <div className="modal-text"> <strong> {yearDesc} {modelDesc} </strong></div>
              </div>
            </div>

            <div className="trim-product-details">
              <ul className="list-default">
                <Dropdown
                  id='transmission'
                  label='TRANSMISSION'
                  options={transmissions}
                  changeHandler={handleComboChange}
                />

                <Dropdown
                  id='driveType'
                  label='DRIVE TYPE'
                  options={driveTypes}
                  changeHandler={handleComboChange}
                />

                <Dropdown
                  id='cabType'
                  label='CAB TYPE'
                  options={cabTypes}
                  changeHandler={handleComboChange}
                />

                {radioHTML}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VehicleTile;
