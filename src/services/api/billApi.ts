import { Bill, BillApiRecord, BillApiResponse } from '@models/billModel';
import { BILLS_API_URL } from '@/services/routes';
import { mapBillApiRecordToBill } from '@/utils/billUtils';

export const getBillsApi = async (limit = 100): Promise<Bill[]> => {
  const url = new URL(BILLS_API_URL);
  url.searchParams.set('limit', String(limit));

  const response = await fetch(url.toString(), {
    headers: {
      Accept: 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch bills (${response.status} ${response.statusText})`);
  }

  const payload = (await response.json()) as BillApiResponse;

  const bills = (payload.results ?? [])
    .map((entry) => entry.bill)
    .filter((bill): bill is BillApiRecord => bill != null)
    .slice(0, limit)
    .map(mapBillApiRecordToBill);

  return bills;
};
