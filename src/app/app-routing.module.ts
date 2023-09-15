import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntroductionComponent } from './introduction/introduction.component';
import { BasicsComponent } from './basics/basics.component';
import { ThoughtsComponent } from './thoughts/thoughts.component';
import { ExerciseComponent } from './exercise/exercise.component';

const routes: Routes = [
  {
    path: 'intro',
    component: IntroductionComponent
  },
  {
    path: '',
    component: IntroductionComponent
  },
  {
    path: 'basics',
    component: BasicsComponent
  },
  {
    path: 'thoughts',
    component: ThoughtsComponent
  },
  {
    path: 'exercise',
    component: ExerciseComponent
  },
  {
    path: '**',
    component: IntroductionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
