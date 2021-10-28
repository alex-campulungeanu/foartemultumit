import React, {useState} from 'react'
import {useSelector} from 'react-redux'
import {BsHash} from 'react-icons/bs'
import {FaChevronDown, FaChevronRight, FaPlus} from 'react-icons/fa'

interface  DropdownInterface {
  header: string,
  reviews: any
}

// const summaryLabel: string[] = ['Total', 'Filtered']

const ReviewsSummaryBar = () => {
  // TODO: fix this
  // @ts-ignore:next-line
  const reviews = useSelector((state) => state.reviews)
  return (
    <div className='channel-bar shadow-lg'>
      <SummaryTitle />
      <div className='channel-container'>
        <Dropdown header='Reviews' reviews={reviews}/>
      </div>
    </div>
  )
}

const Dropdown = ({header, reviews}: DropdownInterface) => {
  const [expanded, setExpanded] = useState(true)
  return (
    <div className='dropdown'>
      <div onClick={() => setExpanded(!expanded)} className='dropdown-header' >
        <ChevronIcon expanded={expanded} />
        <h5 className={expanded ? 'dropdown-header-text-selected' : 'dropdown-header-text'}>
          {header}
        </h5>
        <FaPlus size='12' className='text-accent text-opacity-80 my-auto ml-auto' />
      </div>
      {expanded && 
        reviews &&
        (
          <div>
            <TopicSelection label='Total' number={reviews.totalReviews.length}/>
            <TopicSelection label='Filtered' number={reviews.filteredReviews.length}/>
          </div>
        )
      }
    </div>
  )
}

const ChevronIcon=({expanded}: {expanded: boolean}) => {
  const chevClass = 'text-accent text-opacity-80 my-auto mr-1'
  return expanded ? (
    <FaChevronDown size='14' className={chevClass}/>
  ) : (
    <FaChevronRight size='14' className={chevClass}/>
  )
}

const TopicSelection = ({label, number}: {label: string, number: string}) => {
  return (
    <div className='dropdown-selection'>
      <BsHash size='24' className='text-gray-400'/>
      <h5 className='dropdown-selection-text'>
        <div>{label}: {number}</div>
      </h5>
      {/* <h5 className='dropdown-selection-text'>{number}</h5> */}
    </div>
  )
}

const SummaryTitle = () => {
  return (
    <div className='channel-block'>
      <h5 className='channel-block-text'>Summary</h5>
    </div>
  )
}

export default ReviewsSummaryBar
