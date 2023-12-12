import cloudinary, { UploadApiResponse } from 'cloudinary';
import { IImageFile, Iconfig, IUploadedResponse } from '../interface';

export const uploadToCloudinary = async (
    file: any,
    type: 'image' | 'video' | 'raw' | 'auto' | undefined,
    config: Iconfig,
    folderName?: string,
    transformation?: {
        crop: 'scale';
        quality: 'auto';
    },
    resourceId?: string
): Promise<UploadApiResponse> => {
    return new Promise(async (resolve, reject) => {
        cloudinary.v2.config({
            cloud_name: config.cloudinary_cloud_name,
            api_key: config.cloudinary_api_key,
            api_secret: config.cloudinary_api_secret
        });

        try {
            if (resourceId) {
                await cloudinary.v2.uploader.destroy(resourceId);
            }
            // if the image is an actual file
            const uploadedResponse = await cloudinary.v2.uploader.upload(file, {
                resource_type: type,
                folder: folderName || config.cloudinary_cloud_name,
                crop: transformation && transformation.crop ? transformation.crop : 'scale',
                quality: transformation && transformation.quality ? transformation.quality : 'auto'
            });
            resolve(uploadedResponse as UploadApiResponse);
        } catch (err) {
            reject(err);
        }
    });
};

export const uploadSingleOrMultiImagesToClodinary = async (
    files: IImageFile[],
    type: 'image' | 'video' | 'raw' | 'auto' | undefined,
    config: Iconfig,
    folderName?: string,
    transformation?: {
        crop: 'scale';
        quality: 'auto';
    },
    resourceId?: string
): Promise<IUploadedResponse | any> => {
    const [firstImage, ...others] = files;
    let singleImageRes: UploadApiResponse | any;
    let allImagesRes: UploadApiResponse[] | any;
    //upload the first Image as the main product image
    singleImageRes = await uploadToCloudinary(firstImage.path, type, config, folderName, transformation, resourceId);
    // console.log(singleImageRes, "singleImageRes");

    //upload other images
    if (files.length > 1) {
        allImagesRes = await Promise.all(
            [firstImage, ...others].map(async (file) => {
                return await uploadToCloudinary(file.path, type, config);
            })
        );

        // console.log(otherImagesRes, "otherImagesRes");
    }

    const finalRes = allImagesRes && allImagesRes.length > 0 ? { singleImageRes, allImagesRes } : { singleImageRes };

    return finalRes;
};
