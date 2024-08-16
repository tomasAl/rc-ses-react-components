import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'

// Custom style for the Paper component used by the Menu
const customMenuPaperStyles = {
  // marginTop: '-3px', // Moves the menu up to cover the Select input by 3px
  // boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.5)', // Custom blurred shadow
}

function CustomSelect({ label, value, onChange, options }) {
  return (
    <FormControl fullWidth>
      <InputLabel>{label}</InputLabel>
      <Select
        value={value}
        label={label}
        onChange={onChange}
        MenuProps={{
          PaperProps: {
            style: customMenuPaperStyles,
          },
        }}
      >
        {options.map((option, index) => (
          <MenuItem key={index} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

export default CustomSelect
