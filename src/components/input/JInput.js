import React from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Stack,
  InputGroup,
} from "@chakra-ui/react";

export default function JInput({
  name,
  type,
  placeholder,
  onChange,
  value,
  id,
  ...props
}) {
  const isError = value === "";
  return (
    <FormControl>
      <InputGroup border-color="{null}">
        <Input
          isRequired
          variant="flushed"
          id={id}
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        {isError ? (
          <></>
        ) : (
          <FormErrorMessage>{placeholder} is required.</FormErrorMessage>
        )}
      </InputGroup>
    </FormControl>
  );
}
