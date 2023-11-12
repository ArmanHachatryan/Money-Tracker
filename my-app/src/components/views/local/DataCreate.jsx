import React, { useState } from "react";
import css from "../../../styles/form.css";
import axios from "axios";

const defaultFormData = {
  userId: "",
  type: "",
  price: 0,
};

const { FormContainer, Button, Input, H1 } = css;

const DataCreate = (props) => {
  const { action } = props;

  const [formData, setFormData] = useState(defaultFormData);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    var jsonData = sessionStorage.getItem("myAccessData");
    var current_data = JSON.parse(jsonData);

    formData.userId = current_data.user_id;

    try {
      await axios.post(
        "https://localhost:44357/api/Home/createExpense",
        formData
      );

      console.log("success");
      setFormData(defaultFormData);
      action();
    } catch (error) {
      console.log("error");
    }
  };

  return (
    <>
      <FormContainer>
        <H1>Ввод расходов</H1>
        <Input
          value={formData.price}
          placeholder="сумма"
          type={"number"}
          id={"price"}
          onChange={onChange}
        />
        <Button onClick={onSubmit}>Сохранить</Button>
      </FormContainer>
    </>
  );
};

export default DataCreate;
