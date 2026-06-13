import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';

import type { Bill } from '@models/billModel';
import { tableHeaders } from '@/utils/billUtils';
import { BillRow } from '@/components/billsTable/BillRow';

type BillsTableProps = {
  bills: Bill[];
};

const BillsTable = ({ bills }: BillsTableProps) => {
  return (
    <Paper
      variant="outlined"
      sx={{
        borderRadius: 3,
        boxShadow: '0 12px 32px rgba(15, 23, 42, 0.08)',
        overflow: 'hidden',
        width: '100%',
      }}
    >
      <TableContainer sx={{ overflowX: 'auto', width: '100%' }}>
        <Table
          size="small"
          aria-label="bills table"
          sx={{ minWidth: { xs: 560, sm: 640, md: 720 } }}
        >
          <TableHead>
            <TableRow>
              {tableHeaders.map(({ label, width }) => (
                <TableCell
                  key={label}
                  sx={{
                    backgroundColor: 'grey.50',
                    fontWeight: 700,
                    width,
                  }}
                >
                  {label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>
            {bills.map((bill) => (
              <BillRow key={`${bill.billNo}-${bill.billType}`} bill={bill} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default BillsTable;
