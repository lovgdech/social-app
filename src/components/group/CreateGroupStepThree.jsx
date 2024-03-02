function CreateGroupStepThree() {
  return (
    <div className="p-4 flex flex-col gap-2">
      <h4 className="font-medium text-xl text-black">Group Forum</h4>
      <p className="font-medium text-base text-black">
        Question: Create a discussion forum to allow members of this group to
        communicate in a structured, bulletin-board style fashion?
      </p>
      <div className="pl-4 flex gap-2 items-center">
        <input type="checkbox" id="forum" name="forum" />
        <label className="font-medium" htmlFor="forum">
          Yes. I want this group to have a forum.
        </label>
      </div>
    </div>
  );
}

export default CreateGroupStepThree;
