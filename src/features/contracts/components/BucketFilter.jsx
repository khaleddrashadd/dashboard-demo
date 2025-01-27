import { useDispatch, useSelector } from 'react-redux';
import { getSelectedBuckets, selectBuckets } from '../store/contractSlice';
import MultiSelect from './MultiSelect';
const buckets = [
  { id: 1, name: 'Current', label: 'Current' },
  { id: 2, name: 'Grace period', label: 'Grace period' },
  { id: 3, name: 'Bucket 1', label: 'Bucket 1' },
  { id: 4, name: 'Bucket 2', label: 'Bucket 2' },
  { id: 5, name: 'Bucket 3', label: 'Bucket 3' },
  { id: 6, name: 'Bucket 4', label: 'Bucket 4' },
  { id: 7, name: 'Bucket 5', label: 'Bucket 5' },
  { id: 8, name: 'Bucket 6', label: 'Bucket 6' },
  { id: 9, name: 'Write off', label: 'Write off' },
  { id: 10, name: 'Closed', label: 'Closed' },
];

const BucketFilter = () => {
  const dispatch = useDispatch();
  const selectedBuckets = useSelector(getSelectedBuckets);
  return (
    <div className="flex items-center gap-4 flex-col md:flex-row">
      <MultiSelect
        className="w-40"
        labelKey="name"
        options={buckets}
        selectAllLabel="All"
        defaultValue={selectedBuckets}
        onChange={(value) => dispatch(selectBuckets(value))}
      />
    </div>
  );
};

export default BucketFilter;
