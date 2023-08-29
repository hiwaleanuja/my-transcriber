import Image from 'next/image'
import RecordButton from '@/components/RecordButton'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col gap-10 items-center p-24">
      <RecordButton/>
      <div className='text-gray-600 text-xl'>
        Live text will be displayed here
      </div>
    </div>
  )
}
