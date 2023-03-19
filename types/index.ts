export type TRole = 'leader' | 'senior' | 'executive'

export type TMember = {
  name: string;
  nickName: string;
  role: TRole
  url?: string;
}