function CreateGroupStepFour() {
  return (
    <div className="p-4 flex flex-col gap-2">
      <h4 className="font-medium text-xl text-black">
        Upload Group profile photo
      </h4>
      <div className="flex flex-col sm:flex-row items-center gap-4 py-2">
        <img
          className="h-36 w-36 rounded-full"
          src="/assets/images/step-four.png"
          alt="step four"
        />
        <p>
          Upload an image to use as a profile photo for this group. The image
          will be shown on the main group page, and in search results. Select an
          image To skip the group profile photo upload process, hit the
          &#34;Next Step&#34; button.
        </p>
      </div>

      <div className="w-full h-40 flex items-center justify-center flex-col gap-2 border-dashed border-2 border-stone-300 bg-stone-50 rounded-lg">
        <p>Drop your file here</p>
        <input type="file" />
      </div>
    </div>
  );
}

export default CreateGroupStepFour;
