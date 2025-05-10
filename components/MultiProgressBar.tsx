import React from "react";

const MultiSegmentProgressBar = ({ segments, containerClass = "" }: any) => {
  return (
    <div className={`w-full relative ${containerClass}`}>
      <div className="flex h-6 rounded-full overflow-hidden">
        {segments.map((seg: any, index: number) => (
          <div
            key={index}
            className={`flex items-center justify-center text-xs text-white transition-all duration-200 
              ${
                seg.color || "bg-gray-500"
              } hover:brightness-110  hover:scale-101`}
            style={{ width: `${seg.width}%` }}
            title={`${seg.width}%`}
          >
            {seg.label}
            <div className="absolute bottom-full mb-1 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10">
              <div className="px-2 py-1 text-[11px] bg-black text-white rounded shadow-lg whitespace-nowrap">
                {seg.width}%
              </div>
            </div>
          </div>
        ))}
      </div>

      {(() => {
        let currentOffset = 0;
        return segments.map((seg: any, index: number) => {
          const leftPos = currentOffset + seg.width / 2;
          currentOffset += seg.width;

          return (
            <React.Fragment key={index}>
              {seg.markerTop && (
                <div
                  className="absolute"
                  style={{
                    left: `${leftPos}%`,
                    top: "-1.5rem",
                    transform: "translateX(-50%)",
                  }}
                >
                  <div className="flex items-center text-[12px] text-gray-700">
                    <span>{seg.markerTop.label}</span>
                  </div>
                </div>
              )}

              {seg.markerBottom && (
                <div
                  className="absolute"
                  style={{
                    left: `${leftPos}%`,
                    bottom: "-1.5rem",
                    transform: "translateX(-50%)",
                  }}
                >
                  <div className="flex items-center text-[12px] text-[#3BB979]">
                    <span>{seg.markerBottom.label}</span>
                  </div>
                </div>
              )}
            </React.Fragment>
          );
        });
      })()}
    </div>
  );
};

export default MultiSegmentProgressBar;
