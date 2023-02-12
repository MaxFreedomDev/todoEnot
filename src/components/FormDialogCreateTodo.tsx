import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import isToday from "dayjs/plugin/isToday";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import {
  Button,
  ButtonGroup,
  Dialog,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
  Box,
} from "@mui/material";
import { DialogComponentProps, ITodo, TodoKind } from "types";
import { colorsKind } from "utils/constants";
import useTodoContext from "utils/hooks/useTodoContext";
import CustomDialogTitle from "./CustomDialogTitle";

dayjs.extend(isToday);

const kinds = [TodoKind.Light, TodoKind.Middle, TodoKind.High];

const format = "MM/DD/YYYY";

const today = dayjs().hour(0).minute(0).second(0);

const defaultValues: ITodo = {
  id: 0,
  title: "",
  description: "",
  kind: TodoKind.Light,
  status: false,
  date: today.add(1, "day").format(format),
};

const FormDialogCreateTodo: DialogComponentProps = ({ isOpen, setIsOpen }) => {
  const {
    state: { selectedTodo },
    dispatch,
  } = useTodoContext();
  const [formValues, setFormValues] = useState<ITodo>(defaultValues);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (selectedTodo) {
      setIsOpen();
      setFormValues(selectedTodo);
    }
  }, [selectedTodo, setIsOpen]);

  const onClose = () => {
    setFormValues(defaultValues);
    setError(false);
    dispatch({ type: "SELECTED_TODO", payload: null });
    setIsOpen();
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setFormValues((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const onSave = () => {
    for (const key in formValues) {
      if (key === "title" && !formValues[key]) {
        return setError(true);
      }
    }
    const todo: ITodo = {
      ...formValues,
      id: +new Date(),
    };

    dispatch({ type: "SAVE_TODO", payload: todo });
    onClose();
  };

  const onEdit = () => {
    for (const key in formValues) {
      if (key === "title" && !formValues[key]) {
        return setError(true);
      }
    }

    dispatch({ type: "EDIT_TODO", payload: formValues });
    onClose();
  };

  const onRemove = () => {
    dispatch({ type: "REMOVE_TODO", payload: formValues.id });
    onClose();
  };

  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    switch (e.currentTarget.name as "save" | "cancel" | "edit" | "remove") {
      case "save":
        return onSave();
      case "cancel":
        return onClose();
      case "edit":
        return onEdit();
      case "remove":
        return onRemove();
      default:
        return;
    }
  };

  const onChangeDate = (newValue: Date | null) => {
    const newVal = dayjs(newValue).hour(0).minute(0).second(0);
    if (
      !newValue ||
      (!newVal.isToday() && newVal < dayjs(defaultValues.date))
    ) {
      return;
    }
    setFormValues((prev) => ({
      ...prev,
      date: dayjs(newValue).format(format),
    }));
  };

  return (
    <Dialog open={isOpen} onClose={onClose} sx={{ top: "10%", bottom: "auto" }}>
      <CustomDialogTitle onClose={onClose} variant="h4">
        {selectedTodo ? "Edit Todo" : "Add Todo"}
      </CustomDialogTitle>
      <Box display="flex" flexDirection="column" padding={4} rowGap={2}>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          rowGap={2}
        >
          <DatePicker
            label="Date"
            value={formValues.date}
            disablePast
            onChange={onChangeDate}
            renderInput={(params) => <TextField {...params} />}
          />
          <TextField
            id="title"
            name="title"
            label="Title"
            type="text"
            value={formValues?.title}
            onChange={handleInputChange}
            error={error}
            helperText={error && !formValues.title && "field cannot be empty"}
          />
          <TextField
            id="description"
            name="description"
            label="Description"
            type="text"
            value={formValues.description}
            onChange={handleInputChange}
            multiline
            rows={3}
          />
          <FormControl>
            <FormLabel>Kind</FormLabel>
            <RadioGroup
              name="kind"
              value={formValues.kind}
              onChange={handleInputChange}
              row
            >
              {kinds.map((kind) => (
                <FormControlLabel
                  key={kind}
                  value={kind}
                  control={<Radio size="small" />}
                  label={kind.toUpperCase()}
                  sx={{
                    color: colorsKind[kind],
                  }}
                />
              ))}
            </RadioGroup>
          </FormControl>
        </Box>
        <ButtonGroup
          variant="contained"
          aria-label="form button group"
          sx={{
            width: "max-content",
            marginLeft: "auto",
          }}
        >
          {selectedTodo ? (
            <>
              <Button name="edit" onClick={onClick}>
                Edit
              </Button>
              <Button name="remove" color="error" onClick={onClick}>
                Remove
              </Button>
            </>
          ) : (
            <>
              <Button name="save" onClick={onClick}>
                Save
              </Button>
              <Button name="cancel" color="error" onClick={onClick}>
                Cancel
              </Button>
            </>
          )}
        </ButtonGroup>
      </Box>
    </Dialog>
  );
};

export default FormDialogCreateTodo;
