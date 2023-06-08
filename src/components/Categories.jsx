import React from 'react';
import {TiFlashOutline} from 'react-icons/ti';
import {RiBillLine} from 'react-icons/ri';
import {IoGameControllerOutline} from 'react-icons/io5';
import {BsGift} from 'react-icons/bs';
import {FiMoreHorizontal} from 'react-icons/fi';
import { IconContext } from "react-icons";

export default function Categories() {
    return (
        <div className='categories'>
            <div className="container">
                <div className="buttons">
                        <div className="btn ">
                            <IconContext.Provider
                            value={{ color: '#147878', size: '2em' }}
                            >
                                <button>
                                    <TiFlashOutline />
                                </button>
                            </IconContext.Provider>
                            Flash Deal
                        </div>
                        <div className="btn">
                            <IconContext.Provider
                            value={{ color: '#147878', size: '2em' }}
                            >
                                <button>
                                    <RiBillLine />
                                </button>
                            </IconContext.Provider>
                            Bill
                        </div>
                        <div className="btn">
                            <IconContext.Provider
                            value={{ color: '#147878', size: '2em' }}
                            >
                                <button>
                                    <IoGameControllerOutline />
                                </button>
                            </IconContext.Provider>
                            Game
                        </div>
                        <div className="btn">
                            <IconContext.Provider
                            value={{ color: '#147878', size: '2em' }}
                            >
                                <button>
                                    <BsGift />
                                </button>
                            </IconContext.Provider>
                            Daily Gift
                        </div>
                        <div className="btn">
                            <IconContext.Provider
                            value={{ color: '#147878', size: '2em' }}
                            >
                                    <button>
                                        <FiMoreHorizontal />
                                    </button>
                            </IconContext.Provider>
                            More
                        </div>
                </div>
            </div>
        </div>
    )
}
