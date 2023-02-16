import React, { useEffect, useState } from "react";
import { axiosInstance } from "../../lib/axios";
import { Plan, PlanDetails, PlanType } from "../../types";
import LoadingElement from "../../views/components/LoadingElement";
import PlanDetailsMenu from "../plans/PlansDetails";
import PlansMenu from "../plans/PlansMenu";

export const TrainingsPage: React.FC = () => {
  const [loaded, setLoaded] = useState<boolean>(false);
  const [trainings, setTrainings] = useState<Plan[]>([]);
  const [selectedTraining, setSelectedTraining] = useState<Number>();
  const [trainingDetails, setTrainingDetails] = useState<PlanDetails[]>([]);
  const handleMenuButtonClick = (id: Number) => {
    const getTrainingDetails = async (id: Number) => {
      const { data } = await axiosInstance.get<PlanDetails[]>(
        "/plans/" + id
      );
      setSelectedTraining(id);
      setTrainingDetails(data);
      localStorage.setItem("selected_training_id", id.toString());
    }
    getTrainingDetails(id);
  }

  useEffect(() => {
    const getTrainings = async () => {
      const { data } = await axiosInstance.get<Plan[]>(
        "/plans?type=" + PlanType.Training
      );
      setTrainings(data);
      setLoaded(true);
    };
    const reloadSelectedTraining = () => {
      let trainingId = localStorage.getItem("selected_training_id");
      if (trainingId !== null) {
        handleMenuButtonClick(Number(trainingId))
      }
    }
    getTrainings();
    reloadSelectedTraining();
  }, []);

  return (
    <div>
      <h2>Dostępne plany treningowe:</h2>
      {!loaded ? <LoadingElement /> : <PlansMenu plans={trainings} handleMenuButtonClick={handleMenuButtonClick}/>}
      {selectedTraining ? <PlanDetailsMenu planId={selectedTraining} plans={trainings} planDetails={trainingDetails}/>: null}
    </div>
  );
};
