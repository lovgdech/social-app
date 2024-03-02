function CreateGroupStepTwo() {
  return (
    <div className="p-4 flex flex-col gap-2">
      <h4 className="font-medium text-xl text-black">Select Group Settings</h4>
      <p className="font-medium text-base text-black">
        Question 1. Privacy Options
      </p>
      <div className="pl-4">
        <div className="flex gap-2 items-start">
          <input
            className="mt-2"
            type="radio"
            id="option1"
            name="privacy"
            defaultChecked
          />
          <div className="flex flex-col">
            <label
              className="font-medium text-base text-black"
              htmlFor="option1"
            >
              This is a public group
            </label>
            <ul className="list-disc pl-4">
              <li className="text-sm">Any site member can join this group.</li>
              <li className="text-sm">
                This group will be listed in the groups directory and in search
                results.
              </li>
              <li className="text-sm">
                Group content and activity will be visible to any site member.
              </li>
            </ul>
          </div>
        </div>
        <div className="flex gap-2 items-start">
          <input className="mt-2" type="radio" id="option2" name="privacy" />
          <div className="flex flex-col">
            <label
              className="font-medium text-base text-black"
              htmlFor="option2"
            >
              This is a private group
            </label>
            <ul className="list-disc pl-4">
              <li className="text-sm">
                Only people who request membership and are accepted can join the
                group.
              </li>
              <li className="text-sm">
                This group will be listed in the groups directory and in search
                results.
              </li>
              <li className="text-sm">
                Group content and activity will only be visible to members of
                the group.
              </li>
            </ul>
          </div>
        </div>
        <div className="flex gap-2 items-start">
          <input className="mt-2" type="radio" id="option3" name="privacy" />
          <div className="flex flex-col">
            <label
              className="font-medium text-base text-black"
              htmlFor="option3"
            >
              This is a hidden group
            </label>
            <ul className="list-disc pl-4">
              <li className="text-sm">
                Only people who are invited can join the group.
              </li>
              <li className="text-sm">
                This group will not be listed in the groups directory or search
                results.
              </li>
              <li className="text-sm">
                Group content and activity will only be visible to members of
                the group.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p className="font-medium text-base text-black">
        Question 2. Select the types this group should be a part of.
      </p>

      <div className="pl-4 flex gap-2 items-center">
        <input type="checkbox" id="groupType" name="groupType" />
        <label className="font-medium" htmlFor="groupType">
          Community groups
        </label>
      </div>

      <p className="font-medium text-base text-black">
        Question 3. Which members of this group are allowed to invite others?
      </p>

      <div className="pl-4">
        <div className="flex gap-2 items-start">
          <input
            className="mt-2"
            type="radio"
            id="option21"
            name="members"
            defaultChecked
          />
          <p className="flex flex-col">
            <label
              className="font-medium text-base text-black"
              htmlFor="option21"
            >
              All group members
            </label>
          </p>
        </div>
        <div className="flex gap-2 items-start">
          <input className="mt-2" type="radio" id="option22" name="members" />
          <p className="flex flex-col">
            <label
              className="font-medium text-base text-black"
              htmlFor="option22"
            >
              Group admins and mods only
            </label>
          </p>
        </div>
        <div className="flex gap-2 items-start">
          <input className="mt-2" type="radio" id="option23" name="members" />
          <p className="flex flex-col">
            <label
              className="font-medium text-base text-black"
              htmlFor="option23"
            >
              Group admins only
            </label>
          </p>
        </div>
      </div>
    </div>
  );
}

export default CreateGroupStepTwo;
