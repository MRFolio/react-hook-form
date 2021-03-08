const FileUpload = () => {
  const handleChange = (e) => {
    const files = [...e.target.files];

    const fileList = Object.values(files);
    console.log(fileList);

    const fileNames = fileList.map((file) => {
      const split = file.name.split(' ');
      return split;
    });

    // const reader = new FileReader();
    // reader.onload = (e) => {
    //   console.log(reader);
    //   const csv = reader.result;
    //   console.log(csv);
    //   const lines = csv.split('\n');
    //   console.log(lines);
    // };
    // reader.readAsText(fileList[0]);
  };

  return (
    <div>
      <label htmlFor="file">Choose a file to upload: </label>
      <input
        // ref={register({ required: true })}
        type="file"
        name="uploadedFile"
        id="uploadedFile"
        accept=".pdf,.txt, image/*"
        onChange={handleChange}
        multiple
      />
      {/* {errors.file && <span>This field is required</span>} */}
    </div>
  );
};

export default FileUpload;
