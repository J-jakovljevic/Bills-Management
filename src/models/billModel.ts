export type BillApiResponse = {
  head: {
    counts: {
      billCount: number;
      resultCount: number;
    };
  };
  results: Array<{
    bill: BillApiRecord | null;
  }>;
};

export type BillApiRecord = {
  billNo: string;
  billType: string;
  billYear: string;
  longTitleEn: string;
  longTitleGa: string;
  source: string;
  status: string;
  sponsors?: Array<{
    sponsor?: {
      by?: {
        showAs?: string | null;
      } | null;
    } | null;
  } | null> | null;
};

export enum BillType {
  Government = 'Government Bill',
  Private = 'Private Bill',
  PrivateMembers = "Private Members' Bill",
  Public = 'Public Bill',
}

export type BillTypeValue = BillType | 'Unknown';

export enum BillStatus {
  Current = 'Current',
  Withdrawn = 'Withdrawn',
  Enacted = 'Enacted',
  Rejected = 'Rejected',
  Defeated = 'Defeated',
  Lapsed = 'Lapsed',
}

export type BillStatusValue = BillStatus | 'Unknown';

export type Bill = {
  billNo: string;
  billType: BillTypeValue;
  billStatus: BillStatusValue;
  sponsor: string;
  title: string;
};

export type TableHeader = {
  label: string;
  width: string;
};
