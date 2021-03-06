import React from 'react'
import {
    Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions,
    TextField, Fab, Grid
} from '@material-ui/core'
import { CheckCircle, Restore, Delete } from '@material-ui/icons'

import { OptionsContext } from '../options/OptionsProvider'

class ConfigurationFile extends React.Component {
    render() {              
        return (
            <OptionsContext.Consumer>
                {options => (<Dialog open={options.opt.showConfForm} onClose={options.showConfFile} scroll='body'>
                    <DialogTitle>Configuration settings</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Fill all fields required and save
                            </DialogContentText>
                        <Grid container spacing={4}>
                            <Grid item sm={12} lg={4} md={4}>
                                <TextField
                                    id='insertOp'
                                    value={options.opt.conffile.insertOp}
                                    onChange={options.changeConfFile}
                                    label='Insertion operator cost'
                                    type="number"
                                    fullWidth={true}
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid item sm={12} lg={4} md={4}>
                                <TextField
                                    id='deletingOp'
                                    value={options.opt.conffile.deletingOp}
                                    onChange={options.changeConfFile}
                                    label='Deleting operator cost'
                                    type="number"
                                    fullWidth={true}
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid item sm={12} lg={4} md={4}>
                                <TextField
                                    id='replaceOp'
                                    value={options.opt.conffile.replaceOp}
                                    onChange={options.changeConfFile}
                                    label='Replace operator cost'
                                    type="number"
                                    fullWidth={true}
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid item sm={12} lg={6} md={6}>
                                <TextField
                                    id='insertHair'
                                    value={options.opt.conffile.insertHair}
                                    onChange={options.changeConfFile}
                                    label='Insert airpin cost'
                                    type="number"
                                    fullWidth={true}
                                    variant="outlined"
                                />

                            </Grid>
                            <Grid item sm={12} lg={6} md={6}>
                                <TextField
                                    id='deleteHair'
                                    value={options.opt.conffile.deleteHair}
                                    onChange={options.changeConfFile}
                                    label='Delete airpin cost'
                                    type="number"
                                    fullWidth={true}
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid item sm={12} lg md>
                                <TextField
                                    id='crossingMism'
                                    value={options.opt.conffile.crossingMism}
                                    onChange={options.changeConfFile}
                                    label='Crossing mismatch cost'
                                    type="number"
                                    fullWidth={true}
                                    variant="outlined"
                                />
                            </Grid>
                        </Grid>
                    </DialogContent>
                    <DialogActions>
                        {options.opt.useconffile &&
                            <Fab onClick={options.changeOpts('useconffile')} color='secondary'>
                                <Delete />
                            </Fab>}
                        <Fab onClick={options.resetConfFile}>
                            <Restore />
                        </Fab>
                        <Fab onClick={options.changeOpts('useconffile')} color='secondary' disabled={options.opt.useconffile}  >
                            <CheckCircle />
                        </Fab>
                    </DialogActions>
                </Dialog>)}
            </OptionsContext.Consumer>
        )
    }
}
export default ConfigurationFile