import React from "react";
import { Instructor } from "../../../types";

export const InstructorAvatar: React.FunctionComponent<Instructor> = (
  instructor
) => {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <p>{instructor.name}&nbsp;</p>
        <p>{instructor.surname}</p>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img
          src={instructor.imageURL.toString()}
          alt="instructor_image"
          width={150}
          height={150}
        />
      </div>
      <div>
        <p>{instructor.description}</p>
      </div>
    </div>
  );
};

export default InstructorAvatar;
