import React, { useState } from "react";
import css from "../../../styles/form.css";
import axios from "axios";

const defaultFormData = {
  userId: "",
  type: "",
  price: 0,
};

const { FormContainer, Button, Input, H1, Span } = css;

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
        formData,
        {
          headers: {
            Accept: "application/json",
            Authorization: "Bearer " + current_data.access_token,
          },
        }
      );

      console.log("DataCreate Success");
      setFormData(defaultFormData);
      action();
    } catch (error) {
      console.log("DataCreate Error");
    }
  };

  return (
    <>
      <FormContainer>
        <H1>Ввод расходов</H1>
        <Span>Еда, Транспорт, Бытовые расходы, Связь, Прочее</Span>
        <Input
          value={formData.type}
          placeholder="Введите тип расхода (например: Еда)"
          type={"text"}
          id={"type"}
          onChange={onChange}
        />
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
