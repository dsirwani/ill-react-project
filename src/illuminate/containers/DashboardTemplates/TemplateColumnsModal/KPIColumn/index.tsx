import React, { FC, Fragment, MutableRefObject, useEffect, useRef, useState } from 'react';
import { Divider, Fab, FormControl, FormGroup, FormHelperText, Grid, IconButton, InputLabel, MenuItem, Select, Typography } from '@material-ui/core';
import { useI18n } from '../../../../../hooks/useI18n';
import AddIcon from '@material-ui/icons/Add';
import { useStyles } from './style';
import useTemplateKPIColumns from '../../../../../hooks/useTemplateKPIColumns';
import { useDispatch, useSelector } from 'react-redux';
import { dashboardTemplatesActionCreator } from '../../../../../utils/configureActionCreators';
import { TemplatesKPIColumns } from '../../type';
import { RootState } from '../../../../../utils/injectReducer';
import CloseIcon from '@material-ui/icons/Close';
import { VARIABLE_TYPES } from '../../../../../constants';

interface IKPIColumn {}

const KPIColumn: FC<IKPIColumn> = (): JSX.Element => {
  const classes = useStyles();
  const i18n = useI18n();
  const { ifAdmin, templateToViewEditDuplicate } = useTemplateKPIColumns();
  const addColumnBtn = useRef() as MutableRefObject<HTMLDivElement>;
  const [scrollWidth, setScrollWidth] = useState(addColumnBtn?.current?.scrollWidth?? 0);

  const dispatch = useDispatch();

  const {
  //  loading,
  //  error,
    columns,
  //  errorMessage
  }: TemplatesKPIColumns = useSelector(
    (state: RootState) => state?.dashboardTemplatesData.templatesKPIColumns
  );

  useEffect(() => {
    if(addColumnBtn.current.scrollWidth){
      const prevScrollWidth = scrollWidth;
      const newScrollWidth = addColumnBtn?.current?.scrollWidth ?? 0;
      setScrollWidth(newScrollWidth);
      addColumnBtn.current.scrollLeft = addColumnBtn.current.scrollLeft + ( newScrollWidth - prevScrollWidth);
    }
  }, [columns.length]);
  
  const handleHeaderSelectionDrops = (e:  React.ChangeEvent<{ value: unknown}>, columnNo: number) => {
    const selectedValue = e.target.value as string;
      dispatch( dashboardTemplatesActionCreator.getTemplateColumnsRequest(selectedValue, 'kpi_dashboard', columnNo) );
  };

  const addTemplateColumn = (): void => {
    dispatch(dashboardTemplatesActionCreator.addKPITemplateColumn());
  }

  const removeKPIColumn = (column: any) => {
   dispatch(dashboardTemplatesActionCreator.deleteKPITemplateColumn(column));
  }

  const handleToplineSelectionDrops = (e:  React.ChangeEvent<{ value: unknown }>, columnNo: number, ddNo: number) => {
    const selectedValue = e.target.value as string;
      dispatch( dashboardTemplatesActionCreator.getTemplateColumnsDDUpdate(selectedValue, columnNo, ddNo) );
  };

  return (
    <Fragment>
      <FormGroup>
        <Grid container spacing = {1} className = {classes.containerWidth} ref = { addColumnBtn }>    
            {
              columns.map( (column: any, columnNo: number) => {
                return (
                  <Fragment key = {`col-${columnNo}`}>
                    <Grid item sm = {2} className = {classes.gridMinWidth}  key = {`column-${columnNo}`}> 
                      <Grid className = {classes.titleRow}>
                        <InputLabel className = {classes.titleFont}>
                          {i18n._('Custom Header')}
                        </InputLabel>
                        { columns.length  > 1 && <IconButton
                            aria-label="close"
                            color="inherit"
                            size = 'small'
                            classes = {{ root: classes.closeIcon}}
                            onClick={() => removeKPIColumn(column) }
                            disabled = {templateToViewEditDuplicate.viewTemplate}
                          >
                            <CloseIcon />
                          </IconButton>
                        }
                      </Grid>
      
                      <Grid>
                        <FormControl required classes = {{root: classes.formCtrlRoot}}>
                          <Select
                            value = {columns?.[columnNo]?.dropdowns?.['dd1']?.selectedValue?? ""}
                            name = {`template.column_details[${columnNo}].fin_data_type`}
                            onChange = {(e:  React.ChangeEvent<{ value: unknown }>) => {
                              handleHeaderSelectionDrops(e, columnNo)
                            }}
                            disabled = { !ifAdmin() }
                          >
                            <MenuItem value='revenue' key= 'revenue'>Revenue</MenuItem>
                            <MenuItem value='plan' key = 'plan'>Plan</MenuItem>
                            <MenuItem value='growth' key = 'growth'>Growth</MenuItem>
                            <MenuItem value='buying_centers' key = 'buying_centers'>Buying Centers</MenuItem>
                            <MenuItem value='pgi' key = 'pgi'>PGI</MenuItem>
                          </Select>
                          <FormHelperText>*required</FormHelperText>
                        </FormControl>
                      </Grid>
                      <Grid className = {classes.titleRow}>
                        <InputLabel className = {classes.titleFont}>{i18n._('Top Line')}</InputLabel>
                      </Grid>
                      <Grid>
                        <FormControl required classes = {{root: classes.formCtrlRoot}}>
                          <Select
                            name = { `template.column_details[${columnNo}].drop2`}
                            value = {column?.dropdowns?.[`dd2`]?.selectedValue ?? ''}
                            key = {`column-${columnNo}-dd2`}
                            onChange = {(e:  React.ChangeEvent<{ value: unknown }>) => {
                              handleToplineSelectionDrops(e, columnNo, 2);
                            }}
                            disabled = { !ifAdmin() }
                          >
                            {
                              columns?.[columnNo]?.dropdowns?.dd2?.optionList.map((option: string):React.ReactNode => <MenuItem value={option} key = {option}>{option}</MenuItem>)
                            }
                          </Select>
                          <FormHelperText>*required</FormHelperText>
                        </FormControl>
                      </Grid>
                      {
                        columns?.[columnNo]?.dropdowns?.['dd3']?.optionList?.length ?
                        <Grid>
                          <FormControl required classes = {{root: classes.formCtrlRoot}}>
                            <Select
                              name = { `template.column_details[${columnNo}].drop3`}
                              value = {column?.dropdowns?.[`dd3`]?.selectedValue ?? ''}
                              key = {`column-${columnNo}-dd3`}
                              onChange = {(e:  React.ChangeEvent<{ value: unknown }>) => {
                                handleToplineSelectionDrops(e, columnNo, 3);
                              }}
                              disabled = { !ifAdmin() }
                            >
                              {
                                columns?.[columnNo]?.dropdowns?.dd3?.optionList.map((option: string):React.ReactNode => <MenuItem value={option} key = {option}>{option}</MenuItem>)
                              }
                            </Select>
                            <FormHelperText>*required</FormHelperText>
                          </FormControl>
                        </Grid>
                      :
                        <Grid className = {classes.emptyGrid}/>
                      }
                      {
                        columns?.[columnNo]?.dropdowns?.['dd4']?.optionList?.length ?
                        <Grid>
                          <FormControl required classes = {{root: classes.formCtrlRoot}}>
                            <Select
                              name = { `template.column_details[${columnNo}].drop4`}
                              value = {column?.dropdowns?.[`dd4`]?.selectedValue ?? ''}
                              key = {`column-${columnNo}-dd4`}
                              onChange = {(e:  React.ChangeEvent<{ value: unknown }>) => {
                                handleToplineSelectionDrops(e, columnNo, 4);
                              }}
                              disabled = { !ifAdmin() }
                            >
                              {
                                columns?.[columnNo]?.dropdowns?.dd4?.optionList.map((option: string):React.ReactNode => <MenuItem value={option} key = {option}>{option}</MenuItem>)
                              }
                            </Select>
                            <FormHelperText>*required</FormHelperText>
                          </FormControl>
                        </Grid>
                        :
                        <Grid className = {classes.emptyGrid}/>
                      }
                    <Grid>
                      <Typography 
                        variant="h5" 
                        className = {classes.h5FontStyle}
                      >
                          { VARIABLE_TYPES[column?.dropdowns?.['dd1']?.selectedValue]?.displayValue ?? '' }
                      </Typography>
                    </Grid>
                  </Grid>
                    <Divider className = {classes.dividerCss} orientation="vertical" flexItem/>
                  </Fragment>
                );

              })
            } 
            <Fragment>
              <Grid item sm = {2} className = {classes.addButtonGrid} style = {{ display: 'flex', alignItems: 'center'}}>
                {columns.length < 15 ?
                  <Fab 
                    size="small" 
                    aria-label="add" 
                    className = {classes.centerAddBtn} 
                    onClick = {(e) => addTemplateColumn()}
                    disabled = {templateToViewEditDuplicate.viewTemplate}
                  >
                    <AddIcon /> 
                  </Fab>
                  : 
                  <Typography variant = 'h5'>Max limit of 15 columns</Typography>
                }
              </Grid>
              <Divider className = {classes.dividerCss} orientation="vertical" flexItem/>
            </Fragment>  
          </Grid>
      </FormGroup>
      <Divider/>
    </Fragment>
  )
}

export default KPIColumn;