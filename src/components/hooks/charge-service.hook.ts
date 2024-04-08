import { EResponseCodes } from "../enumerate/api.enum";

import { ApiResponse } from "../utils/api-response";
import useCrudService from "./crud-service.hook";

export function useChargeService() {
  const baseURL: string = import.meta.env.VITE_BAKCEN_URL;
  const authUrl: string = "/api/v1";

  const { get, post} = useCrudService(baseURL);

  async function createAccount(data: any): Promise<any> {
    try {
      const endpoint: string = `/client/register`;
      return await post(`${authUrl}${endpoint}`, data);
    } catch (error) {
      return new ApiResponse({}, EResponseCodes.FAIL, "Error no controlado");
    }
  }

  async function rechargeAccount(data: any): Promise<any> {
    try {
      const endpoint: string = `/wallet/recharge`;
      return await post(`${authUrl}${endpoint}`, data);
    } catch (error) {
      return new ApiResponse({}, EResponseCodes.FAIL, "Error no controlado");
    }
  }

  async function viewBalance(cell: string, document: string): Promise<any> {
    try {
      const endpoint: string = `/wallet/balance`;
      return await get(`${authUrl}${endpoint}`, { cell, document });
    } catch (error) {
      return new ApiResponse({}, EResponseCodes.FAIL, "Error no controlado");
    }
  }

  return {
    createAccount,
    rechargeAccount,
    viewBalance,
  };
}

export default useChargeService;
