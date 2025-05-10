"use client";
import React from "react";
import { PiDotsThreeCircleVertical } from "react-icons/pi";
import { useRouter } from "next/navigation";

type TableProps = {
  data: Array<Record<string, any>>;
  enableRouting?: boolean;
  onRowClick?: (item: any, index: number) => void;
};

const getValueByPath = (obj: Record<string, any>, path: string): any =>
  path.split(".").reduce((acc, part) => acc?.[part], obj) ?? "";

const getLossRatioColor = (value: string) => {
  const num = parseFloat(value.replace("%", ""));
  if (isNaN(num)) return "bg-gray-500";
  if (num < 30) return "bg-green-500";
  if (num < 60) return "bg-yellow-500";
  return "bg-red-500";
};

const customColumns = [
  {
    header: "Originator",
    key: "originator",
    render: (item: any) => {
      const name = item.originator?.name ?? "";
      const initials = item.originator?.initials ?? "";
      return (
        <div className="flex items-center gap-2">
          <div className="flex items-center w-8 h-8 justify-center bg-gradient-to-r from-[#1E40AF] to-[#1e40af4e] rounded-full text-xs font-bold">
            {initials}
          </div>
          {name}
        </div>
      );
    },
  },
  {
    header: "Client / Line",
    key: "clientLine",
    render: (item: any) => {
      const client = item.clientLine?.client ?? "";
      const line = item.clientLine?.line ?? "";
      return (
        <div className="flex flex-col">
          <span>{client}</span>
          <span className="text-xs ">{line}</span>
        </div>
      );
    },
  },
  {
    header: "AccountName/Type",
    key: "account_name_type",
    render: (item: any) => {
      const name = item.account_name_type?.name ?? "";
      const type = item.account_name_type?.type ?? "";
      return (
        <div className="flex flex-col">
          <span>{name}</span>
          <span className="text-xs ">{type}</span>
        </div>
      );
    },
  },
  {
    header: "Line",
    key: "line",
    render: (item: any) => {
      const line = item.line.name ?? "";
      const number = item.line.policy_number ?? "";
      const icon = item.line.icon ?? "";
      return (
        <div className="flex flex-col">
          <span className="flex items-center gap-1">
            <span
              className="w-6 h-6"
              dangerouslySetInnerHTML={{ __html: icon }}
            />
            {line}
          </span>
          <span className="text-xs ">{number}</span>
        </div>
      );
    },
  },
];

const Table: React.FC<TableProps> = ({ data, enableRouting, onRowClick }) => {
  const router = useRouter();

  if (!data || data.length === 0) return <div>No data</div>;

  const allKeys = Object.keys(data[0]);

  const activeCustomCols = customColumns.filter((col) =>
    allKeys.includes(col.key)
  );
  const usedKeys = activeCustomCols.map((col) => col.key);
  const regularKeys = allKeys.filter((key) => !usedKeys.includes(key));

  const handleRowClick = (item: any, index: number) => {
    if (enableRouting) {
      router.push(`/accounts/${index}`);
    }
    onRowClick?.(item, index);
  };

  return (
    <div className="overflow-x-auto scrollbar-thin">
      <table className="min-w-full table-auto scrollbar-thin">
        <thead>
          <tr className="bg-[#252a3d]">
            {activeCustomCols.map((col, idx) => (
              <th
                key={`custom-${idx}`}
                className="px-4 py-2 text-left text-sm font-medium uppercase"
              >
                {col.header}
              </th>
            ))}
            {regularKeys.map((key, idx) => (
              <th
                key={`normal-${idx}`}
                className="px-4 py-2 text-left text-sm font-medium uppercase"
              >
                {key.replace(/([A-Z])/g, " $1").toUpperCase()}
              </th>
            ))}
            <th className="px-4 py-2 text-left text-sm font-medium uppercase"></th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, rowIdx) => (
            <tr
              key={rowIdx}
              className="border-b-[#293245] border-b-1 even:bg-[#232838] h-[60px] cursor-pointer hover:bg-[#2f364a]"
              onClick={() => handleRowClick(item, rowIdx)}
            >
              {activeCustomCols.map((col, idx) => (
                <td key={`custom-${idx}`} className="px-4 py-2 text-sm">
                  {col.render(item)}
                </td>
              ))}
              {regularKeys.map((key, idx) => {
                const val = getValueByPath(item, key);
                const content =
                  key === "loss_ratio" ? (
                    <span
                      className={`inline-block px-2 py-1 text-xs rounded ${getLossRatioColor(
                        val
                      )}`}
                    >
                      {val}
                    </span>
                  ) : key === "appetite" ? (
                    <span className="flex items-center justify-center text-center px-2 py-1 text-xs bg-[#1E40AF] border border-[#1E40AF] rounded">
                      {val}
                    </span>
                  ) : key === "triage" ? (
                    <span className="inline-block px-2 py-1 text-xs bg-transparent border border-blue-500 rounded">
                      {val}
                    </span>
                  ) : key === "winnability" ? (
                    <span className="flex w-fit items-center bg-transparent px-2 py-1 text-xs border border-blue-500 text-blue-500 rounded-full">
                      <div className="w-2 h-2 rounded-full bg-blue-500 mr-1"></div>
                      <div className="w-2 h-2 rounded-full bg-blue-500 mr-1"></div>
                      <div className="w-2 h-2 rounded-full bg-blue-500 mr-1"></div>
                      <div className="w-2 h-2 rounded-full bg-blue-500 mr-1"></div>
                      {val}
                    </span>
                  ) : key === "premium" || key === "rated_premium" ? (
                    <span className="text-blue-400">{val}</span>
                  ) : key === "status" ? (
                    (() => {
                      let color = "bg-gray-400";
                      const status = (val ?? "").toLowerCase();
                      if (status === "new") color = "bg-blue-500";
                      else if (status === "pending review")
                        color = "bg-yellow-500";
                      else if (status === "completed" || status === "active")
                        color = "bg-green-500";
                      else if (status === "under review") color = "bg-blue-500";

                      return (
                        <div className="flex items-center gap-2">
                          <span className={`w-2 h-2 rounded-full ${color}`} />
                          <span>{val}</span>
                        </div>
                      );
                    })()
                  ) : (
                    val
                  );

                return (
                  <td key={`val-${idx}`} className="px-4 py-2 text-sm">
                    {content}
                  </td>
                );
              })}
              <td className="px-4 py-2 text-sm">
                <PiDotsThreeCircleVertical size={24} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
