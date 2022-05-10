import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export function CheckboxesTags(props) {

  return (
    <Autocomplete
      disabled={props.disabled}
      multiple
      id="checkboxes-tags-demo"
      options={props.options}
      defaultValue={props.selectedOptions}
      disableCloseOnSelect
      getOptionLabel={(option) => option}
      renderOption={(props, option, { selected }) => (
        <li {...props}>
          <Checkbox
            icon={icon}
            checkedIcon={checkedIcon}
            style={{ marginRight: 8 }}
            checked={selected}
          />
          {option}
        </li>
      )}
      style={{ width: props.width, fullWidth : props.fullWidth}}
      onChange={props.onCheckBoxTagOnChange}
      renderInput={(params) => (
        <TextField {...params} label={props.label} placeholder={props.placeholder} />
      )}
    />
  );
}
