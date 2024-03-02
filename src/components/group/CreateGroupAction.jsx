import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

function CreateGroupAction({ stepIndex, onChangeStepIndex }) {
  const navigate = useNavigate();
  return (
    <div className="flex gap-2 items-center px-4 ml-auto">
      {stepIndex > 1 && (
        <Button onClick={() => onChangeStepIndex(0)}>Previous step</Button>
      )}
      <Button
        className="bg-teal-400 hover:bg-teal-500 text-white block"
        onClick={() => {
          if (stepIndex === 6) return navigate("/groups");
          return onChangeStepIndex(1);
        }}
      >
        {stepIndex === 6 ? "Finish" : "Continue"}
      </Button>
    </div>
  );
}

export default CreateGroupAction;
