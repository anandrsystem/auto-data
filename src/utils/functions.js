import _ from 'lodash';

function getMinVal(data) {
  return data.reduce((min, p) => p.y < min ? p.y : min, data[0].y);
}
function getMaxVal(data) {
  return data.reduce((max, p) => p.y > max ? p.y : max, data[0].y);
}

export function formatVehicleList(data) {
  const groupbyStyle = _.mapValues(_.groupBy(data, 'cmbodyStyle'), clist => clist.map(vehicle => _.omit(vehicle, 'cmbodyStyle')));
  const styles = Object.keys(groupbyStyle);
  const vehiclesData = {};

  for (let i = 0; i < styles.length; i++) {
    const style = styles[i];
    const groupbyModel = groupbyStyle[style].reduce(function (r, a) {
      const modelKey = a.yearDesc + '~' + a.modelLetter + '~' + a.modelCode + '~' + a.styleName;
      r[modelKey] = r[modelKey] || [];
      r[modelKey].push(a);
      return r;
    }, Object.create(null));

    vehiclesData[style] = groupbyModel;
  }
  
  return vehiclesData;
}

export function filterDataByKey(data, key) {
  const result = _.uniqBy(data, key).map((item) => {
    return item[key];
  });

  return result;
}

export function filterDataUsingKey(dataArray, key, keyVal) {
  const result = dataArray.filter((el) => {
    return el[key] === keyVal;
  })

  return result;
}

export function getVehicleDetails(selectedVehicle, filters) {
  const { transmission, driveType, cabType } = filters;
  const filteredData = selectedVehicle.filter(function (el) {
    return (el.transmission == (transmission == '' ? el.transmission : transmission)) &&
      (el.driveType == (driveType == '' ? el.driveType : driveType)) &&
      (el.cabType == (cabType == '' ? el.cabType : cabType));
  });

  return filteredData;
}
