import { useState } from 'react';
import styles from './FileUpload.module.scss';

const readFileContent = (file) => {
  return new Promise((resolve, reject) => {
    const fr = new FileReader();
    fr.onloadend = () => {
      resolve(fr.result.split('\r\n').filter(Boolean));
    };
    fr.onerror = () => {
      reject('There was an error reading the file');
    };
    fr.readAsText(file);
  });
};

const FileUpload = ({ label, register, required }) => {
  const [files, setFiles] = useState([]);
  const [collapsedPreview, setCollapsedPreview] = useState(false);

  const handleClick = () => {
    setCollapsedPreview(!collapsedPreview);
  };

  const handleChange = async (e) => {
    const inputFiles = [...e.target.files];

    try {
      const fileContent = await Promise.all(inputFiles.map(readFileContent));

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
    <section className={styles.fileContainer}>
      <label htmlFor="file">{label}</label>
      <input
        ref={register({ required })}
        type="file"
        name="uploadedFile"
        id="uploadedFile"
        accept=".pdf,.txt, image/*"
        onChange={handleChange}
        multiple
      />
      {files && (
        <div className={styles.filePreviewContainer}>
          {files.map((file, index) => {
            const preview = file.lineText[0].slice(0, 20) + '...';
            const full = file.lineText;
            return (
              <div key={file.name} className={styles.singleFilePreview}>
                <h4 className={styles.previewHeading}>
                  ({index + 1}) {file.name} preview:
                </h4>
                <p>{!collapsedPreview ? preview : full}</p>
                <button
                  className={styles.expandBtn}
                  onClick={handleClick}
                  type="button"
                >
                  {collapsedPreview ? 'Read less...' : 'Read more...'}
                </button>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
};

export default FileUpload;
