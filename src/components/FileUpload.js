import { useState } from 'react';
import styles from './FileUpload.module.scss';

const readFileContent = (file) => {
  return new Promise((resolve, reject) => {
    const fr = new FileReader();
    fr.onloadend = () => {
      resolve(fr.result.split('\r\n').filter((line) => line));
    };
    fr.onerror = () => {
      reject('There was an error reading the file');
    };
    fr.readAsText(file);
  });
};

const FileUpload = () => {
  const [files, setFiles] = useState([]);

  const handleChange = async (e) => {
    const inputFiles = [...e.target.files];

    try {
      const fileContent = await Promise.all(
        Object.values(inputFiles).map(readFileContent)
      );

      const filesArray = inputFiles.map((file, index) => ({
        name: file.name,
        lineText: fileContent[index],
      }));

      setFiles(filesArray);
    } catch (error) {
      console.log(error);
      // setError(error);
    }
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
      {files && (
        <div className={styles.filePreview}>
          <p>Preview:</p>
          {files.map((file, index) => {
            const preview = file.lineText[0].slice(0, 25);
            return (
              <p key={file.name}>
                <span>File {index} preview: </span>
                {preview}...
              </p>
            );
          })}
        </div>
      )}
      {/* {errors.file && <span>This field is required</span>} */}
    </div>
  );
};

export default FileUpload;
