import { sampleClient as client } from "@/services/axios";

const controller = "/sample";

export const SampleService = {
  findAll: async () => {
    const response = await client.get<string>(`${controller}`);
    return response.data;
  },
  find: async (params: any) => {
    const response = await client.get<string>(`${controller}`, { params });
    return response.data;
  },

  post: async (body: any) => {
    const response = await client.post<string>(`${controller}`, body);
    return response.data;
  },
  put: async (body: any) => {
    const response = await client.put<string>(`${controller}`, body);
    return response.data;
  },
  delete: async (body: any) => {
    const response = await client.delete<string>(`${controller}`, body);
    return response.data;
  },
};
