import ShopSearch from "@/_components/ShopSearch"
import { getShops } from "@/services/endPoints"
import Image from 'next/image'
import ShopCard from '@/_components/ShopCard'


async function getData() {
  const res = await getShops()
  if (!res.ok) {
    throw new Error('خطایی در دریافت اطلاعات رخ داده است ... ')
  }
  return res.json()
}

const Home = async () => {

  const shops = await getData()

  let content;
  if (!shops) {
    content = <p>در حال دریافت اطلاعات ...</p>
  } else if (shops && shops.length === 0) {
    content = <Image src={"/icons/notFound.svg"} width={88} height={88} alt="آپلودک" />
  } else if (shops && shops.length > 0) {

    content = (
      <>
        {
          shops.map((item) => (
            <ShopCard key={item._id} name={item.name} shopId={item._id} />
          ))
        }
      </>
    )

  }



  return (
    <div className="p-4 pt-6 ">
      <ShopSearch />
      <div className="w-full flex flex-1 gap-2 pt-2">

        {content}
      </div>
    </div>
  )
}

export default Home