import React from 'react'

const Loading = () => {
    return (
        <div className="flex flex-col justify-center items-center h-[70vh] gap-4">
            <div className="relative">
                <div className="animate-spin rounded-full h-16 w-16 border-2 border-jp-border border-t-jp-accent" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-jp-accent animate-pulse" />
                </div>
            </div>
            <p className="font-jp text-[10px] tracking-jp-wide text-jp-light">
                読み込み中...
            </p>
        </div>
    )
}

export default Loading
