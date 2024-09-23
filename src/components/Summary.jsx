import React from 'react'

const Summary = () => {
    return (
        <div className='bg-teal-200 pb-2'>
            <div className='grid grid-cols-5 justify-between '>
                <div className='p-2 flex gap-1 flex-col'>
                    <div className="flex justify-start pr-2 items-center gap">
                        <div className="w-1/2 flex justify-end pr-1">
                            <label htmlFor="billTotal" className="font-medium text-gray-900">
                                Bill Total :
                            </label>
                        </div>
                        <div className="w-1/2">
                            <input name="billTotal" id="billTotal" className="rounded-md border-0 py-1.5 pl-2 pr-2 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-teal-600 w-full">
                            </input>
                        </div>
                    </div>
                    <div className="flex justify-start pr-2 items-center">
                        <div className="w-1/2 flex justify-end pr-1">
                            <label htmlFor="loadChg" className="font-medium text-gray-900">
                                Load Chg :
                            </label>
                        </div>
                        <div className="w-1/2">
                            <input name="loadChg" id="loadChg" className="rounded-md border-0 py-1.5 pl-2 pr-2 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-teal-600 w-full">
                            </input>
                        </div>
                    </div>
                    <div className="flex justify-start pr-2 items-center">
                        <div className="w-1/2 flex justify-end pr-1">
                            <label htmlFor="netAmt" className="font-medium text-gray-900">
                                Net Amt :
                            </label>
                        </div>
                        <div className="w-1/2">
                            <input name="netAmt" id="netAmt" className="rounded-md border-0 py-1.5 pl-2 pr-2 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-teal-600 w-full">
                            </input>
                        </div>
                    </div>
                </div>
                <div className='p-2 flex gap-1 flex-col'>
                    <div className="flex justify-start pr-2 items-center gap">
                        <div className="w-1/2 flex justify-end pr-1">
                            <label htmlFor="returnAmt" className="font-medium text-gray-900">
                                Return Amt :
                            </label>
                        </div>
                        <div className="w-1/2">
                            <input name="returnAmt" id="returnAmt" className="rounded-md border-0 py-1.5 pl-2 pr-2 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-teal-600 w-full">
                            </input>
                        </div>
                    </div>
                    <div className="flex justify-start pr-2 items-center">
                        <div className="w-1/2 flex justify-end pr-1">
                            <label htmlFor="addAmt" className="font-medium text-gray-900">
                                Add Amt :
                            </label>
                        </div>
                        <div className="w-1/2">
                            <input name="addAmt" id="addAmt" className="rounded-md border-0 py-1.5 pl-2 pr-2 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-teal-600 w-full">
                            </input>
                        </div>
                    </div>
                    <div className="flex justify-start pr-2 items-center">
                        <div className="w-1/2 flex justify-end pr-1">
                            <label htmlFor="rcvdAmt" className="font-medium text-gray-900">
                                Rcvd Amt :
                            </label>
                        </div>
                        <div className="w-1/2">
                            <input name="rcvdAmt" id="rcvdAmt" className="rounded-md border-0 py-1.5 pl-2 pr-2 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-teal-600 w-full">
                            </input>
                        </div>
                    </div>

                </div>
                <div className='p-2 flex gap-1 flex-col'>
                    <div className="flex justify-start pr-2 items-center">
                        <div className="w-1/2 flex justify-end pr-1">
                            <label htmlFor="adviceAmt" className="font-medium text-gray-900">
                                Advice Amt :
                            </label>
                        </div>
                        <div className="w-1/2">
                            <input name="adviceAmt" id="adviceAmt" className="rounded-md border-0 py-1.5 pl-2 pr-2 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-teal-600 w-full">
                            </input>
                        </div>
                    </div>
                    <div className="flex justify-start pr-2 items-center gap">
                        <div className="w-1/2 flex justify-end pr-1">
                            <label htmlFor="discount" className="font-medium text-gray-900">
                                Discount :
                            </label>
                        </div>
                        <div className="w-1/2">
                            <input name="discount" id="discount" className="rounded-md border-0 py-1.5 pl-2 pr-2 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-teal-600 w-full">
                            </input>
                        </div>
                    </div>
                    <div className="flex justify-start pr-2 items-center">
                        <div className="w-1/2 flex justify-end pr-1">
                            <label htmlFor="balance" className="font-medium text-gray-900">
                                Balance :
                            </label>
                        </div>
                        <div className="w-1/2">
                            <input name="balance" id="balance" className="rounded-md border-0 py-1.5 pl-2 pr-2 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-teal-600 w-full">
                            </input>
                        </div>
                    </div>
                </div>
                <div className='p-2 flex gap-1 flex-col'>
                    <div className="flex justify-start pr-2 items-center gap">
                        <div className="w-1/2 flex justify-end pr-1">
                            <label htmlFor="freight" className="font-medium text-gray-900">
                                Freight :
                            </label>
                        </div>
                        <div className="w-1/2">
                            <input name="freight" id="freight" className="rounded-md border-0 py-1.5 pl-2 pr-2 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-teal-600 w-full">
                            </input>
                        </div>
                    </div>
                    <div className="flex justify-start pr-2 items-center">
                        <div className="w-1/2 flex justify-end pr-1">
                            <label htmlFor="roundoff" className="font-medium text-gray-900">
                                Roundoff :
                            </label>
                        </div>
                        <div className="w-1/2">
                            <input name="roundoff" id="roundoff" className="rounded-md border-0 py-1.5 pl-2 pr-2 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-teal-600 w-full">
                            </input>
                        </div>
                    </div>
                    <div className="flex justify-start pr-2 items-center">
                        <div className="w-1/2 flex justify-end pr-1">
                            <label htmlFor="dueDate" className="font-medium text-gray-900">
                                Due Date :
                            </label>
                        </div>
                        <div className="w-1/2">
                            <input name="dueDate" id="dueDate" className="rounded-md border-0 py-1.5 pl-2 pr-2 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-teal-600 w-full">
                            </input>
                        </div>
                    </div>
                </div>
                <div className='p-2 flex gap-1 flex-col justify-center items-center text-white'>
                    <div className="flex justify-between pr-2 items-center gap">
                        <button className='p-1 border border-none rounded-lg bg-cyan-600 hover:bg-cyan-500 w-20'>
                            Return
                        </button>
                    </div>
                    <div className="flex justify-start pr-2 items-center gap">
                        <button className='p-1 border border-none rounded-lg bg-cyan-600 hover:bg-cyan-500 w-20'>
                            Save
                        </button>
                    </div>
                    <div className="flex justify-start pr-2 items-center gap">
                        <button className='p-1 border border-none rounded-lg bg-cyan-600 hover:bg-cyan-500 w-20'>
                            Exit
                        </button>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-5 justify-between'>
                <div className="flex justify-start pr-4 pl-8 items-center col-span-2 w-full">
                    <div className="flex justify-end pr-1 w-1/4">
                        <label htmlFor="note" className="font-medium text-gray-900">
                            Note :
                        </label>
                    </div>
                    <div className="w-full">
                        <input name="note" id="note" className="rounded-md border-0 py-1.5 pl-2 pr-2 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-teal-600 w-full">
                        </input>
                    </div>
                </div>
                <div className="flex justify-start pr-4 pl-2 items-center">
                    <div className="flex w-full ml-1 justify-between gap-2">
                        <div className="flex items-center">
                            <input type="radio" id="dotMtrx" className="appearance-none w-4 h-4 border-2 border-teal-500 checked:border-red-600 rounded-full" />
                            <label htmlFor="dotMtrx" className="ms-2 font-medium text-gray-900">Dot_Mtrx</label>
                        </div>
                        <div className="flex items-center">
                            <input type="radio" id="graphics" className="appearance-none w-4 h-4 border-2 border-teal-500 checked:border-red-600 rounded-full" />
                            <label htmlFor="graphics" className="ms-2 font-medium text-gray-900">Graphics</label>
                        </div>
                        <div className="flex items-center">
                            <input type="radio" id="thermal" className="appearance-none w-4 h-4 border-2 border-teal-500 checked:border-red-600 rounded-full" />
                            <label htmlFor="thermal" className="ms-2 font-medium text-gray-900">Thermal</label>
                        </div>
                    </div>
                </div>
                <div className="flex justify-start pr-4 pl-2 items-center">
                    <div className="w-1/2 flex justify-end pr-1">
                        <label htmlFor="rcvdCash" className="font-medium text-gray-900">
                            Rcvd Cash :
                        </label>
                    </div>
                    <div className="w-1/2">
                        <input name="rcvdCash" id="rcvdCash" className="rounded-md border-0 py-1.5 pl-2 pr-2 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-teal-600 w-full">
                        </input>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Summary