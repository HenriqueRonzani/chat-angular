import { Routes } from '@angular/router';
import {ChatComponent} from './chat/chat/chat.component';

export const routes: Routes = [
  {path:'chat', title:'Chat', component: ChatComponent},
  {path: '', redirectTo: '/chat', pathMatch: 'full' }
];
