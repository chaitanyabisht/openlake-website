import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    TextField, 
    Box, 
    InputLabel, 
    MenuItem, 
    FormHelperText,
    FormControl,
    Select,
    ExpansionPanel,
    ExpansionPanelSummary,
    ExpansionPanelDetails,
    Typography,
    ExpandMoreIcon,
 } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        // width: '100%',
      },
    heading: {
        // fontSize: theme.typography.pxToRem(15),
        // fontWeight: theme.typography.fontWeightRegular,
      },
    formControl: {
        // margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        // marginTop: theme.spacing(2),
    },
});

function ProjectForm() {
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
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography className={formClasses.heading}>Are you working on Project? Let us know more: </Typography>
                </ExpansionPanelSummary>
                
                <ExpansionPanelDetails>
                    <div>
                        <TextField id="standard-basic" label="Your Name" /> <br/>
                        <TextField id="standard-basic" label="Project Name" /> <br/>
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
                        <TextField id="standard-basic" label="Link to the Project" /> <br/>
                        <TextField id="standard-basic" label="Tech Stack" /> <br/>
                    </div> 
                </ExpansionPanelDetails>
            </ExpansionPanel>
        </div>
    );
}

export default ProjectForm 