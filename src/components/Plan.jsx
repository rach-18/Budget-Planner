function Plan({name, price, del, idx}) {
    return(
        <div className='flex items-center justify-between py-2 px-8 bg-[#222222] text-white rounded-full'>
            <p>{name}</p>
            <p>Rs. {price}</p>
            <i 
                onClick={() => del(idx)}
                className="text-red-400 cursor-pointer fa-solid fa-trash">
            </i>
        </div>
    )
}

export default Plan;
