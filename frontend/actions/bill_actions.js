import * as BillApiUtil from '../util/bill_api_util';

export const RECEIVE_BILLS = 'RECEIVE_BILLS';
export const RECEIVE_BILL = 'RECEIVE_BILL';
export const REMOVE_BILL = 'REMOVE_BILL';
export const RECEIVE_BILLS_ERRORS = 'RECEIVE_BILLS_ERRORS';

export const fetchBills = () => (
  dispatch => BillApiUtil.requestBills().then( bills => dispatch(receiveBills(bills)))
);

export const receiveBills = bills => ({
  type: RECEIVE_BILLS,
  bills,
});

export const fetchBill = (billId) => (
  dispatch => BillApiUtil.requestBill(billId).then( bill => dispatch(receiveBill(bill)))
);

export const receiveBill = bill => ({
  type: RECEIVE_BILL,
  bill,
});

export const deleteBill = billId => (
  dispatch => BillApiUtil.removeBill(billId).then( () => dispatch(removeBill(billId)))
);

export const removeBill = billId => ({
  type: REMOVE_BILL,
  billId,
});

export const receiveBillsErrors = billsErrors => ({
  type: RECEIVE_BILLS_ERRORS,
  billsErrors,
});

export const addBill = bill => (
  dispatch => BillApiUtil.addBill(bill)
  .then( billFromServer => dispatch( receiveBill(billFromServer)) )
);

export const updateBill = bill => (
  dispatch => BillApiUtil.updateBill(bill)
  .then( updatedBill => dispatch(receiveBill(updatedBill)))
);
