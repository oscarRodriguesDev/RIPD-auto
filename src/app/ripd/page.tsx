'use client'
import { useState } from 'react';

interface FormData {
  date: string;
  version: string;
  dpoName: string;
  companyName: string;
  projectName: string;
  projectDescription: string;
  needRIPD: boolean;
  specialDataLargeScale: boolean;
  specialCategories: boolean;
  profiling: boolean;
  minorData: boolean;
  specialVulnerability: boolean;
  anonymizedData: boolean;
  legalBasisConsent: boolean;
  significantImpact: boolean;
  paymentManagement: boolean;
  systematicObservation: boolean;
  largeAccess: boolean;
  externalDataUse: boolean;
  immatureTechnology: boolean;
  dataTransfers: boolean;
  internationalTransfers: boolean;
  externalTasks: boolean;
  similarDPIA: boolean;
  riskAnalysis: boolean;
  euLaw: boolean;
  dataCollectionActivities: string;
  dataStorageActivities: string;
  dataUsageActivities: string;
  dataTransferActivities: string;
  dataDestructionActivities: string;
  legitimacy: string;
}

const defaultFormData: FormData = {
  date: '',
  version: '',
  dpoName: '',
  companyName: '',
  projectName: '',
  projectDescription: '',
  needRIPD: false,
  specialDataLargeScale: false,
  specialCategories: false,
  profiling: false,
  minorData: false,
  specialVulnerability: false,
  anonymizedData: false,
  legalBasisConsent: false,
  significantImpact: false,
  paymentManagement: false,
  systematicObservation: false,
  largeAccess: false,
  externalDataUse: false,
  immatureTechnology: false,
  dataTransfers: false,
  internationalTransfers: false,
  externalTasks: false,
  similarDPIA: false,
  riskAnalysis: false,
  euLaw: false,
  dataCollectionActivities: '',
  dataStorageActivities: '',
  dataUsageActivities: '',
  dataTransferActivities: '',
  dataDestructionActivities: '',
  legitimacy: '',
};

const RipdForm = () => {
  const [formData, setFormData] = useState<FormData>(defaultFormData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, type, checked, value }:any = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here (e.g., sending data to an API)
    console.log(formData);
  };

  return (
    //min-h-screen flex items-center justify-center bg-gray-900
    <div className="container mx-auto my-32 p-6 bg-white shadow-lg rounded-lg text-black font-bold">
      <h1 className="text-3xl font-semibold text-gray-900 mb-6">Relatório de Impacto de Proteção de Dados (RIPD)</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="date">
              Data:
            </label>
            <input
              type="date"
              name="date"
              id="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="version">
              Versão:
            </label>
            <input
              type="text"
              name="version"
              id="version"
              value={formData.version}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="dpoName">
              Nome do DPO:
            </label>
            <input
              type="text"
              name="dpoName"
              id="dpoName"
              value={formData.dpoName}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="companyName">
              Nome da Empresa:
            </label>
            <input
              type="text"
              name="companyName"
              id="companyName"
              value={formData.companyName}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="projectName">
              Nome do Projeto:
            </label>
            <input
              type="text"
              name="projectName"
              id="projectName"
              value={formData.projectName}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="projectDescription">
              Descrição Breve:
            </label>
            <textarea
              name="projectDescription"
              id="projectDescription"
              value={formData.projectDescription}
              onChange={handleChange}
              rows={4}
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">Análise da Necessidade de RIPD</h2>
        <div className="space-y-4">
          <label className="flex items-center text-gray-700">
            <input
              type="checkbox"
              name="needRIPD"
              checked={formData.needRIPD}
              onChange={handleChange}
              className="mr-2 leading-tight"
            />
            O tratamento deve ser analisado na lista de tipos de processamento de dados?
          </label>
          {/* Adicione outros campos de análise conforme necessário */}
        </div>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">Ciclo de Vida dos Dados</h2>
        <div className="space-y-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="dataCollectionActivities">
            Coleta dos Dados:
          </label>
          <textarea
            name="dataCollectionActivities"
            id="dataCollectionActivities"
            value={formData.dataCollectionActivities}
            onChange={handleChange}
            rows={4}
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <label className="block text-gray-700 font-medium mb-2" htmlFor="dataStorageActivities">
            Armazenamento dos Dados:
          </label>
          <textarea
            name="dataStorageActivities"
            id="dataStorageActivities"
            value={formData.dataStorageActivities}
            onChange={handleChange}
            rows={4}
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <label className="block text-gray-700 font-medium mb-2" htmlFor="dataUsageActivities">
            Utilização e Tratamento:
          </label>
          <textarea
            name="dataUsageActivities"
            id="dataUsageActivities"
            value={formData.dataUsageActivities}
            onChange={handleChange}
            rows={4}
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <label className="block text-gray-700 font-medium mb-2" htmlFor="dataTransferActivities">
            Transferência dos Dados a Terceiros:
          </label>
          <textarea
            name="dataTransferActivities"
            id="dataTransferActivities"
            value={formData.dataTransferActivities}
            onChange={handleChange}
            rows={4}
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <label className="block text-gray-700 font-medium mb-2" htmlFor="dataDestructionActivities">
            Eliminação dos Dados:
          </label>
          <textarea
            name="dataDestructionActivities"
            id="dataDestructionActivities"
            value={formData.dataDestructionActivities}
            onChange={handleChange}
            rows={4}
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">Análise da Necessidade e Proporcionalidade do Tratamento</h2>
        <div className="space-y-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="legitimacy">
            Legitimação - Art. 5º – XII. Consentimento:
          </label>
          <textarea
            name="legitimacy"
            id="legitimacy"
            value={formData.legitimacy}
            onChange={handleChange}
            rows={4}
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {/* Adicione outros campos de análise conforme necessário */}
        </div>

        <button
          type="submit"
          className="mt-6 px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default RipdForm;
