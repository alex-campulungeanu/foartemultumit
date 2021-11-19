import {useState} from 'react'
import {FaChevronDown, FaChevronRight, FaPlus} from 'react-icons/fa'
import {BsHash} from 'react-icons/bs'


interface  DropdownInterface {
  header: string,
  reviews: any
}

export const Dropdown = ({header, reviews}: DropdownInterface) => {
  const [expanded, setExpanded] = useState(true)

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