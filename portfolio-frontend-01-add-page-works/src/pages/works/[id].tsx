import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { v4 as uuidv4 } from 'uuid'
import getWorks from '../../lib/work'

export default function Works() {
  const router = useRouter()
  const { id } = router.query
  const [works, setWorks] = useState(null)

  useEffect(() => {
    const worksData = async () => {
      const res = await getWorks()
      const data = res?.data?.results
      setWorks(data)
    }

    worksData()
  }, [])

  return (
    <>
      <h1>Моя работа {id}</h1>
      <div>
        {(works || []).map(({ name, species, gender, image }) => (
          <div key={uuidv4()}>
            <div>
              <Image alt='avatar image' src={image} width={350} height={350} layout='fixed' />
            </div>
            <p>{name}</p>
            <p>{species}</p>
            <p>{gender}</p>
          </div>
        ))}
      </div>
    </>
  )
}
