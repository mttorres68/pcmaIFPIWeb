
export const TextArea = ({label, id, placehoolder, rows,name, value,onChange,...props})=>{

    return(
        <div className="-mx-3 md:flex mb-4">
            <div className="md:w-full px-3">
                <div className="block uppercase tracking-wide text-white text-xs font-bold mb-2">
                    <label htmlFor={id}>
                        {label}
                    </label>
                </div>
                <textarea
                    id={id}
                    placeholder={placehoolder}
                    name={name}
                    rows={rows}  
                    value={value}
                    onChange={onChange}
                    className="w-full bg-white-200 text-black border-2 border-gray-400 rounded-lg py-2 px-4 mb-1 focus:outline-none focus:ring-2 focus:ring-offset-black focus:border-transparent hover:bg-blue-gray-100 placeholder-blue-gray-900 scroll-m-2"
                >
                </textarea>
            </div>
        </div>

    )
}