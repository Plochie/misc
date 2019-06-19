export interface ModalConfig {
    size?: ModalSize;
    closable?: boolean;
}

export enum ModalSize {
    LARGE = 'lg',
    MEDIUM = 'md',
    SMALL = 'sm',
    DEFAULT = 'none'
}