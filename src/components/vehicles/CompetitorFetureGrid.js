import React from 'react';

import { filterDataUsingKey } from '../../utils/functions';

// child components
import Feature from '../shared/Feature';

const CompetitorFetureGrid = (props) => {
  const { competitorsFeaturesData } = props;
  const competitorsHTML = competitorsFeaturesData.length > 0 ? competitorsFeaturesData[0].groupMapping[0].subGroups.map((item) => {
    const compariaionData = filterDataUsingKey(competitorsFeaturesData[0].compare, 'GroupID', item.ID)

    return compariaionData.length > 0 ? compariaionData.map((feature) => {
      return <Feature
        featureGroupName={feature.GroupName}
        featureGroupData={feature.GroupData}
      />
    }) : null
  }) : null;

  return (
    <div className="abstract-Grid">
      <div className="accordion-panel">
        <div className="panel-group" id="accordion">
          {competitorsHTML}
        </div>
      </div>
    </div>
  );
}

export default CompetitorFetureGrid;
