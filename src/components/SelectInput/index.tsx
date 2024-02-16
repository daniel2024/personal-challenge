import  {  useState } from "react";
import css from './SelectInput.module.css';
import classnames from 'classnames'

interface ElementList {
  label: string;
  value: any;
}

interface SelectProps {
  list : ElementList[],
  placeholderSearch?:string;
  onChange(value:any):void;
  defaultValue?:string;
}

const Selector = ({list = [], placeholderSearch = 'Type here...',defaultValue, onChange}:SelectProps) => {
  const [inputValue, setInputValue] = useState("");
  const [selected, setSelected] = useState(defaultValue || "Select..." );
  const [open, setOpen] = useState(false);


  const handleOnChange = (element:ElementList)=> {
    if (element?.label?.toLowerCase() !== selected.toLowerCase()) {
      setSelected(element?.label);
      setOpen(false);
      setInputValue("");
      onChange(element.value)
    }
  }


  return (
    <div className={classnames("relative font-medium ")}>
      <div
        onClick={() => setOpen(!open)}
        className={classnames(`bg-white w-full flex items-center justify-between  ${
          !selected && "text-gray-700"
        }`, css.containerSelectInput)}
      >
       {selected}
      </div>
      <ul
        className={classnames(css.containerMenuOptions,`  bg-white rounded w-full mt-2 overflow-y-auto ${
          open ? "max-h-60 " : "max-h-0 "
        } `)}
      >
        <div className="flex items-center px-2  mb-2 bg-transparent sticky top-3 bg-white">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value.toLowerCase())}
            placeholder={placeholderSearch}
            className={classnames(css.inputSearch,"w-full placeholder:text-gray-700 p-2 mb-2 outline-none hover:border-sky-600")}
          />
        </div>
        {list?.map((element) => (
          <li
            key={element?.label}
            className={`mx-2 py-2 rounded text-sm hover:bg-sky-600 hover:text-white
            ${
              element?.label?.toLowerCase() === selected?.toLowerCase() &&
              "bg-sky-600 text-white"
            }
            ${
              element?.label?.toLowerCase().startsWith(inputValue)
                ? "block"
                : "hidden"
            }`}
            onClick={ ()=>handleOnChange(element)}
          >
            {element?.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Selector;