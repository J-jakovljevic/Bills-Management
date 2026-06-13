import {
  Bill,
  BillApiRecord,
  BillStatus,
  BillStatusValue,
  BillType,
  BillTypeValue,
  TableHeader,
} from '@models/billModel';

const stripHtml = (value: string): string => {
  return value
    ? value
        .replace(/<[^>]+>/g, ' ')
        .replace(/\s+/g, ' ')
        .trim()
    : 'No English title available';
};

const formatBillType = (bill: BillApiRecord): BillTypeValue => {
  const billType = bill.billType.trim().toLowerCase();
  const source = bill.source.trim().toLowerCase();

  switch (billType) {
    case 'private':
      return BillType.Private;
    case 'public':
      return BillType.Public;
    default:
      break;
  }

  switch (source) {
    case 'private member':
    case 'private members':
      return BillType.PrivateMembers;
    case 'government':
      return BillType.Government;
    default:
      return 'Unknown';
  }
};

const formatSponsor = (bill: BillApiRecord): string => {
  const sponsorName = bill.sponsors
    ?.map((entry) => entry?.sponsor?.by?.showAs?.trim())
    .find(Boolean);

  return sponsorName || 'Unknown';
};

export const getBillTypeColor = (billType: BillTypeValue) => {
  switch (billType) {
    case BillType.Private:
    case BillType.PrivateMembers:
      return 'warning';
    case BillType.Government:
      return 'info';
    case BillType.Public:
      return 'secondary';
    default:
      return 'default';
  }
};

const mapBillStatus = (status: string): BillStatusValue => {
  const normalizedStatus = status.trim();

  return Object.values(BillStatus).includes(normalizedStatus as BillStatus)
    ? (normalizedStatus as BillStatus)
    : 'Unknown';
};

export const getBillStatusColor = (billStatus: BillStatusValue) => {
  switch (billStatus) {
    case BillStatus.Current:
      return 'success';
    case BillStatus.Enacted:
      return 'info';
    case BillStatus.Withdrawn:
    case BillStatus.Rejected:
    case BillStatus.Defeated:
      return 'error';
    case BillStatus.Lapsed:
      return 'warning';
    default:
      return 'default';
  }
};

export const tableHeaders: TableHeader[] = [
  { label: 'Bill number', width: '22%' },
  { label: 'Bill type', width: '18%' },
  { label: 'Bill status', width: '22%' },
  { label: 'Sponsor', width: '38%' },
];

export const mapBillApiRecordToBill = (bill: BillApiRecord): Bill => ({
  billNo: `${bill.billNo}/${bill.billYear}`,
  billType: formatBillType(bill),
  billStatus: mapBillStatus(bill.status),
  sponsor: formatSponsor(bill),
  title: stripHtml(bill.longTitleEn),
});
