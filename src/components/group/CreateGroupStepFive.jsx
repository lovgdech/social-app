function CreateGroupStepFive() {
  return (
    <div className="p-4 flex flex-col gap-2">
      <h4 className="font-medium text-xl text-black">Upload Cover Image</h4>
      <div className="w-full min-h-40 rounded-lg overflow-hidden bg-stone-50 border">
        {/* <img
          className="w-full h-auto object-contain"
          src="/assets/images/step-four.png"
          alt="step four"
        /> */}
      </div>
      <p>The Cover Image will be used to customize the header of your group.</p>

      <div className="w-full h-40 flex items-center justify-center flex-col gap-2 border-dashed border-2 border-stone-300 bg-stone-50 rounded-lg">
        <p>Drop your file here</p>
        <input type="file" />
      </div>

      <div className="w-full py-2 px-4 bg-teal-500 text-white">
        <p>
          For better results, make sure to upload an image that is larger than
          1300px wide, and 225px tall.
        </p>
      </div>
    </div>
  );
}

export default CreateGroupStepFive;
