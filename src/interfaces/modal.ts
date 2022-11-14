export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface ColumnType {
  columnName: string;
}
export interface BoardInfo2Type extends ModalProps {
  boardInfo: any;
}

export interface ModalProps1 {
  isOpen: boolean;
  onClose: () => void;
  getBoardInfo: (data: any) => void;
}

export interface ColumnName {
  col?: string;
}

export interface BoardsType {
  [key: string]: ColumnType;
}

export interface BoardInfoType {
  getBoardInfo: (data: any) => void;
}
