import {Header, Grid, Icon} from 'semantic-ui-react'
import React from 'react'

const Divider = (props) => (
	<Grid.Row id = "GridRows" columns = {2} style = {{height : '130px', marginTop : "20px"}} divided>
		<Grid.Column width={8}></Grid.Column>
		<Grid.Column width={8}></Grid.Column>
	</Grid.Row>
)

export default Divider