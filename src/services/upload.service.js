import { getApiUrl } from "@tools/url.tool";
import axios, { service } from "@tools/axios.tool";

const UploadService = {
  uploadImage(imageFile) {
    const formData = new FormData();
    formData.append("image", imageFile, "image.jpg");
    return service(
      axios.post(getApiUrl("/uploads/image"), formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
    );
  },
  deleteFile(fileUrl) {
    return service(
      axios.delete(getApiUrl("/uploads"), {
        params: {
          file_url: fileUrl,
        },
      })
    );
  },
};

export default UploadService;
