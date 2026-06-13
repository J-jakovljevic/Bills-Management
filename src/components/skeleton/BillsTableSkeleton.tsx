import { Box, Skeleton, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';

import { tableHeaders } from '@/utils/billUtils';

const BillsTableSkeleton = () => {
  return (
    <Box
      sx={{
        overflow: 'hidden',
        borderRadius: 3,
        border: '1px solid',
        borderColor: 'divider',
        backgroundColor: 'white',
        boxShadow: '0 12px 32px rgba(15, 23, 42, 0.08)',
      }}
    >
      <Table size="small" aria-label="loading bills table skeleton">
        <TableHead>
          <TableRow>
            {tableHeaders.map(({ label, width }) => (
              <TableCell
                key={label}
                sx={{
                  backgroundColor: 'grey.50',
                  fontWeight: 700,
                  width: width,
                }}
              >
                {label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>

        <TableBody>
          {[...Array(5)].map((_, rowIndex) => (
            <TableRow key={rowIndex}>
              {[...Array(4)].map((_, cellIndex) => (
                <TableCell key={cellIndex} sx={{ py: 1.75 }}>
                  <Skeleton variant="text" width={cellIndex === 3 ? '60%' : '40%'} />
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
};

export default BillsTableSkeleton;
