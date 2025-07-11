
const Leaderboard = () => {
  // Placeholder data
  const leaderboard = [
    { name: 'Jane Doe', points: 3450, rank: 1 },
    { name: 'John Smith', points: 2980, rank: 2 },
    { name: 'Emily Jones', points: 2760, rank: 3 },
    { name: 'Michael Brown', points: 2450, rank: 4 },
    { name: 'Emma Wilson', points: 2345, rank: 5 },
  ];

  return (
    <div className='bg-white border border-gray-200 rounded-lg shadow-md p-6'>
      <h3 className='text-lg font-semibold text-gray-900 mb-4'>Leaderboard</h3>
      <ol className='list-decimal list-inside space-y-2'>
        {leaderboard.map((user, index) => (
          <li key={index} className='flex justify-between items-center'>
            <span className='font-medium text-gray-800'>{user.name}</span>
            <span className='text-sm text-gray-600'>{user.points} points</span>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Leaderboard;

