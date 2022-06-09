import { axiosClient } from "@/Utils/Http/AxiosClient";

export const LessonsService = {
  getAllLessons: async () => {
    return axiosClient.get("http://localhost:4000/api/v1/lessons");
  },
};


