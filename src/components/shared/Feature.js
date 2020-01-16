import React from 'react';

const Feature = (props) => {
  const { featureGroupName, featureGroupData } = props;
  

  const featureHTML = featureGroupData.map((feature, fIndex) => {
    const featureDetails = feature.comparedata ? feature.comparedata.map((item, iIndex) => {
      const key = `${fIndex}${feature.stub}${iIndex}`;
      return iIndex <= 3 ? <li key={key}>{item.data}</li> : null;
    }) : null;

    return feature.comparedata ? <ul>
      <li className="list-heading">{feature.stub}</li>
      {featureDetails}
    </ul> : null;
  });

  return (
    featureGroupData.length > 0 ?
      <div className="panel panel-default">
        <div className="panel-heading">
          <h4 className="panel-title">
            <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo">
              <i className="fa fa-chevron-down"></i>  {featureGroupName}
            </a>
          </h4>
        </div>
        <div id="collapseTwo" className="panel-collapse">
          <div className="panel-body">
            <div className="accordion-data">
              {featureHTML}
            </div>
          </div>
        </div>
      </div> : null
  )
}

export default Feature;
