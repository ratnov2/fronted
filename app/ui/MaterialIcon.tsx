import { TypeOfMaterialIcons } from '@/shared/types/icons.types'
import { FC } from 'react'
import * as MaterialIcons from 'react-icons/md'

const MaterialIcon: FC<{ name: TypeOfMaterialIcons }> = ({ name }) => {
  const IconComponent = MaterialIcons[name]

  if (!MaterialIcons[name]) return <MaterialIcons.MdDragIndicator />

  return <IconComponent />
}
export default MaterialIcon
