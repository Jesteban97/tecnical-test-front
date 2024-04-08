import instanceApi from "../utils/api-instance";
import { ApiResponse } from "../utils/api-response";
import { EResponseCodes } from "../enumerate/api.enum";

function useCrudService(baseUrl: string) {
  
  let errorMessage = "Hubo un error al cominicarse con la api.";

  const get = async <T>(
    endpoint: string,
    params: Object = {}
  ): Promise<ApiResponse<T>> => {
    try {
      const api = instanceApi(baseUrl);
      return await api({
        method: "get",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        url: `${endpoint}`,
        params: params,
      });
    } catch (error: any) {
      return new ApiResponse(
        {} as T,
        EResponseCodes.FAIL,
        JSON.parse(error?.response?.request?.response)?.operation?.message ||
          errorMessage
      );
    }
  };

  const post = async <T>(
    endpoint: string,
    data: Object = {},
    params: Object = {}
  ): Promise<ApiResponse<T>> => {
    try {
      const api = instanceApi(baseUrl);
      return await api({
        method: "post",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        url: `${endpoint}`,
        params: params,
        data: data,
      });
    } catch (error: any) {
      return new ApiResponse(
        {} as T,
        EResponseCodes.FAIL,
        JSON.parse(error?.response?.request?.response)?.operation?.message ||
          errorMessage
      );
    }
  };

  const put = async <T>(
    endpoint: string,
    data: Object = {},
    params: Object = {}
  ): Promise<ApiResponse<T>> => {
    try {
      const api = instanceApi(baseUrl);
      return await api({
        method: "put",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        url: `${endpoint}`,
        params: params,
        data: data,
      });
    } catch (error: any) {
      return new ApiResponse(
        {} as T,
        EResponseCodes.FAIL,
        JSON.parse(error?.response?.request?.response)?.operation?.message ||
          errorMessage
      );
    }
  };

  const deleted = async <T>(
    endpoint: string,
    params: Object = {}
  ): Promise<ApiResponse<T>> => {
    try {
      const api = instanceApi(baseUrl);
      return await api({
        method: "delete",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        url: `${endpoint}`,
        params: params,
      });
    } catch (error: any) {
      return new ApiResponse(
        {} as T,
        EResponseCodes.FAIL,
        JSON.parse(error?.response?.request?.response)?.operation?.message ||
          errorMessage
      );
    }
  };

  return { post, get, put, deleted };
}
export default useCrudService;
