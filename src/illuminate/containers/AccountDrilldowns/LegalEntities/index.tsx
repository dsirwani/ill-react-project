import React,
{ useEffect }
	from 'react';
import {
	Paper,
	Button,
	TableContainer,
	TableHead,
	TableRow,
	TableCell,
	Divider,
	Grid,
	Typography,
	Table
} from '@material-ui/core';
import clsx from 'clsx';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from "react-router-dom";
import { RootState } from '../../../../utils/injectReducer';
import { LegalEntitiesState } from './type';
import { legalEntitiesActionCreator } from '../../../../utils/configureActionCreators';
import { useI18n } from '../../../../hooks/useI18n';
import Loader from '../../../components/Loader';
import Error from '../../../components/Error';
import OwnershipHierarchy from './ownershipHierarchy'
import { useStyles } from './style';

interface LegalEntitiesProps {
}

const LegalEntities = (props: LegalEntitiesProps) => {
	const classes = useStyles();
	const i18n = useI18n();

	const { accountId } = useParams();

	const dispatch = useDispatch();
	const { loading, error, data, errorMessage }: LegalEntitiesState = useSelector((state: RootState) => state.legalEntitiesData?.LEIData);

	useEffect((): void => {
		dispatch(legalEntitiesActionCreator.legalEntitiesRequest({ account_id: accountId }));
	}, []);

	return (
		<div className={classes.root}>
			<>
				{loading ? <Loader /> : null}
				{data &&
					<React.Fragment>
						<Grid
							className={clsx(classes.root)}
							container
							spacing={4}
						>
							<Grid
								item
								lg={4}
								md={6}
								xl={3}
								xs={12}
							>
								<Table component={Paper} className={classes.paper}>
									<TableHead>
										<TableRow>
											<TableCell>
												<Typography variant='h5'>
													{i18n._('Legal Entity Info')}
												</Typography>
											</TableCell>
											<TableCell>
												<Button fullWidth variant="contained" color="primary" className={classes.themeButton}>
													{data.lei_data.lei_match_type + ' Match'}
												</Button>
											</TableCell>
										</TableRow>
									</TableHead>
									<TableRow>
										<TableCell>
											<Typography variant='h6'>
												LEI
											</Typography>
										</TableCell>
										<TableCell>
											<Typography variant='body2'>
												{data.lei_data.lei_number}
											</Typography>
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell>
											<Typography variant='h6'>
												Legal Name
											</Typography>
										</TableCell>

										<TableCell>
											<Typography variant='body2'>
												{data.lei_data.company_name}
											</Typography>
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell>
											<Typography variant='h6'>
												{i18n._('Alias')}
											</Typography>
										</TableCell>
										<TableCell>
											<Typography variant='body2'>
												{data.lei_data.alias ? data.lei_data.alias : 'None'}
											</Typography>
										</TableCell>
									</TableRow>
								</Table>
							</Grid>
							<Grid
								item
								lg={4}
								md={6}
								xl={3}
								xs={12}
							>
								<TableContainer component={Paper} className={classes.paper}>
									<TableHead>
										<TableRow>
											<Typography variant='h5' className={classes.headingFont}>
												{i18n._('Legal Address')}
											</Typography>
										</TableRow>

									</TableHead>
									<Divider />

									<TableRow>
										<TableCell>
											<Typography variant='h6'>
												Address 1
											</Typography>
										</TableCell>
										<TableCell>
											<Typography variant='body2'>
												{data.lei_data.legal_address}
											</Typography>
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell>
											<Typography variant='h6'>
												Address 2
											</Typography>
										</TableCell>
										<TableCell>
											<Typography variant='body2'>
											
											</Typography>
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell>
											<Typography variant='h6'>
												State/Region
											</Typography>
										</TableCell>
										<TableCell>
											<Typography variant='body2'>
											
											</Typography>
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell>
											<Typography variant='h6'>
												Country
											</Typography>
										</TableCell>
										<TableCell>
											<Typography variant='body2'>
												{data.lei_data.legal_address_country}
											</Typography>
										</TableCell>

									</TableRow>
								</TableContainer>
							</Grid>
							<Grid
								item
								lg={4}
								md={6}
								xl={3}
								xs={12}
							>
								<TableContainer component={Paper} className={classes.paper}>
									<TableHead>
										<TableRow>
											<Typography variant='h5' className={classes.headingFont}>
												{i18n._('	Company Headquarters')}
											</Typography>
										</TableRow>
									</TableHead>
									<Divider />
									<TableRow>
										<TableCell>
											<Typography variant='h6'>
												Address 1
											</Typography>
										</TableCell>
										<TableCell>
											<Typography variant='body2'>
												{data.lei_data.head_quarters_address}
											</Typography>
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell>
											<Typography variant='h6'>
												Address 2
											</Typography>
										</TableCell>
										<TableCell>
											<Typography variant='body2'>
												
											</Typography>
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell>
											<Typography variant='h6'>
												State/Region
											</Typography>
										</TableCell>
										<TableCell>
											<Typography variant='body2'>
										
											</Typography>
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell>
											<Typography variant='h6'>
												Country
											</Typography>
										</TableCell>
										<TableCell>
											<Typography variant='body2'>
												{data.lei_data.head_quarters_country}
											</Typography>
										</TableCell>
									</TableRow>
								</TableContainer>
							</Grid>
							<Grid
								item
								lg={4}
								md={6}
								xl={3}
								xs={12}
							>
								<TableContainer component={Paper} className={classes.paper}>
									<OwnershipHierarchy data={data.lei_hierarchy}
										companyName={data.lei_data.company_name}
									/>
								</TableContainer>
							</Grid>
						</Grid>
					</React.Fragment>
				}
				{error ? <Error errorMessage={errorMessage} /> : null}
			</>

		</div>
	);
};

export default LegalEntities;