import { useState } from "react";

export const InputField = () => {
  const [value, setValue] = useState("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  return <input value={value} onChange={handleChange} />;
};
