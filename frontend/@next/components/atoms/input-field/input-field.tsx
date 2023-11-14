import React from 'react'

export const InputField = ({
  type = 'text',
  placeHolder,
  fieldName,
  readOnly,
  register,
  error,
}: {
  type?: string
  placeHolder: string
  fieldName: string
  readOnly?: boolean
  register: Function
  error?: string
}) => {
  return (
    <div>
      <label
        htmlFor={fieldName}
        className={`block font-medium capitalize text-sm mb-2 ${
          error ? 'text-red-500' : 'text-black'
        }`}
      >
        {fieldName}
      </label>
      <input
        type={type}
        readOnly={readOnly}
        {...register(fieldName)}
        placeholder={placeHolder}
        className={`w-full ${
          readOnly ? 'bg-gray-300' : 'bg-white'
        } py-2 px-4 border-[1px] rounded-[6px] outline-none placeholder-gray-500 ${
          error ? 'text-red-300 border-red-500' : 'text-black border-black'
        }`}
      />
      {error && <p className='text-red-500 text-sm mt-2'>{error}</p>}
    </div>
  )
}
