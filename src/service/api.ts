import axios from 'axios';
import { IResponse } from './types';

export const ApiUrl = 'http://ergast.com/api/f1/'

export let instance = axios.create({
    headers: {
        Authorization: `Bearer ${null}`,
    }
})
function translateStatusToErrorMessage(status:number) {
  switch (status) {
    case 401:
      return 'Please login again.';
    case 403:
      return 'You do not have permission to view the items.';
    default:
      return 'There was an error retrieving the items. Please try again.';
  }
}
export function checkStatus(response:IResponse) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    const httpErrorInfo = {
      status: response.status,
      statusText: response.statusText,
      url: response.url,
    };
    console.log(
      `logging http details for debugging: ${JSON.stringify(httpErrorInfo)}`
    );

    let errorMessage = translateStatusToErrorMessage(
      httpErrorInfo.status
    );
    throw new Error(errorMessage);
  }
}
export function parseJSON(response:any) {
  return response.json();
}
