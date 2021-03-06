export const addBill = bill => (
  $.ajax({
    method: 'POST',
    url: '/api/bills',
    data: { bill },
  })
);

export const deleteBill = billId => (
  $.ajax({
    method: 'DELETE',
    url: `/api/bills/${billId}`,
  })
);

export const requestBills = () => (
  $.ajax({
    method: 'GET',
    url: '/api/bills',
  })
);

export const requestBill = billId => (
  $.ajax({
    method: 'GET',
    url: `/api/bills/${billId}`,
    data: { billId },
  })
);

export const updateBill = bill => (
  $.ajax({
    method: 'PATCH',
    url: `/api/bills/${bill.id}`,
    data: { bill },
  })
);
