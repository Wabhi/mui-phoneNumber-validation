import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import RootRef from "@material-ui/core/RootRef";
import Divider from "@material-ui/core/Divider";
import NativeSelect from "@material-ui/core/NativeSelect";
import withStyles from "@material-ui/core/styles/withStyles";
import MuiPhoneNumber from "material-ui-phone-number";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { boolean } from "yup/lib/locale";

const Step1Schema = Yup.object().shape({
  // name: yup.string().required("O campo nome é obrigatório"),
  // email: yup
  //   .string()
  //   .required("O campo email é obrigatório")
  //   .email("Formato de email inválido"),
  phone: Yup.string().required("Phone number is required!")
});

const Step1 = ({ formData, nextStep, formStepData }) => {
  const { register, handleSubmit, errors, control } = useForm({
    resolver: yupResolver(Step1Schema)
  });
  const onSubmit = async (data) => {
    console.log("submit", data);
  };

  return (
    <div data-aos="fade-up" id="house-form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="phone"
          control={control}
          defaultValue=""
          rules={{ required: true }}
          render={({ name, onChange, value, onBlur }) => (
            <MuiPhoneNumber
              name={name}
              value={value}
              onBlur={onBlur}
              onChange={onChange}
              id="contactPhoneNumber"
              defaultCountry={"pt"}
              style={{ width: "100%" }}
              label="Contacto telefónico"
              variant="outlined"
              margin="normal"
              error={errors.phone ? true : false}
            />
          )}
        />
        <Button type="submit" variant="contained" color="primary" size="large">
          Next
        </Button>
      </form>
    </div>
  );
};

export default Step1;
