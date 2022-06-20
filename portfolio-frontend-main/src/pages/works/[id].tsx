import { useRouter } from "next/router";
import { useEffect, useState } from 'react'
import Image from 'next/image'
//import { v4 as uuidv4 } from 'uuid'
import getWorks from "../../lib/works";
import { IWork } from "../../intarfaces/works";

export default function works({pages}:{pages:IWork}) {
    const title = pages?.title;
    const description = pages?.description;
  
  
  
  
    /* const router = useRouter()
    const { id } = router.query
    const [works, setWorks] = useState(null)

    useEffect(( ) => {
        const works = async () => {
            const res = await getWorks()
            console.table(res?.data?.results)
            console.log(res)
            const data = res?.data?.results
            setWorks(data)
        }

        works()

    }, [] )*/

    return (
        <>
        <h1> {title} </h1>
        <div>
            {JSON.stringify(works)}
        </div>
        </>

    )
}
