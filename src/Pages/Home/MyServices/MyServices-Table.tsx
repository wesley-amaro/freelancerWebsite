import React from "react";

interface TableItem {
  id: number;
  service: string;
  description: string;
  valor?: string;
}

interface MyServicesTableProps {
  dados: TableItem[];
}

const MyServicesTable: React.FC<MyServicesTableProps> = ({ dados }) => {
  return (
    <div className="overflow-x-auto mt-6 py-5 px-auto">
      <table className="min-w-full border border-gray-300 rounded-lg overflow-hidden">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-3 text-left font-semibold border-b">
              Serviço
            </th>
            <th className="px-4 py-3 text-left font-semibold border-b">
              Descrição
            </th>
            <th className="px-4 py-3 text-left font-semibold border-b">
              Valor
            </th>
          </tr>
        </thead>
        <tbody>
          {dados.map((item) => (
            <tr key={item.id} className="hover:bg-gray-100 transition-colors">
              <td className="px-4 py-3 border-b font-semibold">
                {item.service}
              </td>
              <td className="px-4 py-3 border-b">
                <div className="hover:transition-transform hover:scale-105">
                  {item.description}
                </div>
              </td>
              <td className="px-4 py-3 border-b">
                <div className="hover:transition-transform hover:scale-105">
                  <a
                    href={`https://wa.me/5513981726612?text=${encodeURIComponent(
                      `${item.valor}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp"
                    className="bg-gray-100 text-black rounded-md hover:bg-gray-800 hover:text-white font-medium px-4 py-2 transition-all shadow-sm hover:shadow-md inline-block"
                  >
                    Solicitar Orçamento
                  </a>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyServicesTable;
