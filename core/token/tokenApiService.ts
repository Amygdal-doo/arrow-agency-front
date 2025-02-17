import { apiService } from "../services/apiService";

class TokenApiService {
  async refreshToken(): Promise<any> {
    return apiService.responseHandler(
      await apiService.get<any>(`auth/refresh`)
    );
  }
}

export const tokenApiService = new TokenApiService();
