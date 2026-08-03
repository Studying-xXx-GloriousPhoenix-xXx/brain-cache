import { Routes } from '@angular/router';
import { CollectionHierarchyPageComponent } from './pages/backend/collection-hierarchy-page/collection-hierarchy-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { GitPageComponent } from './pages/tools/git-page/git-page.component';
import { BackendPageComponent } from './pages/backend/backend-page/backend-page.component';
import { ToolPageComponent } from './pages/tools/tool-page/tool-page.component';
import { FrontendPageComponent } from './pages/frontend/frontend-page/frontend-page.component';

export const routes: Routes = [
    { path: "", redirectTo: 'home', pathMatch: 'full' },
    { path: "home", component: HomePageComponent },
    {
        path: "backend",
        children: [
            { path: "", component: BackendPageComponent },
            { path: "collection-hierarchy", component: CollectionHierarchyPageComponent }
        ]
    },
    {
        path: "frontend", component: FrontendPageComponent,
        children: []
    },
    {
        path: "tools",
        children: [
            { path: "", component: ToolPageComponent },
            { path: "git", component: GitPageComponent }
        ]
    }
];
