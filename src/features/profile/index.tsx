import React, { useEffect, useState } from "react";
import { axiosInstance } from "../../lib/axios";
import LoadingElement from "../../views/components/LoadingElement";

export const ProfilePage: React.FC = () => {
  const [loaded, setLoaded] = useState<boolean>(false);
  const [image, setImage] = useState<Blob>();
  const [fileToUpload, setFileToUpload] = useState<Blob>(new Blob());

  useEffect(() => {
    const getProfileImage = async () => {
      const { data } = await axiosInstance.get<Blob>("/profile");
      setImage(data);
      setLoaded(true);
    };
    getProfileImage();
  }, []);

  return (
    <div>
      {!loaded ? (
        <LoadingElement />
      ) : image ? (
        <div>
          <h3>Your profile image</h3>
          <img
            src={`data:image/jpeg;base64,${image}`}
            width={150}
            height={150}
            alt="tst"
          ></img>
        </div>
      ) : (
        <div>
          <h3>upload image</h3>
          <input
            type="file"
            onChange={(event) =>
              setFileToUpload(
                event.target.files != null ? event.target.files[0] : new Blob()
              )
            }
          />
          <button
            onClick={() => {
                const formData = new FormData();
                formData.append("image", fileToUpload);

                axiosInstance.put(
                    "/profile",
                    formData,
                    {
                      headers: {
                        "Content-Type": "multipart/form-data",
                      },
                    }
                  )
                }
            }
          >
            Send file
          </button>
        </div>
      )}
    </div>
  );
};
