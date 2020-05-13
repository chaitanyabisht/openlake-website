import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {
    TextField, 
    Box, 
    InputLabel, 
    MenuItem, 
    FormHelperText,
    FormControl,
    Select,
    Grid,
    Button,
 } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  item: {

  }
}));

export default function SimpleExpansionPanel() {
  const formClasses = useStyles();
  const [role, setRole] = React.useState('');
  const handleChange = (event) => {
    setRole(event.target.value);
  };
  return (
    <div className={formClasses.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={formClasses.heading}>Working on an open source project ? We'd love to know more !</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
            <Grid
            container
            direction="row"
            justify="space-evenly"
            alignItems="center"
            className={formClasses.title}
            >
                <Grid item className={formClasses.item}>
                <FormControl >
                <TextField id="standard-basic" label="Your Name" /> <br/>
                <FormHelperText>Required</FormHelperText>
                </FormControl>
                </Grid>
                <Grid item className={formClasses.item}>
                <FormControl >
                <TextField id="standard-basic" label="Contact Number" /> <br/>
                <FormHelperText>Required</FormHelperText>
                </FormControl>
                </Grid>
                <Grid item>
                <FormControl >
                <TextField id="standard-basic" label="Project Name" /> <br/>
                <FormHelperText>Required</FormHelperText>
                </FormControl>
                </Grid>
                <Grid item>
                <FormControl >
                <TextField id="standard-basic" label="Tell us about project" /> <br/>
                <FormHelperText>Required</FormHelperText>
                </FormControl>
                </Grid>
                <Grid item>
                <FormControl variant="outlined" className={formClasses.formControl}>
                    <InputLabel id="demo-simple-select-outlined-label">Role</InputLabel>
                        <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            value={role}
                            onChange={handleChange}
                            label="Role"
                            >
                        <MenuItem value="Contributor">Contributor</MenuItem>
                        <MenuItem value="Founder">Founder</MenuItem>
                        </Select>
                    <FormHelperText>Required</FormHelperText>
                </FormControl>
                </Grid>
                <Grid item>
                <FormControl >
                <TextField id="standard-basic" label="Link to the Project" /> <br/>
                <FormHelperText>Required</FormHelperText>
                </FormControl>
                </Grid>
                <Grid item>
                <FormControl >
                <TextField id="standard-basic" label="Tech Stack" /> <br/>
                <FormHelperText>Required</FormHelperText>
                </FormControl>
                </Grid>
                <Grid>
                <Button variant="contained" color="primary">
                    Submit
                </Button>
                </Grid> 
            </Grid>
        </ExpansionPanelDetails>
      </ExpansionPanel>
  
    </div>
  );
}
