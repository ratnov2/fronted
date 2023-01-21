import Link from 'next/link'
import { FC } from 'react'
import MaterialIcon from 'ui/MaterialIcon'
import SkeletonLoader from 'ui/skeleton-loader/SkeletonLoader'
import { TypesRenderAdminTableProps } from './admin-table.inteface'
import style from './admin-table.module.scss'
import TableNotAFound from './TableNotAFound'

const Table: FC<TypesRenderAdminTableProps> = ({
  data,
  isLoading,
  removeHandler,
  edit,
}) => {
  return (
    <>
      {!isLoading ? (
        data?.length ? (
          data.map((element) => {
            return (
              <li key={element._id} className={style.item}>
                {element.item.map((item, key) => {
                  if (item)
                    return (
                      <span key={key} className="w-1/3">
                        {item}
                      </span>
                    )
                  return (
                    <span key={key} className="w-1/3">
                      not a value
                    </span>
                  )
                })}
                <span className="w-1/3">
                  <figure onClick={() => removeHandler(element._id)}>
                    <MaterialIcon name={'MdDelete'} />
                  </figure>
                  <figure>
                    <Link href={`/manage/${edit}/edit/${element._id}`}>
                      <MaterialIcon name={'MdModeEdit'} />
                    </Link>
                  </figure>
                </span>
              </li>
            )
          })
        ) : (
          <TableNotAFound />
        )
      ) : (
        <SkeletonLoader height={30} count={5} className="my-1.5" />
      )}
    </>
  )
}
export default Table
