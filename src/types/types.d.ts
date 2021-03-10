declare module 'DocumentsGlobal' {
  export type DocumentRawId = string;

  export interface ICustomField {
    name: string;
    fieldType: string;
  }
  export interface IDocumentTypeType {
    structure: 'SINGLET' | 'TRIPLET';
    path: string;
    rawId: string;
    title: string;
  }
  export enum EDocumentStructure {
    SINGLET = 'SINGLET',
    TRIPLET = 'TRIPLET',
  }
  export interface DocumentNode {
    creatorId: number;
    customFields: ICustomField[];
    description?: string;
    docType: IDocumentTypeType;
    id?: string;
    issueDate?: string;
    owner?: number | string;
    physicalLocation?: string;
    rawId: DocumentRawId;
    structure: EDocumentStructure;
    tags?: string[];
    title: string;
    uploadDate?: string;
    [key: string]:
      | number
      | string[]
      | string
      | ICustomField[]
      | IDocumentTypeType
      | EDocumentStructure
      | undefined;
  }
}
