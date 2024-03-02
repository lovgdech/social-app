import { Button } from "@/components/ui/button";

function CreateGroupAction({ stepIndex, onChangeStepIndex }) {
  return (
    <div className="flex gap-2 items-center px-4 ml-auto">
      {stepIndex > 1 && (
        <Button onClick={() => onChangeStepIndex(0)}>Previous step</Button>
      )}
      <Button
        className="bg-teal-400 hover:bg-teal-500 text-white block"
        onClick={() => onChangeStepIndex(1)}
      >
        {stepIndex === 6 ? "Finish" : "Continue"}
      </Button>
    </div>
  );
}

export default CreateGroupAction;
