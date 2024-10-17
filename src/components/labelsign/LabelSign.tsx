import React from "react"

interface labelSign {
    label: any
    sign: any
}

export default function LabelSign({
    label,
    sign,
}: labelSign) {
    return (
        <div className='flex flex-col gap-6'>
            <h2
                className={`text-3xl font-normal ${
                    sign ? "text-end" : "text-start"
                }`}
            >
                Bluebaycreaters
            </h2>
            <h1 className='text-6xl font-bold text-blue-900'>
                {label}
            </h1>
        </div>
    )
}
