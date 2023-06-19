import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import sumBy from 'lodash/sumBy';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
// @mui
import { useTheme } from '@mui/material/styles';
import {
  Tab,
  Tabs,
  Card,
  Table,
  Stack,
  Button,
  Tooltip,
  Divider,
  TableBody,
  Container,
  IconButton,
  TableContainer,
} from '@mui/material';
// routes
import { PATH_DASHBOARD } from '../routes/paths';
// utils
import { fTimestamp } from '../utils/formatTime';
// _mock_
import { _questions } from '../_mock/arrays';
// components
import Label from '../components/label';
import Iconify from '../components/iconify';
import Scrollbar from '../components/scrollbar';
import ConfirmDialog from '../components/confirm-dialog';
import CustomBreadcrumbs from '../components/custom-breadcrumbs';
import { useSettingsContext } from '../components/settings';
import {
  useTable,
  getComparator,
  emptyRows,
  TableNoData,
  TableEmptyRows,
  TableHeadCustom,
  TableSelectedAction,
  TablePaginationCustom,
} from '../components/table';
// sections
import QuestionAnalytic from '../sections/@dashboard/questions/QuestionsAnalytic';
import { InvoiceTableRow } from '../sections/@dashboard/questions/list';
import  QuestionsTableToolbar  from '../sections/@dashboard/questions/list/QuestionsTableToolbar';
// ----------------------------------------------------------------------

const Subjects = ['all', 'Math', 'Physics'];

const TABLE_HEAD = [
  { id: 'question', label: 'Savollar', align: 'left' },
  { id: 'createDate', label: 'A', align: 'center', width: 200 },
  { id: 'dueDate', label: 'B', align: 'center', width: 200 },
  { id: 'price', label: 'C', align: 'center', width: 200 },
  { id: 'sent', label: 'D', align: 'center', width: 200 },
  { id: 'answer', label: "To'g'ri javob", align: 'center', width: 150 },
  { id: 'status', label: 'Savol darajasi', align: 'left', width: '30px' },
  { id: '' },
];

// ----------------------------------------------------------------------

export default function ExamQuestions() {
  const theme = useTheme();

  const { themeStretch } = useSettingsContext();

  const navigate = useNavigate();

  const {
    dense,
    page,
    order,
    orderBy,
    rowsPerPage,
    setPage,
    //
    selected,
    setSelected,
    onSelectRow,
    onSelectAllRows,
    //
    onChangeDense,
    onChangePage,
    onChangeRowsPerPage,
  } = useTable({ defaultOrderBy: 'createDate' });

  const [tableData, setTableData] = useState(_questions);

  const [filterName, setFilterName] = useState('');

  const [openConfirm, setOpenConfirm] = useState(false);

  const [filterStatus, setFilterStatus] = useState('all');

  const [filterSubject, setFilterSubject] = useState('all');

  const dataFiltered = applyFilter({
    inputData: tableData,
    comparator: getComparator(order, orderBy),
    filterName,
    filterSubject,
    filterStatus,
    // filterStartDate,
    // filterEndDate,
  });

  const dataInPage = dataFiltered.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  const denseHeight = dense ? 56 : 76;

  const isFiltered = filterStatus !== 'all' || filterName !== '' || filterSubject !== 'all';
  // (!!filterStartDate && !!filterEndDate);

  const isNotFound =
    (!dataFiltered.length && !!filterName) ||
    (!dataFiltered.length && !!filterStatus) ||
    (!dataFiltered.length && !!filterSubject);
  // (!dataFiltered.length && !!filterEndDate) ||
  // (!dataFiltered.length && !!filterStartDate);

  const getLengthByStatus = (status) => tableData.filter((item) => item.status === status).length;

  const getTotalPriceByStatus = (status) =>
    tableData.filter((item) => item.status === status).length;


  const getPercentByStatus = (status) => (getLengthByStatus(status) / tableData.length) * 100;

  const TABS = [
    { value: 'all', label: 'All', color: 'info', count: tableData.length },
    { value: 'hard', label: 'hard', color: 'error', count: getLengthByStatus('hard') },
    { value: 'normal', label: 'normal', color: 'warning', count: getLengthByStatus('normal') },
    { value: 'easy', label: 'easy', color: 'success', count: getLengthByStatus('easy') },
  ];

  const handleOpenConfirm = () => {
    setOpenConfirm(true);
  };

  const handleCloseConfirm = () => {
    setOpenConfirm(false);
  };

  const handleFilterStatus = (event, newValue) => {
    setPage(0);
    setFilterStatus(newValue);
  };

  const handleFilterName = (event) => {
    setPage(0);
    setFilterName(event.target.value);
  };

  const handleFilterSubject = (event) => {
    setPage(0);
    setFilterSubject(event.target.value);
  };

  const handleDeleteRow = (id) => {
    const deleteRow = tableData.filter((row) => row.id !== id);
    setSelected([]);
    setTableData(deleteRow);

    if (page > 0) {
      if (dataInPage.length < 2) {
        setPage(page - 1);
      }
    }
  };

  const handleDeleteRows = (selectedRows) => {
    const deleteRows = tableData.filter((row) => !selectedRows.includes(row.id));
    setSelected([]);
    setTableData(deleteRows);

    if (page > 0) {
      if (selectedRows.length === dataInPage.length) {
        setPage(page - 1);
      } else if (selectedRows.length === dataFiltered.length) {
        setPage(0);
      } else if (selectedRows.length > dataInPage.length) {
        const newPage = Math.ceil((tableData.length - selectedRows.length) / rowsPerPage) - 1;
        setPage(newPage);
      }
    }
  };

  const handleEditRow = (id) => {
    navigate(PATH_DASHBOARD.questionsedit.edit(id));
  };

  const handleResetFilter = () => {
    setFilterName('');
    setFilterStatus('all');
    setFilterSubject('all');
    // setFilterEndDate(null);
    // setFilterStartDate(null);
  };

  return (
    <>
      <Helmet>
        <title> TIFT | Exam questions </title>
      </Helmet>

      <Container maxWidth="xl">
        <CustomBreadcrumbs
          heading="Questions List"
          links={[
            {
              name: 'Dashboard',
              href: PATH_DASHBOARD.root,
            },
            {
              name: 'Questions List',
            },
          ]}
          action={
            <Button
              component={RouterLink}
              to={PATH_DASHBOARD.questionscreate}
              variant="contained"
              startIcon={<Iconify icon="eva:plus-fill" />}
            >
              New Question
            </Button>
          }
        />

        {/* Statistics */}
        <Card sx={{ mb: 5 }}>
          <Scrollbar>
            <Stack
              direction="row"
              divider={<Divider orientation="vertical" flexItem sx={{ borderStyle: 'dashed' }} />}
              sx={{ py: 2 }}
            >
              <QuestionAnalytic
                title="Total"
                percent={100}
                price={tableData.length}
                icon="ic:round-receipt"
                color={theme.palette.info.main}
              />

              <QuestionAnalytic
                title="Hard"
                percent={getPercentByStatus('hard')}
                price={getTotalPriceByStatus('hard')}
                icon="eva:checkmark-circle-2-fill"
                color={theme.palette.success.main}
              />

              <QuestionAnalytic
                title="Normal"
                percent={getPercentByStatus('normal')}
                price={getTotalPriceByStatus('normal')}
                icon="eva:clock-fill"
                color={theme.palette.warning.main}
              />

              <QuestionAnalytic
                title="Easy"
                percent={getPercentByStatus('easy')}
                price={getTotalPriceByStatus('easy')}
                icon="eva:bell-fill"
                color={theme.palette.error.main}
              />
            </Stack>
          </Scrollbar>
        </Card>

        {/* Filter Status */}
        <Card>
          <Tabs
            value={filterStatus}
            onChange={handleFilterStatus}
            sx={{
              px: 2,
              bgcolor: 'background.neutral',
            }}
          >
            {TABS.map((tab) => (
              <Tab
                key={tab.value}
                value={tab.value}
                label={tab.label}
                icon={
                  <Label color={tab.color} sx={{ mr: 1 }}>
                    {tab.count}
                  </Label>
                }
              />
            ))}
          </Tabs>

          <Divider />

          {/* Search bar */}
          <QuestionsTableToolbar
            filterName={filterName}
            isFiltered={isFiltered}
            filterSubject={filterSubject}
            // filterEndDate={filterEndDate}
            onFilterName={handleFilterName}
            optionsService={Subjects}
            // filterStartDate={filterStartDate}
            onResetFilter={handleResetFilter}
            onFilterSubject={handleFilterSubject}
            onFilterStartDate={(newValue) => {
              // setFilterStartDate(newValue);
            }}
            onFilterEndDate={(newValue) => {
              // setFilterEndDate(newValue);
            }}
          />

            {/* List */}
          <TableContainer sx={{ position: 'relative', overflow: 'unset' }}>

            {/* Select bar settings */}
            <TableSelectedAction
              dense={dense}
              numSelected={selected.length}
              rowCount={tableData.length}
              onSelectAllRows={(checked) =>
                onSelectAllRows(
                  checked,
                  tableData.map((row) => row.id)
                )
              }
              action={
                <Stack direction="row">
                  <Tooltip title="Delete">
                    <IconButton color="primary" onClick={handleOpenConfirm}>
                      <Iconify icon="eva:trash-2-outline" />
                    </IconButton>
                  </Tooltip>
                </Stack>
              }
            />

            <Scrollbar>
              <Table size={dense ? 'small' : 'medium'} sx={{ minWidth: 800 }}>

                {/* List */}
                <TableHeadCustom
                  order={order}
                  orderBy={orderBy}
                  headLabel={TABLE_HEAD}
                  rowCount={tableData.length}
                  numSelected={selected.length}
                  onSelectAllRows={(checked) =>
                    onSelectAllRows(
                      checked,
                      tableData.map((row) => row.id)
                    )
                  }
                />

                <TableBody>
                  {dataFiltered
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row) => (
                      <InvoiceTableRow
                        key={row.id}
                        row={row}
                        selected={selected.includes(row.id)}
                        onSelectRow={() => onSelectRow(row.id)}
                        // onViewRow={() => handleViewRow(row.id)}
                        onEditRow={() => handleEditRow(row.id)}
                        onDeleteRow={() => handleDeleteRow(row.id)}
                      />
                    ))}

                  <TableEmptyRows
                    height={denseHeight}
                    emptyRows={emptyRows(page, rowsPerPage, tableData.length)}
                  />

                  <TableNoData isNotFound={isNotFound} />
                </TableBody>
              </Table>
            </Scrollbar>
          </TableContainer>

          <TablePaginationCustom
            count={dataFiltered.length}
            page={page}
            rowsPerPage={rowsPerPage}
            onPageChange={onChangePage}
            onRowsPerPageChange={onChangeRowsPerPage}
            //  Сокрашение
            // dense={dense}
            // onChangeDense={onChangeDense}
          />
        </Card>
      </Container>

      <ConfirmDialog
        open={openConfirm}
        onClose={handleCloseConfirm}
        title="Delete"
        content={
          <>
            Are you sure want to delete <strong> {selected.length} </strong> items?
          </>
        }
        action={
          <Button
            variant="contained"
            color="error"
            onClick={() => {
              handleDeleteRows(selected);
              handleCloseConfirm();
            }}
          >
            Delete
          </Button>
        }
      />
    </>
  );
}

// ----------------------------------------------------------------------

function applyFilter({ inputData, comparator, filterName, filterStatus, filterSubject }) {
  const stabilizedThis = inputData.map((el, index) => [el, index]);

  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });

  inputData = stabilizedThis.map((el) => el[0]);

  if (filterName) {
    inputData = inputData.filter(
      (question) =>
        question.description.toLowerCase().indexOf(filterName.toLowerCase()) !== -1
    );
  }

  if (filterStatus !== 'all') {
    inputData = inputData.filter((question) => question.status === filterStatus);
  }

  if (filterSubject !== 'all') {
    inputData = inputData.filter((question) =>
      question.items.some((c) => c.Subject === filterSubject)
    );
  }

  return inputData;
}
