import React, {useState} from 'react'
import {BsHash} from 'react-icons/bs'
import {FaChevronDown, FaChevronRight, FaPlus} from 'react-icons/fa'

interface  DropdownInterface {
  header: string,
  selections: string[]
}

const reviewSummary: string[] = ['Total', 'Filtered']

const ReviewsSummaryBar = () => {
  return (
    <div className='channel-bar shadow-lg'>
      <SummaryTitle />
      <div className='channel-container'>
        <Dropdown header='Reviews' selections={reviewSummary}/>
      </div>
    </div>
  )
}

const Dropdown = ({header, selections}:DropdownInterface) => {
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
        selections &&
        selections.map((selection) =><TopicSelection selection={selection} key={selection}/>)
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

const TopicSelection = ({selection}: {selection: string}) => {
  return (
    <div className='dropdown-selection'>
      <BsHash size='24' className='text-gray-400'/>
      <h5 className='dropdown-selection-text'>{selection}</h5>
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