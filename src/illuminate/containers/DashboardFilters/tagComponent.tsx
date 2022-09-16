import React, { useState, useEffect } from 'react';
import {
  useSelector,
  useDispatch
} from 'react-redux';
import Select from 'react-select';
import { RootState } from '../../../utils/injectReducer';
import { TagsDataState } from './type';
import { dashboardFiltersActionCreator } from '../../../utils/configureActionCreators';
import { useStyles } from './style';

interface TagComponentProps {
  handleTagsChange: (value: any) => void;
}

const colourStyles = {
  control: (styles: any) => ({ ...styles, backgroundColor: 'white' }),
  option: (styles: any, { }) => {
    return {
      ...styles,
      color: '#000',
    };
  },
};

const TagComponent: React.FC<TagComponentProps> = ({
  handleTagsChange,
}) => {

  const classes = useStyles();
  const dispatch = useDispatch();
  const [inputValue, setValue] = useState("");
  const [selectedValue, setSelectedValue] = useState<any>([]);

  // handle input change event
  const handleInputChange = (value: any) => {
    setValue(value);
  };

  // handle selection
  const handleChange = (value: any) => {
    setSelectedValue(value);
    handleTagsChange(value);
  };

  const { loading: tagsLoader, data: tagsData }: TagsDataState = useSelector(
    (state: RootState) => state.filterCriteriaData?.tagsData
  );

  useEffect(() => {
    if (inputValue) {
      dispatch(dashboardFiltersActionCreator.tagsDataRequest({ query: inputValue }));
    }

    return (() => {
      dispatch(dashboardFiltersActionCreator.tagsDataReset());
    })
  }, [inputValue]);

  return (
    <Select
      className={classes.tagsContainer}
      styles={colourStyles}
      cacheOptions={false}
      defaultOptions={false}
      value={selectedValue}
      getOptionLabel={e => e.title}
      getOptionValue={e => e.value}
      options={tagsData || []}
      onChange={handleChange}
      onInputChange={handleInputChange}
      isMulti
      closeMenuOnScroll={false}
      placeholder='Search Tag(s)...'
      components={{
        IndicatorSeparator: () => null,
        IndicatorsContainer: () => null
      }}
      isLoading={tagsLoader}
      ClearIndicator={true}
      onBlur={() => {
        const e = null
        throw e //temp for handling scroll issue
      }}
    />
  );
};

export default TagComponent;