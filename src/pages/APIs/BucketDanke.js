import axios from "axios";

export const getImagesFromBucket = async () => {
  try {
    const response = await axios.get(
      "https://firebasestorage.googleapis.com/v0/b/danke-eventos.appspot.com/o/"
    );
    return response.data.items;
  } catch (error) {
    console.log(error);
    return null;
  }
};
