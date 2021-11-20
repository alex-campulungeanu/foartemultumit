import {useState} from 'react'
import {FaChevronDown, FaChevronRight, FaPlus} from 'react-icons/fa'



interface  DropdownInterface {
  header: string,
  content: JSX.Element
}

export const DropdownContainer = ({header, content}: DropdownInterface) => {
  const [expanded, setExpanded] = useState(true)

  const ChevronIcon=({expanded}: {expanded: boolean}) => {
    const chevClass = 'text-accent text-opacity-80 my-auto mr-1'
    return expanded ? (
      <FaChevronDown size='14' className={chevClass}/>
    ) : (
      <FaChevronRight size='14' className={chevClass}/>
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
      {expanded && content
      }
    </div>
  )
}