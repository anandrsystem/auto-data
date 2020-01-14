import React from 'react';

const Feature = (props) => {
  const { featureGroupName, featureGroupData } = props;
  const featureHTML = featureGroupData.map((group) => {
    return <ul>
      <li className="list-heading">{group.stub}</li>
      <li>{group.comparedata[0].data}</li>
      <li>{group.comparedata[1].data}</li>
      <li>{group.comparedata[2].data}</li>
      <li>{group.comparedata[3].data}</li>
    </ul>
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
