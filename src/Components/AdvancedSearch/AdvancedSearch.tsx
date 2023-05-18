import { Grid, Table, TextField, Typography, Box } from "@mui/material"
import {TableComponent} from "./TableComponent"
import ButtonReusable from "../Button/ButtonReusable"

const AdvancedSearch = () => {
  return (
<Grid>
  <ButtonReusable text="Return to List" hrefButton="/poke"/>
  <Grid item>
    <Grid item sx={{textAlign:'center'}}><Typography variant="h4">Advanced search</Typography></Grid>
    <Grid item>
    <Box
      display={'flex'}
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <Grid>
        <TextField
          label="Name"
          id="outlined-size-small"
          defaultValue=""
          size="small"
        />
      </Grid>
      <Grid>
        <TextField
          label="Weight"
          type="number"
          id="outlined-size-small"
          defaultValue=""
          size="small"
        />
      </Grid>
           
    </Box>
    </Grid>
  </Grid>
  <Grid item><TableComponent/></Grid>

</Grid>
  )
}
export default AdvancedSearch