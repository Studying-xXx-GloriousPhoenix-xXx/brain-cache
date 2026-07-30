import { Routes } from '@angular/router';
import { CollectionHierarchyPageComponent } from './pages/backend/collection-hierarchy-page/collection-hierarchy-page.component';

export const routes: Routes = [
    {
        path: "backend",
        children: [
            { path: "collection-hierarchy", component: CollectionHierarchyPageComponent }
        ]
    },
    // {
    //     path: "frontend"
    // }
];
