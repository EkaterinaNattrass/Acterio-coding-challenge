
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Search () {
    return (
        <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 2, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="outlined-basic" label="Outlined" variant="outlined" color='success' />
      </Box>
    )
}
