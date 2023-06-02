export interface Itoast{
  hide: boolean,
  message: string,
  type: 'success' | 'error',
}


export interface Itoasts{
  toasts: Itoast[]
}
