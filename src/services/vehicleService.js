import axios from 'axios';

import { listMarketingVehicles, listCompetitor } from '../constants/endpoints';

export async function getVehiclesList() {
  const api = listMarketingVehicles;
  const result = await axios.get(api).then(resp => {
    return resp.data[0].data;
  }).catch(error => {
    throw new Error(error);
  });

  return result;
}

export async function getSelectedModel(acode) {
  const api = listCompetitor(acode);
  const result = await axios.get(api).then(resp => {
    return resp.data[0].data[0];
  }).catch(error => {
    throw new Error(error);
  });

  return result;
}