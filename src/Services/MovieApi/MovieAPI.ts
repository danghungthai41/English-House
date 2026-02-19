import axiosClient from "@/apis/axiosClient";
import { ResponseData } from "@/interfaces/Global.type";
import { Banner } from "@/interfaces/movie";

const MovieAPI = {
  getBanners: () => {
    return axiosClient.get<ResponseData<Array<Banner>> | ResponseData<string>>(
      "QuanLyPhim/LayDanhSachBanner"
    );
  },
};
export default MovieAPI;
