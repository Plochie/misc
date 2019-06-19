import { AppHomeModule } from './components/home/home.module';
import { AppProjectsModule } from './components/projects/projects.module';
import { AppAccountsModule } from './components/account/account.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppSharedModule } from './app.shared.module';
import { accountsRoutes } from './components/account/account.routing';
import { AuthComponent } from './components/auth/auth.component';
import { AppAuthModule } from './components/auth/auth.module';
import { authRoutes } from './components/auth/auth.routing';
import { CompanyComponent } from './components/company.component';
import { AppPostingModule } from './components/postings/posting.module';
import { postingRoutes } from './components/postings/posting.routing';
import { AppStudentsModule } from './components/students/students.module';
import { studentsRoutes } from './components/students/students.routing';
import { UiPath } from './constants/ui-paths';
import { AuthGuard } from './services/auth/guard/auth.guard';
import { projectRoutes } from './components/projects/projects.routing';
import { homeRoutes } from './components/home/home.routing';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: UiPath.root
    },
    {
        path: UiPath.AUTH.ROOT,
        component: AuthComponent,
        children: authRoutes
    },
    {
        path: UiPath.root,
        component: CompanyComponent,
        canActivate: [ AuthGuard ],

        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: UiPath.HOME.ROOT
            },
            {
                path: UiPath.HOME.ROOT,
                children: homeRoutes
            },
            {
                path: UiPath.ACCOUNT.PROFILE,
                children: accountsRoutes
            },
            {
                path: UiPath.POSTINGS.ROOT,
                children: postingRoutes
            },
            {
                path: UiPath.PROJECTS.ROOT,
                children: projectRoutes
            },
            {
                path: UiPath.STUDENTS.ROOT,
                children: studentsRoutes
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
        AppAuthModule,
        AppHomeModule,
        AppAccountsModule,
        AppSharedModule,
        AppPostingModule,
        AppProjectsModule,
        AppStudentsModule
    ],
    declarations: [
        CompanyComponent
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
