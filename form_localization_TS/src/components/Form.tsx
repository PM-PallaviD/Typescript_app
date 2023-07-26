import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {Button, TextField, Box,Paper} from '@mui/material';

interface FormValues {
  name: string;
  email: string;
  password: string;
}

const Form: React.FC = () => {
  const { t } = useTranslation();
  const [formValues, setFormValues] = useState<FormValues>({
    name: '',
    email: '',
    password: '',
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  return (
    <Paper elevation={12}
          sx={{
            width: 600,
            padding: "50px 50px 50px 50px",
            margin: "auto",
            marginTop: "80px",
          }}
        >
    <Box component="div">
      <h2>{t('form.title')}</h2>
      <form>
        <TextField 
          label={t('form.name')}
          type="text"
          id="name"
          name="name"
          value={formValues.name}
          onChange={handleInputChange}
          variant="outlined"
          fullWidth
          margin="normal"
        />

        <TextField
          label={t('form.email')}
          type="email"
          id="email"
          name="email"
          value={formValues.email}
          onChange={handleInputChange}
          variant="outlined"
          fullWidth
          margin="normal"
        />

        <TextField
          label={t('form.password')}
          type="password"
          id="password"
          name="password"
          value={formValues.password}
          onChange={handleInputChange}
          variant="outlined"
          fullWidth
          margin="normal"
        />

        <Button type="submit" variant="contained" color="primary">
          {t('form.submit')}
        </Button>
      </form>
    </Box>
    </Paper>
  );
};

export { Form };
