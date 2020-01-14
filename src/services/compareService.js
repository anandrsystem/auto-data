import axios from 'axios';

import { listCommonCompetitors, getCompareData } from '../constants/endpoints';

export async function getCompetitorsList(acode) {
  const api = listCommonCompetitors(acode);
  const result = await axios.get(api).then(resp => {
    return resp.data[0].data;
  }).catch(error => {
    console.log(error);
  });

  return result;
}

export async function getCompetitorsFeatures(acodes) {
  const api = getCompareData(acodes);
  const result = await axios.get(api).then(resp => {
    return resp.data[0].data;
  }).catch(error => {
    console.log(error);
  });

  return result;
}
