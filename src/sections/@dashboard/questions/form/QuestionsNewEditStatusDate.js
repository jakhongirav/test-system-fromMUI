import PropTypes from 'prop-types';
// form
import { useFormContext, Controller } from 'react-hook-form';
// @mui
import { DatePicker } from '@mui/x-date-pickers';
import { Stack, TextField, MenuItem } from '@mui/material';
// components
import { RHFSelect, RHFTextField } from '../../../../components/hook-form';

// ----------------------------------------------------------------------

const STATUS_OPTIONS = ['easy', 'normal', 'hard'];

const SUBJECTS = ['Math', 'Physics'];

const ANSWER = ['A', 'B', 'C', 'D'];

// ----------------------------------------------------------------------

export default function QuestionsNewEditStatusDate({ currentQuestion }) {
  const { control, watch, setValue} = useFormContext();

  const { subject, answer, status } = currentQuestion || {
    subject: '',
    answer: '',
    status: ''
  }

  const values = watch();

  return (
    <Stack
      spacing={2}
      direction={{ xs: 'column', sm: 'row' }}
      sx={{ p: 3, bgcolor: 'background.neutral' }}
    >

      <RHFSelect fullWidth name='subject' label="Subject" InputLabelProps={{ shrink: true }}  >
        {SUBJECTS.map((option) => (
          <MenuItem key={option} value={option} >
            {option}
          </MenuItem>
        ))}
      </RHFSelect>

      <RHFSelect fullWidth name="status" label="Status" InputLabelProps={{ shrink: true }} >
        {STATUS_OPTIONS.map((option) => (
          <MenuItem key={option} value={option} >
            {option}
          </MenuItem>
        ))}
      </RHFSelect>

      <RHFSelect fullWidth name="answer" label="Answer" InputLabelProps={{ shrink: true }} >
        {ANSWER.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </RHFSelect>


      {/* Date */}
      
      {/* <Controller
        name="createDate"
        control={control}
        render={({ field, fieldState: { error } }) => (
          <DatePicker
            label="Date create"
            value={field.value}
            onChange={(newValue) => {
              field.onChange(newValue);
            }}
            renderInput={(params) => (
              <TextField {...params} fullWidth error={!!error} helperText={error?.message} />
            )}
          />
        )}
      /> */}
    </Stack>
  );
}

QuestionsNewEditStatusDate.propTypes = {
  currentQuestion: PropTypes.object
}