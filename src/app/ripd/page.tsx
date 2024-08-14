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
    console.log(formData);
  };

  return (
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
          <label className="flex items-center text-gray-700">
            <input
              type="checkbox"
              name="specialDataLargeScale"
              checked={formData.specialDataLargeScale}
              onChange={handleChange}
              className="mr-2 leading-tight"
            />
            Tratamento de dados sensíveis em larga escala?
          </label>
          <label className="flex items-center text-gray-700">
            <input
              type="checkbox"
              name="specialCategories"
              checked={formData.specialCategories}
              onChange={handleChange}
              className="mr-2 leading-tight"
            />
            Tratamento de categorias especiais de dados?
          </label>
          <label className="flex items-center text-gray-700">
            <input
              type="checkbox"
              name="profiling"
              checked={formData.profiling}
              onChange={handleChange}
              className="mr-2 leading-tight"
            />
            Criação de perfis ou scoring, especialmente com efeitos legais?
          </label>
          <label className="flex items-center text-gray-700">
            <input
              type="checkbox"
              name="minorData"
              checked={formData.minorData}
              onChange={handleChange}
              className="mr-2 leading-tight"
            />
            Tratamento de dados de menores?
          </label>
          <label className="flex items-center text-gray-700">
            <input
              type="checkbox"
              name="specialVulnerability"
              checked={formData.specialVulnerability}
              onChange={handleChange}
              className="mr-2 leading-tight"
            />
            Tratamento de dados de indivíduos em situação de vulnerabilidade especial?
          </label>
          <label className="flex items-center text-gray-700">
            <input
              type="checkbox"
              name="anonymizedData"
              checked={formData.anonymizedData}
              onChange={handleChange}
              className="mr-2 leading-tight"
            />
            Uso de dados anonimizados ou pseudonimizados?
          </label>
          <label className="flex items-center text-gray-700">
            <input
              type="checkbox"
              name="legalBasisConsent"
              checked={formData.legalBasisConsent}
              onChange={handleChange}
              className="mr-2 leading-tight"
            />
            Tratamento baseado no consentimento do titular dos dados?
          </label>
          <label className="flex items-center text-gray-700">
            <input
              type="checkbox"
              name="significantImpact"
              checked={formData.significantImpact}
              onChange={handleChange}
              className="mr-2 leading-tight"
            />
            Tratamento com impacto significativo para os titulares dos dados?
          </label>
          <label className="flex items-center text-gray-700">
            <input
              type="checkbox"
              name="paymentManagement"
              checked={formData.paymentManagement}
              onChange={handleChange}
              className="mr-2 leading-tight"
            />
            Tratamento para a gestão de pagamentos?
          </label>
          <label className="flex items-center text-gray-700">
            <input
              type="checkbox"
              name="systematicObservation"
              checked={formData.systematicObservation}
              onChange={handleChange}
              className="mr-2 leading-tight"
            />
            Observação sistemática de uma área pública?
          </label>
          <label className="flex items-center text-gray-700">
            <input
              type="checkbox"
              name="largeAccess"
              checked={formData.largeAccess}
              onChange={handleChange}
              className="mr-2 leading-tight"
            />
            Tratamento envolvendo grandes volumes de dados acessíveis a um grande número de pessoas?
          </label>
          <label className="flex items-center text-gray-700">
            <input
              type="checkbox"
              name="externalDataUse"
              checked={formData.externalDataUse}
              onChange={handleChange}
              className="mr-2 leading-tight"
            />
            Uso de dados obtidos de terceiros?
          </label>
          <label className="flex items-center text-gray-700">
            <input
              type="checkbox"
              name="immatureTechnology"
              checked={formData.immatureTechnology}
              onChange={handleChange}
              className="mr-2 leading-tight"
            />
            Uso de tecnologias imaturas ou desconhecidas?
          </label>
          <label className="flex items-center text-gray-700">
            <input
              type="checkbox"
              name="dataTransfers"
              checked={formData.dataTransfers}
              onChange={handleChange}
              className="mr-2 leading-tight"
            />
            Transferência de dados entre diferentes entidades jurídicas?
          </label>
          <label className="flex items-center text-gray-700">
            <input
              type="checkbox"
              name="internationalTransfers"
              checked={formData.internationalTransfers}
              onChange={handleChange}
              className="mr-2 leading-tight"
            />
            Transferência internacional de dados?
          </label>
          <label className="flex items-center text-gray-700">
            <input
              type="checkbox"
              name="externalTasks"
              checked={formData.externalTasks}
              onChange={handleChange}
              className="mr-2 leading-tight"
            />
            Execução de tarefas em nome de outra organização (outsourcing)?
          </label>
          <label className="flex items-center text-gray-700">
            <input
              type="checkbox"
              name="similarDPIA"
              checked={formData.similarDPIA}
              onChange={handleChange}
              className="mr-2 leading-tight"
            />
            Projeto similar que já tenha um DPIA aprovado?
          </label>
          <label className="flex items-center text-gray-700">
            <input
              type="checkbox"
              name="riskAnalysis"
              checked={formData.riskAnalysis}
              onChange={handleChange}
              className="mr-2 leading-tight"
            />
            Realização de análise de riscos ou testes de segurança?
          </label>
          <label className="flex items-center text-gray-700">
            <input
              type="checkbox"
              name="euLaw"
              checked={formData.euLaw}
              onChange={handleChange}
              className="mr-2 leading-tight"
            />
            Tratamento de dados em conformidade com a lei da União Europeia?
          </label>
        </div>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">Atividades de Tratamento</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="dataCollectionActivities">
              Atividades de Coleta de Dados:
            </label>
            <textarea
              name="dataCollectionActivities"
              id="dataCollectionActivities"
              value={formData.dataCollectionActivities}
              onChange={handleChange}
              rows={4}
               placeholder='Importante descrever as atividades do processo, dados tratados, os envolvidos no processo e as tecnologias utilizadas!'
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="dataStorageActivities">
              Atividades de Armazenamento de Dados:
            </label>
            <textarea
              name="dataStorageActivities"
              id="dataStorageActivities"
              value={formData.dataStorageActivities}
              onChange={handleChange}
              rows={4}
               placeholder='Importante descrever as atividades do processo, dados tratados, os envolvidos no processo e as tecnologias utilizadas!'
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="dataUsageActivities">
              Atividades de Uso de Dados:
            </label>
            <textarea
              name="dataUsageActivities"
              id="dataUsageActivities"
              value={formData.dataUsageActivities}
              onChange={handleChange}
              rows={4}
               placeholder='Importante descrever as atividades do processo, dados tratados, os envolvidos no processo e as tecnologias utilizadas!'
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="dataTransferActivities">
              Atividades de Transferência de Dados:
            </label>
            <textarea
              name="dataTransferActivities"
              id="dataTransferActivities"
              value={formData.dataTransferActivities}
              onChange={handleChange}
              rows={4}
               placeholder='Importante descrever as atividades do processo, dados tratados, os envolvidos no processo e as tecnologias utilizadas!'
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="dataDestructionActivities">
              Atividades de Destruição de Dados:
            </label>
            <textarea
              name="dataDestructionActivities"
              id="dataDestructionActivities"
              value={formData.dataDestructionActivities}
              onChange={handleChange}
              rows={4}
               placeholder='Importante descrever as atividades do processo, dados tratados, os envolvidos no processo e as tecnologias utilizadas!'
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="space-y-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="legitimacy">
            Base Legal de Legitimação:
          </label>
          <textarea
            name="legitimacy"
            id="legitimacy"
            value={formData.legitimacy}
            onChange={handleChange}
            rows={4}
            placeholder='Citar a base legal que permite o tratamento realizado pelo caso analisado, de acordo com a LGPD'
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex justify-end mt-6">
          <button
            type="submit"
            className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};

export default RipdForm;
