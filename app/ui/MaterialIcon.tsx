import { TypeOfMaterialIcons } from '@/shared/types/icons.types'
import { FC } from 'react'
import { IconBaseProps, IconType } from 'react-icons'
import * as MaterialIcons from 'react-icons/md'

const MaterialIcon: FC<{ name: TypeOfMaterialIcons } & IconBaseProps> = ({
  name,
  ...rest
}) => {
  const IconComponent = MaterialIcons[name]

  if (!MaterialIcons[name]) return <MaterialIcons.MdDragIndicator />

  return <IconComponent {...rest} />
}
export default MaterialIcon
