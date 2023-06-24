'use client';

export default function ByPrice({ filterValues, setFilterValues }) {
  const { min, max } = filterValues;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilterValues({ ...filterValues, [name]: value });
  };

  return (
    <div>
      <form className='flex flex-col justify-center gap-5 items-center w-full mt-3 text-white'>
        <div className='flex gap-2 text-black'>
          <div>
            <label>Min: </label>
            <input
              type='text'
              name='min'
              value={min}
              onChange={handleChange}
              className='w-14 text-center'
            />
          </div>
          <p>-</p>
          <div>
            <label>Max: </label>
            <input
              type='text'
              name='max'
              value={max}
              onChange={handleChange}
              className='w-14 text-center'
            />
          </div>
        </div>
        <input
          type='range'
          name='max'
          min={0}
          max={1000}
          step='5'
          value={max}
          onChange={handleChange}
          className='w-[230px] h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer range-sm dark:bg-gray-700'
        />
      </form>
    </div>
  );
}
