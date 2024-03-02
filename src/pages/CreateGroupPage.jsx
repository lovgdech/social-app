import { useState } from "react";

import CreateGroupStepOne from "../components/group/CreateGroupStepOne";
import CreateGroupStepTwo from "../components/group/CreateGroupStepTwo";
import CreateGroupAction from "../components/group/CreateGroupAction";
import StepStatus from "../components/group/StepStatus";
import CreateGroupStepThree from "../components/group/CreateGroupStepThree";
import CreateGroupStepFour from "../components/group/CreateGroupStepFour";
import CreateGroupStepFive from "../components/group/CreateGroupStepFive";
import CreateGroupStepSix from "../components/group/CreateGroupStepSix";

function CreateGroupPage() {
  const [stepIndex, setStepIndex] = useState(1);

  function handleStepIndex(status) {
    if (status === 1) {
      setStepIndex((prev) => prev + 1);
    } else setStepIndex((prev) => prev - 1);
  }
  return (
    <div className="w-full h-full mt-5 px-5 overflow-hidden overflow-y-auto pb-36 no-scrollbar">
      <div className="w-full flex flex-col gap-2 rounded-lg border border-stone-300  bg-white pb-4">
        <h3 className="text-center font-bold capitalize text-2xl p-4">
          Create a new group
        </h3>

        <StepStatus stepIndex={stepIndex} />

        {stepIndex === 1 && <CreateGroupStepOne />}
        {stepIndex === 2 && <CreateGroupStepTwo />}
        {stepIndex === 3 && <CreateGroupStepThree />}
        {stepIndex === 4 && <CreateGroupStepFour />}
        {stepIndex === 5 && <CreateGroupStepFive />}
        {stepIndex === 6 && <CreateGroupStepSix />}

        <CreateGroupAction
          stepIndex={stepIndex}
          onChangeStepIndex={handleStepIndex}
        />
      </div>
    </div>
  );
}

export default CreateGroupPage;
