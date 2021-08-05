import { resolveSanitizationFn } from '@angular/compiler/src/render3/view/template';
import {Detail,roles} from './Detail';
export const DETAILS: Detail[]= [
  {
    id: 1,
    fname: 'a',
    mname: 'a',
    lname: 'a',
    email:'a@gmail.com',
    phno:'9999999999',
    role: roles.ADMIN,
    address:'#aa'
  },
  {
    id: 2,
    fname: 'b',
    mname: 'b',
    lname: 'b',
    email:'b@gmail.com',
    phno:'9999999999',
    role:roles.SUPERADMIN,
    address:'#bb'
  },
  {
    id: 3,
    fname: 'c',
    mname: 'c',
    lname: 'c',
    email:'c@gmail.com',
    phno:'9999999999',
    role:roles.SUBSCRIBER,
    address:'#cc'
  },
];