import React, { useState } from 'react'
import BasicBtn from '../../components/buttons/BasicBtn'
import { FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { deleteFavAllItem, deleteFavItem } from '../../redux/actions/fav.action';
import { favServices } from '../../services/FavServices';

function Sidebar() {
    const [input, setInput] = useState("")
    const list = useSelector((state) => state.favList)
    const user = useSelector((state)=> state.userDetails)
    const dispatch = useDispatch();



    const deleteItem = (param) => {
        dispatch(deleteFavItem(param))
    }

    const saveList = () => {
        console.log(input);
        console.log(list.length);

        if (list.length && input) {
            favServices.setFavList(
                {
                    name: input,
                    movieInfo:
                        list.map(element => {
                            return {
                                title: element.Title,
                                poster: element.Poster,
                                imdbId: element.imdbID,
                            }
                        }),
                    userId: user.id
                }
            )
            dispatch(deleteFavAllItem())
        } else {
            alert("Her yeri doldurun")
        }
    }

    return (
        <div className='fixed flex flex-col gap-5 h-full bg-black z-10 w-[80%] text-white py-10 px-10 md:w-[50%] lg:w-[30%]'>
            <input
                onChange={(e) => setInput(e.target.value)}
                className='text-black p-2 rounded-md w-full' type="text" placeholder='Listin adı nedir' />
            {/* FAV LIST ITEMS */}
            <ul className='flex flex-col gap-5'>
                {list.map((item) => {
                    return (
                        <div className='flex gap-2 items-center'>
                            <li className='border border-red-600 w-[90%] p-2'>{item.Title}</li>
                            <div
                                onClick={() => deleteItem(item)}
                                className='bg-red-600 p-2'>
                                <FaTrash className='  text-white' />
                            </div>
                        </div>
                    )
                })}

            </ul>

            <BasicBtn title={"Yadda Saxla"} func={saveList} />
        </div>
    )
}

export default Sidebar



