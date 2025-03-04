import {
    FormItem,
    FormControl,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form";
  import { Input } from "@/components/ui/input";
  import React from "react";
  
  type InputFieldProps = {
    title?: string;
    field: {
      value: string | number;
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    };
    placeholder: string;
    type: string;
  };
  
  const FormInputField: React.FC<InputFieldProps> = ({
    title,
    field,
    placeholder,
    type,
  }) => {
  
    return (
      <FormItem>
        {title ? <FormLabel>{title}</FormLabel> : null}
        <FormControl>
          <Input
            type={type}
            placeholder={placeholder}
            value={field.value}
            onChange={field.onChange}
          />
        </FormControl>
        <FormMessage />
      </FormItem>
    );
  };
  
  export default FormInputField;