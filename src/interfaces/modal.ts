export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface ColumnName {
  col?: string;
}

export interface ColumnType {
  columnName: string;
}

export interface BoardsType {
  [key: string]: ColumnType;
}
