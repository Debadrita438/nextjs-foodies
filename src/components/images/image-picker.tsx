'use client';

import {ChangeEventHandler, useRef, useState} from 'react';
import Image from 'next/image';

import styles from './image-picker.module.css';

interface IImagePickerProps {
  label: string;
  inputName: string;
}

export default function ImagePicker(props: IImagePickerProps) {
  const [pickedImage, setPickedImage] = useState<string | ArrayBuffer | null>();

  const imageInputRef = useRef<HTMLInputElement>(null);

  const handlePickClick = () => {
    imageInputRef.current?.click();
  };

  const handleImageChange: ChangeEventHandler<HTMLInputElement> = event => {
    if (event.target.files != null) {
      const file = event.target.files[0];

      const fileReader = new FileReader();
      fileReader.onload = () => {
        setPickedImage(fileReader.result);
      };
      fileReader.readAsDataURL(file);
    } else {
      setPickedImage(null);
      return;
    }
  };

  return (
    <div className={styles.picker}>
      <label htmlFor={props.inputName}>{props.label}</label>
      <div className={styles.controls}>
        <div className={styles.preview}>
          {!pickedImage && <p>No image picked yet.</p>}
          {pickedImage && (
            <Image
              src={pickedImage as string}
              alt="The image selected by image picker"
              fill
            />
          )}
        </div>
        <input
          className={styles.input}
          type="file"
          id={props.inputName}
          accept="image/png, image/jpeg"
          name={props.inputName}
          ref={imageInputRef}
          onChange={handleImageChange}
          required
        />
        <button
          type={'button'}
          className={styles.button}
          onClick={handlePickClick}
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
}
