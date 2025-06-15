```javascript

export const SampleService = {
  get: async () => {
    const response = await client.get<GETAnyResponse>("/---");
    return response.data.data;
  },
  post: async (data: Type) => {
    const response = await client.post<POSTAnyResponse>("---", data);
    return response.data; // DefaultResponse 포함
  },
  put: async (data: Type) => {
    const response = await client.put<PUTAnyResponse>("---", data);
    return response.data; // DefaultResponse 포함
  },
  delete: async () => {
    const response = await client.delete<POSTAnyResponse>("---");
    return response.data; // DefaultResponse 포함
  },
};
```
