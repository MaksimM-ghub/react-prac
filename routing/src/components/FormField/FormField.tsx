import { FC } from 'react'
import { formFieldType } from '../../types/formField'

export const FormField: FC<formFieldType> = ({label, children}) => {
  return (
    <label className="playlist__label">
      <span className="playlist__filter-name">{label}</span>
      {children}
    </label>
  )
}