import { UploadApiResponse } from "cloudinary";

export interface IImageFile {
  path: string;
  fieldname: string;
  originalname: string;
  encoding: string;
  mimetype: string;
  size: number;
}

export interface Iconfig {
  cloudinary_cloud_name: string;
  cloudinary_api_key: string;
  cloudinary_api_secret: string;
}

export interface IUploadedResponse {
  singleImageRes: UploadApiResponse;
  otherImagesRes: UploadApiResponse[];
}
