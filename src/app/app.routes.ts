import { Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ContactFormComponent } from './pages/contact-form/contact-form.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { DataBindingComponent } from './pages/data-binding/data-binding.component';
import { DirectivesComponent } from './pages/directives/directives.component';
import { ParentChildComponent } from './pages/parent-child/parent-child.component';
import { ServicesAndRoutingComponent } from './pages/services-and-routing/services-and-routing.component';

export const routes: Routes = [
    { path: '', redirectTo: '/homepage', pathMatch: 'full' },
    { path: 'homepage', component: HomepageComponent },
    { path: 'contact', component: ContactFormComponent },
    { path: 'about-us', component: AboutUsComponent },
    { path: 'data-binding', component: DataBindingComponent },
    { path: 'directives', component: DirectivesComponent },
    { path: 'parent-child', component: ParentChildComponent },
    { path: 'services', component: ServicesAndRoutingComponent },
    { path: 'services/:id', component: ServicesAndRoutingComponent },
];
