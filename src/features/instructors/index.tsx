import React, { useEffect, useState } from "react";
import { axiosInstance } from "../../lib/axios";
import { Instructor } from "../../types";
import LoadingElement from "../../views/components/LoadingElement";
import InstructorAvatar from "./components/InstructorAvatar";

export const InstructorsPage: React.FC = () => {
  const [loaded, setLoaded] = useState<boolean>(false);
  const [instructors, setInstructors] = useState<Instructor[]>([]);

  useEffect(() => {
    const getInstructors = async () => {
      const { data } = await axiosInstance.get<Instructor[]>("/instructors");
      setInstructors(data);
      setLoaded(true);
    };
    getInstructors();
  }, []);

  return (
    <div>
      {!loaded ? (
        <LoadingElement />
      ) : (
        <div>
          <h2>Nasi instruktorzy:</h2>
          <div style={{display: 'flex', justifyContent:'space-around'}}>
            {instructors.map((val) => (
              <InstructorAvatar key={"key_" + val.surname} {...val} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
