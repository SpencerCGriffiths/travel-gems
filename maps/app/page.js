import Image from 'next/image'
import CategoryList from './components/Home/CategoryList'
import RangeSelect from './components/Home/RangeSelect'
import SelectRaing from './components/Home/SelectRaing'
import GoogleMapView from './components/Home/GoogleMapView'

export default function Home() {
  // grid to display two elements (select food and maps)
  return (
    <div className='grid
    grid-cols-1
    md:grid-cols-4 h-screen'>
      <div className="p-3">
        <CategoryList />
        <RangeSelect />
        <SelectRaing />
      </div>
      <div className="col-span-3">
        <GoogleMapView />
      </div>
    </div>
  )
}
