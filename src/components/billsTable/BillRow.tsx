import { Chip, TableCell, TableRow, Typography, ChipProps, TypographyProps } from '@mui/material';

import { Bill } from '@models/billModel';
import { getBillStatusColor, getBillTypeColor } from '@/utils/billUtils';

type BillRowProps = {
  bill: Bill;
};

type TextCellProps = {
  children: string;
  color?: TypographyProps['color'];
  fontWeight?: TypographyProps['fontWeight'];
  variant: TypographyProps['variant'];
};

type ChipCellProps = {
  color: ChipProps['color'];
  label: string;
  variant: ChipProps['variant'];
  sx?: ChipProps['sx'];
};

const rowSx = {
  '&:last-child td, &:last-child th': { border: 0 },
  '&:hover': { backgroundColor: 'grey.50' },
};

const TextCell = ({ children, color, fontWeight, variant }: TextCellProps) => (
  <TableCell>
    <Typography color={color} fontWeight={fontWeight} variant={variant}>
      {children}
    </Typography>
  </TableCell>
);

const ChipCell = ({ color, label, sx, variant }: ChipCellProps) => (
  <TableCell>
    <Chip color={color} label={label} size="small" sx={sx} variant={variant} />
  </TableCell>
);

export const BillRow = ({ bill }: BillRowProps) => (
  <TableRow key={`${bill.billNo}-${bill.billType}`} hover sx={rowSx}>
    <TextCell fontWeight={700} variant="subtitle2">
      {bill.billNo}
    </TextCell>

    <ChipCell
      color={getBillTypeColor(bill.billType)}
      label={bill.billType}
      sx={{ borderWidth: 1.5, fontWeight: 600 }}
      variant="outlined"
    />

    <ChipCell
      color={getBillStatusColor(bill.billStatus)}
      label={bill.billStatus}
      variant="filled"
    />

    <TextCell color="text.secondary" variant="body2">
      {bill.sponsor || 'Not available'}
    </TextCell>
  </TableRow>
);
