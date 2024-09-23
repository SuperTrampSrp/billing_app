import { useState } from "react";
import Drawer from "./Drawer";
import ScrollTable from "./ScrollTable";
import Summary from "./Summary";
import CloseIcon from '@mui/icons-material/Close';

const FirstModal = ({ onCloseModal }) => {

    const [openRight, setOpenRight] = useState(false);



    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 ">
            <div className="bg-teal-900 border border-teal-600 border-solid border-l-teal-800 rounded-lg shadow-lg transform transition-all duration-300 scale-100 w-11/12">
                <div className="flex justify-center text-white">
                    <h2 className="text-xl font-bold m-2">Sales Details</h2>
                </div>
                <div className="flex flex-row bg-cyan-200 p-2">
                    <div className="basis-5/12 flex flex-col gap-1">
                        <div className="flex justify-between pr-2 items-center">
                            <div className="w-2/12 flex justify-end pr-1">
                                <label htmlFor="docNo" className="font-medium text-gray-900 ">
                                    Doc No :
                                </label>
                            </div>
                            <div className="w-3/12">
                                <input
                                    id="docNo"
                                    name="docNo"
                                    type="text"
                                    className=" rounded-md border-0 py-1.5 pl-2 pr-2 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-teal-600 w-full"
                                />
                            </div>
                            <div className="flex w-7/12 ml-1 justify-between">
                                <div className="flex items-center">
                                    <input type="radio" id="credit" className="appearance-none w-4 h-4 border-2 border-teal-500 checked:border-red-600 rounded-full" />
                                    <label htmlFor="credit" className="ms-2 font-medium text-gray-900">Credit</label>
                                </div>
                                <div className="">
                                    <p className="font-medium text-gray-900">Last Bill Amt : .00</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-between pr-2 items-center">
                            <div className="w-2/12 flex justify-end pr-1">
                                <label htmlFor="customer" className="font-medium text-gray-900">
                                    Customer :
                                </label>
                            </div>
                            <div className="w-3/12">
                                <select name="customer" id="customer" className="rounded-md border-0 py-1.5 pl-2 pr-2 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-teal-600 w-full">
                                    <option value=""></option>
                                    <option value="customer1">Customer 1</option>
                                    <option value="customer2">Customer 2</option>
                                    <option value="customer3">Customer 3</option>
                                    <option value="customer4">Customer 4</option>
                                    <option value="customer5">Customer 5</option>
                                    <option value="customer6">Customer 6</option>
                                </select>
                            </div>
                            <div className="w-7/12 ml-1">
                                <input type="text" id="aaa" className="rounded-md border-0 py-1.5 pl-2 pr-2 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-teal-600 w-full" />
                            </div>
                        </div>
                        <div className="flex justify-between gap-1 pr-2 items-center">
                            <div className="">
                            </div>
                            <div className="w-10/12">
                                <input type="text" id="bbb" className="rounded-md border-0 py-1.5 pl-2 pr-2 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-teal-600 w-full" />
                            </div>
                        </div>
                        <div className="flex justify-between gap-1 pr-2 items-center">
                            <div className="">
                            </div>
                            <div className="w-10/12">
                                <input type="text" id="ccc" className="rounded-md border-0 py-1.5 pl-2 pr-2 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-teal-600 w-full" />
                            </div>
                        </div>
                        <div className="flex justify-between gap-1 pr-2 items-center">
                            <div className="w-2/1">
                            </div>
                            <div className="w-10/12">
                                <input type="text" id="ddd" className="rounded-md border-0 py-1.5 pl-2 pr-2 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-teal-600 w-full" />
                            </div>
                        </div>
                        <div className="flex justify-between gap-1 pr-2 items-center">
                            <div className="flex justify-between w-6/12 items-center">
                                <div className="w-2/6 flex justify-end pr-1">
                                    <label htmlFor="phone" className="font-medium text-gray-900">
                                        Phone :
                                    </label>
                                </div>
                                <div className="w-4/6">
                                    <input type="text" id="phone" autoComplete="0000000000" className="rounded-md border-0 py-1.5 pl-2 pr-2 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-teal-600 w-full" />
                                </div>
                            </div>
                            <div className="flex justify-between w-6/12 items-center">
                                <div className="w-3/12 flex justify-end pr-1">
                                    <label htmlFor="gstIn" className="font-medium text-gray-900">
                                        GSTin :
                                    </label>
                                </div>
                                <div className="w-9/12">
                                    <input type="text" id="gstIn" className="rounded-md border-0 py-1.5 pl-2 pr-2 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-teal-600 w-full" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="basis-4/12 flex flex-col gap-1 justify-between">
                        <div className="flex justify-start pr-2 items-center">
                            <div className="w-3/12 flex justify-end pr-1">
                                <label htmlFor="salesman" className="font-medium text-gray-900">
                                    Salesman :
                                </label>
                            </div>
                            <div className="w-5/12">
                                <select name="salesman" id="salesman" className="rounded-md border-0 py-1.5 pl-2 pr-2 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-teal-600 w-full">
                                    <option value=""></option>
                                    <option value="customer1">Customer 1</option>
                                    <option value="customer2">Customer 2</option>
                                    <option value="customer3">Customer 3</option>
                                    <option value="customer4">Customer 4</option>
                                    <option value="customer5">Customer 5</option>
                                    <option value="customer6">Customer 6</option>
                                </select>
                            </div>
                        </div>
                        <div className="flex justify-start pr-2 items-center">
                            <div className="w-3/12 flex justify-end pr-1">
                                <label htmlFor="coCode" className="font-medium text-gray-900">
                                    C/O Code :
                                </label>
                            </div>
                            <div className="w-5/12">
                                <select name="coCode" id="coCode" className="rounded-md border-0 py-1.5 pl-2 pr-2 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-teal-600 w-full">
                                    <option value=""></option>
                                    <option value="customer1">Customer 1</option>
                                    <option value="customer2">Customer 2</option>
                                    <option value="customer3">Customer 3</option>
                                    <option value="customer4">Customer 4</option>
                                    <option value="customer5">Customer 5</option>
                                    <option value="customer6">Customer 6</option>
                                </select>
                            </div>
                        </div>
                        <div className="flex justify-start pr-2 items-center">
                            <div className="w-3/12 flex justify-end pr-1">
                                <label htmlFor="cashBank" className="font-medium text-gray-900">
                                    Cash/ Bank :
                                </label>
                            </div>
                            <div className="w-5/12">
                                <select name="cashBank" id="cashBank" className="rounded-md border-0 py-1.5 pl-2 pr-2 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-teal-600 w-full">
                                    <option value=""></option>
                                    <option value="customer1">Customer 1</option>
                                    <option value="customer2">Customer 2</option>
                                    <option value="customer3">Customer 3</option>
                                    <option value="customer4">Customer 4</option>
                                    <option value="customer5">Customer 5</option>
                                    <option value="customer6">Customer 6</option>
                                </select>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="flex flex-col w-7/12">
                                <div className="flex justify-start pr-2 items-center">
                                    <div className="w-5/12 flex justify-end pr-1">
                                        <span className="font-medium text-gray-900">
                                            Op.Bal :
                                        </span>
                                    </div>
                                    <div className="w-7/12">
                                        <span className="font-medium text-gray-900">
                                            0.00
                                        </span>
                                    </div>
                                </div>
                                <div className="flex justify-start pr-2 items-center">
                                    <div className="w-5/12 flex justify-end pr-1">
                                        <span className="font-medium text-gray-900">
                                            Points :
                                        </span>
                                    </div>
                                    <div className="w-7/12">
                                        <span className="font-medium text-gray-900">

                                        </span>
                                    </div>
                                </div>
                                <div className="flex justify-start pr-2 items-center">
                                    <div className="w-5/12 flex justify-end pr-1">
                                        <label htmlFor="orderNo" className="font-medium text-gray-900">
                                            Order No :
                                        </label>
                                    </div>
                                    <div className="w-7/12">
                                        <input name="orderNo" id="orderNo" className="rounded-md border-0 py-1.5 pl-2 pr-2 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-teal-600 w-full">
                                        </input>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col w-5/12">
                                <div className="flex items-center">
                                    <input type="radio" id="useCess" className="appearance-none w-4 h-4 border-2 border-teal-500 rounded-full checked:border-red-600" />
                                    <label htmlFor="useCess" className="ms-2 font-medium text-gray-900">Use Cess</label>
                                </div>
                                <div className="flex items-center">
                                    <input type="radio" id="reverseChrge" className="appearance-none w-4 h-4 border-2 border-teal-500 rounded-full checked:border-red-600" />
                                    <label htmlFor="reverseChrge" className="ms-2 font-medium text-gray-900">Reverse Chrge</label>
                                </div>
                                <div className="flex items-center">
                                    <input type="radio" id="interstate" className="appearance-none w-4 h-4 border-2 border-teal-500 rounded-full checked:border-red-600" />
                                    <label htmlFor="interstate" className="ms-2 font-medium text-gray-900">Interstate</label>
                                </div>
                                <div className="flex items-center">
                                    <input type="radio" id="estimatePrint" className="appearance-none w-4 h-4 border-2 border-teal-500 rounded-full checked:border-red-600" />
                                    <label htmlFor="estimatePrint" className="ms-2 font-medium text-gray-900">Estimate Print</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="basis-3/12 flex justify-start">
                        <div className="w-10/12 flex flex-col gap-1">
                            <div className="flex justify-start pr-2 items-center">
                                <div className="w-5/12 flex justify-end pr-1">
                                    <label htmlFor="date" className="font-medium text-gray-900">
                                        Date :
                                    </label>
                                </div>
                                <div className="w-7/12">
                                    <input name="date" id="date" type="date" className="rounded-md border-0 py-1.5 pl-2 pr-2 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-teal-600 w-full">
                                    </input>
                                </div>
                            </div>
                            <div className="flex justify-start pr-2 items-center">
                                <div className="w-5/12 flex justify-end pr-1">
                                    <label htmlFor="billType" className="font-medium text-gray-900">
                                        Bill Type :
                                    </label>
                                </div>
                                <div className="w-7/12">
                                    <select name="billType" id="billType" className="rounded-md border-0 py-1.5 pl-2 pr-2 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-teal-600 w-full">
                                        <option value=""></option>
                                        <option value="customer1">Customer 1</option>
                                        <option value="customer2">Customer 2</option>
                                        <option value="customer3">Customer 3</option>
                                        <option value="customer4">Customer 4</option>
                                        <option value="customer5">Customer 5</option>
                                        <option value="customer6">Customer 6</option>
                                    </select>
                                </div>
                            </div>
                            <div className="flex justify-start pr-2 items-center">
                                <div className="w-5/12 flex justify-end pr-1">
                                    <label htmlFor="rateType" className="font-medium text-gray-900">
                                        Rate Type :
                                    </label>
                                </div>
                                <div className="w-7/12">
                                    <select name="rateType" id="rateType" className="rounded-md border-0 py-1.5 pl-2 pr-2 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-teal-600 w-full">
                                        <option value=""></option>
                                        <option value="customer1">Customer 1</option>
                                        <option value="customer2">Customer 2</option>
                                        <option value="customer3">Customer 3</option>
                                        <option value="customer4">Customer 4</option>
                                        <option value="customer5">Customer 5</option>
                                        <option value="customer6">Customer 6</option>
                                    </select>
                                </div>
                            </div>
                            <div className="flex justify-start pr-2 items-center">
                                <div className="w-5/12 flex justify-end pr-1">
                                    <label htmlFor="vehNo" className="font-medium text-gray-900">
                                        Vehicle No :
                                    </label>
                                </div>
                                <div className="w-7/12">
                                    <input name="vehNo" id="vehNo" className="rounded-md border-0 py-1.5 pl-2 pr-2 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-teal-600 w-full">
                                    </input>
                                </div>
                            </div>
                            <div className="flex justify-start pr-2 items-center">
                                <div className="w-5/12 flex justify-end pr-1">
                                    <label htmlFor="driver" className="font-medium text-gray-900">
                                        Driver :
                                    </label>
                                </div>
                                <div className="w-7/12">
                                    <input name="driver" id="driver" className="rounded-md border-0 py-1.5 pl-2 pr-2 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-teal-600 w-full">
                                    </input>
                                </div>
                            </div>
                            <div className="flex justify-start pr-2 items-center">
                                <div className="w-5/12 flex justify-end pr-1">
                                    <label htmlFor="site" className="font-medium text-gray-900">
                                        Site :
                                    </label>
                                </div>
                                <div className="w-7/12">
                                    <input name="site" id="site" className="rounded-md border-0 py-1.5 pl-2 pr-2 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-teal-600 w-full">
                                    </input>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col w-2/12">
                            <div >
                                <input name="eee" id="eee" type="number" min={1} defaultValue={1} className="rounded-md border-0 py-1.5 pl-2 pr-2 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-teal-600 w-full">
                                </input>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <ScrollTable />
                    <Summary />
                </div>
                <div className="flex justify-center pb-2">
                    <button
                        onClick={onCloseModal}
                        className="mt-2 bg-red-500 text-white py-1 px-2 rounded-full hover:bg-red-600 transition-colors"
                    >
                        <CloseIcon />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default FirstModal