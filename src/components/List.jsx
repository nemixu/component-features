import React, { useState } from 'react';

const ENVELOPE_STATUS = {
  Completed: 'Completed',
  Correct: 'Correct',
  Declined: 'Declined',
  Deleted: 'Deleted',
  Expired: 'Expired',
  Sent: 'Sent',
  Voided: 'Voided',
};

function List() {
  const [selectedStatus, setSelectedStatus] = useState({
    Completed: true,
    Correct: false,
    Declined: false,
    Deleted: false,
    Expired: false,
    Sent: false,
    Voided: false,
  });

  const handleClickedStatusChange = (event) => {
   const status = event.target.value;
   setSelectedStatus({...selectedStatus, [status]: !selectedStatus[status]});
  };

  const selectOptions = Object.values(ENVELOPE_STATUS).map((status) => (
   <option key={status} value={status}>
     {status}
   </option>
 ))
  return (
    <select style={{ width: "300px", height: "300px" }} multiple onChange={handleClickedStatusChange} value={Object.entries(selectedStatus).filter(([status, selected]) => selected).map(([status]) => status)}>
      {selectOptions}
    </select>
  );
};

export default List;