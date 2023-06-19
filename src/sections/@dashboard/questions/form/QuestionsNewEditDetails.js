import sum from 'lodash/sum';
import { useCallback, useEffect } from 'react';
// form
import { useFormContext, useFieldArray } from 'react-hook-form';
// @mui
import { Box, Stack, Button, Divider, Typography, InputAdornment, MenuItem } from '@mui/material';
// utils
import { fCurrency } from '../../../../utils/formatNumber';
// components
import Iconify from '../../../../components/iconify';
import { RHFSelect, RHFTextField } from '../../../../components/hook-form';

// ----------------------------------------------------------------------
const QUESTION_OPTIONS = [
  { id: 1, option: 'A' },
  { id: 2, option: 'B' },
  { id: 3, option: 'C' },
  { id: 4, option: 'D' },
];
// ----------------------------------------------------------------------

export default function QuestionsNewEditDetails() {
  const { control, setValue, watch, resetField } = useFormContext();
  

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'items',
  });

  const values = watch();

  // const totalOnRow = values.items.map((item) => item.quantity * item.price);

  // const totalPrice = sum(totalOnRow) - values.discount + values.taxes;

  // useEffect(() => {
  //   setValue('totalPrice', totalPrice);
  // }, [setValue, totalPrice]);

  const handleAdd = () => {
    append({
      description: '',
      subject: '',
      status: '',
      id: '',
      answer: '',
      options: {
        A: '',
        B: '',
        C: '',
        D: ''
      },
    });
  };

  const handleRemove = (index) => {
    remove(index);
  };

  // const handleClearService = useCallback(
  //   (index) => {
  //     resetField(`items[${index}].options.A`);
  //     resetField(`items[${index}].options.B`);
  //     resetField(`items[${index}].options.C`);
  //     resetField(`items[${index}].options.D`);
  //   },
  //   [resetField]
  // );

  // const handleSelectService = useCallback(
  //   (index, option) => {
  //     setValue(
  //       `items[${index}].options`,
  //       QUESTION_OPTIONS.find((service) => service.option === option)
  //     );
  //     setValue(
  //       `items[${index}].total`,
  //       values.items.map((item) => item.quantity * item.price)[index]
  //     );
  //   },
  //   [setValue, values.items]
  // );

  // const handleChangeQuantity = useCallback(
  //   (event, index) => {
  //     setValue(`items[${index}].quantity`, event.target.value);
  //     setValue(
  //       `items[${index}].total`,
  //       values.items.map((item) => item.quantity * item.price)[index]
  //     );
  //   },
  //   [setValue, values.items]
  // );

  // const handleChangePrice = useCallback(
  //   (event, index) => {
  //     setValue(`items[${index}].price`, Number(event.target.value));
  //     setValue(
  //       `items[${index}].total`,
  //       values.items.map((item) => item.quantity * item.price)[index]
  //     );
  //   },
  //   [setValue, values.items]
  // );

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h6" sx={{ color: 'text.disabled', mb: 3 }}>
        Question:
      </Typography>

      <Stack divider={<Divider flexItem sx={{ borderStyle: 'dashed' }} />} spacing={3}>
          <Stack alignItems="flex-end" spacing={1.5}>
            <Stack
              direction={{ xs: 'column', md: 'row' }}
              spacing={1}
              sx={{ width: 1 }}
              flex
              gap="20px"
              flexWrap="wrap"
            >
              <RHFTextField
                multiline
                size="large"
                name='description'
                label="Question"
                required
                InputLabelProps={{ shrink: true }}
                // sx={{
                //   '.MuiInputBase-input': {
                //     height: '100px'
                //   }
                // }}
              />

              <RHFTextField
                size="small"
                name='options.A'
                label="A"
                required
                InputLabelProps={{ shrink: true }}
              />

              <RHFTextField
                size="small"
                name='options.B'
                label="B"
                required
                InputLabelProps={{ shrink: true }}
              />

              <RHFTextField
                size="small"
                name='options.C'
                label="C"
                required
                InputLabelProps={{ shrink: true }}
              />

              <RHFTextField
                size="small"
                name='options.D'
                label="D"
                required
                InputLabelProps={{ shrink: true }}
              />
            </Stack>
          </Stack>
      </Stack>
    </Box>
  );
}
