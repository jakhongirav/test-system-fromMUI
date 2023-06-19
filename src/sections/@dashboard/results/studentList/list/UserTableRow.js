import PropTypes from 'prop-types';
import { useState, forwardRef } from 'react';
// @mui
import {
  Stack,
  Avatar,
  Button,
  Checkbox,
  TableRow,
  MenuItem,
  TableCell,
  IconButton,
  Typography,
  // Dialog
  Slide,
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  DialogContentText,
} from '@mui/material';
// components
import Label from '../../../../../components/label';
import Iconify from '../../../../../components/iconify';
import MenuPopover from '../../../../../components/menu-popover';
// import ConfirmDialog from '../../../../../components/confirm-dialog';

// ----------------------------------------------------------------------

UserTableRow.propTypes = {
  row: PropTypes.object,
  selected: PropTypes.bool,
  onEditRow: PropTypes.func,
  onDeleteRow: PropTypes.func,
  onSelectRow: PropTypes.func,
  onViewRow: PropTypes.func,
};

const Transition = forwardRef((props, ref) => <Slide direction="up" ref={ref} {...props} />);

export default function UserTableRow({ row, selected, onEditRow, onSelectRow, onDeleteRow, onViewRow}) {
  const { name, ball, avatarUrl, role, isVerified, status, phoneNumber, passport, faculties, studyType, id } = row;

  const [openConfirm, setOpenConfirm] = useState(false);

  const [openPopover, setOpenPopover] = useState(null);

  const handleOpenConfirm = () => {
    setOpenConfirm(true);
  };

  const handleCloseConfirm = () => {
    setOpenConfirm(false);
  };

  const handleOpenPopover = (event) => {
    setOpenPopover(event.currentTarget);
  };

  const handleClosePopover = () => {
    setOpenPopover(null);
  };

  // Dialog functionals

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <TableRow hover selected={selected}>
        <TableCell padding="checkbox">
          <Checkbox checked={selected} onClick={onSelectRow} />
        </TableCell>

        <TableCell>
          <Stack direction="row" alignItems="center" spacing={2}>
            <Avatar alt={name} src={avatarUrl} />

            <Stack direction='column' alignItems='left' spacing={0}>
              <Typography variant='subtitle2' noWrap>{name}</Typography>
              <Typography variant='subtitle5' wrap>{id}</Typography>
            </Stack>
          </Stack>
        </TableCell>

        <TableCell align="left">{passport}</TableCell>

        <TableCell align="left">{phoneNumber}</TableCell>

        <TableCell align="left">{faculties}</TableCell>

        <TableCell align="left">
          <Label
            variant="soft"
            color={(studyType === 'sirtqi' && 'warning') || 'success'}
            sx={{ textTransform: 'capitalize' }}
          >
            {studyType}
          </Label>
        </TableCell>


        <TableCell align="left" sx={{ textTransform: 'capitalize' }}>
          {role}
        </TableCell>

        <TableCell align="center">
          <Iconify
            icon={isVerified ? 'eva:checkmark-circle-fill' : 'eva:clock-outline'}
            sx={{
              width: 20,
              height: 20,
              color: 'success.main',
              ...(!isVerified && { color: 'error.main' }),
            }}
          />
        </TableCell>

        <TableCell align="left">
          <Label
            variant="soft"
            color={(status === 'failed' && 'error') || 'success'}
            sx={{ textTransform: 'capitalize' }}
          >
            {status}
          </Label>
        </TableCell>

        <TableCell align="right">
          {/* You can add a function where can delete and edit like here */}
          <IconButton color={openPopover ? 'inherit' : 'default'} onClick={handleOpenPopover} >
            <Iconify icon="eva:more-vertical-fill" />
          </IconButton>
        </TableCell>
      </TableRow>

      {/* Here Delete and Edit user menu */}
      <MenuPopover
        open={openPopover}
        onClose={handleClosePopover}
        arrow="right-top"
        sx={{ width: 140 }}
      >
        {/* <MenuItem
          onClick={() => {
            handleOpenConfirm();
            handleClosePopover();
          }}
          sx={{ color: 'error.main' }}
        >
          <Iconify icon="eva:trash-2-outline" />
          Delete
        </MenuItem>

        <MenuItem
          onClick={() => {
            onEditRow();
            handleClosePopover();
          }}
        >
          <Iconify icon="eva:edit-fill" />
          Edit
        </MenuItem> */}

        <MenuItem
          onClick={() => {
            handleClickOpen();
            handleClosePopover();
          }}
        >
          <Iconify icon="eva:eye-fill" />
          View
        </MenuItem>
      </MenuPopover>

      {/* <ConfirmDialog
        open={openConfirm}
        onClose={handleCloseConfirm}
        title="Delete"
        content="Are you sure want to delete?"
        action={
          <Button variant="contained" color="error" onClick={onDeleteRow}>
            Delete
          </Button>
        }
      /> */}
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title" sx={{
          textAlign: 'center',
        }}>Foydalanuvchi {id}</DialogTitle>

        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
          <Stack direction='column' alignItems='center' spacing={3} sx={{
            padding: '0 90px'
          }}>
            <Stack>
                <Typography variant='subtitle1' wrap>Foydalanuvchi haqida ma’lumotlar</Typography>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={6}>
              <Stack direction='row' spacing={2}>
                <Stack>
                  <Avatar alt={name} src={avatarUrl} variant='square' sx={{
                    width: '130px',
                    height: '170px'
                  }}/>
                </Stack>

                <Stack direction='column' alignItems='left' spacing={1}>
                  <Stack direction='column' alignItems='left' spacing={0}>
                    <Typography variant='h6' noWrap>{name}</Typography>
                    <Typography variant='subtitle2' noWrap>(FIO)</Typography>
                  </Stack>
                  <Stack direction='column' alignItems='left' spacing={0}>
                    <Typography variant='h6' noWrap>{name}</Typography>
                    <Typography variant='subtitle2' noWrap>(Tug’ilgan sana)</Typography>
                  </Stack>
                  <Stack direction='column' alignItems='left' spacing={0}>
                    <Typography variant='h6' noWrap>{role}</Typography>
                    <Typography variant='subtitle2' noWrap>(Natija)</Typography>
                  </Stack>
                </Stack>
              </Stack>
              <Stack direction='column' alignItems='left' spacing={1}>
                  <Stack direction='column' alignItems='left' spacing={0}>
                    <Typography variant='h6' noWrap>{passport}</Typography>
                    <Typography variant='subtitle2' noWrap>(Passport seriya va raqami)</Typography>
                  </Stack>
                  <Stack direction='column' alignItems='left' spacing={0}>
                    <Typography variant='h6' noWrap>{phoneNumber}</Typography>
                    <Typography variant='subtitle2' noWrap>(Telefon raqam)</Typography>
                  </Stack>
                  <Stack direction='column' alignItems='left' spacing={0}>
                    <Typography variant='h6' noWrap>{ball}</Typography>
                    <Typography variant='subtitle2' noWrap>(To’plangan ball)</Typography>
                  </Stack>
              </Stack>
            </Stack>
          </Stack>
          </DialogContentText>
        </DialogContent>

        <DialogActions>
          <Button color="error" onClick={handleClose}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
