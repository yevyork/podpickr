import React from "react";
import { Input } from "../shared/Input";
import "../shared/styles/PodForm.css";

const PodForm = props => {
  const { onChange, onSubmit } = props;
  const { name, type, intensity, caffeine, imgurl } = props.formData;
  return (
    <div className="form-container">
        <p className = 'form-instructions'>Please fill out the following fields:</p>
      <form className="form" onSubmit={e => onSubmit(e)}>
        <Input
          name="name"
          value={name}
          required={true}
          placeholder="Pod Name"
          onChange={e => onChange(e)}
        />
        <Input
          name="type"
          value={type}
          required={true}
          placeholder="Pod Type"
          onChange={e => onChange(e)}
        />
        <Input
          name="intensity"
          value={intensity}
          required={true}
          placeholder="Pod Intensity"
          onChange={e => onChange(e)}
        />
        <Input
          name="caffeine"
          value={caffeine}
          required={true}
          placeholder="Caffeine(mg)"
          onChange={e => onChange(e)}
        />
        <Input
          name="imgurl"
          value={imgurl}
          required={true}
          placeholder="Link Pod Image"
          onChange={e => onChange(e)}
        />
        <br></br>
        <br></br>
        <br></br>
        <button className="submit">Add Pod</button>
      </form>
    </div>
  );
};

export default PodForm;
