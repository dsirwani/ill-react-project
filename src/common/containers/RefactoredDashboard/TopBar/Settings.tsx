import React, {
  useState,
  useRef,
  useEffect
} from 'react';
import { FC } from 'react';
import { capitalCase } from 'change-case';
import {
  Badge,
  Box,
  Button,
  FormControlLabel,
  IconButton,
  Popover,
  SvgIcon,
  Checkbox,
  TextField,
  Tooltip,
  Typography,
} from '@material-ui/core';
import { useSelector } from 'react-redux';
import { Settings as SettingsIcon } from 'react-feather';
import { RootState } from '../../../../utils/injectReducer';
import useSettings from '../../../../hooks/useSettings';
import { UserPreferenceState } from './type';
import { THEMES, CURRENCY, LANGUAGES } from '../../../../constants';
import { useStyles } from './style';

const Settings: FC = () => {
  const classes = useStyles();
  const ref = useRef<any>(null);
  const { settings, saveSettings } = useSettings();
  const [isOpen, setOpen] = useState<boolean>(false);
  const [values, setValues] = useState({
    theme: settings.theme,
    mmFactoring: settings.mmFactoring,
    currency: settings.currency,
    language: settings.language,
  });

  const handleOpen = (): void => {
    setOpen(true);
  };

  const handleClose = (): void => {
    setOpen(false);
  };

  const handleChange = (field: any, value: any): void => {
    setValues({
      ...values,
      [field]: value
    });
  };

  const handleSave = (): void => {
    saveSettings(values);
    setOpen(false);
  };

  const { data }: UserPreferenceState = useSelector(
    (state: RootState) => state.userPreferenceData?.userPreferenceData
  );

  useEffect(() => {
    if (data) {
      setValues({
        ...values,
        theme: data?.theme === 'dark' ? THEMES.ONE_DARK : THEMES.LIGHT,
        mmFactoring: data?.is_currency_pref_million,
        currency: data?.display_currency,
        language: data?.display_language,
      });
    }
  }, [data]);

  return (
    <>
      <Tooltip title="Settings">
        <Badge
          color="secondary"
          variant="dot"
          classes={{ badge: classes.badge }}
        >
          <IconButton
            color="inherit"
            onClick={handleOpen}
            ref={ref}
          >
            <SvgIcon fontSize="small">
              <SettingsIcon />
            </SvgIcon>
          </IconButton>
        </Badge>
      </Tooltip>
      <Popover
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center'
        }}
        classes={{ paper: classes.popoverForSettings }}
        anchorEl={ref.current}
        onClose={handleClose}
        open={isOpen}
      >
        <Typography
          variant="h4"
          color="textPrimary"
        >
          Settings
        </Typography>
        <Box mt={2}>
          <TextField
            fullWidth
            label="Theme"
            name="theme"
            onChange={(event) => handleChange('theme', event.target.value)}
            select
            SelectProps={{ native: true }}
            value={values.theme}
            variant="outlined"
          >
            {Object.keys(THEMES).map((theme) => (
              <option
                key={theme}
                value={theme}
              >
                {capitalCase(theme)}
              </option>
            ))}
          </TextField>
        </Box>
        <Box mt={2}>
          <FormControlLabel
            control={
              <Checkbox
                checked={values.mmFactoring}
                onChange={(event) => handleChange('mmFactoring', event.target.checked)}
                inputProps={{ 'aria-label': 'primary checkbox' }}
              />
            }
            label="Enable MM Factoring"
          />
        </Box>
        <Box mt={2}>
          <TextField
            fullWidth
            label="Currency"
            name="currency"
            onChange={(event) => handleChange('currency', event.target.value)}
            select
            SelectProps={{ native: true }}
            value={values.currency}
            variant="outlined"
          >
            {CURRENCY.map((currency: any) => (
              <option
                key={currency.currency}
                value={currency.currency}
              >
                {currency.caption}
              </option>
            ))}
          </TextField>
        </Box>
        <Box mt={2}>
          <TextField
            fullWidth
            label="Select Language"
            name="language"
            value={values.language}
            onChange={(event) => handleChange('language', event.target.value)}
            select
            variant="outlined"
            SelectProps={{ native: true }}
          >
            {LANGUAGES.map(
              (language: { locale: string; code: string }): any => (
                <option key={language.code} value={language.code}>
                  {language.locale}
                </option>
              )
            )}
          </TextField>
        </Box>
        <Box mt={2}>
          <Button
            variant="contained"
            color="secondary"
            fullWidth
            onClick={handleSave}
          >
            Save Settings
          </Button>
        </Box>
      </Popover>
    </>
  );
}

export default Settings;
