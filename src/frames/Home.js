import React from 'react'
import { FaFacebook, FaHome, FaInstagramSquare } from 'react-icons/fa';
import { BsChevronDown } from 'react-icons/bs';
const Home = () => {
    return (
        <>


            <div>
                <div className='bg-white md:h-16 '>
                    <div className='text-center flex justify-center  text-white mt-4'>
                        <h1 className='bg-black text-xl w-44 h-12 md:text-2xl pt-2'>TRACKING</h1>
                    </div>
                    <div className='flex -mt-8 gap-2  md:flex float-right md:gap-10 md:-mt-8  '>
                    <a href='https://www.facebook.com/' ><FaFacebook size={35} /></a>
                    <a href='https://www.instagram.com/'><FaInstagramSquare size={35} /></a>

                    </div>
                </div>

                <div className='bg-gray-200 h-screen' >

                    <div className='flex flex-col md:flex-row gap-4 w-max h-max relative left-96'>
                        <div className='bg-white mt-2 rounded-md drop-shadow-2xl' style={{ height: 620, width: 450 }}>
                            <div>
                                <p className='p-6 mr-40 text-lg'>Estimated Delivery Date</p>
                                <img className='float-right relative bottom-10 right-8' src="assets/share.png" alt='logo' />
                            </div>
                            <div className=''>
                                <p className='font-bold text-2xl ml-4 '>Tuesday,</p>
                                <p className='font-semibold text-5xl text-blue-600 ml-4 '>October 26</p>
                                <p className='text-orange-600 text-md ml-4 relative  top-8'>DELIVERED</p>
                                <hr className="ml-4 border-gray-300 relative  top-12 " style={{ width: 350 }}></hr>

                                <div className='font-bold text-sm relative top-16 p-2'>BLUEDART</div>
                                <div className='text-xs font-bold relative top-16 text-black p-2'>Tracking ID:<span className='text-indigo-600'>75496502933</span></div>
                                <div className='text-blue-600 font-semibold relative top-8 text-right mr-5 '>Support?</div>
                            </div>
                            <div class="h-60 overflow-y-scroll  mt-24">
                                <div class="flex justify-around ">
                                    <div>
                                        <h1 class="font-bold text-lg">25 Oct</h1>
                                        <h1 class=" text-blue-600 text-sm">02:40 PM</h1>
                                    </div>
                                    <div>
                                        < p class="border-2 rounded-full h-4 w-4 ring-2 ring-gray-300 bg-green-500"></p>
                                    </div>
                                    <div className='mr-6'>
                                        <h2 class="text-xs font-semibold pb-3 mr-6"><span className="font-bold">Activity:</span> <span className='text-gray-400'>Shipment Delivered</span></h2>

                                        <h2 class="text-xs font-semibold"> <span className="font-bold">Location:</span ><span class="text-gray-400 opacit-60">Hadapsar Service Centre</span></h2>
                                        <hr class="border  border-gray-600 opacity-40 mt-4"></hr>
                                    </div>
                                </div>
                                <div class="flex justify-around pt-5 ">
                                    <div>
                                        <h1 class="font-bold text-lg">25 Oct</h1>
                                        <h1 class=" text-blue-600 text-sm">11:14 AM</h1>
                                    </div>
                                    <div>
                                        < p class="border-2 rounded-full h-4 w-4 ring-2 ring-gray-300 bg-gray-500"></p>
                                    </div>
                                    <div className='mr-6'>
                                        <h2 class="text-xs font-semibold pb-3 "><span className="font-bold">Activity:</span> <span className='text-gray-400'>Shipment out for Delivery</span></h2>

                                        <h2 class="text-xs font-semibold"> <span className="font-bold">Location:</span ><span class="text-gray-400 opacit-60">Hadapsar Service Centre</span></h2>
                                        <hr class="border  border-gray-600 opacity-40 mt-4"></hr>
                                    </div>
                                </div>
                                <div class="flex justify-around pt-5 ">
                                    <div>
                                        <h1 class="font-bold text-lg">25 Oct</h1>
                                        <h1 class=" text-blue-600 text-sm">10:38 AM</h1>
                                    </div>
                                    <div>
                                        < p class="border-2 rounded-full h-4 w-4 ring-2 ring-gray-300 bg-gray-500"></p>
                                    </div>
                                    <div className='mr-6'>
                                        <h2 class="text-xs font-semibold pb-3 mr-6"><span className="font-bold">Activity:</span> <span className='text-gray-400'>Shipment Arrived</span></h2>

                                        <h2 class="text-xs font-semibold"> <span className="font-bold">Location:</span ><span class="text-gray-400 opacit-60">Hadapsar Service Centre</span></h2>
                                        <hr class="border  border-gray-600 opacity-40 mt-4"></hr>
                                    </div>
                                </div>
                                <div class="flex justify-around pt-5 ">
                                    <div>
                                        <h1 class="font-bold text-lg">24 Oct</h1>
                                        <h1 class=" text-blue-600 text-sm">11:34 AM</h1>
                                    </div>
                                    <div>
                                        < p class="border-2 rounded-full h-4 w-4 ring-2 ring-gray-300 bg-gray-500"></p>
                                    </div>
                                    <div>
                                        <h2 class="text-xs font-semibold pb-3"><span className="font-bold">Activity:</span> <span className='text-gray-400'>Shipment Further Connected</span></h2>

                                        <h2 class="text-xs font-semibold"> <span className="font-bold">Location:</span ><span class="text-gray-400 opacit-60">Pune Hub</span></h2>
                                        <hr class="border  border-gray-600 opacity-40 mt-4"></hr>
                                    </div>
                                </div>
                                <div class="flex justify-around pt-5 ">
                                    <div>
                                        <h1 class="font-bold text-lg">24 Oct</h1>
                                        <h1 class=" text-blue-600 text-sm">10:24 AM</h1>
                                    </div>
                                    <div>
                                        < p class="border-2 rounded-full h-4 w-4 ring-2 ring-gray-300 bg-gray-500"></p>
                                    </div>
                                    <div className='mr-6'>
                                        <h2 class="text-xs font-semibold pb-3 mr-6"><span className="font-bold">Activity:</span> <span className='text-gray-400'>Shipment Delivered</span></h2>

                                        <h2 class="text-xs font-semibold"> <span className="font-bold">Location:</span ><span class="text-gray-400 opacit-60">Hadapsar Service Centre</span></h2>
                                        <hr class="border  border-gray-600 opacity-40 mt-4"></hr>
                                    </div>
                                </div>
                                <div class="flex justify-around pt-5 ">
                                    <div>
                                        <h1 class="font-bold text-lg">24 Oct</h1>
                                        <h1 class=" text-blue-600 text-sm">07:36 AM</h1>
                                    </div>
                                    <div>
                                        < p class="border-2 rounded-full h-4 w-4 ring-2 ring-gray-300 bg-gray-500 ml-4"></p>
                                    </div>
                                    <div className=''>
                                        <h2 class="text-xs font-semibold pb-3 mr-6"><span className="font-bold">Activity:</span> <span className='text-gray-400'>Shipment Further Connected</span></h2>

                                        <h2 class="text-xs font-semibold"> <span className="font-bold">Location:</span ><span class="text-gray-400 opacit-60">Mumbai Hub</span></h2>
                                        <hr class="border  border-gray-600 opacity-40 mt-4"></hr>
                                    </div>
                                </div>
                                <div class="flex justify-around pt-5 ">
                                    <div>
                                        <h1 class="font-bold text-lg">24 Oct</h1>
                                        <h1 class=" text-blue-600 text-sm">02:46 AM</h1>
                                    </div>
                                    <div>
                                        < p class="border-2 rounded-full h-4 w-4 ring-2 ring-gray-300 bg-gray-500"></p>
                                    </div>
                                    <div>
                                        <h2 class="text-xs font-semibold pb-3 mr-6"><span className="font-bold">Activity:</span> <span className='text-gray-400'>Shipment Arrived At Hub</span></h2>

                                        <h2 class="text-xs font-semibold"> <span className="font-bold">Location:</span ><span class="text-gray-400 opacit-60">Mumbai Hub</span></h2>
                                        <hr class="border  border-gray-600 opacity-40 mt-4"></hr>
                                    </div>
                                </div>
                                <div class="flex justify-around pt-5 ">
                                    <div>
                                        <h1 class="font-bold text-lg">24 Oct</h1>
                                        <h1 class=" text-blue-600 text-sm">12:08 AM</h1>
                                    </div>
                                    <div>
                                        < p class="border-2 rounded-full h-4 w-4 ring-2 ring-gray-300 bg-gray-500 ml-4"></p>
                                    </div>
                                    <div>
                                        <h2 class="text-xs font-semibold pb-3 mr-6"><span className="font-bold">Activity:</span> <span className='text-gray-400'>Shipment Further Connected</span></h2>

                                        <h2 class="text-xs font-semibold"> <span className="font-bold">Location:</span ><span class="text-gray-400 opacit-60">Chennai Airport Hub</span></h2>
                                        <hr class="border  border-gray-600 opacity-40 mt-4"></hr>
                                    </div>
                                </div>
                                <div class="flex justify-around pt-5 ">
                                    <div>
                                        <h1 class="font-bold text-lg">23 Oct</h1>
                                        <h1 class=" text-blue-600 text-sm">07:43 PM</h1>
                                    </div>
                                    <div>
                                        < p class="border-2 rounded-full h-4 w-4 ring-2 ring-gray-300 bg-gray-500 mr-2"></p>
                                    </div>
                                    <div>
                                        <h2 class="text-xs font-semibold pb-3 mr-6"><span className="font-bold">Activity:</span> <span className='text-gray-400'>Shipment Arrived At Hub</span></h2>

                                        <h2 class="text-xs font-semibold"> <span className="font-bold">Location:</span ><span class="text-gray-400 opacit-60">Chennai Airport Hub</span></h2>
                                        <hr class="border  border-gray-600 opacity-40 mt-4"></hr>
                                    </div>
                                </div>
                                <div class="flex justify-around pt-5 ">
                                    <div>
                                        <h1 class="font-bold text-lg">23 Oct</h1>
                                        <h1 class=" text-blue-600 text-sm">05:19 PM</h1>
                                    </div>
                                    <div>
                                        < p class="border-2 rounded-full h-4 w-4 ring-2 ring-gray-300 bg-gray-500 ml-4"></p>
                                    </div>
                                    <div>
                                        <h2 class="text-xs font-semibold pb-3 mr-6"><span className="font-bold">Activity:</span> <span className='text-gray-400'>Shipment Further Connected</span></h2>

                                        <h2 class="text-xs font-semibold"> <span className="font-bold">Location:</span ><span class="text-gray-400 opacit-60">Gindy Cod Processing Unit</span></h2>
                                        <hr class="border  border-gray-600 opacity-40 mt-4"></hr>
                                    </div>
                                </div>
                                <div class="flex justify-around pt-5 ">
                                    <div>
                                        <h1 class="font-bold text-lg">23 Oct</h1>
                                        <h1 class=" text-blue-600 text-sm">03:35 PM</h1>
                                    </div>
                                    <div>
                                        < p class="border-2 rounded-full h-4 w-4 ring-2 ring-gray-300 bg-gray-500 ml-2"></p>
                                    </div>
                                    <div className='mr-8'>
                                        <h2 class="text-xs font-semibold pb-3 "><span className="font-bold">Activity:</span> <span className='text-gray-400'>Shipment Arrived</span></h2>

                                        <h2 class="text-xs font-semibold"> <span className="font-bold">Location:</span ><span class="text-gray-400 opacit-60">Gindy Cod Processing Unit</span></h2>
                                        <hr class="border  border-gray-600 opacity-40 mt-4"></hr>
                                    </div>
                                </div>
                                <div class="flex justify-around pt-5 ">
                                    <div>
                                        <h1 class="font-bold text-lg">23 Oct</h1>
                                        <h1 class=" text-blue-600 text-sm ">02:03 PM</h1>
                                    </div>
                                    <div>
                                        < p class="border-2 rounded-full h-4 w-4 ring-2 ring-gray-300 bg-gray-500"></p>
                                    </div>
                                    <div className='mr-6'>
                                        <h2 class="text-xs font-semibold pb-3 mr-6"><span className="font-bold">Activity:</span> <span className='text-gray-400'>Shipment Picked up</span></h2>

                                        <h2 class="text-xs font-semibold"> <span className="font-bold">Location:</span ><span class="text-gray-400 opacit-60">Velachery</span></h2>
                                        <hr class="border  border-gray-600 opacity-40 mt-4"></hr>
                                    </div>
                                </div>



                            </div>


                        </div>


                        <div className='flex flex-col w-max h-max'>
                            <div className='bg-white mt-2 rounded-md drop-shadow-2xl ' style={{ height: 170, width: 450 }}>
                                <div className='text-sm font-semibold flex justify-starting p-6 text-black'>How you felt shopping with us?</div>
                                <div className='flex flex-row gap-12 justify-center '>
                                    <div className='flex flex-col gap-2' ><div><img src='assets/frustated.png' /></div><div className='text-xs font-bold' >Frustrated</div></div>
                                    <div className='flex flex-col gap-2' ><div><img src='assets/better.png' /></div><div className='text-xs font-bold'>Can be better</div></div>
                                    <div className='flex flex-col gap-2' ><div><img src='assets/happy.png' /></div><div className='text-xs font-bold'>Extremly happy</div></div>
                                </div>

                            </div>

                            <div className='bg-white mt-2 rounded-md drop-shadow-2xl pl-3' style={{ height: 220, width: 450 }}>
                                <span className='text-black font-semibold text-sm '>
                                    Based your recent experience with us, how likely are you to recommend us to friends & family?
                                </span>

                                <div className='flex justify-evenly w-max h-max gap-16'>
                                    <div><button className='rounded-full w-7 h-7 border-red-600  border-2 border-solid '>1</button></div>
                                    <div><button className='rounded-full w-7 h-7  border-red-400  border-2 border-solid'>2</button></div>
                                    <div><button className='rounded-full w-7 h-7  border-orange-300  border-2 border-solid'>3</button></div>
                                    <div><button className='rounded-full w-7 h-7  border-green-400  border-2 border-solid'>4</button></div>
                                    <div><button className='rounded-full w-7 h-7 border-green-800  border-2 border-solid '>5</button></div>
                                </div>
                                <div className='flex justify-between'>
                                    <div className='pl-2 mt-1'>
                                        <div><BsChevronDown size={14} /></div>
                                        <div className='text-black text-xs '>Not likely</div>
                                    </div>
                                    <div className=''> 

                                        <div className='pl-4 mt-1'>
                                            <BsChevronDown size={14}/></div>
                                        <div className='text-black text-xs mr-4'>Extremly likely</div>
                                    </div>
                                </div>
                                <div className='flex flex-row gap-2 p-4'>
                                    <div><input className='w-64 h-7 bg-gray-200 rounded-md' type='text' placeholder='Enter your remarks'></input></div>
                                    <div><button className='w-24 h-8 bg-sky-700 rounded-md text-white text-sm font-semibold'>Submit</button></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="-mt-14 float-right text-xs font-medium mr-10 ">
                    <h6>Powered By</h6>
                    <img src="assets/blogo1x.png" alt="Logo" />
                </div>



            </div>

        </>
    )
}

export default Home;